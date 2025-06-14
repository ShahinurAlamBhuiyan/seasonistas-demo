import { IoClose } from 'react-icons/io5'
import { HiReceiptRefund } from "react-icons/hi2";


type Props = {
    onClose: () => void
    onConfirm: () => void
}

export default function RefundModal({ onClose, onConfirm }: Props) {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl px-6 py-8 max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">
                    <IoClose size={20} />
                </button>

                <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-[#558F92] rounded-full flex items-center justify-center mb-4">
                        <HiReceiptRefund size={28} color="white" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#1D2937] mb-2">Refund Payment</h2>
                    <p className="text-sm text-gray-500 mb-6 text-center">
                        Are you sure you want to refund this transaction?
                    </p>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={onClose}
                            className="border px-6 py-2 rounded-full text-sm text-[#1D2937] hover:bg-gray-100"
                        >
                            Back
                        </button>
                        <button
                            onClick={onConfirm}
                            className="bg-[#558F92] text-white px-6 py-2 rounded-full text-sm hover:bg-[#44737a]"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
