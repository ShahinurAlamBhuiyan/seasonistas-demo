import Switch from "./Switch";

type SectionBlockProps = {
    index: number;
    title: string;
    desc?: string;
    children?: React.ReactNode;
    settings: any;
};

const SectionBlock = ({ index, title, desc, settings }: SectionBlockProps) => {
    return (
        <div key={index}>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-1/4">
                    <h3 className="text-[16px] sm:text-[18px] font-semibold leading-[24px]">{title}</h3>
                    <p className="text-[14px] sm:text-[16px] text-[#767676] leading-[20px] mt-1">{desc}</p>
                </div>
                <div className="w-full lg:w-3/4 flex flex-col gap-4">
                    {settings.map((item, i) => (
                        <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                            <div className="w-full sm:w-3/4">
                                <p className="text-[15px] font-medium mb-1">{item.title}</p>
                                <p className="text-sm text-[#767676]">{item.desc}</p>
                            </div>
                            <div className="sm:mr-4">
                                <Switch initial={item.initial} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionBlock;
