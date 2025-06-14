'use client'

import Image from 'next/image'
import avatar from '~/app/assets/admin/person.png'

const auditLogs = [
    {
        admin: 'Ali Hassan',
        avatar: '/avatars/admin.png', // ✅ make sure this image exists in public/avatars
        action: 'Approved Job',
        target: 'Job #4352',
        time: '2025-05-18 10:32 AM',
        ip: '192.168.1.10',
    },
    {
        admin: 'Ali Hassan',
        avatar: '/avatars/admin.png',
        action: 'Banned User',
        target: 'User #1055',
        time: '2025-05-18 10:32 AM',
        ip: '192.168.1.10',
    },
    {
        admin: 'Ali Hassan',
        avatar: '/avatars/admin.png',
        action: 'Refunded Payment',
        target: 'User #1102',
        time: '2025-05-18 10:32 AM',
        ip: '192.168.1.10',
    },
    {
        admin: 'Ali Hassan',
        avatar: '/avatars/admin.png',
        action: 'Edited Template',
        target: 'Welcome Email',
        time: '2025-05-18 10:32 AM',
        ip: '192.168.1.10',
    },
    // Duplicate for sample visual consistency
    {
        admin: 'Ali Hassan',
        avatar: '/avatars/admin.png',
        action: 'Approved Job',
        target: 'Job #4352',
        time: '2025-05-18 10:32 AM',
        ip: '192.168.1.10',
    },
]

export default function AuditLogsPage() {
    return (
        <div className=" space-y-6">
            <h1 className='text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4'>Audit Logs</h1>
            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
                <h2 className="text-[18px] sm:text-[22px] font-semibold py-4 sm:py-6 px-4 sm:px-6 border-b">
                    All Logs
                </h2>

                <table className="min-w-[700px] w-full text-left text-sm text-gray-700">
                    <thead className="bg-[#F5F5F5] text-gray-500 font-medium">
                        <tr>
                            <th className="px-4 sm:px-6 py-3">Admin Name</th>
                            <th className="px-4 sm:px-6 py-3">Action</th>
                            <th className="px-4 sm:px-6 py-3">Target</th>
                            <th className="px-4 sm:px-6 py-3">Time</th>
                            <th className="px-4 sm:px-6 py-3">IP Address</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#1C252E]">
                        {auditLogs.map((log, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="px-4 sm:px-6 py-4 flex items-center gap-2 whitespace-nowrap">
                                    <div className='w-10 h-10'>
                                        <Image
                                            src={avatar}
                                            alt={log.admin}
                                            width={30}
                                            height={30}
                                            className="rounded-full object-cover w-full h-full"
                                        />
                                    </div>
                                    <span>{log.admin}</span>
                                </td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">{log.action}</td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">{log.target}</td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">{log.time}</td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">{log.ip}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
