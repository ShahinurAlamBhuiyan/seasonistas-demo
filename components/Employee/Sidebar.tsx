'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { MdDashboard, MdHomeFilled } from 'react-icons/md'
import { IoPeopleCircleOutline, IoSettingsOutline } from 'react-icons/io5'
import { HiOutlineCalendarDateRange } from 'react-icons/hi2'
import { BsChatDots } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { CiLogout } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'
import logo from '../../app/assets/employer/logo.png'
import LogoutModal from '../Employer/LogoutModal'
import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'


const sidebarItems = [
    { name: 'Home', href: '/en/employee/home', icon: MdHomeFilled },
    { name: 'Dashboards', href: '/en/employee/dashboards', icon: MdDashboard },
    { name: 'Community', href: '/en/employee/community', icon: IoPeopleCircleOutline },
    { name: 'Calendar', href: '/en/employee/calender', icon: HiOutlineCalendarDateRange },
    { name: 'Chat', href: '/en/employee/chat', icon: BsChatDots },
]

const Sidebar = ({
    sidebarOpen,
    setSidebarOpen,
}: {
    sidebarOpen: boolean
    setSidebarOpen: (value: boolean) => void
}) => {
    const pathname = usePathname()
    const router = useRouter()
    const [showLogoutModal, setShowLogoutModal] = useState(false)

    const handleLogoutConfirm = () => {
        setShowLogoutModal(false)
        router.push('/en/employee-login')
    }

    const handleHelpCenter = () => {
        router.push('/en/employee/help-center')
    }

    return (
        <>
            {/* Mobile Header with Toggle */}
            <div className="sm:hidden flex justify-between items-center p-4 bg-[#022127] text-white">
                <Image src={logo} alt="logo" className="w-[50%] h-auto" />
                <button onClick={() => setSidebarOpen(true)}>
                    <HiMenu size={28} />
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`fixed sm:static top-0 left-0 z-50 h-full w-[250px] sm:w-[250px] lg:w-[290px] bg-[#022127] text-white transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } sm:translate-x-0 overflow-y-auto py-6 px-8`}
            >
                {/* Close on mobile */}
                <div className="sm:hidden flex justify-end">
                    <button onClick={() => setSidebarOpen(false)}>
                        <RxCross2 size={28} className="text-white mb-2" />
                    </button>
                </div>

                {/* Full height wrapper */}
                <div className="flex flex-col h-full">
                    {/* Logo and Nav */}
                    <div className="flex flex-col justify-center items-center gap-6 mt-4 w-full">
                        <Image src={logo} alt="seasonistas dashboard" className="w-full h-full" />
                        <nav className="space-y-3 w-full mt-3">
                            <p className="text-[20px] font-[500] pl-2 mb-6">Over View</p>
                            <div className="flex flex-col gap-3 w-full">
                                {sidebarItems.map(({ name, href, icon: Icon }) => (
                                    <Link
                                        key={name}
                                        href={href}
                                        className={`w-full rounded-[44px] px-6 py-3 flex items-center justify-between transition-all ${pathname === href
                                            ? 'bg-[#559093] text-white font-[600]'
                                            : 'hover:bg-[#2B5558] bg-[#FFFFFF0A]'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={20} />
                                            <p className="text-[16px] font-[400]">{name}</p>
                                        </div>
                                        <IoIosArrowForward className="text-sm" />
                                    </Link>
                                ))}
                            </div>
                            {/* Spacer after Chat */}
                            <div className="h-4" />
                        </nav>
                    </div>

                    {/* Footer Section */}
                    <div className="mt-auto space-y-4 pt-8">
                        {/* Help Center */}
                        <div className="bg-[#FFFFFF1A] p-4 rounded-xl text-white border border-[#559093]">
                            <IoIosPeople size={50} className="text-[#e9e4e4a3]" />
                            <p className="text-[14px] font-[600] tracking-wider">Help Center</p>
                            <p className="text-[10px]">
                                <span className="font-[600]">Need technical or operational support?</span><br />
                                <span className="font-[400] text-gray-400">The Seasonistas team is here to help you!</span>
                            </p>
                            <button
                                onClick={handleHelpCenter}
                                className="w-full text-[10px] bg-[#559093] text-white rounded-full py-2 font-[400] mt-2 tracking-wide"
                            >
                                Help Center
                            </button>
                        </div>

                        {/* Settings */}
                        <Link
                            href="/en/employee/settings"
                            className={`w-full justify-between rounded-[44px] px-8 py-3 flex items-center gap-3 transition-all ${pathname === '/en/employee/settings'
                                ? 'bg-[#559093] text-white'
                                : 'hover:bg-[#2B5558] bg-[#FFFFFF0A]'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <IoSettingsOutline size={20} />
                                <p className="text-[16px] font-[400]">Settings</p>
                            </div>
                            <IoIosArrowForward className="text-sm" />
                        </Link>

                        {/* Logout */}
                        <button
                            onClick={() => setShowLogoutModal(true)}
                            className="w-full rounded-full px-8 flex items-center py-3 gap-3 border border-[#ffffffa1] text-white hover:bg-[#2B5558]"
                        >
                            <CiLogout size={20} />
                            <p className="text-[16px] font-[400]">Logout</p>
                        </button>
                    </div>
                </div>
            </aside>

            {showLogoutModal && (
                <LogoutModal
                    onClose={() => setShowLogoutModal(false)}
                    onConfirm={handleLogoutConfirm}
                />
            )}
        </>
    )
}

export default Sidebar
