'use client'

import { IoClose } from 'react-icons/io5'

interface Props {
    onClose: () => void
}

const EditEmployeeModal = ({ onClose }: Props) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-[90%] max-w-lg relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-black">
                    <IoClose size={20} />
                </button>
                <h2 className="text-lg font-semibold text-[#1C252E] mb-6">Edit Basic Information</h2>

                <form className="space-y-4">
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border rounded-full text-sm" />
                    <select className="w-full px-4 py-3 border rounded-full text-sm">
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-full text-sm" />
                    <input type="text" placeholder="Location" className="w-full px-4 py-3 border rounded-full text-sm" />
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-full text-sm" />
                    <input type="url" placeholder="Website" className="w-full px-4 py-3 border rounded-full text-sm" />

                    <div className="flex justify-center gap-4 mt-4">
                        <button type="button" onClick={onClose} className="px-6 py-2 border rounded-full font-medium text-black">
                            Cancel
                        </button>
                        <button type="submit" className="px-6 py-2 bg-[#559093] text-white rounded-full font-medium">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditEmployeeModal
