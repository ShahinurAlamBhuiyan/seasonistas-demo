'use client'

import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import companyLogo from '~/app/assets/admin/companyLogo.png'

interface FlagInfoModalProps {
    onClose: () => void
    data: {
        title: string
        reportedItem: string
        reportedBy: string
        flaggedOn: string
        reason: string
        reportCount: string
    }
}

const FlagInfoModal = ({ onClose, data }: FlagInfoModalProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 w-full max-w-2xl min-h-[450px] relative">
                {/* Close button */}
                <button
                    className="absolute right-4 top-4 text-gray-500 hover:text-black"
                    onClick={onClose}
                >
                    <IoClose size={28} />
                </button>

                {/* Title */}
                <h2 className="text-xl font-semibold text-[#1C252E] mb-6">Flag Information</h2>

                {/* Card */}
                <div className="border rounded-xl p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Image src={companyLogo} alt="logo" width={28} height={28} className="rounded-md" />
                            <span className="font-medium text-base text-[#1C252E]">{data.title}</span>
                        </div>
                        <span className="bg-[#FFF4DE] text-[#F3C44D] text-sm font-semibold px-5 py-1.5 rounded-full border border-[#F3C44D]">Under Review</span>
                    </div>

                    <div className="text-base space-y-4">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Reported Item</span>
                            <span className="text-[#1C252E] font-medium">{data.reportedItem}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <span className="text-gray-500">Reported By</span>
                            <span className="text-[#1C252E] font-medium">{data.reportedBy}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <span className="text-gray-500">Flagged On</span>
                            <span className="text-[#1C252E] font-medium">{data.flaggedOn}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <span className="text-gray-500">Reason</span>
                            <span className="text-[#1C252E] font-medium">{data.reason}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <span className="text-gray-500">Report Count</span>
                            <span className="text-[#1C252E] font-medium">{data.reportCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlagInfoModal
