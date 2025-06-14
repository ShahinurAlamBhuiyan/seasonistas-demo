'use client'

import ChartSection from '../../../../../components/Employee/Dashboard/ChartSection'
import bannerBg2 from '~/app/assets/employer/home/bannerBg2.png'
import CreateNewPostModal from '~/components/Employee/Home/CreateNewPostModal'
import { GoArrowUpRight } from 'react-icons/go'
import { useState } from 'react'
import MetricCard from '~/components/Employee/Dashboard/MetricCard'
import AppliedJobsTable from '~/components/Employee/Dashboard/AppliedJobsTable'

const page = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleCreateNewPost = () => {
        setModalOpen(true)
    }

    return (
        <div className="sm:px-6 py-4 space-y-6 mb-[90px] sm:mb-0">
            {/* Chart + Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                <div className="md:col-span-2">
                    <ChartSection />
                </div>

                <div
                    className="flex flex-col justify-between rounded-[24px] px-6 py-6 sm:py-8 text-white relative overflow-hidden min-h-[200px]"
                    style={{
                        backgroundImage: `url(${bannerBg2.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/100 z-0" />

                    {/* Arrow icon */}
                    <div
                        className="absolute top-4 right-4 z-10 p-3 rounded-full border cursor-pointer"
                        onClick={handleCreateNewPost}
                    >
                        <GoArrowUpRight className="text-white text-xl" />
                    </div>

                    {/* Text content */}
                    <div className="relative z-10 mt-10 sm:mt-14 lg:mt-60">
                        <h3 className="text-lg sm:text-xl xl:text-[22px] font-semibold">Create a new Post</h3>
                        <p className="text-sm font-light text-white/80 mt-1">
                            Customize your perfect job with preferred criteria and expectations
                        </p>
                    </div>
                </div>

            </div>

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <MetricCard
                    title="Profile Appear"
                    value="4500"
                    change={+2.6}
                    subtitle="last 7 days"
                    bars={[5, 6, 3, 20, 25, 3, 17, 16]}
                />
                <MetricCard
                    title="Ad Applied"
                    value="4 876"
                    change={+0.2}
                    subtitle="last 7 days"
                    bars={[5, 9, 17, 7, 5, 7, 10, 15]}
                />
                <MetricCard
                    title="Matched ads"
                    value="08"
                    change={-0.1}
                    subtitle="last 7 days"
                    bars={[5, 9, 17, 7, 5, 7, 10, 15]}
                />
            </div>
            {/* Applied job table */}
            <AppliedJobsTable />
            {/* Modal */}
            <CreateNewPostModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    )
}

export default page
