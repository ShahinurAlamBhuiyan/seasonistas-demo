'use client'

import { useParams } from 'next/navigation'
import { FiEdit2 } from 'react-icons/fi'

const jobs = [
    {
        id: '1',
        title: 'UI/UX & Product Designer',
        location: 'Tahsil Samundri Faisalabad Punjab Pakistan',
        category: 'IT Department',
        visibility: 'Public Visibility',
        responsibility:
            'I design user-friendly interfaces based on client requirements and work closely with developers to ensure smooth implementation.',
        requirements:
            'I gather client requirements, create clean UI designs, and coordinate with the team to deliver user-focused solutions.',
        description:
            'I translate client ideas into user-friendly interfaces and ensure the final design meets both aesthetic and functional goals.',
        salary: '$500 to $800',
        type: 'Onsite & Hybrid',
        skills: ['Ui Designer', 'Ux Researcher', 'Wireframing', 'Prototyping', 'Logo Design'],
        deadline: 'August 24 2024',
        questions: [
            'What tools do you use for design or development?',
            'Can you describe your previous client-based project experience?',
            'How do you start working after receiving project requirements?',
            'Have you created responsive designs for web or apps?'
        ]
    },
    {
        id: '2',
        title: 'UI/UX Designer',
        location: 'Lahore, Punjab, Pakistan',
        category: 'Design Department',
        visibility: 'Private',
        responsibility:
            'Collaborate with product managers to implement attractive, intuitive user interfaces.',
        requirements:
            'Experience with design tools like Figma or Sketch and understanding of UX principles.',
        description:
            'Your designs will shape the user experience of our customers across web and mobile platforms.',
        salary: '$700 to $1000',
        type: 'Remote',
        skills: ['Figma', 'Sketch', 'User Flow', 'Design Thinking', 'Visual Design'],
        deadline: 'September 10 2024',
        questions: [
            'How do you gather user feedback?',
            'What’s your process for building wireframes?',
            'Have you worked in agile environments?',
            'Tell us about your favorite UX project.'
        ]
    },
    {
        id: '3',
        title: 'UI Designer',
        location: 'Islamabad, Pakistan',
        category: 'Creative Team',
        visibility: 'Public Visibility',
        responsibility:
            'Focus on visual elements of digital products and ensure design consistency.',
        requirements:
            'Solid understanding of color theory, typography, and responsive design best practices.',
        description:
            'Design sleek interfaces while collaborating with front-end developers to ensure pixel-perfect implementation.',
        salary: '$600 to $900',
        type: 'Hybrid',
        skills: ['Adobe XD', 'Typography', 'Color Theory', 'Component Design'],
        deadline: 'July 30 2024',
        questions: [
            'Which design systems are you familiar with?',
            'How do you handle design feedback?',
            'What’s your experience with accessibility design?',
            'How do you stay updated with UI trends?'
        ]
    }
]


export default function JobDetailPage() {
    const { id } = useParams()
    const job = jobs.find(j => j.id === id)

    if (!job) return <p className="p-6 text-gray-500">Job not found</p>

    return (
        <div className="sm:px-6 py-6 space-y-6">
            <div className="flex justify-between items-center">
                <div className='space-y-4'>
                    <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4">Post</h1>
                    <p className="text-sm leading-[22px] font-[400] text-[#1C252E]">Overview <span className='text-[#919EAB]'>• Post Detail</span></p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Step 1 */}
                <div className="bg-white p-6 rounded-xl">
                    <div className="flex justify-between items-start">
                        <h2 className="text-md font-semibold mb-4">Step 1</h2>
                        <button className="top-4 right-4 bg-[#EEF4F4] p-3 rounded-full text-[#4F9A98] hover:text-[#3e7e79]">
                            <FiEdit2 size={16} />
                        </button>
                    </div>
                    <p className="text-sm font-medium">Job Title</p>
                    <p className="text-sm text-gray-600 mb-3">{job.title}</p>
                    <p className="text-sm font-medium">Job Location</p>
                    <p className="text-sm text-gray-600 mb-3">{job.location}</p>
                    <p className="text-sm font-medium">Job Category</p>
                    <p className="text-sm text-gray-600 mb-3">{job.category}</p>
                    <p className="text-sm font-medium">Post Visibility</p>
                    <p className="text-sm text-gray-600">{job.visibility}</p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-6 rounded-xl">
                    <div className="flex justify-between items-start">
                        <h2 className="text-md font-semibold mb-4">Step 2</h2>
                        <button className="top-4 right-4 bg-[#EEF4F4] p-3 rounded-full text-[#4F9A98] hover:text-[#3e7e79]">
                            <FiEdit2 size={16} />
                        </button>
                    </div>
                    <p className="text-sm font-medium">Responsibility</p>
                    <p className="text-sm text-gray-600 mb-3">{job.responsibility}</p>
                    <p className="text-sm font-medium">Requirements</p>
                    <p className="text-sm text-gray-600 mb-3">{job.requirements}</p>
                    <p className="text-sm font-medium">Description</p>
                    <p className="text-sm text-gray-600">{job.description}</p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-6 rounded-xl">
                    <div className="flex justify-between items-start">
                        <h2 className="text-md font-semibold mb-4">Step 3</h2>
                        <button className="top-4 right-4 bg-[#EEF4F4] p-3 rounded-full text-[#4F9A98] hover:text-[#3e7e79]">
                            <FiEdit2 size={16} />
                        </button>
                    </div>
                    <p className="text-sm font-medium">Salary</p>
                    <p className="text-sm text-gray-600 mb-3">{job.salary}</p>
                    <p className="text-sm font-medium">Job Type</p>
                    <p className="text-sm text-gray-600 mb-3">{job.type}</p>
                    <p className="text-sm font-medium">Required Skills</p>
                    <p className="text-sm text-gray-600 mb-3">{job.skills.join(', ')}</p>
                    <p className="text-sm font-medium">Deadline to Apply</p>
                    <p className="text-sm text-gray-600">{job.deadline}</p>
                </div>

                {/* Step 4 */}
                <div className="bg-white p-6 rounded-xl">
                    <div className="flex justify-between items-start">
                        <h2 className="text-md font-semibold mb-4">Step 4</h2>
                        <button className="top-4 right-4 bg-[#EEF4F4] p-3 rounded-full text-[#4F9A98] hover:text-[#3e7e79]">
                            <FiEdit2 size={16} />
                        </button>
                    </div>
                    {job.questions.map((q, i) => (
                        <div key={i} className="mb-3">
                            <p className="text-sm font-medium">Question {i + 1}</p>
                            <p className="text-sm text-gray-600">{q}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
