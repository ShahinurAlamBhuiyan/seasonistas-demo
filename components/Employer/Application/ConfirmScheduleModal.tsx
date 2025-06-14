'use client'

import { RiSendPlaneFill } from "react-icons/ri"
import { IoIosClose } from "react-icons/io"

const ConfirmScheduleModal = ({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) => {
    return (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 !m-0">
            <div className="bg-white p-6 rounded-2xl w-[500px] text-center relative">
                {/* Close (X) Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-[#9E9E9E] text-xl">
                    <IoIosClose size={24} />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#4F9A98] flex items-center justify-center shadow">
                        <RiSendPlaneFill className="text-white text-xl" />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-[16px] font-semibold text-[#1C1C1E] mb-1">Confirm Schedule?</h2>
                <p className="text-sm text-[#767676] mb-5">
                    Are you sure you want to confirm this interview appointment?
                </p>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-2">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 min-w-[100px] text-sm rounded-full border border-[#E0E0E0] text-[#1C1C1E] font-medium"
                    >
                        Back
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-6 py-2 min-w-[100px] text-sm rounded-full bg-[#4F9A98] text-white font-medium"
                    >
                        Yes Sure
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmScheduleModal
