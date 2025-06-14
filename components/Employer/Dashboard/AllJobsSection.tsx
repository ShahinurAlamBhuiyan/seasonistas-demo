'use client'

import Image from 'next/image'
import avatar1 from '~/app/assets/employer/dashboard/applicant1.png'
import avatar2 from '~/app/assets/employer/dashboard/applicant2.png'
import avatar3 from '~/app/assets/employer/dashboard/applicant3.png'
import { FiEdit2 } from 'react-icons/fi'
import { useState } from 'react'
import WarningModal from './WarningModal'

const jobs = [
    {
        title: 'UI/UX Designer',
        status: 'active',
        description:
            'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming user needs...',
        tags: ['Experience: 3 Year', 'Full Time', 'Salary: Monthly', 'Onsite Job', 'Pakistan'],
        applicants: 12,
    },
    {
        title: 'UI/UX Designer',
        status: 'active',
        description:
            'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming user needs...',
        tags: ['Experience: 3 Year', 'Full Time', 'Salary: Monthly', 'Onsite Job', 'Pakistan'],
        applicants: 12,
    },
    {
        title: 'UI/UX Designer',
        status: 'expired',
        description:
            'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming user needs...',
        tags: ['Experience: 3 Year', 'Full Time', 'Salary: Monthly', 'Onsite Job', 'Pakistan'],
        applicants: 12,
    },
]

const AllJobsSection = () => {
    const [showModal, setShowModal] = useState(false);

    const handleRepost = () => {
        setShowModal(true);
    }

    return (
        <div className="mt-10 bg-white px-6 py-4 rounded-[16px]">
            <h2 className="text-xl font-[500] leading-[22px] mb-4">All Jobs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {jobs.map((job, i) => (
                    <div
                        key={i}
                        className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 relative"
                    >
                        {/* Edit icon */}
                        <button className="absolute top-4 right-4 bg-[#E6F4EF] p-2 rounded-full text-[#4F9A98] hover:text-[#3e7e79]">
                            <FiEdit2 size={16} />
                        </button>

                        {/* Title + Status */}
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <span
                            className={`inline-block px-3 py-[2px] text-[10px] rounded-full font-[400] leading-[24px] ${job.status === 'active'
                                ? 'bg-[#35CC6B2B] text-[#35CC6B]  border-[0.6px] border-[#35CC6B]'
                                : 'bg-[#D950572B] text-[#D95057]  border-[0.6px] border-[#D95057]'
                                }`}
                        >
                            {job.status === 'active' ? 'Job Active' : 'Job Expired'}
                        </span>

                        {/* Description */}
                        <p className="text-[12px] text-gray-500 font-[400]">{job.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {job.tags.map((tag, j) => (
                                <span
                                    key={j}
                                    className="px-3 py-1 text-[10px] font-[300] border border-gray-300 rounded-[15.5px] leading-[24px]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Applicants */}
                        <div className="flex items-center pt-1">
                            <div className="flex -space-x-3">
                                {[avatar1, avatar2, avatar3].map((img, i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full overflow-hidden border-2 border-white"
                                    >
                                        <Image
                                            src={img}
                                            alt={`user${i + 1}`}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[12px] font-[300] text-black overflow-hidden">
                                    {job.applicants}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-center gap-3 2xl:gap-10 pt-1">
                            <button
                                onClick={handleRepost}
                                className="min-w-[130px] 2xl:min-w-[150px] w-fit  px-3 border border-gray-300 py-1 rounded-full text-[10px] font-[400] leading-[19px]"
                            >
                                Repost Job
                            </button>
                            <button className="min-w-[130px] 2xl:min-w-[150px] w-fit  px-3 bg-[#559093] text-white py-1 rounded-full text-[10px] font-[600] leading-[19px]">
                                View Applicant
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && <WarningModal setShowModal={setShowModal} />}
        </div>
    )
}

export default AllJobsSection
