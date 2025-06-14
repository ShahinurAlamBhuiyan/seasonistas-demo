'use client'

type JobStatus = 'Active' | 'Expire' | 'Accept'

interface Job {
    title: string
    jobId: string
    applications: string
    status: JobStatus
    postedOn: string
}

const jobs: Job[] = [
    { title: 'UI/UX Designer', jobId: 'ADV000001', applications: '100 Applications', status: 'Active', postedOn: '2025-05-14' },
    { title: 'UI/UX Designer', jobId: 'ADV000001', applications: '100 Applications', status: 'Expire', postedOn: '2025-05-14' },
    { title: 'UI/UX Designer', jobId: 'ADV000001', applications: '100 Applications', status: 'Accept', postedOn: '2025-05-14' },
    { title: 'UI/UX Designer', jobId: 'ADV000001', applications: '100 Applications', status: 'Expire', postedOn: '2025-05-14' },
    { title: 'UI/UX Designer', jobId: 'ADV000001', applications: '100 Applications', status: 'Accept', postedOn: '2025-05-14' },
    { title: 'UI/UX Designer', jobId: 'ADV000001', applications: '100 Applications', status: 'Expire', postedOn: '2025-05-14' },
]

export default function JobListPage() {
    return (
        <div className="w-full">
            <h2 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6">Jobs</h2>

            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto w-full">
                {/* Header */}
                <h2 className="text-[18px] font-semibold px-6 py-5 border-b">All Job</h2>

                {/* Table */}
                <table className="w-full text-sm text-left text-[#1C252E]">
                    <thead className="bg-[#F5F5F5] text-[#637381] font-medium">
                        <tr>
                            <th className="px-6 py-4">Job Title</th>
                            <th className="px-6 py-4">Job Id</th>
                            <th className="px-6 py-4">Applications</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Posted On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, idx) => (
                            <tr key={idx} className="border-t hover:bg-[#F9FAFB] text-[#1C252E] text-[12px]">
                                <td className="px-6 py-6">{job.title}</td>
                                <td className="px-6 py-6">{job.jobId}</td>
                                <td className="px-6 py-6">{job.applications}</td>
                                <td className="px-6 py-6">
                                    <span className={`px-4 py-[4px] rounded-full text-xs font-medium 
                    ${job.status === 'Active'
                                            ? 'bg-[#DCFCE7] text-[#15803D]'
                                            : job.status === 'Accept'
                                                ? 'bg-[#DCFCE7] text-[#15803D]'
                                                : 'bg-[#FDEEEE] text-[#D84C4C]'}`}>
                                        {job.status}
                                    </span>
                                </td>
                                <td className="px-6 py-6">{job.postedOn}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
