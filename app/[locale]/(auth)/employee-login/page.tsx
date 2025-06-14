'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import googleIcon from '../../../assets/login/google-logo.png'
import girlImg from '../../../assets/login/reviewImg.png'
import quoteIcon from '../../../assets/login/quoteIcon.png'

type Props = {}

const testimonials = [
    {
        quote:
            'How do you manage seasonal hiring spikes with a small HR team? Our platform helped us scale workforce seamlessly during peak seasons.',
        name: 'Alex Morgan',
        title: 'Campus Recruitment Head at SummerTech',
        image: girlImg,
    },
    {
        quote:
            'Hiring fast without compromising quality was always a challenge—until we tried this. Game-changer for our team.',
        name: 'John Carter',
        title: 'Talent Acquisition Manager at GrowCorp',
        image: girlImg,
    },
    {
        quote:
            'Our HR productivity doubled once we started using the platform. It’s intuitive, scalable, and super effective.',
        name: 'Lily Chen',
        title: 'People Ops Lead at SparkHR',
        image: girlImg,
    },
]

const LoginPage = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(0)

    // Auto switch logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % testimonials.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const handleDotClick = (i: number) => {
        setActiveIndex(i)
    }

    const activeTestimonial = testimonials[activeIndex]

    return (
        <div className='bg-[#F5F6F8] w-screen  md:h-screen flex justify-center items-center'>
            <div className='flex flex-col md:flex-row justify-between items-center  md:h-[80%] w-[90%] sm:w-[65%] bg-white rounded-t-[24px] rounded-b-[24px] overflow-hidden my-8 sm:my-20 md:my-0'>
                {/* Left Section */}
                <div className='flex flex-col justify-center items-center p-16'>
                    <div className='w-full max-w-md '>
                        <h2 className='text-2xl md:text-3xl font-[500] mb-3'>Login into your Account</h2>
                        <p className='text-gray-800 text-[15px] mb-6'>
                            Use your company email to hire and collaborate with your team.
                        </p>

                        <button className='w-full flex items-center justify-center border border-gray-300 rounded-full py-2 mb-6'>
                            <Image width={20} height={20} src={googleIcon} alt='Google Icon' className='mr-2' />
                            Sign in with Google
                        </button>

                        <div className='flex items-center mb-4'>
                            <p className='text-xs text-gray-500'>Sign In with Other Email</p>
                            <div className='flex-grow h-px bg-gray-300 ml-2' />
                        </div>

                        <input
                            type='email'
                            placeholder='Enter Email'
                            className='w-full mb-3 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring'
                        />
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full mb-3 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring'
                        />

                        <div className='flex items-center justify-between text-sm mb-4'>
                            <label className='flex items-center'>
                                <input type='checkbox' className='mr-2' /> Remember Me
                            </label>
                            <a href='#' className='hover:underline'>
                                Forgot Password?
                            </a>
                        </div>

                        <button className='w-full bg-[#559093] text-white py-4 rounded-full text-sm'>Continue</button>
                    </div>
                </div>

                {/* Right Section with Carousel */}
                <div className='h-full bg-login-radial md:rounded-tr-[24px] rounded-br-[24px]'>
                    <div className='text-white p-10 text-center h-full flex flex-col justify-center items-center gap-8'>
                        <h2 className='text-xl xl:text-4xl font-bold leading-tight mb-6'>
                            <span className='bg-gradient-to-r from-blue-400 via-pink-300 to-yellow-700 bg-clip-text text-transparent'>
                                Sign up in just 2 minutes.
                            </span>
                            <br />
                            <span className='text-white'>win seasons with<br />the right talent.</span>
                        </h2>

                        <div className='max-w-md text-sm text-gray-300 mb-3 xl:mb-6 px-6'>
                            <div className="relative mb-2 px-2 space-x-3">
                                <Image
                                    src={quoteIcon}
                                    alt="icon"
                                    width={30}
                                    height={30}
                                    className="absolute bottom-0"
                                />
                                <p className="text-left pl-8">{activeTestimonial.quote}</p>
                            </div>


                            <div className='flex items-center justify-start gap-3 mt-6'>
                                <Image
                                    src={activeTestimonial.image}
                                    alt={activeTestimonial.name}
                                    className='rounded-full object-cover'
                                    width={50}
                                    height={50}
                                />
                                <div className='text-left'>
                                    <p className='font-semibold text-white text-sm'>{activeTestimonial.name}</p>
                                    <p className='text-xs text-gray-400'>{activeTestimonial.title}</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex space-x-2'>
                            {testimonials.map((_, i) => (
                                <span
                                    key={i}
                                    onClick={() => handleDotClick(i)}
                                    className={`cursor-pointer transition-all duration-300 w-7 h-[2px] rounded-full ${activeIndex === i ? 'bg-white opacity-90' : 'bg-white opacity-40'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
