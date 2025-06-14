'use client'

import Image from 'next/image'
import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// Dummy applied jobs data
import linearCompany from '~/app/assets/employee/linearCompany.png'
import loomCompany from '~/app/assets/employee/loomCompany.png'
import trainline2Company from '~/app/assets/employee/trainline2Company.png'
import trainlineCompany from '~/app/assets/employee/trainlineCompany.jpg'

export const appliedJobs = [
    {
        id: 1,
        company: 'Linear company',
        logo: linearCompany,
        title: 'UI/UX Designer',
        appliedDate: 'Nov 22, 2025',
        status: 'Rejected',
    },
    {
        id: 2,
        company: 'Trainline',
        logo: trainlineCompany,
        title: 'UI/UX Designer',
        appliedDate: 'Feb 15, 2026',
        status: 'Approved',
    },
    {
        id: 3,
        company: 'Loom',
        logo: loomCompany,
        title: 'UI/UX Designer',
        appliedDate: 'Mar 05, 2024',
        status: 'Pending',
    },
    {
        id: 4,
        company: 'Trainline',
        logo: trainline2Company,
        title: 'UI/UX Designer',
        appliedDate: 'Dec 10, 2025',
        status: 'Approved',
    },
    {
        id: 5,
        company: 'Loom',
        logo: loomCompany,
        title: 'Graphic Designer',
        appliedDate: 'Jan 10, 2025',
        status: 'Approved',
    },
    {
        id: 6,
        company: 'Linear company',
        logo: linearCompany,
        title: 'Product Manager',
        appliedDate: 'Oct 15, 2024',
        status: 'Rejected',
    },
    {
        id: 7,
        company: 'Trainline',
        logo: trainlineCompany,
        title: 'Backend Developer',
        appliedDate: 'Aug 03, 2025',
        status: 'Pending',
    },
    {
        id: 8,
        company: 'Linear company',
        logo: linearCompany,
        title: 'QA Tester',
        appliedDate: 'Sep 12, 2025',
        status: 'Approved',
    },
    {
        id: 9,
        company: 'Loom',
        logo: loomCompany,
        title: 'Frontend Developer',
        appliedDate: 'Jul 01, 2025',
        status: 'Rejected',
    },
    {
        id: 10,
        company: 'Trainline',
        logo: trainline2Company,
        title: 'Content Writer',
        appliedDate: 'Jun 22, 2025',
        status: 'Approved',
    },
    {
        id: 11,
        company: 'Trainline',
        logo: trainlineCompany,
        title: 'Mobile Developer',
        appliedDate: 'May 18, 2025',
        status: 'Pending',
    },
    {
        id: 12,
        company: 'Linear company',
        logo: linearCompany,
        title: 'DevOps Engineer',
        appliedDate: 'Apr 30, 2025',
        status: 'Approved',
    },
]

// Status color map
const statusColorMap: Record<string, string> = {
    Approved: 'bg-[#22C55E2B] text-[#22C55E] border-[#22C55E]',
    Rejected: 'bg-[#D950572B] text-[#D95057] border-[#D95057]',
    Pending: 'bg-[#F3C44D2B] text-[#F3C44D] border-[#F3C44D]',
}

const AppliedJobsTable = () => {
    const [page, setPage] = useState(1)
    const jobsPerPage = 5
    const totalPages = Math.ceil(appliedJobs.length / jobsPerPage)
    const paginatedJobs = appliedJobs.slice((page - 1) * jobsPerPage, page * jobsPerPage)

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold leading-[22px] mb-4">Applied Jobs</h2>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                    <thead>
                        <tr className="bg-gray-100 text-[12px] text-[#637381] font-medium">
                            <th className="py-3 px-4">Company</th>
                            <th className="py-3 px-4">Job Title</th>
                            <th className="py-3 px-4">Date Applied</th>
                            <th className="py-3 px-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedJobs.map(job => (
                            <tr key={job.id} className="border-t hover:bg-gray-50 text-[12px] font-normal text-[#1C252E]">
                                <td className="py-4 px-4 flex items-center gap-3">
                                    <div className='w-9 h-9 rounded-[4px]'>
                                        <Image src={job.logo} alt={job.company} width={50} height={50} className="w-full h-full object-cover rounded-[4px]" />
                                    </div>
                                    {job.company}
                                </td>
                                <td className="py-4 px-4">{job.title}</td>
                                <td className="py-4 px-4">{job.appliedDate}</td>
                                <td className="py-4 px-4">
                                    <span className={`px-3 py-[6px] text-xs rounded-full border-[0.6px] ${statusColorMap[job.status]}`}>
                                        {job.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <div></div>
                <div className="flex items-center gap-4">
                    <span className="text-xs text-[#767676]">
                        {(page - 1) * jobsPerPage + 1}–{Math.min(page * jobsPerPage, appliedJobs.length)} of {appliedJobs.length}
                    </span>
                    <button
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="p-2 rounded-full border hover:bg-gray-100 disabled:opacity-50"
                    >
                        <IoIosArrowBack size={20} />
                    </button>
                    <button
                        onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                        className="p-2 rounded-full border hover:bg-gray-100 disabled:opacity-50"
                    >
                        <IoIosArrowForward size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AppliedJobsTable
