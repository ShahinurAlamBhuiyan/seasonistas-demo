'use client'

import { FaTimesCircle } from 'react-icons/fa'
import { MdReportProblem } from 'react-icons/md'
import { RiErrorWarningFill } from 'react-icons/ri'

const alerts = [
    {
        type: 'Payment Failed',
        icon: <FaTimesCircle className="text-red-600 shrink-0" />,
        description: 'Payment failed for user #1053 – Card declined',
        time: '2 mins ago',
    },
    {
        type: 'Flagged Job',
        icon: <MdReportProblem className="text-red-500 shrink-0" />,
        description: 'Job post #4021 flagged as spam by 3 users',
        time: '5 mins ago',
    },
    {
        type: 'User Reported',
        icon: <RiErrorWarningFill className="text-red-400 shrink-0" />,
        description: 'User #998 reported for abusive behavior in messages',
        time: '10 mins ago',
    },
    {
        type: 'Blocked Payment',
        icon: <FaTimesCircle className="text-red-600 shrink-0" />,
        description: 'Payment failed for user #1053 – Card declined',
        time: '15 mins ago',
    },
    {
        type: 'Multiple Reports',
        icon: <RiErrorWarningFill className="text-red-400 shrink-0" />,
        description: 'User #998 reported for abusive behavior in messages',
        time: '10 mins ago',
    },
    {
        type: 'Job Abuse',
        icon: <MdReportProblem className="text-red-500 shrink-0" />,
        description: 'Job post #4021 flagged as spam by 3 users',
        time: '15 mins ago',
    },
]

const SystemAlertsPage = () => {
    return (
        <div className=" space-y-6">
            <h1 className='text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4'>System Alerts</h1>

            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
                <h2 className='text-[18px] sm:text-[22px] leading-[22px] font-semibold py-4 sm:py-6 px-4 sm:px-6 border-b'>All Alerts</h2>

                <table className="min-w-[700px] w-full text-left text-sm text-gray-700">
                    <thead className="bg-[#F5F5F5] text-gray-500 font-semibold">
                        <tr>
                            <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Alert</th>
                            <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Description</th>
                            <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Time</th>
                            <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#1C252E]">
                        {alerts.map((alert, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="px-4 sm:px-6 py-4 font-medium whitespace-nowrap">{alert.type}</td>
                                <td className="px-4 sm:px-6 py-4 flex items-center gap-2">
                                    {alert.icon}
                                    <span className="break-words">{alert.description}</span>
                                </td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">{alert.time}</td>
                                <td className="px-4 sm:px-6 py-4 text-[#1C252E] underline cursor-pointer whitespace-nowrap">Preview</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SystemAlertsPage
