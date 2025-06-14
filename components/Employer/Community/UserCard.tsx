'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

type Props = {
    avatar: any
    companyLogo: any
    name: string
    role: string
    status: 'Open to work' | 'Open to Jobs'
    description: string
    skills: string[]
    email: string
    phone: string
    location?: string
    website?: string
    isCompany?: boolean
}

const UserCard = ({
    avatar,
    companyLogo,
    name,
    role,
    status,
    description,
    skills,
    email,
    phone,
    location,
    website,
    isCompany = false,
}: Props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false)
            }
        }

        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownOpen])

    return (
        <div className="border rounded-xl p-4 bg-white shadow-sm relative flex flex-col justify-between min-h-[400px]">
            {/* Header */}
            <div className="flex justify-between items-start mb-3 relative">
                <div className="flex gap-3">
                    {isCompany ? (
                        <div className='w-10 h-10 rounded-[4px]'>
                            <Image src={companyLogo} alt={name} width={40} height={40} className="rounded-[4px] object-cover w-full h-full" />
                        </div>
                    ) : (
                        <div className='w-10 h-10 rounded-full'>
                            <Image src={avatar} alt={name} width={40} height={40} className="rounded-full object-cover w-full h-full" />
                        </div>
                    )}
                    <div>
                        <h3 className="font-[500] text-sm">{name}</h3>
                        <p className="text-[12px] text-[#767676] font-[300]">{role}</p>
                    </div>
                </div>
                <div className="relative" ref={dropdownRef}>
                    <button
                        className="rounded-full bg-[#F5F5F5] p-2"
                        onClick={() => setDropdownOpen(prev => !prev)}
                    >
                        <BsThreeDotsVertical size={18} className="text-[#767676]" />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md text-sm z-10 w-[150px]">
                            {location ? (
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Following</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Employees</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Companies</li>
                                </ul>
                            ) : (
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Share Profile</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Report</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Unfollow</li>
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <hr className='w-full mb-2' />

            {/* Badge */}
            <span
                className={`inline-block mb-3 text-[10px] font-[400] max-w-[90px] px-3 py-2 rounded-full ${status === 'Open to work'
                    ? 'bg-[#35CC6B2B] text-[#35CC6B] border-[0.6px] border-[#35CC6B]'
                    : 'bg-[#E0F2FE] text-[#026AA2] border-[0.6px] border-[#026AA2]'
                    }`}
            >
                {status}
            </span>

            {/* Description */}
            <p className="text-[12px] text-[#767676] mb-2 leading-5 font-normal">{description}</p>

            {/* Skills */}
            <p className="text-[12px] font-medium mb-1">
                {isCompany ? 'Top Jobs' : 'Top Skill'}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
                {skills.map((skill, idx) => (
                    <span
                        key={idx}
                        className="border text-[10px] font-light px-4 py-2 rounded-[16px] border-[#EBECF0]"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            {/* Contact Info + Buttons */}
            <div className="text-[13px]  space-y-1 mb-3 flex flex-col">
                {!isCompany && (
                    <div className='flex justify-between pt-2'>
                        <div className="flex flex-col gap-[2px]">
                            <span className='text-[12px] font-medium'>Email:</span>
                            <span className="text-[12px] font-light">{email}</span>
                            <button className="border border-[#EBECF0] min-w-[130px] w-full rounded-full py-3 text-[10px] font-normal mt-4">
                                Message
                            </button>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <span className='text-[12px] font-medium'>Phone:</span>
                            <span className="text-[12px] font-light">{phone}</span>
                            <button className="bg-[#559093] min-w-[130px] text-white w-full rounded-full py-3 text-[10px] font-semibold mt-4">
                                Connect
                            </button>
                        </div>
                    </div>
                )}

                {isCompany && (
                    <div className='flex justify-between gap-2 pt-2'>
                        <div className='flex flex-col justify-between gap-2'>
                            <div className="flex flex-col gap-[2px]">
                                <span className='text-[12px] font-medium'>Email:</span>
                                <span className="text-[12px] font-light">{email}</span>
                            </div>
                            {location && (
                                <div className="flex flex-col gap-[2px]">
                                    <span className='text-[12px] font-medium'>Location:</span>
                                    <span className="text-[12px] font-light">{location}</span>
                                </div>
                            )}
                            <button className="border border-[#EBECF0] min-w-[130px] w-full rounded-full py-3 text-[10px] font-normal mt-4">
                                Message
                            </button>
                        </div>
                        <div className='flex flex-col justify-between gap-2'>
                            <div className="flex flex-col gap-[2px]">
                                <span className='text-[12px] font-medium'>Phone:</span>
                                <span className="text-[12px] font-light">{phone}</span>
                            </div>
                            {website && (
                                <div className="flex flex-col gap-[2px]">
                                    <span className='text-[12px] font-medium'>Website:</span>
                                    <span className="text-[12px] font-light">{website}</span>
                                </div>
                            )}
                            <button className="bg-[#559093] min-w-[150px] text-white w-full rounded-full py-3 text-[10px] font-semibold mt-4">
                                Follow
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserCard
