'use client'

const RejectModal = ({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) => {
    return (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 !m-0">
            <div className="bg-white px-6 py-5 rounded-2xl w-[400px] text-left space-y-6">
                {/* Title */}
                <h2 className="text-[16px] font-semibold text-[#1C1C1E]">Reject Applicant</h2>

                {/* Message */}
                <p className="text-sm text-[#637381]">Are you sure you want to reject this applicant?</p>

                {/* Actions */}
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
                        Reject
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RejectModal
