'use client'

import { HiOutlineSearch } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import Image from 'next/image'
import companyLogo from '~/app/assets/admin/companyLogo.png'
import MetricCard from '~/components/Admin/Dashboards/Overview/MetricCard'
import arrow1 from '~/app/assets/admin/arrow1.png'
import arrow5 from '~/app/assets/admin/arrow5.png'

const dummyJobs = [
    { title: 'UI Designer', company: 'Lanier Pvt Ltd', date: '2025-05-15', location: 'Punjab Pakistan', category: 'IT Industry', role: 'Designer', status: 'Active' },
    { title: 'UI Designer', company: 'Lanier Pvt Ltd', date: '2025-05-15', location: 'Punjab Pakistan', category: 'IT Industry', role: 'Designer', status: 'Rejected' },
    { title: 'UI Designer', company: 'Lanier Pvt Ltd', date: '2025-05-15', location: 'Punjab Pakistan', category: 'IT Industry', role: 'Designer', status: 'Active' },
    { title: 'UI Designer', company: 'Lanier Pvt Ltd', date: '2025-05-15', location: 'Punjab Pakistan', category: 'IT Industry', role: 'Designer', status: 'Pending' },
    { title: 'UI Designer', company: 'Lanier Pvt Ltd', date: '2025-05-15', location: 'Punjab Pakistan', category: 'IT Industry', role: 'Designer', status: 'Active' },
    { title: 'UI Designer', company: 'Lanier Pvt Ltd', date: '2025-05-15', location: 'Punjab Pakistan', category: 'IT Industry', role: 'Designer', status: 'Rejected' },
    { title: 'UI Designer', company: 'Lanier Pvt Ltd', date: '2025-05-15', location: 'Punjab Pakistan', category: 'IT Industry', role: 'Designer', status: 'Active' },
    { title: 'UI Designer', company: 'Lanier Pvt Ltd', date: '2025-05-15', location: 'Punjab Pakistan', category: 'IT Industry', role: 'Designer', status: 'Rejected' },
]

export default function MatchingActivityPage() {
    return (
        <div className="w-full">
            <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6">Matching Activity</h1>

            {/* Stat Boxes */}
            <div className="grid md:grid-cols-3 gap-5 mb-6">
                <MetricCard
                    title='Match Success Rate'
                    subtitle='last 7 days'
                    value='74%'
                    change={+2.6}
                    arrowIcon={arrow1}
                    bars={[5, 6, 3, 20, 25, 3, 17, 16]}
                    barColor='#00A76F'
                />
                <MetricCard
                    title='Matches This Month'
                    subtitle='last 7 days'
                    value='145'
                    change={+0.2}
                    arrowIcon={arrow1}
                    bars={[5, 6, 20, 25, 3, 17, 16]}
                    barColor='#559093'
                />
                <MetricCard
                    title='Unmatched Opportunities'
                    subtitle='last 7 days'
                    value='78 jobs'
                    change={-0.1}
                    arrowIcon={arrow5}
                    bars={[10, 10, 15, 5, 8, 20, 7, 16]}
                    barColor='#FF5630'
                />
            </div>

            {/* Filter Bar */}
            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto w-full mb-10">
                <h2 className="text-[18px] font-semibold px-6 pt-5 text-[#1C252E]">All Jobs</h2>

                <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
                    <div className="relative flex-1 min-w-[200px]">
                        <HiOutlineSearch className="absolute left-4 top-[16px] text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search Job"
                            className="w-full border rounded-full pl-10 pr-4 py-3 text-sm border-[#E2E8F0] placeholder:text-gray-400"
                        />
                    </div>
                    {['Category', 'Role', 'Region'].map((filter, i) => (
                        <div key={i} className="relative">
                            <select className="appearance-none text-sm border border-gray-300 rounded-full px-4 py-3 bg-white text-gray-600 pr-8">
                                <option>Filter By {filter}</option>
                            </select>
                            <IoIosArrowDown className="absolute right-3 top-4 text-gray-500 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Table */}
                <table className="w-full text-sm text-left text-[#1C252E]">
                    <thead className="bg-[#F5F5F5] text-[#637381] font-medium">
                        <tr>
                            <th className="px-6 py-4">Job Title</th>
                            <th className="px-6 py-4">Company</th>
                            <th className="px-6 py-4">Posted On</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyJobs.map((job, idx) => (
                            <tr key={idx} className="border-t hover:bg-[#F9FAFB]">
                                <td className="px-6 py-5">{job.title}</td>
                                <td className="px-6 py-5 flex items-center gap-2 mt-1">
                                    <Image src={companyLogo} alt="logo" className="w-[29px] h-[29px] rounded-md" />
                                    {job.company}
                                </td>
                                <td className="px-6 py-5">{job.date}</td>
                                <td className="px-6 py-5">{job.location}</td>
                                <td className="px-6 py-5">{job.category}</td>
                                <td className="px-6 py-5">{job.role}</td>
                                <td className="px-6 py-5">
                                    <span className={`px-4 py-[4px] rounded-full text-xs font-medium ${job.status === 'Active'
                                        ? 'bg-[#DCFCE7] text-[#15803D]'
                                        : job.status === 'Rejected'
                                            ? 'bg-[#FDEEEE] text-[#D84C4C]'
                                            : 'bg-[#FEF3C7] text-[#D97706]'
                                        }`}>
                                        {job.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
