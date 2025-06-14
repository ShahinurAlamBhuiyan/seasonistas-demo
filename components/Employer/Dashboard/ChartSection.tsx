'use client'

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from 'recharts'
import { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";

// Example datasets
const chartData = {
    today: [
        { date: '09:00', views: 12 },
        { date: '12:00', views: 28 },
        { date: '15:00', views: 18 },
        { date: '18:00', views: 32 },
        { date: '21:00', views: 22 },
    ],
    last7: [
        { date: 'Mon', views: 200 },
        { date: 'Tue', views: 350 },
        { date: 'Wed', views: 250 },
        { date: 'Thu', views: 400 },
        { date: 'Fri', views: 480 },
        { date: 'Sat', views: 300 },
        { date: 'Sun', views: 700 },
    ],
    lastMonth: [
        { date: '04/01', views: 650 },
        { date: '04/05', views: 800 },
        { date: '04/10', views: 420 },
        { date: '04/15', views: 600 },
        { date: '04/20', views: 300 },
        { date: '04/25', views: 720 },
        { date: '04/30', views: 900 },
    ],
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#365C5C] text-white px-4 py-2 rounded-xl shadow text-center">
                <p className="text-xs mb-1">{new Date(label).toLocaleDateString()}</p>

                <p className="text-sm font-semibold">{payload[0].value} views</p>
            </div>
        )
    }
    return null
}


const ChartSection = () => {
    const [range, setRange] = useState<'today' | 'last7' | 'lastMonth'>('lastMonth')
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm w-full h-[360px] relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-[24px] font-[400] leading-[28px]">Ad Views</p>
                    <h2 className="text-[40px] leading-[48px] font-bold">122</h2>
                </div>

                {/* Dropdown Button */}
                <div className="relative">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="text-sm text-gray-500 border px-3 py-1 rounded-full flex justify-center items-center gap-1"
                    >
                        {range === 'today'
                            ? 'Today'
                            : range === 'last7'
                                ? 'Last 7 Days'
                                : 'Last Month'}
                        <FaAngleDown size={10} />
                    </button>

                    {showDropdown && (
                        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-36 z-10 p-2">
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li
                                    className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
                                    onClick={() => {
                                        setRange('today')
                                        setShowDropdown(false)
                                    }}
                                >
                                    Today
                                </li>
                                <li
                                    className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
                                    onClick={() => {
                                        setRange('last7')
                                        setShowDropdown(false)
                                    }}
                                >
                                    Last 7 Days
                                </li>
                                <li
                                    className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
                                    onClick={() => {
                                        setRange('lastMonth')
                                        setShowDropdown(false)
                                    }}
                                >
                                    Last Month
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height="80%">
                <LineChart data={chartData[range]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="date"
                        tick={{ fontSize: 12 }}
                        padding={{ left: 20, right: 20 }}
                    />
                    <YAxis domain={[0, 1000]} tick={{ fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="views"
                        stroke="#467A7A"
                        strokeWidth={3}
                        dot={{
                            r: 5,
                            stroke: 'white',
                            strokeWidth: 2,
                            fill: '#467A7A',
                        }}
                        activeDot={{ r: 7 }}
                    />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default ChartSection
