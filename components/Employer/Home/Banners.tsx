import Image from 'next/image'


import bannerBg1 from '~/app/assets/employer/home/bannerBg1.png'
import bannerHero from '~/app/assets/employer/home/bannerHero.png'

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
        </div>
    )
}

export default Banners
