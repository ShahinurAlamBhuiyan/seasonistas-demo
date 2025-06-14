'use client'

import Image from 'next/image'
import avatar from '~/app/assets/employer/dashboard/applicant2.png'
import { GoPlus } from "react-icons/go"
import { useRouter } from 'next/navigation'

const transactions = [
    {
        admin: 'Linear company',
        plan: 'Professional',
        date: 'Nov 22, 2025',
        status: 'error',
        amount: '$250.00',
        period: '1 Month',
    },
    {
        admin: 'Trainline',
        plan: 'Professional',
        date: 'Feb 15, 2026',
        status: 'Paid',
        amount: '$250.00',
        period: '1 Month',
    },
    {
        admin: 'Loom',
        plan: 'Professional',
        date: 'Mar 05, 2024',
        status: 'error',
        amount: '$250.00',
        period: '1 Month',
    },
    {
        admin: 'Trainline',
        plan: 'Professional',
        date: 'Dec 10, 2025',
        status: 'Paid',
        amount: '$250.00',
        period: '1 Month',
    },
]

const BillingMethod = () => {
    const router = useRouter();
    return (
        <div className="space-y-6 sm:px-4 md:px-0">
            {/* Top cards */}
            <div className="flex flex-col md:flex-row gap-4 flex-wrap">
                <div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-[400px] space-y-3">
                    <div className='flex justify-between items-center'>
                        <p className="text-[18px] font-semibold leading-[24px]">Add Usage</p>
                        <button className='px-4 py-2 text-[12px] font-medium text-white bg-[#559093] rounded-full'>Plan Renew</button>
                    </div>
                    <div className='space-y-1'>
                        <div className="text-sm font-normal flex justify-between items-center">
                            <p>You've used 4 of 10 ads</p>
                            <p>40%</p>
                        </div>
                        <div className="bg-[#D9D9D9] h-[7px] w-full rounded-full overflow-hidden">
                            <div className="bg-[#559092] h-[7px]" style={{ width: '40%' }} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className='mt-3'>
                            <p className="text-[16px] font-semibold leading-[24px]">Professional Plan</p>
                            <p className="text-xs font-normal text-[#767676]">Expire Until 25 Jan 2027</p>
                        </div>
                        <h2 className="text-[24px] font-semibold">18<span className="text-[17px] font-normal">/mo</span></h2>
                    </div>
                </div>

                <div className="w-full md:w-[400px] bg-white rounded-xl shadow-sm flex flex-col gap-2 items-center justify-center p-6">
                    <button className='p-2 rounded-full bg-[#DFE5E8]'>
                        <GoPlus size={25} />
                    </button>
                    <p className="text-[16px] font-semibold leading-[24px] tracking-wider text-center">Add Payment Method</p>
                </div>
            </div>

            {/* Transaction Table */}
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                <h2 className="font-semibold text-[18px] leading-[24px] mb-4">Transaction History</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-[700px] w-full text-sm text-left">
                        <thead className="bg-[#F5F5F5] text-[#637381] font-semibold leading-[24px]">
                            <tr>
                                <th className="p-4 md:p-6">Billing Admin</th>
                                <th className="p-4 md:p-6">Plan Name</th>
                                <th className="p-4 md:p-6">Billing Date</th>
                                <th className="p-4 md:p-6">Status</th>
                                <th className="p-4 md:p-6">Amount</th>
                                <th className="p-4 md:p-6">Time Period</th>
                                <th className="p-4 md:p-6">Receipt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((item, idx) => (
                                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t`}>
                                    <td className="p-4 md:p-6 flex items-center gap-2">
                                        <div className='w-[32px] h-[32px]'>
                                            <Image src={avatar} alt="admin" width={60} height={60} className="rounded-full w-full h-full object-cover" />
                                        </div>
                                        <p className='text-[12px] font-normal leading-[22px]'>{item.admin}</p>
                                    </td>
                                    <td className="p-4 md:p-6 text-[12px] font-normal leading-[22px]">{item.plan}</td>
                                    <td className="p-4 md:p-6 text-[12px] font-normal leading-[22px]">{item.date}</td>
                                    <td className="p-4 md:p-6">
                                        <span className={`px-4 py-[6px] text-[12px] font-normal leading-[22px] rounded-full 
                                        ${item.status === 'Paid'
                                                ? 'bg-[#22C55E2B] text-[#22C55E] border border-[#22C55E]'
                                                : 'bg-[#D950572B] text-[#D95057] border border-[#D95057]'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="p-4 md:p-6 text-[12px] font-normal leading-[22px]">{item.amount}</td>
                                    <td className="p-4 md:p-6 text-[12px] font-normal leading-[22px]">{item.period}</td>
                                    <td className="p-4 md:p-6">
                                        <button onClick={() => router.push('/en/employee/receipt')} className="text-[12px] font-normal leading-[22px] underline">
                                            View Receipt
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BillingMethod
