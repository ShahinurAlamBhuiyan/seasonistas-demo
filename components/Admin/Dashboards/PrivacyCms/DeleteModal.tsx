type Props = {
    onCancel: () => void
    onConfirm: () => void
}

const DeleteModal = ({ onCancel, onConfirm }: Props) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-10 w-[90%] max-w-md text-center">
                <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2 text-left">Delete</h3>
                <p className="text-sm text-[#637381] mb-6 text-left">Are You Sure want to Delete FAQ?</p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onCancel}
                        className="px-6 py-2 border border-[#1C1C1E1F] rounded-full text-black font-medium min-w-[120px]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-6 py-2 bg-[#FF5630] text-white rounded-full font-medium min-w-[120px]"
                    >
                        Yes Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
