'use client'

import { useState } from 'react'
import { FaSearch, FaQuestionCircle } from 'react-icons/fa'
import HelpMessageModal from '~/components/HelpCenter/HelpMessageModal'

const helpTopics = [
    {
        title: 'Inappropriate Behavior',
        description:
            'Harassment and aggressive behavior refer to actions or language intended to intimidate, belittle, or harm others, often involving offensive or discriminatory language.',
    },
    {
        title: 'False or Misleading Profile',
        description:
            'Fake experience or skills involve presenting false qualifications or abilities, while misleading or unrelated photos deceive by not representing the true context.',
    },
    {
        title: 'Fraud or Scam Attempt',
        description:
            'Requests for money outside the platform and unfulfilled payment promises both violate trust by bypassing secure systems and failing agreed commitments.',
    },
    {
        title: 'Violation of Terms of Service',
        description:
            'Attempts to make off-platform deals and using multiple or fake accounts undermine safety, fairness, and trust within the platform community.',
    },
    {
        title: 'Inappropriate Content',
        description:
            'Uploads containing sexual, violent, or offensive material violate community guidelines and create an unsafe or inappropriate environment for others.',
    },
    {
        title: 'Unprofessional Conduct',
        description:
            'Unprofessional behavior during a job or task, including not showing up for scheduled appointments, reflects a lack of reliability and commitment.',
    },
]

const HelpCenter = () => {
    const [search, setSearch] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const filteredTopics = helpTopics.filter((topic) =>
        topic.title.toLowerCase().includes(search.toLowerCase()) ||
        topic.description.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="sm:px-6 py-6 space-y-8">
            <span className='text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4'>Help Center</span>
            <>
                {/* Header */}
                <div className="bg-[#5590931F] py-16 px-10 rounded-xl text-center space-y-4">
                    <p className="text-xs text-[#53686A] font-semibold">Help</p>
                    <h1 className="text-[35px] font-semibold leading-[44px] tracking-wide text-[#559093]">Ask us anything</h1>
                    <p className="text-[#53686A] text-sm tracking-wide leading-[22px]">Have any questions? We’re here to assist you.</p>

                    <div className="w-[235px] max-w-sm mx-auto mt-4">
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-3 text-[#53686A]" />
                            <input
                                type="text"
                                placeholder="Search here"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-[6px] border border-gray-300 text-[12px] outline-none font-normal text-[#53686A]"
                            />
                        </div>
                    </div>
                </div>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-16">
                    {filteredTopics.length > 0 ? (
                        filteredTopics.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl border border-gray-200 p-5 space-y-2 shadow-sm"
                            >
                                <div className='w-10 h-10 rounded-full bg-[#EBF2F2] flex justify-center items-center'>
                                    <FaQuestionCircle className="text-[#4A9696]" />
                                </div>
                                <h3 className="text-[16px] leading-[22px] font-semibold text-black">{item.title}</h3>
                                <p className="text-[12px] text-[#767676] leading-5 font-[400]">{item.description}</p>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-sm text-center text-gray-500 mt-4">No topics match your search.</p>
                    )}
                </div>

                {/* Footer */}
                <div className='md:px-16'>
                    <div className="bg-[#ECF4F4] p-6 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-[#1A1A1A]">
                            <p className="font-semibold text-[#4A9696]">Still have questions?</p>
                            <p className="text-gray-600">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-3 md:mt-0 bg-[#4A9696] text-white text-sm px-6 py-2 rounded-full"
                        >
                            Send Message
                        </button>

                    </div>
                </div>
            </>
            <HelpMessageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default HelpCenter
