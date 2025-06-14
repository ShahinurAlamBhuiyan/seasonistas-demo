'use client'

import { useState } from 'react'
import { FiTrash } from 'react-icons/fi'
import { LuPencil } from "react-icons/lu";
import AddFaqModal from '~/components/Admin/Dashboards/PrivacyCms/AddFaqModal';
import DeleteModal from '~/components/Admin/Dashboards/PrivacyCms/DeleteModal';
import EditFaqModal from '~/components/Admin/Dashboards/PrivacyCms/EditFaqModal';


const faqs = [
    {
        question: 'How can I reset my password?',
        answer: 'Go to settings, click “Reset Password,” follow instructions carefully.',
    },
    {
        question: 'How do I apply for a job listing?',
        answer: 'Open the job post, click “Apply,” and submit details.',
    },
    {
        question: 'How can I update my profile information?',
        answer: 'Visit profile section, click “Edit,” and save updated info.',
    },
    {
        question: 'Where can I see my application history?',
        answer: 'Check “My Applications” tab in your user dashboard panel',
    },
    {
        question: 'How do I contact support for help?',
        answer: 'Use the contact form or email us directly for support.',
    },
    {
        question: 'What should I do if I see fake jobs?',
        answer: 'Click “Report” on job, admin will review and take action.',
    },
    {
        question: 'Can I deactivate or delete my account?',
        answer: 'Yes, go to account settings and click “Deactivate Account” button.',
    }, {
        question: 'How can I reset my password?',
        answer: 'Go to settings, click “Reset Password,” follow instructions carefully.',
    },
    {
        question: 'How do I apply for a job listing?',
        answer: 'Open the job post, click “Apply,” and submit details.',
    },
    {
        question: 'How can I update my profile information?',
        answer: 'Visit profile section, click “Edit,” and save updated info.',
    },
    {
        question: 'Where can I see my application history?',
        answer: 'Check “My Applications” tab in your user dashboard panel',
    },
    {
        question: 'How do I contact support for help?',
        answer: 'Use the contact form or email us directly for support.',
    },
    {
        question: 'What should I do if I see fake jobs?',
        answer: 'Click “Report” on job, admin will review and take action.',
    },
    {
        question: 'Can I deactivate or delete my account?',
        answer: 'Yes, go to account settings and click “Deactivate Account” button.',
    },
]

export default function FaqList() {
    const itemsPerPage = 7
    const [currentPage, setCurrentPage] = useState(1)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [selectedFaqIndex, setSelectedFaqIndex] = useState<number | null>(null)

    const [showAddModal, setShowAddModal] = useState(false)
    const [faqData, setFaqData] = useState(faqs)
    const [showEditModal, setShowEditModal] = useState(false)
    const [editIndex, setEditIndex] = useState<number | null>(null)

    const totalPages = Math.ceil(faqData.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentFaqs = faqData.slice(startIndex, startIndex + itemsPerPage)


    const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1)
    const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1)

    const openDeleteModal = (index: number) => {
        setSelectedFaqIndex(index)
        setShowDeleteModal(true)
    }

    const confirmDelete = () => {
        if (selectedFaqIndex !== null) {
            const updated = [...faqData]
            updated.splice(startIndex + selectedFaqIndex, 1)
            setFaqData(updated)
        }
        setShowDeleteModal(false)
        setSelectedFaqIndex(null)
    }


    const handleAddFaq = (question: string, answer: string) => {
        setFaqData([{ question, answer }, ...faqData])
        setShowAddModal(false)
    }

    const openEditModal = (index: number) => {
        setEditIndex(index)
        setShowEditModal(true)
    }

    const handleSaveFaq = (question: string, answer: string) => {
        if (editIndex !== null) {
            const updated = [...faqData]
            updated[startIndex + editIndex] = { question, answer }
            setFaqData(updated)
            setShowEditModal(false)
            setEditIndex(null)
        }
    }


    return (
        <>
            <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-6">FAQ / Help Center</h1>

            <div className="bg-white rounded-2xl py-6 shadow-sm w-full overflow-x-auto">
                <div className="flex justify-between items-center mb-6 px-6">
                    <h2 className="text-[22px] font-semibold text-[#1C252E]">FAQ List</h2>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-[#559093] text-white px-6 py-[10px] rounded-full text-sm font-medium hover:bg-[#40767A]"
                    >
                        Add FAQS
                    </button>

                </div>

                <table className="w-full text-[12px] text-left text-[#1C252E]">
                    <thead className="bg-[#F5F5F5] text-[#637381] font-semibold">
                        <tr>
                            <th className="px-6 py-5">FAQ Name</th>
                            <th className="px-6 py-5">Answer</th>
                            <th className="px-6 py-5"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentFaqs.map((faq, idx) => (
                            <tr key={idx} className="border-t hover:bg-[#F5F5F5]">
                                <td className="px-6 py-4">{faq.question}</td>
                                <td className="px-6 py-4">{faq.answer}</td>
                                <td className="px-6 py-4 flex gap-2">
                                    <button
                                        onClick={() => openEditModal(idx)}
                                        className="w-10 h-10 rounded-full bg-[#EDF5F6] flex items-center justify-center text-[#4B8378] hover:bg-[#D6EEEE]"
                                    >
                                        <LuPencil size={18} />
                                    </button>

                                    <button
                                        onClick={() => openDeleteModal(idx)}
                                        className="w-10 h-10 rounded-full bg-[#FDEEEE] flex items-center justify-center text-[#D95057] hover:bg-[#FCD5D5]"
                                    >
                                        <FiTrash size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-end items-center mt-4 text-sm text-gray-500 gap-3 px-6">
                    <span>
                        {startIndex + 1}–{Math.min(startIndex + itemsPerPage, faqData.length)} of {faqData.length}
                    </span>
                    <button onClick={handlePrev} disabled={currentPage === 1} className="px-2 py-1 rounded hover:bg-gray-100 disabled:text-gray-300">
                        &#x276E;
                    </button>
                    <button onClick={handleNext} disabled={currentPage === totalPages} className="px-2 py-1 rounded hover:bg-gray-100 disabled:text-gray-300">
                        &#x276F;
                    </button>
                </div>
            </div>

            {/* Delete Modal */}
            {showDeleteModal && (
                <DeleteModal onCancel={() => setShowDeleteModal(false)} onConfirm={confirmDelete} />
            )}

            {/* Add faq Modal */}
            {showAddModal && (
                <AddFaqModal
                    onCancel={() => setShowAddModal(false)}
                    onSubmit={handleAddFaq}
                />
            )}
            {showEditModal && editIndex !== null && (
                <EditFaqModal
                    initialQuestion={faqData[startIndex + editIndex].question}
                    initialAnswer={faqData[startIndex + editIndex].answer}
                    onCancel={() => setShowEditModal(false)}
                    onSave={handleSaveFaq}
                />
            )}

        </>
    )
}