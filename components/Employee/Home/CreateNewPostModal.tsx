'use client'

import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { SlCalender } from 'react-icons/sl'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type Props = {
    isOpen: boolean
    onClose: () => void
}

const CreateNewPostModal = ({ isOpen, onClose }: Props) => {
    const [field, setField] = useState('')
    const [salary, setSalary] = useState('')
    const [category, setCategory] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [schedule, setSchedule] = useState<Date | null>(null)
    const [location, setLocation] = useState('')
    const [seniority, setSeniority] = useState('')
    const [benefits, setBenefits] = useState('')
    const [error, setError] = useState('')

    const handleCreate = () => {
        if (!field || !salary || !category || !specialization || !schedule || !location || !seniority || !benefits) {
            setError('Please fill out all required fields before creating the Job')
            return
        }
        setError('')
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4 !m-0">
            <div className="bg-white w-full max-w-xl rounded-[24px] p-6 relative">
                {/* Close Button */}
                <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
                    <FiX size={22} />
                </button>

                <h2 className="text-[18px] font-semibold mb-6">Create Your Ideal Job</h2>

                <div className="space-y-4 text-sm font-normal">
                    <input className="styled-input" placeholder="Type Field" value={field} onChange={(e) => setField(e.target.value)} />
                    <input className="styled-input" placeholder="Type Salary Range" value={salary} onChange={(e) => setSalary(e.target.value)} />

                    {/* Category Dropdown */}
                    <div className="relative">
                        <select className="styled-input appearance-none pr-10" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="" disabled hidden>Job Category</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="UI/UX">UI/UX</option>
                        </select>
                        <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-base pointer-events-none" />
                    </div>

                    <input className="styled-input" placeholder="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />

                    {/* Work Schedule with DatePicker */}
                    <div className="relative styled-input !w-[100%]">
                        <DatePicker
                            selected={schedule}
                            onChange={(date: Date | null) => setSchedule(date)}
                            placeholderText="Work Schedule"
                            className="mt-4 pr-10 !w-[100%]"
                            dateFormat="yyyy-MM-dd"
                        />
                        <SlCalender className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-base pointer-events-none" />
                    </div>


                    <input className="styled-input" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />

                    {/* Seniority Level */}
                    <div className="relative">
                        <select className="styled-input appearance-none pr-10" value={seniority} onChange={(e) => setSeniority(e.target.value)}>
                            <option value="" disabled hidden>Seniority Level</option>
                            <option value="Junior">Junior</option>
                            <option value="Mid">Mid</option>
                            <option value="Senior">Senior</option>
                        </select>
                        <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-base pointer-events-none" />
                    </div>

                    {/* Benefits */}
                    <div className="relative">
                        <select className="styled-input appearance-none pr-10" value={benefits} onChange={(e) => setBenefits(e.target.value)}>
                            <option value="" disabled hidden>Desired Benefits</option>
                            <option value="Remote">Remote Work</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Stock Options">Stock Options</option>
                        </select>
                        <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-base pointer-events-none" />
                    </div>

                    {error && (
                        <p className="text-[13px] text-[#E53535] pl-1 -mb-3 flex items-center gap-1">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#E53535] inline-block"></span>
                            {error}
                        </p>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-8 flex justify-between items-center">
                    <button onClick={onClose} className="px-6 py-2 rounded-full border border-[#E0E0E0] bg-white text-sm font-medium text-black">
                        Cancel
                    </button>
                    <button onClick={handleCreate} className="px-6 py-2 rounded-full bg-[#2C8484] text-white text-sm font-medium">
                        Create
                    </button>
                </div>
            </div>

            <style jsx>{`
        .styled-input {
          width: 100%;
          height: 54px;
          padding: 0 16px;
          border-radius: 9999px;
          border: 1px solid #E0E0E0;
          font-size: 14px;
          color: #444;
          background-color: #fff;
        }
        .styled-input::placeholder {
          color: #A0A0A0;
        }
      `}</style>
        </div>
    )
}

export default CreateNewPostModal
