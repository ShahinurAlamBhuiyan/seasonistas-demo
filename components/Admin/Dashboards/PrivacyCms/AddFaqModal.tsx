'use client'

import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

type Props = {
    onCancel: () => void
    onSubmit: (question: string, answer: string) => void
}

const AddFaqModal = ({ onCancel, onSubmit }: Props) => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')



    const handleSubmit = () => {
        if (question.trim() && answer.trim()) {
            onSubmit(question, answer)
            setQuestion('')
            setAnswer('')
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md text-left relative">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                    onClick={onCancel}
                >
                    <RxCross2 />
                </button>
                <h3 className="text-lg font-semibold text-[#1C252E] mb-4">Add FAQ’S</h3>

                <input
                    type="text"
                    placeholder="Question"
                    className="w-full border border-gray-300 px-4 py-3 rounded-full text-sm mb-4"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />

                <textarea
                    placeholder="Answer"
                    rows={5}
                    className="w-full border border-gray-300 px-4 py-3 rounded-xl text-sm mb-6"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />

                <div className="flex justify-end gap-4">
                    <button
                        onClick={onCancel}
                        className="px-6 py-2 border rounded-full text-black font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-[#559093] text-white rounded-full font-medium"
                    >
                        Add FAQ’S
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddFaqModal
