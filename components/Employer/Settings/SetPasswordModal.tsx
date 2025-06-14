'use client'

import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

type Props = {
    onClose: () => void
    onConfirm: (data: { old: string; new: string; confirm: string }) => void
}

const SetPasswordModal = ({ onClose, onConfirm }: Props) => {
    const [old, setOld] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirm, setConfirm] = useState('')

    const handleSubmit = () => {
        if (!old || !newPass || !confirm) return alert('Fill all fields')
        if (newPass !== confirm) return alert('Passwords do not match')
        onConfirm({ old, new: newPass, confirm })
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center px-4 !m-0">
            <div className="bg-white rounded-2xl w-full max-w-lg min-h-[350px] p-8 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 text-lg"
                >
                    <IoClose />
                </button>

                <h2 className="text-[18px] font-semibold mb-6">Set New Password</h2>

                {/* Old Password */}
                <div className="mb-2">
                    <input
                        type="password"
                        placeholder="Old Password"
                        value={old}
                        onChange={(e) => setOld(e.target.value)}
                        className="w-full border border-gray-200 px-4 py-2 rounded-full text-sm"
                    />
                    <p className="text-xs text-[#6B7280] mt-2 cursor-pointer text-right">
                        Forgot Password?
                    </p>
                </div>

                {/* New Password */}
                <div className="mb-4">
                    <p className="text-sm font-medium text-black mb-1">New Password</p>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                        className="w-full border border-gray-200 px-4 py-2 rounded-full text-sm"
                    />
                </div>

                {/* Confirm Password */}
                <div className="mb-8">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className="w-full border border-gray-200 px-4 py-2 rounded-full text-sm"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 rounded-full border border-gray-300 text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 rounded-full bg-[#559093] text-white text-sm font-medium"
                    >
                        Change
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SetPasswordModal
