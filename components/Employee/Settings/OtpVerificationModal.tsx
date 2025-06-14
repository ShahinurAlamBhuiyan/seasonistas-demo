'use client'

import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { FaKey } from 'react-icons/fa'

type Props = {
    onClose: () => void
    onSubmit: (code: string) => void
}

const OtpVerificationModal = ({ onClose, onSubmit }: Props) => {
    const [otp, setOtp] = useState(['', '', '', ''])

    const handleChange = (index: number, value: string) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp]
            newOtp[index] = value
            setOtp(newOtp)
        }
    }

    const handleSubmit = () => {
        const code = otp.join('')
        if (code.length !== 4) return alert('Enter full 4-digit code')
        onSubmit(code)
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center px-4 !m-0">
            <div className="bg-white rounded-2xl w-full max-w-lg min-h-[350px] p-8 relative text-center shadow-xl">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-lg text-gray-500">
                    <IoClose />
                </button>

                {/* Key Icon */}
                <div className="flex justify-center mb-4 mt-2">
                    <div className="w-14 h-14 rounded-full bg-[#559093] flex items-center justify-center text-white text-xl">
                        <FaKey />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold mb-1">Authenticate Your Account</h2>
                <p className="text-sm text-gray-500 mb-5">
                    Protecting your tickets is our top priority. Please confirm your account
                    by entering the authorization code sent to --2282.
                </p>

                {/* OTP Fields */}
                <div className="flex justify-center gap-4 mb-4">
                    {otp.map((digit, idx) => (
                        <input
                            key={idx}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="w-12 h-12 rounded-full text-center border text-lg font-semibold text-gray-700 focus:outline-none"
                            value={digit}
                            onChange={(e) => handleChange(idx, e.target.value)}
                        />
                    ))}
                </div>

                {/* Reset Link */}
                <p className="text-xs text-gray-500 mb-5 cursor-pointer hover:underline">Reset OTP?</p>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className="w-full bg-[#559093] text-white py-2 rounded-full text-sm font-medium"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default OtpVerificationModal
