'use client'
import { FiMoreVertical } from 'react-icons/fi';
import FilterBar from '~/components/Admin/UserAndAbuse/FilterBar';
import companyLogo from '~/app/assets/admin/companyLogo.png'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import VerifyModal from '~/components/Admin/UserAndAbuse/VerifyModal';
import BanModal from '~/components/Admin/UserAndAbuse/BanModal';
import SuspendModal from '~/components/Admin/UserAndAbuse/SuspandModal';

const employers = Array.from({ length: 8 }).map((_, i) => ({
    businessName: "Lanier Pvt Ltd",
    email: "dummy@gmail.com",
    website: "www.Lanier.com",
    location: "Punjab Pakistan",
    userId: "EMP001",
    verification: "Verified",
    totalJobs: "17 Jobs",
    status: i % 2 === 0 ? "Active" : "Inactive",
}));

const EmployersTable = () => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null)
    const [showVerifyModal, setShowVerifyModal] = useState(false)
    const [showBanModal, setShowBanModal] = useState(false)
    const [showSuspendModal, setShowSuspendModal] = useState(false)

    const router = useRouter();
    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index)
    }
    return (
        <div className="w-full mb-10">
            <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6">Employers</h1>

            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto w-full">
                <h1 className="text-[20px]  px-6 pt-5 font-semibold text-[#1C252E]">All Employers</h1>
                {/* filter */}
                <FilterBar fromEmployee={false} />

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-[#1C252E]">
                        <thead className="bg-[#F5F5F5]  text-[#637381] text-[12px] font-semibold">
                            <tr>
                                <th className="px-4 py-4 font-medium">Business Name</th>
                                <th className="px-4 py-4 font-medium">Email</th>
                                <th className="px-4 py-4 font-medium">Website</th>
                                <th className="px-4 py-4 font-medium">Location</th>
                                <th className="px-4 py-4 font-medium">User ID</th>
                                <th className="px-4 py-4 font-medium">Verification</th>
                                <th className="px-4 py-4 font-medium">Total Job</th>
                                <th className="px-4 py-4 font-medium">Status</th>
                                <th className="px-4 py-4 font-medium"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {employers.map((emp, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50 cursor-pointer">
                                    <td className="px-3 py-5 flex items-center gap-3" onClick={() => router.push('/en/admin/employers/profile')}>
                                        <div className="w-8 h-8 bg-[#ECEEFF] rounded-[4px] flex items-center justify-center">
                                            <Image src={companyLogo} alt={emp.businessName} className='w-full h-full object-cover rounded-[4px]' />
                                        </div>
                                        {emp.businessName}
                                    </td>
                                    <td className="px-3 py-5" onClick={() => router.push('/en/admin/employers/profile')}>{emp.email}</td>
                                    <td className="px-3 py-5" onClick={() => router.push('/en/admin/employers/profile')}>{emp.website}</td>
                                    <td className="px-3 py-5" onClick={() => router.push('/en/admin/employers/profile')}>{emp.location}</td>
                                    <td className="px-3 py-5" onClick={() => router.push('/en/admin/employers/profile')}>{emp.userId}</td>
                                    <td className="px-3 py-5" onClick={() => router.push('/en/admin/employers/profile')}>{emp.verification}</td>
                                    <td className="px-3 py-5" onClick={() => router.push('/en/admin/employers/profile')}>{emp.totalJobs}</td>
                                    <td className="px-3 py-5" onClick={() => router.push('/en/admin/employers/profile')}>
                                        <span
                                            className={`text-xs font-medium  border-[0.6px] px-3 py-1 rounded-full ${emp.status === 'Active'
                                                ? 'bg-[#22C55E2B] text-[#22C55E] border-[#22C55E]'
                                                : 'bg-[#D950572B] text-[#D95057] border-[#D95057]'
                                                }`}
                                        >
                                            {emp.status}
                                        </span>
                                    </td>
                                    <td className="px-3 py-5 relative">
                                        <button
                                            onClick={() => toggleDropdown(index)}
                                            className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center text-gray-500 hover:bg-[#E2E8F0] cursor-pointer"
                                        >
                                            <FiMoreVertical size={16} />
                                        </button>

                                        {/* Dropdown */}
                                        {openDropdown === index && (
                                            <div className="absolute right-6 top-14 bg-white rounded-xl shadow-md text-sm py-2 w-48 z-10 text-black">
                                                <button
                                                    onClick={() => {
                                                        setShowVerifyModal(true)
                                                        setOpenDropdown(null)
                                                    }}
                                                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                                >
                                                    Verify Company
                                                </button>

                                                <button
                                                    onClick={() => router.push(`/en/admin/employers/jobs/${emp.userId}`)}
                                                    className="w-full px-4 py-2 text-left hover:bg-gray-100">
                                                    View Jobs
                                                </button>
                                                <button
                                                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                                    onClick={() => router.push(`/en/admin/employers/payments/${emp.userId}`)}
                                                >
                                                    Payments
                                                </button>
                                                <button
                                                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                                    onClick={() => {
                                                        setShowSuspendModal(true)
                                                        setOpenDropdown(null)
                                                    }}
                                                >
                                                    Suspend User
                                                </button>
                                                <button
                                                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                                    onClick={() => {
                                                        setShowBanModal(true)
                                                        setOpenDropdown(null)
                                                    }}
                                                >
                                                    Ban User
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {showVerifyModal && (
                <VerifyModal
                    onClose={() => setShowVerifyModal(false)}
                    onConfirm={() => {
                        setShowVerifyModal(false)
                    }}
                />
            )}
            {showBanModal && (
                <BanModal
                    onCancel={() => setShowBanModal(false)}
                    onConfirm={() => {
                        setShowBanModal(false)
                    }}
                />
            )}
            {showSuspendModal && (
                <SuspendModal
                    onCancel={() => setShowSuspendModal(false)}
                    onConfirm={() => {
                        setShowSuspendModal(false)
                    }}
                />
            )}

        </div>
    );
};

export default EmployersTable;
