'use client'
import { useState } from 'react'
import ActiveJobCard from './ActiveJobCard'
import WorkerProfileCard from './WorkerProfileCard'
import JobFilterBar from './JobFilterBar'
import workerImg from '~/app/assets/employer/home/employerImg.png'

export const activeJobs = [
    {
        id: 2,
        title: 'UI/UX Designer',
        date: '23 Nov 2025',
        description: 'We are seeking a creative and detail-oriented UI/UX Designer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        tags: ['Experience: 3 Year', 'Full Time', 'Salary: Monthly', 'Onsite Job', 'Pakistan'],
        rate: '$200/hr',
        location: 'Pakistan',
        availability: 'Full Time',
        skills: ['Figma', 'Prototyping', 'Wireframing'],
    },
    {
        id: 3,
        title: 'Frontend Developer',
        date: '20 Nov 2025',
        description: 'Join our team to build cutting-edge user interfaces using React and Next.js Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        tags: ['Experience: 2 Year', 'Remote', 'Salary: Bi-weekly', 'React.js', 'India'],
        rate: '$150/hr',
        location: 'India',
        availability: 'Remote',
        skills: ['React.js', 'Next.js', 'Tailwind'],
    },
    {
        id: 4,
        title: 'Backend Developer',
        date: '18 Nov 2025',
        description: 'We need a Node.js developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        tags: ['Experience: 4 Year', 'Full Time', 'Salary: Monthly', 'Remote', 'USA'],
        rate: '$220/hr',
        location: 'USA',
        availability: 'Remote',
        skills: ['Node.js', 'MongoDB', 'PostgreSQL'],
    },
    {
        id: 5,
        title: 'Product Manager',
        date: '25 Nov 2025',
        description: 'Looking for a proactive PM Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        tags: ['Experience: 5 Year', 'Hybrid', 'Salary: Monthly', 'Agile', 'UK'],
        rate: '$300/hr',
        location: 'UK',
        availability: 'Hybrid',
        skills: ['Agile', 'Scrum', 'User Research'],
    },
    {
        id: 6,
        title: 'QA Tester',
        date: '21 Nov 2025',
        description: 'Ensure product quality through testing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        tags: ['Experience: 2 Year', 'Remote', 'Contract', 'QA', 'Philippines'],
        rate: '$120/hr',
        location: 'Philippines',
        availability: 'Remote',
        skills: ['Selenium', 'Cypress'],
    },
    {
        id: 7,
        title: 'DevOps Engineer',
        date: '22 Nov 2025',
        description: 'Implement CI/CD pipelines Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        tags: ['Experience: 3 Year', 'Full Time', 'AWS', 'Terraform', 'Remote'],
        rate: '$250/hr',
        location: 'Remote',
        availability: 'Full Time',
        skills: ['AWS', 'Terraform', 'CI/CD'],
    },
    {
        id: 8,
        title: 'Content Writer',
        date: '19 Nov 2025',
        description: 'Craft SEO-optimized blog posts Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        tags: ['Experience: 1 Year', 'Freelance', 'SEO Writing', 'Remote', 'Bangladesh'],
        rate: '$60/hr',
        location: 'Bangladesh',
        availability: 'Freelance',
        skills: ['SEO Writing', 'Blogging'],
    },
    {
        id: 9,
        title: 'Graphic Designer',
        date: '26 Nov 2025',
        description: 'Design marketing materials Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        tags: ['Experience: 2 Year', 'Part Time', 'Photoshop', 'Figma', 'Remote'],
        rate: '$90/hr',
        location: 'Remote',
        availability: 'Part Time',
        skills: ['Figma', 'Photoshop', 'Illustrator'],
    },
    {
        id: 10,
        title: 'HR Specialist',
        date: '17 Nov 2025',
        description: 'Manage recruitment pipelines Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        tags: ['Experience: 3 Year', 'Full Time', 'Office', 'HRMS', 'Canada'],
        rate: '$180/hr',
        location: 'Canada',
        availability: 'Full Time',
        skills: ['Recruitment', 'HRMS'],
    },
]


export const workers = [
    {
        name: 'Ali Haider',
        role: 'UI/UX Designer',
        avatar: workerImg,
        location: 'Pakistan',
        availability: 'Full Time',
        description: 'We are seeking a creative UI/UX Designer orem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    },
    {
        name: 'Sara Khan',
        role: 'Frontend Developer',
        avatar: workerImg,
        location: 'India',
        availability: 'Remote',
        description: 'Frontend dev specializing in React orem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        skills: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
        name: 'John Lee',
        role: 'Backend Engineer',
        avatar: workerImg,
        location: 'USA',
        availability: 'Remote',
        description: 'Experienced in Node.js APIs orem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        skills: ['Node.js', 'Express', 'MongoDB'],
    },
    {
        name: 'Aisha Rahman',
        role: 'Graphic Designer',
        avatar: workerImg,
        location: 'UK',
        availability: 'Freelance',
        description: 'Skilled in branding and UI orem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        skills: ['Figma', 'Photoshop', 'Illustrator'],
    },
    {
        name: 'Hassan Malik',
        role: 'Mobile Developer',
        avatar: workerImg,
        location: 'Bangladesh',
        availability: 'Hybrid',
        description: 'Flutter developer for iOS/Android orem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        skills: ['Flutter', 'Dart', 'Firebase'],
    },
    {
        name: 'Zara Patel',
        role: 'Content Writer',
        avatar: workerImg,
        location: 'India',
        availability: 'Remote',
        description: 'SEO writer for tech blogs orem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        skills: ['SEO', 'Copywriting', 'Blog Writing'],
    },
    {
        name: 'David Kim',
        role: 'Product Manager',
        avatar: workerImg,
        location: 'Canada',
        availability: 'Full Time',
        description: 'Leads strategy and roadmap orem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        skills: ['Agile', 'Scrum', 'Roadmaps'],
    },
    {
        name: 'Fatima Noor',
        role: 'QA Analyst',
        avatar: workerImg,
        location: 'Philippines',
        availability: 'Remote',
        description: 'Manual & automated testing expert orem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium at quaerat laborum perferendis molestiae! Perspiciatis possimus explicabo modi ea. Atque ipsum magnam vel dolor repudiandae adipisci enim provident minima, quia fugiat dignissimos iure quidem blanditiis optio exercitationem libero architecto earum temporibus deleniti accusamus voluptate vitae eius consequuntur. Quidem quod provident animi eveniet in quam accusamus debitis nisi, error molestias, facilis natus vel quis reiciendis excepturi repudiandae aperiam ipsam sunt consequuntur officia delectus alias at exercitationem enim? Rem eligendi earum perspiciatis cumque neque quia corrupti nostrum, dolore maxime enim suscipit dolorum atque labore! Perspiciatis explicabo atque doloremque sit similique nesciunt magnam.',
        skills: ['Selenium', 'Cypress', 'JIRA'],
    },
]




const AllJobs = () => {
    const [activeTab, setActiveTab] = useState<'jobs' | 'profiles'>('jobs')
    const [search, setSearch] = useState('')
    const [location, setLocation] = useState('')
    const [availability, setAvailability] = useState('')
    const [skill, setSkill] = useState('')

    const filteredJobs = activeJobs.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase())
        const matchesLocation = location ? job.location.toLowerCase() === location.toLowerCase() : true
        const matchesAvailability = availability ? job.availability.toLowerCase() === availability.toLowerCase() : true
        const matchesSkill = skill ? job.skills.some(s => s.toLowerCase().includes(skill.toLowerCase())) : true
        return matchesSearch && matchesLocation && matchesAvailability && matchesSkill
    })

    // Filter Workers
    const filteredWorkers = workers.filter((worker) => {
        const matchesSearch = worker.name.toLowerCase().includes(search.toLowerCase()) || worker.role.toLowerCase().includes(search.toLowerCase())
        const matchesLocation = location ? worker.location.toLowerCase() === location.toLowerCase() : true
        const matchesAvailability = availability ? worker.availability.toLowerCase() === availability.toLowerCase() : true
        const matchesSkill = skill ? worker.skills.some(s => s.toLowerCase().includes(skill.toLowerCase())) : true
        return matchesSearch && matchesLocation && matchesAvailability && matchesSkill
    })

    return (
        <div className="space-y-6 bg-white p-8 rounded-[16px]">
            {/* Tabs */}
            <div className="flex items-center gap-6 border-b">
                <button
                    onClick={() => setActiveTab('jobs')}
                    className={`flex gap-2 flex-wrap items-center text-sm font-medium pb-2 border-b-2 ${activeTab === 'jobs' ? 'border-[#559092] text-black' : 'border-transparent text-gray-500'}`}
                >
                    <span>Active Job Posts</span>
                    <span className={`py-2 px-3 rounded-[10px] ${activeTab === 'jobs' ? 'text-white bg-[#559093]' : 'text-[#637381] bg-[#E2E2E2]'}`}>{filteredJobs.length}</span>
                </button>
                <button
                    onClick={() => setActiveTab('profiles')}
                    className={`flex gap-2 flex-wrap items-center text-sm font-medium pb-2 border-b-2 ${activeTab === 'profiles' ? 'border-[#559092] text-black' : 'border-transparent text-gray-500'}`}
                >
                    <span>Worker Profiles</span>
                    <span className={`py-2 px-3 rounded-[10px] ${activeTab === 'profiles' ? 'text-white bg-[#559093]' : 'text-[#637381] bg-[#E2E2E2]'}`}>{filteredWorkers.length}</span>
                </button>
            </div>

            {/* Filter Bar */}
            <JobFilterBar
                search={search}
                onSearchChange={setSearch}
                locationFilter={location}
                onLocationChange={setLocation}
                availabilityFilter={availability}
                onAvailabilityChange={setAvailability}
                skillFilter={skill}
                onSkillChange={setSkill}
            />

            {/* Job Results */}
            {activeTab === 'jobs' && (
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {filteredJobs.map((job, i) => (
                        <ActiveJobCard key={i} {...job} />
                    ))}
                </div>
            )}

            {/* Worker Results */}
            {activeTab === 'profiles' && (
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {filteredWorkers.map((worker, i) => (
                        <WorkerProfileCard key={i} worker={worker} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default AllJobs
