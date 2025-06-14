import { TiDocumentText } from "react-icons/ti";


type Props = {
    applicant: {
        name: string
        email: string
        phone: string
        date: string
        match: number
        // other fields if needed
    }
}

const ApplicationDetailsSection = ({ applicant }: Props) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
            <h2 className="text-lg font-semibold leading-[22px]">Application Detail</h2>

            {/* Questions Section */}
            <div className="space-y-4">
                {[1, 2, 3].map((num) => (
                    <div key={num}>
                        <p className="font-normal text-[16px] leading-[24px]"><span className="font-semibold">Question {num}:</span> What interest you about this role?</p>
                        <p className="text-sm text-[#767676] font-normal mt-1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                ))}
            </div>

            {/* CV Section */}
            <div>
                <h3 className="text-[16px] font-semibold leading-[22px]">Employee CV</h3>
                <div className="mt-2 p-4 border border-[#E4E4E4] rounded-lg flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center">
                    <div className="flex justify-center items-center">
                        <TiDocumentText size={45} className="text-[#919EAB]" />
                        <div>
                            <p className="font-medium text-sm">{applicant.name} CV.PDF</p>
                            <p className="text-xs text-[#1C1C1EB8]">Resume File</p>
                        </div>
                    </div>
                    <div className="flex  gap-2 ">
                        <button className="text-[10px]  border border-[#EBECF0] px-[20px] py-[10px] rounded-full">View CV</button>
                        <button className="text-[10px] font-medium bg-[#559092] text-white px-[20px] py-[10px] rounded-full">Download</button>
                    </div>
                </div>
            </div>

            {/* Experience */}
            <div className="border-y-2 border-[#EDEDED] py-6">
                <h3 className="text-[16px] font-semibold leading-[22px]">Experience</h3>
                <p className="text-sm font-medium leading-[22px] mt-1">UI/UX & Product Designer at Devscot Solution</p>
                <p className="text-xs text-[#767676] font-normal leading-[24px]">April 2022 - June 2022 (2 year 3 Month)</p>
            </div>

            {/* Education */}
            <div className="">
                <h3 className="text-[16px] font-semibold leading-[22px]">Education</h3>
                <p className="text-sm font-medium leading-[22px] mt-1">Agriculture University of Faisalabad</p>
                <p className="text-xs text-[#767676] font-normal leading-[24px]">April 2022 - June 2022</p>
            </div>
        </div>
    )
}

export default ApplicationDetailsSection
