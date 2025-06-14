'use client'

import Image from 'next/image'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import logo from '~/app/assets/admin/companyLogo.png'

const applications = [
    { title: 'UI/UX Designer', company: "Lowe's Companies, Inc.", match: 72, status: 'Accept', date: '2025-05-14' },
    { title: 'UI/UX Designer', company: "Lowe's Companies, Inc.", match: 72, status: 'Rejected', date: '2025-05-14' },
    { title: 'UI/UX Designer', company: "Lowe's Companies, Inc.", match: 72, status: 'Accept', date: '2025-05-14' },
    { title: 'UI/UX Designer', company: "Lowe's Companies, Inc.", match: 72, status: 'Rejected', date: '2025-05-14' },
    { title: 'UI/UX Designer', company: "Lowe's Companies, Inc.", match: 72, status: 'Accept', date: '2025-05-14' },
    { title: 'UI/UX Designer', company: "Lowe's Companies, Inc.", match: 72, status: 'Rejected', date: '2025-05-14' },
]

export default function AllJobApplyPage() {
    return (
        <div className="w-full">
            <h2 className='text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6'>Job History</h2>
            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto w-full">
                {/* Header */}
                <h2 className="text-[18px] font-semibold px-6 py-5 border-b">All Job Apply</h2>

                {/* Table */}
                <table className="w-full text-sm text-left text-[#1C252E]">
                    <thead className="bg-[#F5F5F5] text-[#637381] font-medium">
                        <tr>
                            <th className="px-6 py-4">Job Title</th>
                            <th className="px-6 py-4">Company</th>
                            <th className="px-6 py-4">Match%</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Applied On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((item, idx) => (
                            <tr key={idx} className="border-t hover:bg-[#F9FAFB]">
                                <td className="px-6 py-5  whitespace-nowrap">{item.title}</td>
                                <td className="px-6 py-6 flex items-center gap-2 mt-1  whitespace-nowrap">
                                    <div className='w-10 h-10 rounded-[4px]'>
                                        <Image src={logo} alt="logo" className="w-full h-full object-cover rounded-[4px]" />
                                    </div>
                                    {item.company}
                                </td>
                                <td className="px-6 py-5 w-[80px]">
                                    <CircularProgressbar
                                        value={item.match}
                                        text={`${item.match}%`}
                                        styles={buildStyles({
                                            textSize: '28px',
                                            textColor: '#1C252E',
                                            pathColor: '#3B978C',
                                            trailColor: '#E5EAF2',
                                        })}
                                    />
                                </td>
                                <td className="px-6 py-5">
                                    <span className={`px-4 py-[4px] rounded-full text-xs font-medium ${item.status === 'Accept'
                                        ? 'bg-[#DCFCE7] text-[#15803D]'
                                        : 'bg-[#FDEEEE] text-[#D84C4C]'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
