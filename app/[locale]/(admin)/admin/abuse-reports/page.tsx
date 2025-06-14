'use client'

import { useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi'

type ReportStatus = 'Pending' | 'Escalated'

interface AbuseReport {
    item: string
    reason: string
    reporter: string
    time: string
    users: string
    status: ReportStatus
}

const reports: AbuseReport[] = [
    { item: 'User #1032', reason: 'Spam messages', reporter: 'User #1104', time: '2 min ago', users: '5 User', status: 'Pending' },
    { item: 'Job #4021', reason: 'Fake company post', reporter: 'User #1050', time: '10 min ago', users: '6 User', status: 'Escalated' },
    { item: 'User #1032', reason: 'Spam messages', reporter: 'User #1104', time: '2 min ago', users: '5 User', status: 'Pending' },
    { item: 'Job #4021', reason: 'Fake company post', reporter: 'User #1050', time: '10 min ago', users: '6 User', status: 'Escalated' },
    { item: 'User #1032', reason: 'Spam messages', reporter: 'User #1104', time: '2 min ago', users: '5 User', status: 'Pending' },
    { item: 'Job #4021', reason: 'Fake company post', reporter: 'User #1050', time: '10 min ago', users: '6 User', status: 'Escalated' },
    { item: 'User #1032', reason: 'Spam messages', reporter: 'User #1104', time: '2 min ago', users: '5 User', status: 'Pending' },
]

export default function AbuseReportsPage() {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null)

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index)
    }

    const closeDropdown = () => {
        setOpenDropdown(null)
    }

    return (
        <div className="w-full relative">
            <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6">Abuse Reports</h1>

            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto w-full">
                <h2 className="text-[18px] font-semibold px-6 py-5 border-b">All Reports</h2>

                <table className="w-full text-sm text-left text-[#1C252E]">
                    <thead className="bg-[#F5F5F5] text-[#637381] font-medium">
                        <tr>
                            <th className="px-6 py-4">Reported Item</th>
                            <th className="px-6 py-4">Reason</th>
                            <th className="px-6 py-4">Reported By</th>
                            <th className="px-6 py-4">Time</th>
                            <th className="px-6 py-4">Reported User</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, idx) => (
                            <tr key={idx} className="border-t hover:bg-[#F5F5F5] relative text-[#1C252E] text-[12px]" >
                                <td className="px-6 py-5">{report.item}</td>
                                <td className="px-6 py-5">{report.reason}</td>
                                <td className="px-6 py-5">{report.reporter}</td>
                                <td className="px-6 py-5">{report.time}</td>
                                <td className="px-6 py-5">{report.users}</td>
                                <td className="px-6 py-5">
                                    <span className={`px-4 py-2 rounded-full text-xs font-medium border-[0.6px] ${report.status === 'Pending'
                                        ? 'bg-[#F3C44D2B] text-[#F3C44D] border-[#F3C44D]'
                                        : 'bg-[#D950572B] text-[#D95057] border-[#D95057]'
                                        }`}>
                                        {report.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5 relative">
                                    <button
                                        onClick={() => toggleDropdown(idx)}
                                        className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-gray-500 hover:bg-[#E2E8F0]"
                                    >
                                        <FiMoreVertical size={16} />
                                    </button>

                                    {openDropdown === idx && (
                                        <div className="absolute right-6 top-14 bg-white rounded-xl shadow-md text-sm py-2 w-40 z-10">
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Warn</button>
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Suspend</button>
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Delete</button>
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Escalation</button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {openDropdown !== null && <div onClick={closeDropdown} className="fixed inset-0 z-0" />}
        </div>
    )
}
