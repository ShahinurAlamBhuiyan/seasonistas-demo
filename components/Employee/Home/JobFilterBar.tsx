'use client'

import { CiSearch } from 'react-icons/ci'
import { FiFilter } from 'react-icons/fi'
import { SlCalender } from 'react-icons/sl'
import { IoIosArrowDown } from 'react-icons/io'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import FilterModal from './FilterModal'

type Props = {
    search: string
    location: string
    experience: string
    jobType: string
    salaryType: string
    onSearchChange: (val: string) => void
    onLocationChange: (val: string) => void
    onExperienceChange: (val: string) => void
    onJobTypeChange: (val: string) => void
    onSalaryTypeChange: (val: string) => void
    onClearFilter: () => void
}

const JobFilterBar = ({
    search,
    location,
    experience,
    jobType,
    salaryType,
    onSearchChange,
    onLocationChange,
    onExperienceChange,
    onJobTypeChange,
    onSalaryTypeChange
}: Props) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [showModal, setShowModal] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({})

    const handleFilterChange = (section: string, value: string) => {
        setSelectedFilters((prev) => ({ ...prev, [section]: value }))

        if (section === 'Experience Level') onExperienceChange(value.split(' ')[0])
        if (section === 'Job Type') onJobTypeChange(value)
        if (section === 'Salary') onSalaryTypeChange(value)
    }

    return (
        <div className="flex flex-wrap gap-3 items-center w-full">
            <div className="flex items-center flex-grow border border-gray-300 rounded-full px-4 h-[54px] min-w-[200px]">
                <CiSearch className="text-gray-500 text-xl" />
                <input
                    type="text"
                    placeholder="Job title keywords or company"
                    className="w-full pl-3 outline-none text-sm bg-transparent"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            <div className="relative min-w-[170px]">
                <select
                    value={location}
                    onChange={(e) => onLocationChange(e.target.value)}
                    className="appearance-none w-full h-[54px] px-4 pr-10 text-sm border border-gray-300 rounded-full text-gray-600 bg-white"
                >
                    <option value="" disabled hidden>Filter By Location</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-base" />
            </div>

            <div className="relative">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText="Filter By Date"
                    className="px-4 h-[54px] text-sm border border-gray-300 rounded-full text-gray-600 pr-10"
                />
                <SlCalender className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-base pointer-events-none" />
            </div>

            <button onClick={() => setShowModal(true)} className="flex items-center text-sm text-[#6A7381] h-[54px]">
                <FiFilter className="mr-1" /> Filters
            </button>

            <FilterModal
                open={showModal}
                onClose={() => setShowModal(false)}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
            />
        </div>
    )
}

export default JobFilterBar
