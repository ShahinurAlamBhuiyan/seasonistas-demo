import Image from 'next/image'

type Worker = {
    name: string
    role: string
    avatar: any
    description: string
    skills: string[]
}

type Props = {
    worker: Worker
}

const WorkerProfileCard = ({ worker }: Props) => {
    return (
        <div className="w-full rounded-xl border border-gray-200 p-6 bg-white shadow-sm space-y-4">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image
                        src={worker.avatar}
                        alt={worker.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                    />
                </div>



                <div>
                    <h3 className="text-[16px] font-semibold text-[#11142D]">{worker.name}</h3>
                    <p className="text-sm text-gray-500">{worker.role}</p>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Description */}
            <p className="text-sm text-[#767676] font-[400] line-clamp-3">
                {worker.description}
            </p>

            {/* Skills */}
            <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Top Skill</p>
                <div className="flex flex-wrap gap-2">
                    {worker.skills.map((skill, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 text-xs rounded-full border border-gray-300 text-gray-700"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-2">
                <button className="flex-1 border border-gray-300 rounded-full py-2 text-sm text-gray-700">
                    Message
                </button>
                <button className="flex-1 bg-[#559092] text-white rounded-full py-2 text-sm">
                    Invite
                </button>
            </div>
        </div>
    )
}

export default WorkerProfileCard
