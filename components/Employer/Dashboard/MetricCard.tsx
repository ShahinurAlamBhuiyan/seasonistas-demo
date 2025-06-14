import Image from 'next/image'
import risingArrow from '~/app/assets/employer/dashboard/risingArrow.png'
import fallingArrow from '~/app/assets/employer/dashboard/fallingArrow.png'

type Props = {
    title: string
    value: string
    change: number
    subtitle: string
    bars: number[]
}

const MetricCard = ({ title, value, change, subtitle, bars }: Props) => {
    const isNegative = change < 0

    const finalColor = isNegative ? 'red' : 'green'

    const barColor =
        finalColor === 'green'
            ? 'bg-[#00A76F]'
            : finalColor === 'red'
                ? 'bg-[#EF4444]'
                : 'bg-[#22C55E]'

    const percentColor =
        finalColor === 'green'
            ? 'text-[#00A76F]'
            : finalColor === 'red'
                ? 'text-red-600'
                : 'text-green-600'

    const arrowIcon = isNegative ? fallingArrow : risingArrow

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
                            className={`${barColor} w-[5px] rounded-sm`}
                            style={{ height: `${height + 10}px` }}
                        />
                    ))}
                </div>
            </div>

            {/* Change Info */}
            <div className="flex items-center gap-1 text-sm font-normal text-[#637381] mt-2">
                <Image src={arrowIcon} alt="change" width={25} height={25} />
                <span className={`font-semibold ${percentColor}`}>
                    {change > 0 ? `+${change}%` : `${change}%`}
                </span>
                <span>{subtitle}</span>
            </div>
        </div>
    )
}

export default MetricCard
