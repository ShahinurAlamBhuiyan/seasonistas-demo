'use client'

import Image from 'next/image'
import avatar from '~/app/assets/admin/person.png'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const dummyMatches = [
    { name: 'Linear company', email: 'dummy@gmail.com', location: 'Punjab Pakistan', date: '2025-05-14', match: 72, status: 'Applied' },
    { name: 'Linear company', email: 'dummy@gmail.com', location: 'Punjab Pakistan', date: '2025-05-14', match: 72, status: 'Declined' },
    { name: 'Linear company', email: 'dummy@gmail.com', location: 'Punjab Pakistan', date: '2025-05-14', match: 72, status: 'Applied' },
    { name: 'Linear company', email: 'dummy@gmail.com', location: 'Punjab Pakistan', date: '2025-05-14', match: 72, status: 'Declined' },
    { name: 'Linear company', email: 'dummy@gmail.com', location: 'Punjab Pakistan', date: '2025-05-14', match: 72, status: 'Applied' },
    { name: 'Linear company', email: 'dummy@gmail.com', location: 'Punjab Pakistan', date: '2025-05-14', match: 72, status: 'Declined' },
    { name: 'Linear company', email: 'dummy@gmail.com', location: 'Punjab Pakistan', date: '2025-05-14', match: 72, status: 'Declined' },
    { name: 'Linear company', email: 'dummy@gmail.com', location: 'Punjab Pakistan', date: '2025-05-14', match: 72, status: 'Applied' },
]

export default function JobMatchHistoryPage() {
    return (
        <div className="w-full mb-10">
            <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6">Job Match</h1>
            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto w-full">
                <h1 className="text-[18px] font-semibold px-6 py-5 text-[#1C252E]">All Employee</h1>
                <table className="w-full text-sm text-left text-[#1C252E]">
                    <thead className="bg-[#F5F5F5] text-[#637381] font-medium">
                        <tr>
                            <th className="px-6 py-4">Employee Name</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4">Applied On</th>
                            <th className="px-6 py-4">Match%</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyMatches.map((item, idx) => (
                            <tr key={idx} className="border-t hover:bg-[#F9FAFB]">
                                <td className="px-6 py-5 flex items-center gap-3 mt-[10px]">
                                    <Image src={avatar} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                                    {item.name}
                                </td>
                                <td className="px-6 py-5">{item.email}</td>
                                <td className="px-6 py-5 whitespace-nowrap">{item.location}</td>
                                <td className="px-6 py-5">{item.date}</td>
                                <td className="px-6 py-5 w-[80px]">
                                    <CircularProgressbar
                                        value={item.match}
                                        text={`${item.match}%`}
                                        styles={buildStyles({
                                            textSize: '28px',
                                            textColor: '#1C252E',
                                            pathColor: '#3B978C',
                                            trailColor: '#E5EAF2'
                                        })}
                                    />
                                </td>
                                <td className="px-6 py-5">
                                    <span className={`px-4 py-[4px] rounded-full text-xs font-medium border-[0.6px] ${item.status === 'Applied'
                                        ? 'bg-[#22C55E2B] text-[#22C55E] border-[#22C55E]' : 'bg-[#D950572B] text-[#D95057]  border-[#D95057]'}`}>{item.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
