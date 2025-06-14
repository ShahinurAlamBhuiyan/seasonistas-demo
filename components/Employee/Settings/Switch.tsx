'use client'
import { useState } from 'react'

const Switch = ({ initial = false }: { initial?: boolean }) => {
    const [enabled, setEnabled] = useState(initial)

    return (
        <button
            onClick={() => setEnabled(!enabled)}
            className={`w-[40px] h-[22px] rounded-full relative transition-colors duration-300 ${enabled ? 'bg-[#559092]' : 'bg-[#DFE5E8]'
                }`}
        >
            <span
                className={`absolute left-1 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-white border-2 transition-all duration-300 ${enabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
            />
        </button>
    )
}

export default Switch;
