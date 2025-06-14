'use client'

import { useState } from 'react'
import Image from 'next/image'
import avatar from '~/app/assets/employer/dashboard/applicant2.png'
import { FaFilePdf } from 'react-icons/fa'
import MetricCardsContainer from '~/components/Employer/Application/MetricCardsContainer'
import { useRouter } from 'next/navigation'


const applicants = [
    {
        id: 12,
        name: 'Linear Company',
        email: 'linear.hr@gmail.com',
        phone: '+92 300 1234567',
        date: 'Nov 22 2025',
        match: 92,
        job: 'Product Designer',
        jobType: 'Full Time',
        location: 'Pakistan',
        address: 'Faisalabad, Punjab, Pakistan',
        linkedin: 'linear-designer',
        appliedDate: 'Today',
        skills: ['Figma', 'Wireframing', 'User Research', 'UI Design', 'Prototyping']
    },
    {
        id: 2,
        name: 'Trainline',
        email: 'jobs@trainline.co.uk',
        phone: '+44 7911 123456',
        date: 'Feb 15 2026',
        match: 72,
        job: 'Frontend Developer',
        jobType: 'Remote',
        location: 'UK',
        address: 'London, England',
        linkedin: 'trainline-jobs',
        appliedDate: 'Yesterday',
        skills: ['React', 'Next.js', 'Tailwind CSS']
    },
    {
        id: 3,
        name: 'Loom Inc.',
        email: 'careers@loomapp.com',
        phone: '+1 415 555 9898',
        date: 'Mar 05 2024',
        match: 75,
        job: 'Video Platform Engineer',
        jobType: 'Full Time',
        location: 'USA',
        address: 'San Francisco, CA',
        linkedin: 'loom-devteam',
        appliedDate: '3 days ago',
        skills: ['Node.js', 'WebRTC', 'TypeScript']
    },
    {
        id: 4,
        name: 'Canva',
        email: 'team@canva.com',
        phone: '+61 2 8880 1234',
        date: 'Dec 10 2025',
        match: 70,
        job: 'UX Researcher',
        jobType: 'Hybrid',
        location: 'Australia',
        address: 'Sydney, NSW',
        linkedin: 'canva-research',
        appliedDate: '4 days ago',
        skills: ['User Testing', 'Heuristic Evaluation', 'Design Thinking']
    },
    {
        id: 5,
        name: 'Figma Inc.',
        email: 'figma.hr@figma.com',
        phone: '+1 650 123 9988',
        date: 'Jan 14 2026',
        match: 82,
        job: 'UI Designer',
        jobType: 'Remote',
        location: 'USA',
        address: 'New York, NY',
        linkedin: 'figma-ui',
        appliedDate: 'Today',
        skills: ['Sketching', 'Auto Layout', 'Design Systems', 'Prototyping']
    },
    {
        id: 6,
        name: 'Slack Technologies',
        email: 'jobs@slack.com',
        phone: '+1 408 777 4321',
        date: 'Apr 03 2025',
        match: 62,
        job: 'QA Tester',
        jobType: 'Contract',
        location: 'USA',
        address: 'Denver, CO',
        linkedin: 'slack-qa',
        appliedDate: '2 days ago',
        skills: ['Selenium', 'JIRA', 'Regression Testing']
    },
    {
        id: 7,
        name: 'Notion Labs',
        email: 'hiring@notion.so',
        phone: '+1 347 101 2020',
        date: 'Jun 30 2024',
        match: 89,
        job: 'Technical Writer',
        jobType: 'Freelance',
        location: 'USA',
        address: 'Brooklyn, NY',
        linkedin: 'notion-writer',
        appliedDate: '1 week ago',
        skills: ['Documentation', 'Markdown', 'API Writing']
    },
    {
        id: 8,
        name: 'Dropbox Inc.',
        email: 'jobs@dropbox.com',
        phone: '+1 213 888 9876',
        date: 'Sep 19 2024',
        match: 76,
        job: 'DevOps Engineer',
        jobType: 'Remote',
        location: 'USA',
        address: 'Austin, TX',
        linkedin: 'dropbox-devops',
        appliedDate: '5 days ago',
        skills: ['AWS', 'Docker', 'Terraform', 'CI/CD']
    },
    {
        id: 9,
        name: 'Spotify',
        email: 'careers@spotify.com',
        phone: '+46 8 555 12345',
        date: 'Oct 11 2025',
        match: 78,
        job: 'Data Analyst',
        jobType: 'Hybrid',
        location: 'Sweden',
        address: 'Stockholm, Sweden',
        linkedin: 'spotify-analyst',
        appliedDate: 'Today',
        skills: ['SQL', 'Python', 'Power BI', 'A/B Testing']
    },
    {
        id: 10,
        name: 'GitHub',
        email: 'devs@github.com',
        phone: '+1 212 321 4567',
        date: 'May 08 2026',
        match: 64,
        job: 'Backend Developer',
        jobType: 'Full Time',
        location: 'USA',
        address: 'Seattle, WA',
        linkedin: 'github-dev',
        appliedDate: 'Yesterday',
        skills: ['Ruby on Rails', 'GraphQL', 'PostgreSQL', 'TDD']
    }
]


const JobDetailsPage = () => {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(1)
    const ITEMS_PER_PAGE = 7
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const paginatedApplicants = applicants.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    const totalPages = Math.ceil(applicants.length / ITEMS_PER_PAGE)
    return (
        <div className="sm:px-6 py-6 space-y-6">
            {/* Top Header */}
            <div className='flex flex-col justify-start items-start gap-3 w-full'>
                <h1 className='text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4'>Application</h1>
                <div className="flex justify-between items-center w-full">
                    <div className='space-y-4'>
                        <p className="text-sm leading-[22px] font-[400] text-[#1C252E]">Overview <span className='text-[#919EAB]'>• Application</span></p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <button className="px-6 py-2 rounded-full border border-[#EBECF0] text-[12px] font-[400] text-gray-800 w-full sm:w-auto">Re Post</button>
                        <button className="px-6 py-2 rounded-full bg-[#559092] text-white text-[12px] font-[400] w-full sm:w-auto">Edit Job</button>
                    </div>

                </div>
            </div>

            {/* Metrics */}
            <MetricCardsContainer />

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm">
                <div className="px-6 py-4 border-b text-[18px] font-semibold">All Applicant</div>
                <div className="overflow-x-auto w-full">
                    <table className="min-w-[800px] md:min-w-full w-full text-left divide-y divide-gray-200">
                        <thead className="text-[12px] leading-[24px] font-[500] text-[#637381] bg-[#F5F5F5]">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Match%</th>
                                <th>Date Applied</th>
                                <th>Attachment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedApplicants.map((applicant, idx) => (
                                <tr
                                    key={idx}
                                    onClick={() => router.push(`/en/employer/applicant/${applicant.id}`)}
                                    className="group border-t hover:bg-[#F5F5F5] cursor-pointer"
                                >
                                    <td className="px-6 py-4 flex items-center gap-2">
                                        <div className='w-12 h-12'>
                                            <Image src={avatar} alt={applicant.name} width={50} height={50} className="rounded-full object-cover w-full h-full" />
                                        </div>
                                        <p className="text-[12px] font-[400] leading-[22px]">{applicant.name}</p>
                                    </td>
                                    <td className="text-[12px]  font-[400] leading-[22px]">{applicant.email}</td>
                                    <td className=" text-[12px] font-[400] leading-[22px]">{applicant.phone}</td>
                                    <td className="py-2">
                                        <div className="relative w-[50px] h-[50px]">
                                            <svg viewBox="0 0 48 48" className="absolute top-0 left-0 w-full h-full">
                                                <circle cx="24" cy="24" r="20" stroke="#E0E0E0" strokeWidth="4" fill="none" />
                                                <circle
                                                    cx="24"
                                                    cy="24"
                                                    r="20"
                                                    stroke="#559092"
                                                    strokeWidth="4"
                                                    fill="none"
                                                    strokeDasharray="125.6"
                                                    strokeDashoffset={`${125.6 - (125.6 * applicant.match) / 100}`}
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-[12px]  font-[400] leading-[22px] text-[#1C1C1E]">{applicant.match}%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=" text-[12px] font-[400] leading-[22px]">{applicant.date}</td>
                                    <td>
                                        <button
                                            onClick={(e) => e.stopPropagation()} // prevent triggering row click
                                            className="flex items-center gap-1 text-sm text-[#767676] px-4 py-2 bg-[#F5F5F5] group-hover:bg-white rounded-full"
                                        >
                                            <FaFilePdf size={16} />
                                            File.pdf
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-end items-center px-6 py-3 text-sm font-[400] text-[#1C252E] border-t">
                    {`${startIndex + 1}–${Math.min(startIndex + ITEMS_PER_PAGE, applicants.length)} of ${applicants.length}`}
                    <div className="ml-4 flex gap-3">
                        <button
                            className={`text-xl ${currentPage === 1 && 'text-[#919EABCC]'}`}
                            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            {'<'}
                        </button>
                        <button
                            className={`text-xl ${currentPage === totalPages && 'text-[#919EABCC]'}`}
                            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetailsPage