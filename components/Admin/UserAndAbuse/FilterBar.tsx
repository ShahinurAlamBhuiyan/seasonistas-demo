import { IoIosArrowDown } from "react-icons/io"
import { HiOutlineSearch } from "react-icons/hi"

type Props = {
    fromEmployee: boolean;
}

const FilterBar = ({ fromEmployee }: Props) => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5">
            {/* Search with icon */}
            <div className="relative w-full sm:w-[60%]">
                <HiOutlineSearch className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Search Employee"
                    className="w-full border rounded-full pl-10 pr-4 py-3 text-sm border-[#E2E8F0] placeholder:text-gray-400"
                />
            </div>

            {/* Filters group */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-[40%]">
                {/* Location Filter */}
                <div className="relative w-full">
                    <select className="appearance-none text-sm border border-gray-300 rounded-full px-4 py-3 bg-white text-gray-600 pr-8 w-full">
                        <option>Filter By Location</option>
                    </select>
                    <IoIosArrowDown className="absolute right-3 top-4 text-gray-500 pointer-events-none" />
                </div>

                {/* Skill / Industry Filter */}
                <div className="relative w-full">
                    <select className="appearance-none text-sm border border-gray-300 rounded-full px-4 py-3 bg-white text-gray-600 pr-8 w-full">
                        <option>
                            {fromEmployee ? 'Filter By Skill' : 'Filter By Industry'}
                        </option>
                    </select>
                    <IoIosArrowDown className="absolute right-3 top-4 text-gray-500 pointer-events-none" />
                </div>
            </div>
        </div>
    )
}

export default FilterBar
