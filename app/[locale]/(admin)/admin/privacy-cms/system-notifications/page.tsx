'use client'

import Image from 'next/image'
import { useState } from 'react'
import { LuPencil } from 'react-icons/lu'
import { RxCross2 } from 'react-icons/rx'
import logo from '~/app/assets/employer/logo.png'

const templates = [
    {
        name: 'Welcome Email',
        type: 'Email',
        subject: 'Welcome Email',
        img: logo,
        body: `Hi Jane,
<br />
I'm Mike from the product team here at MoveApp. It looks like you're off to a great start getting setup!
<br />
If you need support or have any feedback for us, just reply to this email and we will be in touch.
<br />
Take care,<br />
Sarah`

    },
    {
        name: 'Password Reset',
        type: 'Email',
        subject: 'Reset Your Password',
        body: 'Click the link below to reset your password.'
    },
    {
        name: 'Account Verification',
        type: 'Email',
        subject: 'Verify Your Account',
        body: 'Thanks for signing up! Please verify your email using the link below.'
    },
    {
        name: 'Job Match Notification',
        type: 'Email',
        subject: 'New Job Match!',
        body: 'We found a new job that matches your preferences.'
    },
]

export default function Page() {
    const [showPreview, setShowPreview] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [activeTemplate, setActiveTemplate] = useState<any>(null)

    const handlePreview = (template: any) => {
        setActiveTemplate(template)
        setShowPreview(true)
    }

    const handleEdit = (template: any) => {
        setActiveTemplate(template)
        setShowEdit(true)
    }

    return (
        <div className="w-full">
            <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6">System Notifications</h1>

            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto w-full">
                <h2 className="text-[18px] font-semibold px-6 py-5">Email Template</h2>

                <table className="w-full text-xs text-left text-[#1C252E]">
                    <thead className="bg-[#F5F5F5] text-[#637381] font-medium">
                        <tr>
                            <th className="px-6 py-4">Template Name</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Action</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {templates.map((item, idx) => (
                            <tr key={idx} className="border-t hover:bg-[#F5F5F5]">
                                <td className="px-6 py-5">{item.name}</td>
                                <td className="px-6 py-5">{item.type}</td>
                                <td
                                    className="px-6 py-5 text-[#1C252E] underline cursor-pointer"
                                    onClick={() => handlePreview(item)}
                                >
                                    Preview
                                </td>
                                <td className="px-6 py-5">
                                    <button
                                        className="w-10 h-10 rounded-full bg-[#EDF5F6] flex items-center justify-center text-[#4B8378] hover:bg-[#D6EEEE]"
                                        onClick={() => handleEdit(item)}
                                    >
                                        <LuPencil size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Preview Modal */}
            {showPreview && activeTemplate && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-2xl relative">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">{activeTemplate.subject}</h3>
                            <button onClick={() => setShowPreview(false)}>
                                <RxCross2 />
                            </button>
                        </div>
                        <div className="border p-6 rounded-xl leading-6 text-sm">

                            {activeTemplate?.img && (<Image className='mb-3' src={logo} alt='logo' width={200} height={50} />)}
                            <div
                                dangerouslySetInnerHTML={{ __html: activeTemplate.body }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {showEdit && activeTemplate && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-lg relative">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Edit Template</h3>
                            <button onClick={() => setShowEdit(false)}>
                                <RxCross2 />
                            </button>
                        </div>
                        <input
                            type="text"
                            defaultValue={activeTemplate.subject}
                            className="w-full border rounded-full px-4 py-2 text-sm mb-4"
                        />
                        <textarea
                            defaultValue={activeTemplate.body}
                            rows={6}
                            className="w-full border rounded-xl px-4 py-2 text-sm"
                        />
                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                onClick={() => setShowEdit(false)}
                                className="px-6 py-2 border rounded-full text-black font-medium"
                            >
                                Cancel
                            </button>
                            <button className="px-6 py-2 bg-[#559093] text-white rounded-full font-medium">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
