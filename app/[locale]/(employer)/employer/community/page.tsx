'use client'

import UserCard from "~/components/Employer/Community/UserCard"
import avatar from '~/app/assets/employer/dashboard/applicant2.png'
import companyLogo from '~/app/assets/employer/community/companyLogo.png'
import { IoIosArrowDown } from 'react-icons/io'


const dummyUsers = [
    {
        name: 'Ali Haider',
        role: 'UI/UX Designer',
        status: 'Open to work',
        description:
            'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.',
        skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
        email: 'user@example.com',
        phone: '+92 3XX XXXXXXX',
        isCompany: false,
    },
    {
        name: 'Ali Haider',
        role: 'UI/UX Designer',
        status: 'Open to work',
        description:
            'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.',
        skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
        email: 'user@example.com',
        phone: '+92 3XX XXXXXXX',
        isCompany: false,
    },
    {
        name: 'Ali Haider',
        role: 'UI/UX Designer',
        status: 'Open to work',
        description:
            'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.',
        skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
        email: 'user@example.com',
        phone: '+92 3XX XXXXXXX',
        isCompany: false,
    },
    {
        name: 'Linear company',
        role: 'Telecommunications',
        status: 'Open to work',
        description:
            'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.',
        skills: ['Figma', 'UI/UX Designer', 'Product Designer'],
        email: 'user@example.com',
        phone: '+92 3XX XXXXXXX',
        location: 'user@example.com',
        website: '@example.com',
        isCompany: true,
    },
    {
        name: 'Linear company',
        role: 'Telecommunications',
        status: 'Open to work',
        description:
            'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.',
        skills: ['Figma', 'UI/UX Designer', 'Product Designer'],
        email: 'user@example.com',
        phone: '+92 3XX XXXXXXX',
        location: 'user@example.com',
        website: '@example.com',
        isCompany: true,
    },
    {
        name: 'Linear company',
        role: 'Telecommunications',
        status: 'Open to work',
        description:
            'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.',
        skills: ['Figma', 'UI/UX Designer', 'Product Designer'],
        email: 'user@example.com',
        phone: '+92 3XX XXXXXXX',
        location: 'user@example.com',
        website: '@example.com',
        isCompany: true,
    },
]

const CommunityPage = () => {
    const allCards = [...dummyUsers]

    return (
        <div className="px-2 sm:px-6 py-6 space-y-6 mb-4 bg-white rounded-[16px]">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                {/* Input */}
                <input
                    type="text"
                    placeholder="Job title keywords or company"
                    className="flex-1 border border-gray-300 px-4 py-4 rounded-full text-sm placeholder:text-gray-400"
                />

                {/* Select with Icon */}
                <div className="relative flex-1 md:max-w-[200px]">
                    <select
                        className="w-full border border-gray-300 px-4 py-4 rounded-full text-sm appearance-none bg-white placeholder:text-gray-400"
                    >
                        <option>All Categories</option>
                        <option>Design</option>
                        <option>Development</option>
                    </select>
                    <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
            </div>


            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {allCards.map((user, i) => (
                    <UserCard
                        key={i}
                        avatar={avatar}
                        companyLogo={companyLogo}
                        name={user.name}
                        role={user.role}
                        status={user.status as any}
                        description={user.description}
                        skills={user.skills}
                        email={user.email}
                        phone={user.phone}
                        location={user.location}
                        website={user.website}
                        isCompany={user.isCompany}
                    />
                ))}
            </div>
        </div>
    )
}

export default CommunityPage
