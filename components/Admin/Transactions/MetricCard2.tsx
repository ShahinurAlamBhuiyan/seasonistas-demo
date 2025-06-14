import Image from 'next/image'


type Props = {
    title: string
    value: string
    bars: number[]
    barColor: string;
}

const MetricCard = ({ title, value, bars, barColor }: Props) => {

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm w-full flex flex-col justify-center gap-3 max-h-[162px]">
            {/* Title */}
            <p className="text-[14px] font-[500] leading-[22px] text-[#1C252E]">{title}</p>

            {/* Value + Bar Chart */}
            <div className="flex justify-between items-end mt-1">
                <h2 className="text-[32px] font-[700] leading-[48px] text-[#11142D]">{value}</h2>
                <div className="flex items-end gap-[2px] h-12">
                    {bars.map((height, index) => (
                        <div
                            key={index}
                            className=" w-[5px] rounded-sm"
                            style={{ height: `${height + 10}px`, backgroundColor: barColor }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MetricCard
