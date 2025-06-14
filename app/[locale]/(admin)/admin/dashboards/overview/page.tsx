import { BiBarChartSquare, BiUser, BiBriefcase, BiBarChartAlt2 } from 'react-icons/bi'
import ActivityFeed from '~/components/Admin/Dashboards/Overview/ActivityFeed'
import AreaStatsTable from '~/components/Admin/Dashboards/Overview/AreaStatsTable'
import ChartCard from '~/components/Admin/Dashboards/Overview/ChartCard'
import MetricCard from '~/components/Admin/Dashboards/Overview/MetricCard'
import arrow1 from '~/app/assets/admin/arrow1.png'
import arrow2 from '~/app/assets/admin/arrow2.png'
import arrow3 from '~/app/assets/admin/arrow3.png'
import arrow4 from '~/app/assets/admin/arrow4.png'

export default function OverviewPage() {
    return (
        <div className="space-y-6">
            <h1 className='text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4'>Dashboard</h1>
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                    title="Total User"
                    value="120K"
                    change={+2.6}
                    subtitle="last Month"
                    bars={[5, 6, 3, 20, 25, 3, 17, 16]}
                    barColor='#00a76f'
                    arrowIcon={arrow1}
                />
                <MetricCard
                    title="Active Employees"
                    value="4 876"
                    change={+0.2}
                    subtitle="last Month"
                    bars={[5, 6, 20, 25, 3, 17, 16]}
                    barColor='#559093'
                    arrowIcon={arrow2}
                />
                <MetricCard
                    title="Active Employers"
                    value="200"
                    change={-0.1}
                    subtitle="last Month"
                    bars={[10, 10, 15, 5, 8, 20, 7, 16]}
                    barColor='#1e4ff2'
                    arrowIcon={arrow3}
                />
                <MetricCard
                    title="Job Listings"
                    value="200"
                    change={-0.1}
                    subtitle="last Month"
                    bars={[10, 10, 15, 20, 5, 8, 20, 7, 16]}
                    barColor='#FFAB00'
                    arrowIcon={arrow4}
                />
            </div>

            {/* Chart + Area Table */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[380px]">
                <div className="col-span-1 bg-white rounded-[16px] h-full flex flex-col">
                    <AreaStatsTable />
                </div>
                <div className="col-span-1 lg:col-span-2 bg-white rounded-[16px] h-full flex flex-col">
                    <ChartCard />
                </div>
            </div>

            {/* Activity Feed */}
            <ActivityFeed />
        </div>
    )
}
