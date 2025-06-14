'use client'

import { useState } from 'react'
import { FiX } from 'react-icons/fi'

interface EditPlanModalProps {
    plan: any
    onClose: () => void
}

export default function EditPlanModal({ plan, onClose }: EditPlanModalProps) {
    const [formData, setFormData] = useState({
        name: plan.name,
        price: plan.price,
        posts: plan.posts,
        validity: plan.validity,
        chat: plan.chat,
        notification: plan.notification,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-[#1C252E]">Edit Plan</h2>
                    <button onClick={onClose}>
                        <FiX size={20} />
                    </button>
                </div>

                <form className="space-y-4">
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-full px-4 py-3 text-sm text-gray-700"
                        placeholder="Plan Name"
                    />
                    <input
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full border rounded-full px-4 py-3 text-sm text-gray-700"
                        placeholder="Price"
                    />
                    <input
                        name="posts"
                        value={formData.posts}
                        onChange={handleChange}
                        className="w-full border rounded-full px-4 py-3 text-sm text-gray-700"
                        placeholder="Total Post"
                    />
                    <input
                        name="validity"
                        value={formData.validity}
                        onChange={handleChange}
                        className="w-full border rounded-full px-4 py-3 text-sm text-gray-700"
                        placeholder="Validity (Days)"
                    />
                    <select
                        name="chat"
                        value={formData.chat}
                        onChange={handleChange}
                        className="w-full border rounded-full px-4 py-3 text-sm text-gray-700"
                    >
                        <option>Select Chat Status</option>
                        <option value="ON">ON</option>
                        <option value="OFF">OFF</option>
                    </select>
                    <select
                        name="notification"
                        value={formData.notification}
                        onChange={handleChange}
                        className="w-full border rounded-full px-4 py-3 text-sm text-gray-700"
                    >
                        <option>Select Notification Status</option>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>

                    <div className="flex justify-between items-center pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-full bg-[#2C858D] text-white text-sm"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
