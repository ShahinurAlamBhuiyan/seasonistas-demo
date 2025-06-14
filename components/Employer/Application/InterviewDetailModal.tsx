import { IoIosClose } from 'react-icons/io'
import { FaRegCalendarAlt, FaRegCopy } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const InterviewDetailModal = ({ onClose, onSend }) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center w-full !m-0">
            <div className="relative w-full max-w-md sm:max-w-lg bg-white rounded-[20px] p-5 sm:p-6 mx-4 sm:mx-0 space-y-5">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-xl text-gray-500">
                    <IoIosClose size={26} />
                </button>

                <h2 className="text-[18px] font-semibold text-[#1E1E1E]">Add Interview Detail</h2>

                {/* Date Picker */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Start Date"
                        onFocus={(e) => (e.target.type = 'date')}
                        // onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                        className="w-full px-4 py-[14px] text-sm border border-[#E0E0E0] rounded-full placeholder:text-[#9E9E9E] text-[#1C1C1E] outline-none"
                    />
                    <FaRegCalendarAlt className="absolute top-1/2 right-4 -translate-y-1/2 text-[#9E9E9E]" />
                </div>

                {/* Time Select */}

                <div className="relative">
                    <select
                        className="w-full px-4 pr-10 py-[14px] text-sm border border-[#E0E0E0] rounded-full text-[#1C1C1E] placeholder:text-[#9E9E9E] appearance-none outline-none"
                        defaultValue=""
                    >
                        <option value="" disabled>Select Time</option>
                        <option>10:00 AM</option>
                        <option>2:30 PM</option>
                        <option>5:00 PM</option>
                    </select>
                    <IoIosArrowDown className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#9E9E9E]" />
                </div>

                <div className="relative">
                    <select
                        className="w-full px-4 pr-10 py-[14px] text-sm border border-[#E0E0E0] rounded-full text-[#1C1C1E] placeholder:text-[#9E9E9E] appearance-none outline-none"
                        defaultValue=""
                    >
                        <option value="" disabled>Location</option>
                        <option>Google Meet</option>
                        <option>Zoom</option>
                        <option>Office</option>
                    </select>
                    <IoIosArrowDown className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#9E9E9E]" />
                </div>


                {/* Message */}
                <textarea
                    className="w-full min-h-[120px] px-4 py-3 border border-[#E0E0E0] rounded-xl text-sm placeholder:text-[#9E9E9E] outline-none"
                    placeholder="Enter Message (Optional)"
                ></textarea>

                {/* Link Row */}
                <div className="w-full flex items-center justify-between px-4 py-3 bg-[#EEF4F4] text-sm rounded-md text-[#4A4A4A]">
                    <span className="truncate">http:googlemeetkcucuCBuuqwu2772</span>
                    <button>
                        <FaRegCopy size={16} />
                    </button>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-2 pt-2">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 min-w-[100px] text-sm rounded-full border border-[#E0E0E0] text-[#1C1C1E] font-medium text-center"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSend}
                        className="px-6 py-2 min-w-[100px] text-sm rounded-full bg-[#4F9A98] text-white font-medium text-center"
                    >
                        Send
                    </button>
                </div>

            </div>
        </div>
    )
}

export default InterviewDetailModal
