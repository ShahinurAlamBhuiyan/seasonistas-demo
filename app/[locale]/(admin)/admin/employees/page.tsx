'use client'

import { useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import Image from 'next/image'
import avatar from '~/app/assets/admin/person.png'
import FilterBar from '~/components/Admin/UserAndAbuse/FilterBar'
import EditEmployeeModal from '~/components/Admin/UserAndAbuse/EditEmployeeModal'
import BanModal from '~/components/Admin/UserAndAbuse/BanModal'
import SuspendModal from '~/components/Admin/UserAndAbuse/SuspandModal'
import { useRouter } from 'next/navigation'

const employees = [
    {
        name: 'Ali Hassan',
        email: 'ali.hassan@example.com',
        location: 'Punjab Pakistan',
        id: 'EMP001',
        skill: 'UI/UX Designer, Product Designer',
        status: 'Active',
    },
    {
        name: 'Sara Ahmed',
        email: 'sara.ahmed@example.com',
        location: 'Punjab Pakistan',
        id: 'EMP002',
        skill: 'Frontend Developer, React.js',
        status: 'Suspend',
    },
    {
        name: 'Usman Riaz',
        email: 'usman.riaz@example.com',
        location: 'Punjab Pakistan',
        id: 'EMP003',
        skill: 'Backend Developer, Node.js',
        status: 'Active',
    },
    {
        name: 'Ayesha Khan',
        email: 'ayesha.khan@example.com',
        location: 'Punjab Pakistan',
        id: 'EMP004',
        skill: 'Project Manager, Scrum Master',
        status: 'Suspend',
    },
    {
        name: 'Hamza Ali',
        email: 'hamza.ali@example.com',
        location: 'Punjab Pakistan',
        id: 'EMP005',
        skill: 'QA Engineer, Automation Testing',
        status: 'Active',
    },
    {
        name: 'Nida Farooq',
        email: 'nida.farooq@example.com',
        location: 'Punjab Pakistan',
        id: 'EMP006',
        skill: 'Graphic Designer, Illustrator',
        status: 'Suspend',
    },
    {
        name: 'Bilal Shah',
        email: 'bilal.shah@example.com',
        location: 'Punjab Pakistan',
        id: 'EMP007',
        skill: 'DevOps Engineer, AWS',
        status: 'Active',
    },
    {
        name: 'Zainab Tariq',
        email: 'zainab.tariq@example.com',
        location: 'Punjab Pakistan',
        id: 'EMP008',
        skill: 'Content Writer, SEO Specialist',
        status: 'Suspend',
    },
    {
        name: 'Adnan Malik',
        email: 'adnan.malik@example.com',
        location: 'Punjab Pakistan',
        id: 'EMP009',
        skill: 'Mobile Developer, Flutter',
        status: 'Active',
    },
    {
        name: 'Mariam Javed',
        email: 'mariam.javed@example.com',
        location: 'Punjab Pakistan',
        id: 'EMP010',
        skill: 'HR Manager, Recruitment',
        status: 'Suspend',
    },
]
export default function AllEmployeesPage() {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showBanModal, setShowBanModal] = useState(false)
    const [showSuspendModal, setShowSuspendModal] = useState(false)
    const [selectedEmployee, setSelectedEmployee] = useState<any>(null)

    const router = useRouter();

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index)
    }

    const closeDropdown = () => {
        setOpenDropdown(null)
    }

    return (
        <div className="w-full relative">
            <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6">Employees</h1>

            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto w-full">
                <h1 className="text-[20px]  px-6 pt-5 font-semibold text-[#1C252E]">All Employees</h1>
                {/* Filters */}
                <FilterBar fromEmployee={true} />

                {/* Table */}
                <table className="w-full text-sm text-left text-[#1C252E]">
                    <thead className="bg-[#F5F5F5] text-[#637381] font-medium">
                        <tr>
                            <th className="px-6 py-4">Employee Name</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4">User ID</th>
                            <th className="px-6 py-4">Skill</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp, idx) => (
                            <tr key={idx} className="border-t hover:bg-[#F5F5F5] relative cursor-pointer">
                                <td className="px-6 py-5 flex items-center gap-3" onClick={() => router.push('/en/admin/employees/profile')}>
                                    <Image src={avatar} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                                    {emp.name}
                                </td>
                                <td className="px-6 py-5" onClick={() => router.push('/en/admin/employees/profile')}>{emp.email}</td>
                                <td className="px-6 py-5 whitespace-nowrap" onClick={() => router.push('/en/admin/employees/profile')}>{emp.location}</td>
                                <td className="px-6 py-5" onClick={() => router.push('/en/admin/employees/profile')}>{emp.id}</td>
                                <td className="px-6 py-5 max-w-[200px] truncate" onClick={() => router.push('/en/admin/employees/profile')}>{emp.skill}</td>
                                <td className="px-6 py-5">
                                    <span className={`px-4 py-[4px] border-[0.6px] rounded-full text-xs font-medium ${emp.status === 'Active'
                                        ? 'bg-[#22C55E2B] text-[#22C55E] border-[#22C55E]' :
                                        'bg-[#D950572B] text-[#D95057] border-[#D95057]'
                                        }`}
                                        onClick={() => router.push('/en/admin/employees/profile')}
                                    >
                                        {emp.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5 relative">
                                    <button
                                        onClick={() => toggleDropdown(idx)}
                                        className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-gray-500 hover:bg-[#E2E8F0] cursor-pointer"
                                    >
                                        <FiMoreVertical size={16} />
                                    </button>

                                    {/* Dropdown */}
                                    {openDropdown === idx && (
                                        <div className="absolute right-6 top-14 bg-white rounded-xl shadow-md text-sm py-2 w-48 z-10">
                                            <button
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                                onClick={() => {
                                                    setShowEditModal(true)
                                                    setSelectedEmployee(emp)
                                                    setOpenDropdown(null)
                                                }}
                                            >
                                                Edit Employee
                                            </button>
                                            <button onClick={() => router.push(`/en/admin/employees/job-history/${emp.id}`)} className="w-full px-4 py-2 text-left hover:bg-gray-100">
                                                View Job History
                                            </button>
                                            <button
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                                onClick={() => {
                                                    setSelectedEmployee(emp)
                                                    setShowSuspendModal(true)
                                                    setOpenDropdown(null)
                                                }}
                                            >
                                                Suspend User
                                            </button>
                                            <button
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                                onClick={() => {
                                                    setSelectedEmployee(emp)
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

            {/* Click outside to close dropdown */}
            {openDropdown !== null && (
                <div onClick={closeDropdown} className="fixed inset-0 z-0" />
            )}

            {/* Modals */}
            {showEditModal && (
                <EditEmployeeModal onClose={() => setShowEditModal(false)} />
            )}
            {showBanModal && (
                <BanModal
                    onCancel={() => setShowBanModal(false)}
                    onConfirm={() => {
                        console.log('Banned:', selectedEmployee)
                        setShowBanModal(false)
                    }}
                />
            )}
            {showSuspendModal && (
                <SuspendModal
                    onCancel={() => setShowSuspendModal(false)}
                    onConfirm={() => {
                        console.log('Suspended:', selectedEmployee)
                        setShowSuspendModal(false)
                    }}
                />
            )}
        </div>
    )
}
