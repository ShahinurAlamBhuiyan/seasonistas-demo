'use client'

import Image from "next/image"
import meImg from '~/app/assets/employer/chat/me.png'
import { FaPaperclip } from "react-icons/fa6"
import { IoMdSend } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"

const ChatWindow = ({
    user,
    messages,
    onBack,
}: {
    user: any
    messages: { sender: 'me' | 'them'; text: string; time: string }[]
    onBack?: () => void
}) => {
    return (
        <div className="flex flex-col h-full w-full">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b shrink-0">
                {/* Back button on mobile */}
                {onBack && (
                    <button onClick={onBack} className="md:hidden text-[#4F9F9F]">
                        <IoIosArrowBack size={24} />
                    </button>
                )}
                <Image
                    src={user.avatar}
                    alt={user.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.role} &nbsp; {user.company}</p>
                </div>
            </div>

            {/* Message Area and Input */}
            <div className="flex flex-col flex-1 justify-between">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-4">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`flex items-end gap-3 max-w-[85%] sm:max-w-[70%] 
                                    ${msg.sender === 'me' ? 'flex-row-reverse' : ''}`}
                            >
                                {/* Avatar */}
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 shrink-0 overflow-hidden">
                                    <Image
                                        src={msg.sender === 'me' ? meImg : user.avatar}
                                        alt="avatar"
                                        width={48}
                                        height={48}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Message Bubble */}
                                <div
                                    className={`p-4 rounded-[20px] ${msg.sender === 'me' ? 'rounded-br-[4px] bg-[#FAFAFA] text-black' : 'rounded-bl-[4px] bg-[#4F9F9F] text-white'}`}
                                >
                                    <p className="text-sm">{msg.text}</p>
                                    <p className="text-xs mt-2 text-gray-400 text-right">{msg.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="border-t p-4 bg-white shrink-0">
                    <div className="flex items-center border rounded-full px-4 py-2 bg-white">
                        <FaPaperclip className="text-gray-500 mr-3 cursor-pointer" />
                        <input
                            type="text"
                            placeholder="Write Here"
                            className="flex-1 focus:outline-none text-sm"
                        />
                        <button className="ml-3 text-[#4F9F9F]">
                            <IoMdSend size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatWindow
