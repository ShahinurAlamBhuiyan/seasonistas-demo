import Image from 'next/image'
import { IoNotifications } from 'react-icons/io5'
import userImg from '../../app/assets/employer/employerImg.png'
import flag from '../../app/assets/employer/country.png'
import { usePathname, useRouter } from 'next/navigation'

type Props = {}

const Topbar = (props: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const lastSegment = pathname.split('/').filter(Boolean).pop() || '';
    const pageName = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    let title = '';
    if (pageName === 'Home') {
        title = 'Jobs Overview'
    } else if (pageName === 'Dashboards') {
        title = 'Dashboard'
    } else if (pageName === 'Community') {
        title = 'Connect & Grow'
    } else if (pageName === 'Settings') {
        title = 'Settings'
    } else if (pageName === 'Profile') {
        title = 'Profile Overview'
    }
    const handleProfile = () => {
        router.push('/en/employee/profile')
    }
    return (
        <div className="w-full sm:px-6 pt-3 pb-6 flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Title */}
            <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 p-0">
                {title}
            </h1>

            {/* Right section (flag, notification, profile) */}
            <div className="flex items-center gap-4 self-end sm:self-auto">

                <Image src={flag} alt="Language" width={24} height={24} className="rounded-sm" />
                <div className="relative">
                    <IoNotifications className="text-[22px] text-gray-700" />
                    <span className="absolute -top-1 -right-1 w-[16px] h-[16px] text-[10px] bg-red-500 text-white flex items-center justify-center rounded-full font-semibold">
                        4
                    </span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer" onClick={handleProfile}>
                    <Image src={userImg} alt="User" width={32} height={32} className="rounded-full" />
                    <div className="flex flex-col leading-tight">
                        <span className="text-sm font-medium text-gray-800">John Kaon</span>
                        <span className="text-xs text-gray-400">Artist</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Topbar
