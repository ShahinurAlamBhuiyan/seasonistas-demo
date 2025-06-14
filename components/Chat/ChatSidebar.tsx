import Image from "next/image"
import { FiSearch } from 'react-icons/fi'

type ChatUser = {
    id: number
    name: string
    role: string
    company: string
    lastMessage: string
    avatar: any
    online: boolean
    unread: boolean
}

const ChatSidebar = ({
    users,
    activeId,
    onSelect,
}: {
    users: ChatUser[]
    activeId: number | null

    onSelect: (id: number) => void
}) => {
    return (
        <div className="w-full md:w-[300px] h-full flex flex-col bg-white border-r">
            {/* Header  */}
            <div className="p-4 border-b">
                <h2 className="font-[400] text-[20px] leading-[24px] mb-2">Messages</h2>
                <div className="relative w-full">
                    <input
                        className="w-full p-2 pl-10 rounded-full border text-sm"
                        placeholder="Search messages"
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto px-2 py-2 space-y-2">
                {users.map((user) => (
                    <div
                        key={user.id}
                        onClick={() => onSelect(user.id)}
                        className={`flex items-center gap-3 px-4 py-[10px] cursor-pointer transition-colors
                            ${user.id === activeId
                                ? 'bg-[#559093] text-white'
                                : 'hover:bg-gray-100 text-black'
                            } rounded-[7px]`}
                    >
                        {/* Avatar with online dot */}
                        <div className="relative w-12 h-12 shrink-0">
                            <div className="w-full h-full rounded-full overflow-hidden bg-[#F3F2FF]">
                                <Image
                                    width={40}
                                    height={40}
                                    alt={user.name}
                                    src={user.avatar}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {user.online && (
                                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-[2px] border-white rounded-full" />
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                            <p className="font-medium text-sm truncate">{user.name}</p>
                            <p className="text-xs truncate">{user.lastMessage}</p>
                        </div>

                        {/* Unread Dot */}
                        {user.unread && (
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChatSidebar
