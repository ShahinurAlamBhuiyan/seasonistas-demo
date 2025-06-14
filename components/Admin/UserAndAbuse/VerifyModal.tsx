'use client'

import { IoMdClose } from 'react-icons/io'
import Image from 'next/image'
import companyLogo from '~/app/assets/admin/companyLogo.png'
import { MdVerified } from "react-icons/md";

type Props = {
    onClose: () => void
    onConfirm: () => void
}

const VerifyModal = ({ onClose, onConfirm }: Props) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative">
                {/* Close Icon */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
                    <IoMdClose size={20} />
                </button>

                {/* Check Icon */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#E6F4F1] flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#3B978C] text-white flex items-center justify-center text-2xl font-bold">
                        <MdVerified size={20} />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-center text-xl font-semibold text-[#1C252E]">
                    Verify Company <span className="ml-1">🎉</span>
                </h2>
                <p className="text-center text-gray-500 text-sm mt-2">
                    Are you sure you want to verify this business?
                </p>

                {/* Company Info */}
                <div className="border rounded-xl p-4 mt-6">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <Image src={companyLogo} alt="logo" className="w-6 h-6 rounded-md" />
                            <span className="font-medium">Linear company</span>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-[#D950572B] text-[#D84C4C] border-[#D95057] border-[0.6px]">Unverified</span>
                    </div>
                    <div className="text-sm text-[#1C252E] space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Email</span>
                            <span className="font-medium">info@Linear company.com</span>
                        </div>
                        <hr className='w-full' />
                        <div className="flex justify-between">
                            <span className="text-gray-500">Website</span>
                            <span className="font-medium">www.Linear.com</span>
                        </div>
                        <hr className='w-full' />
                        <div className="flex justify-between">
                            <span className="text-gray-500">Industry</span>
                            <span className="font-medium">IT / Software</span>
                        </div>
                        <hr className='w-full' />
                        <div className="flex justify-between">
                            <span className="text-gray-500">Location</span>
                            <span className="font-medium">Punjab Pakistan</span>
                        </div>
                        <hr className='w-full' />
                        <div className="flex justify-between">
                            <span className="text-gray-500">Company Size</span>
                            <span className="font-medium">2-10</span>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-[#1C252E]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-6 py-2 rounded-full text-sm font-medium text-white bg-[#3B978C] hover:bg-[#357c71]"
                    >
                        Verify Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VerifyModal
