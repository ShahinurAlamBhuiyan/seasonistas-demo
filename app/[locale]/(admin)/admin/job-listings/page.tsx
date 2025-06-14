'use client'

import { FiMoreVertical } from 'react-icons/fi'
import { HiOutlineSearch } from 'react-icons/hi'
import { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { initialJobs } from './jobData'

import companyLogo from '~/app/assets/admin/companyLogo.png'
import FlagInfoModal from '~/components/Admin/Modal/FlagInfoModal'

export default function JobListingsPage() {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null)
    const [showFlagModal, setShowFlagModal] = useState(false)
    const [flagData, setFlagData] = useState<any>(null)

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index)
    }
    const router = useRouter()
    return (
        <div className="w-full relative mb-10">
            <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6">Job Listings</h1>

            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto w-full">
                <h1 className="text-[20px] px-6 pt-5 font-semibold text-[#1C252E]">All Jobs</h1>

                <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
                    <div className="relative flex-1 min-w-[250px]">
                        <HiOutlineSearch className="absolute left-4 top-[16px] text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search Employee"
                            className="w-full border rounded-full pl-10 pr-4 py-4 text-sm border-[#E2E8F0] placeholder:text-gray-400"
                        />
                    </div>
                    <div className="relative">
                        <select className="appearance-none text-sm border border-gray-300 rounded-full px-4 py-4 bg-white text-gray-600 pr-8">
                            <option>Filter By Status</option>
                        </select>
                        <IoIosArrowDown className="absolute right-3 top-5 text-gray-500 pointer-events-none" />
                    </div>
                </div>

                {/* Table */}
                <table className="w-full text-sm text-left text-[#1C252E]">
                    <thead className="bg-[#F5F5F5]">
                        <tr className='text-[#637381] font-medium'>
                            <th className="px-6 py-4">Job Title</th>
                            <th className="px-6 py-4">Company</th>
                            <th className="px-6 py-4">Posted On</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4">Flagged?</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialJobs.map((job, idx) => (
                            <tr key={job.id} className="border-t hover:bg-[#F9FAFB] relative">
                                <td className="px-6 py-5 cursor-pointer" onClick={() => router.push(`/en/admin/job-listings/job-detail/${job.id}`)}>{job.title}</td>
                                <td className="px-6 py-5 cursor-pointer flex items-center gap-2 mt-1" onClick={() => router.push(`/en/admin/job-listings/job-detail/${job.id}`)}>
                                    <Image src={companyLogo} alt="logo" width={29} height={29} className="rounded-md" />
                                    {job.company}
                                </td>
                                <td className="px-6 py-5 cursor-pointer" onClick={() => router.push(`/en/admin/job-listings/job-detail/${job.id}`)}>{job.date}</td>
                                <td className="px-6 py-5 cursor-pointer" onClick={() => router.push(`/en/admin/job-listings/job-detail/${job.id}`)}>{job.location}</td>
                                <td className="px-6 py-5 cursor-pointer" onClick={() => router.push(`/en/admin/job-listings/job-detail/${job.id}`)}>
                                    {(job.match > 90 || job.status === 'Rejected') ? (
                                        <span className="text-[#D84C4C] text-xs font-medium">🚩 Yes</span>
                                    ) : (
                                        <span className="text-gray-400 text-sm">---</span>
                                    )}
                                </td>
                                <td className="px-6 py-5 cursor-pointer" onClick={() => router.push(`/en/admin/job-listings/job-detail/${job.id}`)}>
                                    <span className={`px-4 border-[0.6px] py-[4px] rounded-full text-xs font-medium ${job.status === 'Active'
                                        ? 'bg-[#22C55E2B] text-[#22C55E] border-[#22C55E]'
                                        : job.status === 'Rejected'
                                            ? 'bg-[#D950572B] text-[#D95057] border-[#D95057]'
                                            : 'bg-[#F3C44D2B] text-[#F3C44D] border-[#F3C44D]'
                                        }`}>
                                        {job.status ?? 'Pending'}
                                    </span>
                                </td>
                                <td className="px-6 py-5">
                                    <button
                                        onClick={() => toggleDropdown(idx)}
                                        className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-gray-500 hover:bg-[#E2E8F0] cursor-pointer"
                                    >
                                        <FiMoreVertical size={16} />
                                    </button>
                                    {openDropdown === idx && (
                                        <div className="absolute right-6 top-14 bg-white rounded-xl shadow-md text-sm py-2 w-48 z-10">
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>Approve</button>
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Reject</button>
                                            <button
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                                onClick={() => {
                                                    setFlagData({
                                                        title: job.title,
                                                        reportedItem: `Job #${job.id} – "${job.title}"`,
                                                        reportedBy: 'User #1104 – Ali Raza',
                                                        flaggedOn: '2025-05-17 – 3:40 PM',
                                                        reason: 'Fake Job',
                                                        reportCount: '3 Users have flagged this job',
                                                    })
                                                    setShowFlagModal(true)
                                                    setOpenDropdown(null)
                                                }}
                                            >
                                                View Flagged
                                            </button>

                                            <button
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                                onClick={() => router.push('job-listings/match-history')}
                                            >
                                                Match history
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showFlagModal && (
                <FlagInfoModal data={flagData} onClose={() => setShowFlagModal(false)} />
            )}

        </div>
    )
}
