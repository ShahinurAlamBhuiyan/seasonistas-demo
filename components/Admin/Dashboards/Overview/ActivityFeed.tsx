import { FaSearch } from "react-icons/fa"
import { FiClock } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"

const ActivityFeed = () => {
    const items = [
        {
            user: 'Ali Ahmed',
            action: 'Issued the certificate for "Mathematics - Grade 10".',
            actor: '@Ibrahim Babak',
            date: '2 September 15:00',
        },
        {
            user: 'Jordan Michael',
            action: 'Promoted the student to "Grade 11".',
            actor: '@Ibrahim Babak',
            date: '2 September 15:00',
        },
        {
            user: 'Jordan Michael',
            action: 'Updated the student information for "Sara Khan".',
            actor: '@Ibrahim Babak',
            date: '2 September 15:00',
        },
        {
            user: 'Ali Ahmed',
            action: 'Issued the certificate for "Mathematics - Grade 10".',
            actor: '@Ibrahim Babak',
            date: '2 September 15:00',
        },
        {
            user: 'Jordan Michael',
            action: 'Promoted the student to "Grade 11".',
            actor: '@Ibrahim Babak',
            date: '2 September 15:00',
        },
        {
            user: 'Jordan Michael',
            action: 'Updated the student information for "Sara Khan".',
            actor: '@Ibrahim Babak',
            date: '2 September 15:00',
        },
        {
            user: 'Jordan Michael',
            action: 'Promoted the student to "Grade 11".',
            actor: '@Ibrahim Babak',
            date: '2 September 15:00',
        },
        {
            user: 'Jordan Michael',
            action: 'Updated the student information for "Sara Khan".',
            actor: '@Ibrahim Babak',
            date: '2 September 15:00',
        },
    ]

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm w-full !mb-10">
            <h2 className="text-lg font-semibold text-[#1C252E] mb-5">Latest Activity Feed</h2>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                {/* Search */}
                <div className="flex items-center flex-grow border border-gray-300 rounded-full px-4 h-[50px] min-w-[200px]">
                    <FaSearch className="text-gray-400 text-base" />
                    <input
                        type="text"
                        placeholder="Search user activity"
                        className="w-full pl-2 outline-none text-sm bg-transparent"
                    />
                </div>

                {/* Filter By Location */}
                <div className="relative w-full sm:w-auto">
                    <select className="text-sm border border-gray-300 rounded-full pl-4 pr-10 h-[50px] text-gray-600 bg-white appearance-none w-full">
                        <option>Filter By Location</option>
                    </select>
                    <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Filter By Date */}
                <div className="relative w-full sm:w-auto">
                    <select className="text-sm border border-gray-300 rounded-full pl-4 pr-10 h-[50px] text-gray-600 bg-white appearance-none w-full">
                        <option>Filter By Date</option>
                    </select>
                    <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
            </div>

            {/* Timeline */}
            <ul className="relative border-l-2 border-dashed border-[#637381] ml-3  space-y-6">
                {items.map((item, idx) => (
                    <li key={idx} className="relative flex justify-between items-start gap-2 ml-8">
                        {/* Timeline icon */}
                        <span className="absolute -left-12 top-0 w-7 h-7 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] flex items-center justify-center">
                            <FiClock size={13} className="text-[#637381]" />
                        </span>

                        {/* User activity */}
                        <div className="text-sm flex-1">
                            <strong className="text-black font-semibold">{item.user}</strong>{' '}
                            <span className="text-[#637381]">{item.action}</span>{' '}
                            <span className="text-[#559093] font-medium">{item.actor}</span>
                        </div>

                        {/* Timestamp */}
                        <div className="text-xs text-[#000000] whitespace-nowrap mt-0.5">{item.date}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ActivityFeed
