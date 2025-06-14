import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go";


import bannerBg1 from '~/app/assets/Employer/home/bannerBg1.png'
import bannerBg2 from '~/app/assets/Employer/home/bannerBg2.png'
import bannerHero from '~/app/assets/Employer/home/bannerHero.png'

const Banners = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 w-full mb-6">
            {/* Left Welcome Banner */}
            <div
                className="flex-1 flex justify-between items-center min-h-[220px] lg:h-[220px] rounded-[24px] overflow-hidden px-8 py-6 text-white z-10 relative"
                style={{
                    backgroundImage: `url(${bannerBg1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#141A21E0]/80 to-black/100 z-0" />

                {/* Text */}
                <div className="relative z-10 top-10">
                    <p className="text-[22px] leading-[32px] font-[450]">Hi Tam Tran,</p>
                    <h2 className="text-[28px] xl:text-[40px] font-[600] lg:leading-[72px] md:flex items-center gap-1">
                        Welcome back👋
                    </h2>
                </div>

                {/* Hero Image */}
                <Image
                    src={bannerHero}
                    alt="Hero"
                    className="hidden sm:block w-[200px] h-[300px] top-5 right-0 lg:right-10 xl:right-16 scale-x-[-1] absolute z-10"
                />
            </div>



            {/* Right CTA Banner */}
            <div
                className="flex flex-col justify-between lg:w-1/4 rounded-[24px] px-6 py-4 text-white relative overflow-hidden min-h-[220px] lg:h-[220px]"
                style={{
                    backgroundImage: `url(${bannerBg2.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/100 z-0" />

                {/* Icon */}
                <div className='absolute top-4 right-4  z-10 p-3 rounded-full border'>
                    <GoArrowUpRight className=" text-white text-xl" />
                </div>

                {/* Text */}
                <div className="relative z-10 top-28 lg:top-16 xl:top-28">
                    <h3 className="text-[18px] xl:text-[22px] font-[600]">Create a new Post</h3>
                    <p className="text-sm font-[300] text-white/80 mt-[2px]">
                        Customize your perfect job with preferred criteria and expectations
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Banners
