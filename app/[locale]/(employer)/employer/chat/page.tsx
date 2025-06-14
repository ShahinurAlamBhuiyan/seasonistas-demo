'use client'

import { useEffect, useState } from 'react'
import ChatSidebar from '~/components/Chat/ChatSidebar'
import ChatWindow from '~/components/Chat/ChatWindow'
import { dummyUsers } from '~/components/Chat/dummyUsers'
import { userMessages } from '~/components/Chat/userMessages'
const ChatPage = () => {
    const [selectedId, setSelectedId] = useState<number | null>(1)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const selectedUser = dummyUsers.find(u => u.id === selectedId) || dummyUsers[0]

    return (
        <div className="h-[calc(100vh-70px)] w-full flex flex-col">
            {/* Page Header */}
            <div className="mb-4 px-4 md:px-0">
                <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4">Chat</h1>
                <div className="text-sm flex gap-2 mt-2">
                    <p className="text-sm leading-[22px] font-[400] text-[#1C252E]">Overview <span className='text-[#919EAB]'>• Message</span></p>
                </div>
            </div>

            {/* Chat Layout */}
            <div className="flex flex-1 flex-col md:flex-row h-full border rounded-lg overflow-hidden">
                {/* Show Sidebar on Desktop or when no chat is selected (on mobile) */}
                {(!selectedId && isMobile) || !isMobile ? (
                    <div className="w-full md:w-[300px] h-full">
                        <ChatSidebar users={dummyUsers} activeId={selectedId} onSelect={setSelectedId} />
                    </div>
                ) : null}

                {/* Show ChatWindow on Desktop or when a chat is selected (on mobile) */}
                {selectedId && (
                    <div className="flex-1 h-full">
                        <ChatWindow
                            user={selectedUser}
                            messages={userMessages[selectedId] || []}
                            onBack={isMobile ? () => setSelectedId(null) : undefined}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChatPage
