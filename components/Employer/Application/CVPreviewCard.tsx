import { FaFilePdf } from 'react-icons/fa'

const CVPreviewCard = () => {
    return (
        <div className="flex items-center justify-between p-4 rounded-lg border border-[#E0E0E0]">
            <div className="flex items-center gap-2">
                <FaFilePdf className="text-[#559092]" size={24} />
                <div>
                    <p className="text-sm font-semibold">Hammad CV.PDF</p>
                    <p className="text-xs text-[#767676]">Resume File</p>
                </div>
            </div>

            <div className="flex gap-3">
                <button className="text-[12px] font-[400] border border-[#E0E0E0] px-4 py-1 rounded-full">View CV</button>
                <button className="text-[12px] font-[400] bg-[#559092] text-white px-4 py-1 rounded-full">Download</button>
            </div>
        </div>
    )
}

export default CVPreviewCard
