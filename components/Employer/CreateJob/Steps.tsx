
import { FiEdit2 } from 'react-icons/fi'

const Label = ({ title, value }: { title: string, value: string }) => (
    <div className="mb-3">
        <p className="text-[16px] leading-[22px] font-[500]">{title}</p>
        <p className="text-[14px] font-[400] leading-[24px] mt-[2px] text-[#767676]">{value}</p>
    </div>
)
const Steps = ({ formData }: any) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-[16px] shadow-sm space-y-4 relative">
                <h2 className="text-[18px] font-[600] leading-[22px]">Step 1</h2>
                <Label title="Job Title" value={formData.title} />
                <Label title="Job Location" value={formData.location} />
                <Label title="Job Category" value={formData.category} />
                <Label title="Post Visibility" value="Public Visibility" />
                <button className="absolute top-2 right-5 p-4 bg-[#EEF4F4] rounded-full  text-[#559093] hover:text-black">
                    <FiEdit2 size={16} />
                </button>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-[16px] shadow-sm space-y-4 relative">
                <h2 className="text-[18px] font-[600] leading-[22px]">Step 2</h2>
                <Label title="Responsibility" value={formData.responsibility} />
                <Label title="Requirements" value={formData.requirements} />
                <Label title="Description" value={formData.description} />
                <button className="absolute top-2 right-5 p-4 bg-[#EEF4F4] rounded-full  text-[#559093] hover:text-black">
                    <FiEdit2 size={16} />
                </button>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-[16px] shadow-sm space-y-4 relative">
                <h2 className="text-[18px] font-[600] leading-[22px]">Step 3</h2>
                <Label title="Salary" value={formData.salary} />
                <Label title="Job Type" value={formData.type} />
                <Label title="Required Skills" value={formData.skills} />
                <Label title="Deadline to Apply" value={formData.deadline} />
                <button className="absolute top-2 right-5 p-4 bg-[#EEF4F4] rounded-full  text-[#559093] hover:text-black">
                    <FiEdit2 size={16} />
                </button>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-[16px] shadow-sm space-y-4 relative">
                <h2 className="text-[18px] font-[600] leading-[22px]">Step 4</h2>
                <Label title="Question 1" value={formData.q1} />
                <Label title="Question 2" value={formData.q2} />
                <Label title="Question 3" value={formData.q3} />
                <Label title="Question 4" value={formData.q4} />
                <button className="absolute top-2 right-5 p-4 bg-[#EEF4F4] rounded-full  text-[#559093] hover:text-black">
                    <FiEdit2 size={16} />
                </button>
            </div>
        </div>
    )
}
export default Steps