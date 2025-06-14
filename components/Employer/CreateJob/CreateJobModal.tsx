import { IoWarning } from "react-icons/io5";

type Props = {
    setShowModal: (value: boolean) => void
}

const CreateJobModal = ({ setShowModal }: Props) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center !m-0">
            <div className="bg-white rounded-2xl w-[90%] max-w-[621px] max-h-[321px] p-6 relative text-center">
                <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-5 right-5 text-[20px] font-[400]"
                >
                    &times;
                </button>

                <div className="flex justify-center mb-4">
                    <div className='p-1 rounded-full bg-[#D950571F]'>
                        <div className='p-1 bg-[#D950574D] rounded-full'>
                            <div className="w-16 h-16 rounded-full bg-[#D95057] flex items-center justify-center">
                                <span className="text-white ">
                                    <IoWarning size={30} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-[20px] leading-[20px] font-[600] mb-2">You're Out of Credits</h2>
                <p className="text-[16px] leading-[20px] font-[400] mb-6 text-[#1C1C1EB8]">
                    You’ve used all your available credits for posting ads. To continue,
                    please purchase a new plan or upgrade your existing one.
                </p>

                <div className="flex justify-end  gap-4">
                    <button
                        onClick={() => setShowModal(false)}
                        className="px-8 py-2 rounded-full border border-[#1C1C1E1F] text-[16px] font-[400] leading-[24px]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            setShowModal(false)
                        }}
                        className="px-8 py-2 rounded-full bg-[#559092] text-white  text-[16px] font-[400] leading-[24px]"
                    >
                        Purchase Now
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CreateJobModal