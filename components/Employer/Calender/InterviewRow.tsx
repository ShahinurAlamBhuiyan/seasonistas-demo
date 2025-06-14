'use client'

import Image from 'next/image'
import { GoPencil } from "react-icons/go";

import avatar from '~/app/assets/employer/dashboard/applicant2.png'

type Props = {
    name: string
    role: string
    date: string
    time: string
    location: string
    index: number
    isLast: boolean
}

const InterviewRow = ({ name, role, date, time, location, index, isLast }: Props) => {
    return (
        <>
            <tr className='hover:bg-[#F5F5F5] cursor-pointer'>
                <td className="px-6 mt-2 py-4 flex items-center gap-3 ">
                    <div className='w-[32px] h-[32px] rounded-full overflow-hidden'>
                        <Image
                            src={avatar}
                            alt={name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className='text-[12px] font-[400] leading-[22px]'>{name}</p>
                </td>
                <td className="px-6 py-4 text-[12px] font-[400] leading-[22px]">{role}</td>
                <td className="px-6 py-4 text-[12px] font-[400] leading-[22px]">{date}</td>
                <td className="px-6 py-4 text-[12px] font-[400] leading-[22px]">{time}</td>
                <td className="px-6 py-4 text-[12px] font-[400] leading-[22px]">{location}</td>
                <td className="px-6 py-4 text-right">
                    <button className="bg-[#EEF4F4] p-4 rounded-full text-[#559093]">
                        <GoPencil size={16} />
                    </button>
                </td>
            </tr>

            {!isLast && (
                <tr>
                    <td colSpan={6}><hr className="border-gray-200" /></td>
                </tr>
            )}
        </>
    )
}

export default InterviewRow
