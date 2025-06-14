'use client'

const LogoutModal = ({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) => {
    return (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
            <div className="bg-white px-5 py-5 rounded-2xl w-full max-w-sm mx-4 sm:mx-0 text-left space-y-6">
                <h2 className="text-[16px] font-semibold text-[#1C1C1E]">Log Out</h2>
                <p className="text-sm text-[#637381]">Are you sure you want to logout Seasonistas?</p>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-6 py-[10px] text-sm rounded-full border border-[#E0E0E0] text-[#1C1C1E]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-6 py-[10px] text-sm rounded-full bg-[#EF4444] text-white font-medium"
                    >
                        Log out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LogoutModal
