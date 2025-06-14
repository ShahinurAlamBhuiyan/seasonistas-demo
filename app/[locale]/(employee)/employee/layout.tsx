'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Poppins } from 'next/font/google'
import Sidebar from '~/components/Employee/Sidebar'
import Topbar from '~/components/Employee/Topbar'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-poppins',
})

export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        if (sidebarOpen && window.innerWidth < 640) {
            setSidebarOpen(false)
        }
    }, [pathname])

    return (
        <div className={`sm:flex h-screen w-screen overflow-hidden ${poppins.className}`}>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className="flex-1 flex flex-col bg-[#F7F7F7] h-full overflow-y-auto">
                <div className="sm:sticky top-0 z-40 bg-[#F7F7F7] px-5">
                    <Topbar />
                </div>
                <div className='px-5  mb-[90px] sm:mb-0'>{children}</div>
            </main>
        </div>
    )
}
