'use client'

import { useState } from 'react'
import BillingMethod from '~/components/Admin/Settings/BillingMethod'
import NotificationSettings from '~/components/Admin/Settings/NotificationSettings'
import SecuritySettings from '~/components/Admin/Settings/SecuritySettings'

const SettingsPage = () => {
    const [tab, setTab] = useState<'security' | 'notification' | 'billing'>('security')

    return (
        <div className="px-4 sm:px-6 py-6 space-y-6">
            {/* Tabs */}
            <div className="flex overflow-x-auto no-scrollbar border-b space-x-6 sm:space-x-8">
                <button
                    onClick={() => setTab('security')}
                    className={`whitespace-nowrap text-[16px] sm:text-[18px] pb-2 ${tab === 'security' ? 'font-semibold border-b-2 border-[#559092] text-black' : 'text-[#767676]'}`}
                >
                    Security Settings
                </button>
                <button
                    onClick={() => setTab('notification')}
                    className={`whitespace-nowrap text-[16px] sm:text-[18px] pb-2 ${tab === 'notification' ? 'font-semibold border-b-2 border-[#559092] text-black' : 'text-[#767676]'}`}
                >
                    Notification
                </button>
                <button
                    onClick={() => setTab('billing')}
                    className={`whitespace-nowrap text-[16px] sm:text-[18px] pb-2 ${tab === 'billing' ? 'font-semibold border-b-2 border-[#559092] text-black' : 'text-[#767676]'}`}
                >
                    Billing Method
                </button>
            </div>

            {/* Render Selected Tab */}
            <div className="w-full">
                {tab === 'security' && <SecuritySettings />}
                {tab === 'notification' && <NotificationSettings />}
                {tab === 'billing' && <BillingMethod />}
            </div>
        </div>
    )
}

export default SettingsPage
