'use client'
import { useState } from 'react'
import JobFormModal from './JobFormModal'

type Props = {
    used: number
    total: number
    plan: string
    price: number
}
const UsageCard = ({ used, total, plan, price }: Props) => {
    const [openModal, setOpenModal] = useState(false)
    const percentage = Math.round((used / total) * 100)

    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-4 h-[162px]">
                <div className="flex justify-between items-start">
                    <h4 className="text-[18px] leading-[24px] font-[600]">Ad Usage</h4>
                    <button
                        className="bg-[#559093] text-white text-xs px-4 py-1 rounded-full"
                        onClick={() => setOpenModal(true)}
                    >
                        Create Ad
                    </button>
                </div>

                {/* Progress */}
                <div className="flex flex-col gap-1 mt-2">
                    <div className="flex justify-between items-start">
                        <p className="text-[14px] font-[400]">You’ve used {used} of {total} ads</p>
                        <p className="text-[14px] font-[400]">{percentage}%</p>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <h2 className="h-2 bg-[#559092]" style={{ width: `${percentage}%` }} />
                    </div>
                </div>

                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-semibold">{plan}</p>
                        <p className="text-xs text-gray-500">Expire Until 25 Jan 2027</p>
                    </div>
                    <h2 className="text-2xl font-bold mt-1">{price}<span className="text-[17px] leading-[40px] font-[400]">/mo</span></h2>
                </div>
            </div>

            {openModal && <JobFormModal onClose={() => setOpenModal(false)} />}
        </>
    )
}


export default UsageCard