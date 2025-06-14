import { FaLocationArrow } from "react-icons/fa6";


type Props = {
    setShowModal: (value: boolean) => void
}

const WarningModal = ({ setShowModal }: Props) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
            <div className="bg-white rounded-2xl w-[90%] max-w-[575px] max-h-[388px] p-8 relative text-center">
                <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-5 right-5 text-[20px] font-[400]"
                >
                    &times;
                </button>

                <div className="flex justify-center mb-4">
                    <div className='p-1 rounded-full bg-[#5590931F]'>
                        <div className='p-1 bg-[#5590934D] rounded-full'>
                            <div className="w-16 h-16 rounded-full bg-[#559093] flex items-center justify-center">
                                <span className="text-white ">
                                    <FaLocationArrow size={30} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-[20px] leading-[20px] font-[600] mb-3">Are you sure you want to Repost?</h2>
                <p className="text-[16px] leading-[20px] font-[400] mb-6 text-[#1C1C1EB8]">
                    Are you sure you want to repost this job? It will be published again for candidates to apply.
                </p>

                <div className="flex justify-end  gap-4">
                    <button
                        onClick={() => setShowModal(false)}
                        className="px-8 py-2 rounded-full border border-[#1C1C1E1F] text-[16px] font-[400] leading-[24px]"
                    >
                        Back
                    </button>
                    <button
                        onClick={() => {
                            setShowModal(false)
                        }}
                        className="px-8 py-2 rounded-full bg-[#559092] text-white  text-[16px] font-[400] leading-[24px]"
                    >
                        Yes Sure
                    </button>
                </div>
            </div>
        </div>
    )
}
export default WarningModal