'use client'
import Image from 'next/image'
import logo from '~/app/assets/employer/logo.png'
import { ImCloudDownload } from "react-icons/im";
import { IoIosPrint } from "react-icons/io";
import { IoShareSocial, IoReturnUpBack } from "react-icons/io5";
import { useRouter } from 'next/navigation';



export default function InvoiceDetails({ hasTitle }: { hasTitle: boolean }) {
    const router = useRouter();
    return (
        <div className="w-full">
            {/* Top Navigation */}
            <h2 className="mb-1 flex items-center gap-2 cursor-pointer text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4
" onClick={() => router.back()}>
                <IoReturnUpBack size={25} className='font-semibold' />
                {hasTitle ? 'Receipt ID' : 'INV-1991'}
            </h2>
            <div className="mb-6 flex justify-between items-center px-2">
                <div>
                    <p className="text-sm leading-[22px] font-[400] text-[#1C252E]">Payment <span className='text-[#919EAB]'>• Detail</span></p>
                </div>
                <div className='flex gap-4 text-[#637381]'>
                    <ImCloudDownload size={20} />
                    <IoIosPrint size={20} />
                    <IoShareSocial size={20} />
                </div>
            </div>

            {/* Main Container */}
            <div className="bg-white rounded-2xl p-6 shadow-sm w-full space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex justify-between gap-2">
                        <div className='w-[60%] sm:w-[20%] mt-4 sm:mt-0'>
                            <Image src={logo} alt='Seasonistas Logo' />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <span className="text-[12px] px-4 py-1 rounded-full bg-[#baeacc8e] text-[#22C55E]">
                                Paid
                            </span>
                            <p className="text-[#1D2937] font-semibold text-sm sm:text-lg">INV-1991</p>
                        </div>
                    </div>

                    <div className="text-sm text-gray-700">
                        <p className="font-semibold">Invoice from</p>
                        <p>Seasonistas</p>
                        <p>1147 Rohan Drive Suite 819 - Burlington, VT / 82021</p>
                        <p>Phone: +1 416-555-0198</p>
                    </div>
                    <div className="text-sm text-gray-700  sm:mr-12">
                        <p className="font-semibold">Invoice to</p>
                        <p>Deja Brady</p>
                        <p>18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337</p>
                        <p>Phone: +44 20 7946 0958</p>
                    </div>


                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 border-collapse">
                        <thead className="bg-[#F6F8F9] text-gray-500 font-medium">
                            <tr>
                                <th className="px-4 py-3">Plan Name</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3  whitespace-nowrap">Time Period</th>
                                <th className="px-4 py-3  whitespace-nowrap">Billing Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-6">Professional</td>
                                <td className="px-4 py-6">$250.00</td>
                                <td className="px-4 py-6 whitespace-nowrap">1 Month</td>
                                <td className="px-4 py-6  whitespace-nowrap">Nov 11 2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Summary */}
                <div className="flex justify-end mt-6">
                    <div className="text-sm space-y-2 text-right">
                        <div className="flex justify-between gap-12">
                            <span className="text-gray-500">Subtotal</span>
                            <span className="font-semibold text-[#1D2937]">$2,373.51</span>
                        </div>
                        <div className="flex justify-between gap-12">
                            <span className="text-gray-500">Fee</span>
                            <span className="text-red-500 font-medium">- $85.21</span>
                        </div>
                        <div className="flex justify-between gap-12 pt-1 border-t font-semibold">
                            <span className="text-[#1D2937]">Total</span>
                            <span className="text-[#1D2937] text-lg">$2,304.84</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
