'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import dummyImg from '~/app/assets/employer/home/employerImg.png'

type JobCardProps = {
    id: number
    company: string
    logo: string
    match: number
    title: string
    description: string
    tags: string[]
    rate: string
    time: string
    applied: boolean
    saved: boolean
}

const AllJobsCard = ({
    id,
    company,
    logo,
    match,
    title,
    description,
    tags,
    rate,
    time,
    applied,
    saved: initialSaved,
}: JobCardProps) => {
    const router = useRouter()
    const [saved, setSaved] = useState(initialSaved)

    const handleView = () => {
        router.push(`/en/employee/job-details/${id}`)
    }

    const matchColor =
        match > 75
            ? 'text-[#35CC6B] bg-[#35CC6B2B] border-[#35CC6B] border-[0.6px]'
            : match < 30
                ? 'text-[#D95057] bg-[#D950572B] border-[#D95057] border-[0.6px]'
                : 'text-[#35CC6B] bg-[#35CC6B2B] border-[#35CC6B] border-[0.6px]'

    return (
        <div className="w-full h-full flex flex-col justify-between rounded-xl border border-gray-200 p-5 bg-white shadow-sm">
            <div className="flex-grow space-y-4">
                {/* Company & Time */}
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 overflow-hidden rounded-full">
                            <Image
                                src={dummyImg}
                                alt={company}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-md font-normal text-black">{company}</span>
                    </div>
                    <span className="text-[14px] font-[400] text-[#767676] whitespace-nowrap">
                        {time}
                    </span>
                </div>

                {/* Match Score */}
                <div
                    className={`inline-block px-3 py-1 text-xs font-normal rounded-full ${matchColor}`}
                >
                    Match Score: {match}%
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-semibold text-[#1C252E]">{title}</h3>

                {/* Description */}
                <p className="text-[12px] font-normal text-[#767676] leading-5">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 border border-gray-300 rounded-full text-xs font-medium text-[#1C1C1E] leading-tight whitespace-nowrap"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap justify-between items-center pt-4 mt-4">
                <span className="text-[18px] text-[#11142D] font-normal">{rate}</span>
                <div className="flex flex-wrap items-center gap-2">
                    {applied && (
                        <button className="text-xs px-[10px] py-2 rounded-full border bg-white text-gray-600 border-gray-300 ">
                            View Application
                        </button>
                    )}

                    {!applied && (
                        <button
                            onClick={() => setSaved(!saved)}
                            className="w-[40px] h-[40px] flex items-center justify-center bg-[#EEF4F4] rounded-full"
                        >
                            {saved ? (
                                <BsBookmarkFill className="text-[#559092]" />
                            ) : (
                                <BsBookmark className="text-[#559093]" />
                            )}
                        </button>
                    )}

                    <button
                        onClick={handleView}
                        className={`text-xs px-[10px] py-2 rounded-full ${applied ? 'bg-[#C3D4D4]' : 'bg-[#559092]'
                            } text-white  `}
                    >
                        View Detail
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AllJobsCard
