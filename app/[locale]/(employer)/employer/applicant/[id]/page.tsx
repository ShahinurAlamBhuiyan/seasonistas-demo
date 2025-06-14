'use client'

import { useParams, useRouter } from 'next/navigation'
import ApplicationDetailsSection from '~/components/Employer/Application/ApplicationDetailsSection'
import ApplicantInfoSidebar from '~/components/Employer/Application/ApplicantInfoSidebar'
import { useState } from 'react'
import InterviewDetailModal from '~/components/Employer/Application/InterviewDetailModal'
import ConfirmScheduleModal from '~/components/Employer/Application/ConfirmScheduleModal'
import RejectModal from '~/components/Employer/Application/RejectModal'

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


const ApplicantDetailsPage = () => {
    const router = useRouter()
    const [showInterviewModal, setShowInterviewModal] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [showRejectModal, setShowRejectModal] = useState(false)

    const params = useParams()
    const id = Number(params?.id)
    const applicant = applicants.find((a) => a.id === id)

    if (!applicant) return <div className="p-6">Applicant not found</div>

    return (
        <div className="sm:px-6 py-6 space-y-6">
            {/* Header */}
            <div className='flex flex-col justify-start items-start gap-3 w-full'>
                <h1 className='text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4'>Applicant</h1>
                <div className="flex justify-between items-center  w-full">
                    <div className="text-sm flex flex-wrap gap-3">
                        <p className="text-sm leading-[22px] font-[400] text-[#1C252E]">Overview <span className='text-[#919EAB]'>• Applicant</span></p>
                    </div>
                    <div className="flex flex-wrap justify-end gap-3">
                        <button
                            className="min-w-[100px] px-6 py-2 rounded-full bg-[#D95057] text-white text-[12px] font-[400]"
                            onClick={() => setShowRejectModal(true)}
                        >
                            Reject
                        </button>
                        <button
                            className="min-w-[100px] px-6 py-2 rounded-full bg-[#35CC6B] text-white text-[12px] font-[400]"
                            onClick={() => setShowInterviewModal(true)}
                        >
                            Interview
                        </button>
                    </div>
                </div>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
                <ApplicationDetailsSection applicant={applicant} />
                <ApplicantInfoSidebar applicant={applicant} />
            </div>
            {showInterviewModal && (
                <InterviewDetailModal
                    onClose={() => setShowInterviewModal(false)}
                    onSend={() => {
                        setShowInterviewModal(false)
                        setShowConfirmModal(true)
                    }}
                />
            )}
            {showConfirmModal && (
                <ConfirmScheduleModal
                    onClose={() => setShowConfirmModal(false)}
                    onConfirm={() => {
                        setShowConfirmModal(false)
                        console.log('Interview Scheduled')
                    }}
                />
            )}
            {showRejectModal && (
                <RejectModal
                    onClose={() => setShowRejectModal(false)}
                    onConfirm={() => {
                        router.back()
                    }}
                />
            )}

        </div>
    )
}

export default ApplicantDetailsPage
