'use client'

import { useRouter } from 'next/navigation'

type JobCardProps = {
    id: number
    title: string
    date: string
    description: string
    tags: string[]
    rate: string
}

const ActiveJobCard = ({ id, title, date, description, tags, rate }: JobCardProps) => {
    const router = useRouter()

    const handleView = () => {
        const jobSlug = title.toLowerCase().replace(/\s+/g, '-')
        router.push(`/en/employer/application/${id}`)
    }

    return (
        <div className="w-full h-full flex flex-col justify-between rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
            {/* Title + Date */}
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-[22px] font-[450] text-black">{title}</h3>
                <span className="text-[12px] font-[400] leading-[24px] text-[#767676]">{date}</span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#767676] pr-5 font-[400] line-clamp-3 mb-3">
                {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-2 text-xs rounded-full border border-gray-300 text-gray-700"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-auto pt-2">
                <span className="text-[16px] font-[400] text-[#11142D]">{rate}</span>
                <button
                    onClick={handleView}
                    className="bg-[#559092] text-white text-[10px] px-6 py-2 rounded-full shrink-0"
                >
                    View ad
                </button>
            </div>
        </div>
    )
}

export default ActiveJobCard
