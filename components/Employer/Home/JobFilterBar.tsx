'use client'

import { CiSearch } from "react-icons/ci"
import { FiChevronDown } from "react-icons/fi"

const JobFilterBar = ({
    search,
    onSearchChange,
    locationFilter,
    onLocationChange,
    availabilityFilter,
    onAvailabilityChange,
    skillFilter,
    onSkillChange,
}: {
    search: string
    onSearchChange: (value: string) => void
    locationFilter: string
    onLocationChange: (value: string) => void
    availabilityFilter: string
    onAvailabilityChange: (value: string) => void
    skillFilter: string
    onSkillChange: (value: string) => void
}) => {
    return (
        <div className="w-full bg-white rounded-xl flex flex-wrap gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-grow min-w-[200px] max-w-[350px] h-[54px] flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full">
                <CiSearch className="text-gray-500" size={24} />
                <input
                    type="text"
                    placeholder="Type Here Job Name"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="outline-none bg-transparent w-full text-[16px] font-[400]"
                />
            </div>

            {/* Location Select */}
            <div className="relative min-w-[160px] max-w-[200px] w-full">
                <select
                    value={locationFilter}
                    onChange={(e) => onLocationChange(e.target.value)}
                    className="appearance-none w-full h-[54px] px-4 border border-gray-300 rounded-full text-sm text-gray-600 bg-white"
                >
                    <option value="">Filter By Location</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <FiChevronDown size={18} />
                </div>
            </div>

            {/* Availability Select */}
            <div className="relative min-w-[160px] max-w-[200px] w-full">
                <select
                    value={availabilityFilter}
                    onChange={(e) => onAvailabilityChange(e.target.value)}
                    className="appearance-none w-full h-[54px] px-4 border border-gray-300 rounded-full text-sm text-gray-600 bg-white"
                >
                    <option value="">Filter By Availability</option>
                    <option value="Remote">Remote</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <FiChevronDown size={18} />
                </div>
            </div>

            {/* Skills Select */}
            <div className="relative min-w-[160px] max-w-[200px] w-full">
                <select
                    value={skillFilter}
                    onChange={(e) => onSkillChange(e.target.value)}
                    className="appearance-none w-full h-[54px] px-4 border border-gray-300 rounded-full text-sm text-gray-600 bg-white"
                >
                    <option value="">Select Skill</option>
                    <option value="React.js">React.js</option>
                    <option value="Figma">Figma</option>
                    <option value="Node.js">Node.js</option>
                    <option value="SEO Writing">SEO Writing</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <FiChevronDown size={18} />
                </div>
            </div>
        </div>
    )
}

export default JobFilterBar
