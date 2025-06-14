'use client'

import Image from 'next/image'
import personLogo from '~/app/assets/admin/person.png'

const admins = [
    { name: 'Linear company', status: 'Active' },
    { name: 'Linear company', status: 'Suspended' },
    { name: 'Linear company', status: 'Active' },
    { name: 'Linear company', status: 'Suspended' },
    { name: 'Linear company', status: 'Active' },
    { name: 'Linear company', status: 'Suspended' },
    { name: 'Linear company', status: 'Active' },
    { name: 'Linear company', status: 'Suspended' },
]

export default function AdminRolesPage() {
    return (
        <div className="w-full">
            <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6">Admin Roles</h1>

            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto w-full mb-10">
                <h2 className="text-[18px] font-semibold px-6 py-5 text-[#1C252E]">All Admin</h2>

                <table className="w-full text-sm text-left text-[#1C252E]">
                    <thead className="bg-[#F5F5F5] text-[#637381] font-medium">
                        <tr>
                            <th className="px-6 py-4">Admin Name</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin, idx) => (
                            <tr key={idx} className="border-t hover:bg-[#F9FAFB]">
                                <td className="px-6 py-5 flex items-center gap-2 mt-1">
                                    <Image
                                        src={personLogo}
                                        alt="avatar"
                                        className="w-9 h-9 rounded-full object-cover"
                                    />
                                    {admin.name}
                                </td>
                                <td className="px-6 py-5">
                                    <span className={`px-4 py-[4px] rounded-full text-xs font-medium ${admin.status === 'Active'
                                        ? 'bg-[#DCFCE7] text-[#15803D]'
                                        : 'bg-[#FDEEEE] text-[#D84C4C]'
                                        }`}>
                                        {admin.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-sm text-[#637381] underline cursor-pointer hover:text-black">
                                    View Logs
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
