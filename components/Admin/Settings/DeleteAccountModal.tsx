'use client'

type Props = {
    onClose: () => void
    onConfirm: () => void
}

const DeleteAccountModal = ({ onClose, onConfirm }: Props) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center px-4 !m-0">
            <div className="bg-white rounded-2xl w-full max-w-lg p-8 relative text-left shadow-xl">
                <h2 className="text-lg font-semibold mb-3">Delete Account</h2>

                <p className="text-sm text-[#6B7280] mb-6 max-w-md">
                    If you proceed with this action, you will no longer have access to this account or your conversation history.
                </p>

                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 rounded-full border border-gray-300 text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-6 py-2 rounded-full bg-[#FF5630] text-white text-sm font-medium"
                    >
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccountModal
