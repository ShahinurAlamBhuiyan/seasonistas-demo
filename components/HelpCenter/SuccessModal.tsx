'use client'

import { Dialog } from '@headlessui/react'
import { IoClose } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation'

const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleBackToHome = () => {
        onClose()

        if (pathname.includes('/en/employee/help-center')) {
            router.push('/en/employee/home')
        } else if (pathname.includes('/en/employer/help-center')) {
            router.push('/en/employer/home')
        }
    }

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="fixed inset-0 bg-black/40" />
            <Dialog.Panel className="relative z-50 bg-white p-6 rounded-2xl w-full max-w-sm text-center space-y-5 shadow-xl">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 text-lg">
                    <IoClose />
                </button>

                {/* Check Icon */}
                <div className="w-14 h-14 rounded-full bg-[#4A9696] mx-auto flex items-center justify-center">
                    <FaCheck className="text-white text-xl" />
                </div>

                {/* Title & Message */}
                <h3 className="text-lg font-semibold">Request Sent Successfully</h3>
                <p className="text-sm text-gray-600">
                    Thank you for your feedback. Our team will review your report and get back to you shortly.
                </p>

                {/* Button */}
                <button
                    onClick={handleBackToHome}
                    className="bg-[#4A9696] text-white text-sm font-medium px-6 py-2 rounded-full"
                >
                    Back to Home
                </button>
            </Dialog.Panel>
        </Dialog>
    )
}

export default SuccessModal
