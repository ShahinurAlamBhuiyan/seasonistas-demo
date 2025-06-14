'use client'

import { HiOutlineSearch } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import Image from 'next/image'
import companyLogo from '~/app/assets/admin/companyLogo.png'
import personLogo from '~/app/assets/admin/person.png'
import MetricCard2 from '~/components/Admin/Transactions/MetricCard2'
import { useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import RefundModal from '~/components/Admin/Modal/RefundModal'

const transactions = [
    { user: 'Ali Hassan', isCompany: false, plan: 'Basic Plan', date: '2025-05-15', price: '$1200', method: 'Stripe', status: 'Success' },
    { user: 'Linear company', isCompany: true, plan: 'Basic Plan', date: '2025-05-15', price: '$1200', method: 'Stripe', status: 'Refunded' },
    { user: 'Ali Hassan', isCompany: false, plan: 'Basic Plan', date: '2025-05-15', price: '$1200', method: 'Stripe', status: 'Success' },
    { user: 'Linear company', isCompany: true, plan: 'Basic Plan', date: '2025-05-15', price: '$1200', method: 'Stripe', status: 'Refunded' },
    { user: 'Ali Hassan', isCompany: false, plan: 'Basic Plan', date: '2025-05-15', price: '$1200', method: 'Stripe', status: 'Success' },
    { user: 'Linear company', isCompany: true, plan: 'Basic Plan', date: '2025-05-15', price: '$1200', method: 'Stripe', status: 'Refunded' },
    { user: 'Ali Hassan', isCompany: false, plan: 'Basic Plan', date: '2025-05-15', price: '$1200', method: 'Stripe', status: 'Success' },
    { user: 'Linear company', isCompany: true, plan: 'Basic Plan', date: '2025-05-15', price: '$1200', method: 'Stripe', status: 'Refunded' }
]

export default function Transactions() {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null)
    const [showRefundModal, setShowRefundModal] = useState(false)

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index)
    }
    return (
        <div className="w-full">
            <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6">Transactions</h1>

            {/* Stat Boxes */}
            <div className="grid md:grid-cols-3 gap-5 mb-6">
                <MetricCard2
                    title='Today’s Revenue'
                    value='120$'
                    barColor='#00A76F'
                    bars={[10, 10, 15, 5, 8, 20, 7, 16]}
                />
                <MetricCard2
                    title='This Month'
                    value='1452$'
                    barColor='#559093'
                    bars={[5, 6, 20, 25, 3, 17, 16]}
                />
                <MetricCard2
                    title='Total Refunded'
                    value='78$'
                    barColor='#FF5630'
                    bars={[5, 6, 3, 20, 25, 3, 17, 16]}
                />
            </div>

            {/* Filter Bar */}
            <div className="w-full">

                <div className="bg-white rounded-2xl shadow-sm overflow-x-auto w-full mb-10">
                    <h1 className="text-[22px] font-semibold text-[#1C252E] p-6 ">All Transaction</h1>
                    <div className="flex flex-wrap items-center justify-between gap-4 px-6 pb-5">
                        <div className="relative flex-1 min-w-[200px]">
                            <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search User"
                                className="w-full border rounded-full pl-10 pr-4 py-3 text-sm border-[#E2E8F0] placeholder:text-gray-400"
                            />
                        </div>
                        {['Date', 'Status'].map((filter, i) => (
                            <div key={i} className="relative">
                                <select className="appearance-none text-sm border border-gray-300 rounded-full px-4 py-3 bg-white text-gray-600 pr-8">
                                    <option>Filter By {filter}</option>
                                </select>
                                <IoIosArrowDown className="absolute right-3 top-4 text-gray-500 pointer-events-none" />
                            </div>
                        ))}
                    </div>

                    <table className="w-full text-sm text-left text-[#1C252E]">
                        <thead className="bg-[#F5F5F5] text-[#637381] font-medium">
                            <tr>
                                <th className="px-6 py-4">User Name</th>
                                <th className="px-6 py-4">Plan Name</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Method</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((t, idx) => (
                                <tr key={idx} className="border-t hover:bg-[#F9FAFB]">
                                    <td className="px-6 py-5 flex items-center gap-2 mt-1">
                                        {t.isCompany ? (
                                            <>
                                                <Image src={companyLogo} alt="logo" className="w-7 h-7 rounded-md" />
                                                {t.user}
                                            </>
                                        ) : (
                                            <div className='w-9 h-9 rounded-full flex items-center gap-2'>
                                                <Image
                                                    src={personLogo}
                                                    alt="avatar"
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                                <p className=' whitespace-nowrap'>{t.user}</p>
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-5">{t.plan}</td>
                                    <td className="px-6 py-5">{t.date}</td>
                                    <td className="px-6 py-5">{t.price}</td>
                                    <td className="px-6 py-5">{t.method}</td>
                                    <td className="px-6 py-5">
                                        <span className={`px-4 py-[4px] rounded-full text-xs font-medium ${t.status === 'Success'
                                            ? 'bg-[#DCFCE7] text-[#15803D]'
                                            : 'bg-[#FDEEEE] text-[#D84C4C]'
                                            }`}>
                                            {t.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 relative">
                                        <button
                                            onClick={() => toggleDropdown(idx)}
                                            className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center text-gray-500 hover:bg-[#E2E8F0] cursor-pointer"
                                        >
                                            <FiMoreVertical size={16} />
                                        </button>
                                        {openDropdown === idx && (
                                            <div className="absolute right-6 top-14 bg-white rounded-xl shadow-md text-sm py-2 w-48 z-10 text-black">
                                                <button
                                                    onClick={() => {
                                                        setShowRefundModal(true)
                                                        setOpenDropdown(null)
                                                    }}
                                                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                                >
                                                    Refund
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
            {showRefundModal && (
                <RefundModal
                    onClose={() => setShowRefundModal(false)}
                    onConfirm={() => {
                        console.log('Refund confirmed')
                        setShowRefundModal(false)
                    }}
                />
            )}

        </div>
    )
}
