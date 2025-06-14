export default function AreaStatsTable() {
    const rows = [
        { area: 'New York', businesses: 15, employees: 15 },
        { area: 'London', businesses: 15, employees: 15 },
        { area: 'New York', businesses: 15, employees: 15 },
        { area: 'London', businesses: 15, employees: 15 },
        { area: 'New York', businesses: 15, employees: 15 },
        { area: 'London', businesses: 15, employees: 15 },
        { area: 'New York', businesses: 15, employees: 15 },
        { area: 'London', businesses: 15, employees: 15 },
    ];

    return (
        <div className="bg-white rounded-2xl p-0 overflow-hidden w-full">
            <table className="w-full text-sm text-left mt-4">
                {/* Table Header */}
                <thead className="bg-[#F5F5F5] text-[#637381] text-[14px] font-medium ">
                    <tr>
                        <th className="px-5 py-3">Area</th>
                        <th className="px-5 py-3">Businesses</th>
                        <th className="px-5 py-3">Employee</th>
                    </tr>
                </thead>

                {/* Table Rows */}
                <tbody className="text-[12px] font-[400] text-[#1C252E]">
                    {rows.map((row, idx) => (
                        <tr key={idx} className="border-t border-[#F0F0F0]">
                            <td className="px-5 py-4 font-medium">{row.area}</td>
                            <td className="px-5 py-4">{row.businesses} Businesses</td>
                            <td className="px-5 py-4">{row.employees} Employee</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
