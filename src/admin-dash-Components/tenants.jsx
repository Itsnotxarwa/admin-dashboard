import KpiCards from "./kpiCards";

export default function Tenants() {
    return (
    <div className="p-4">
        <div className="flex justify-start items-start gap-2 mb-4">
            <h1 className=" mb-4 font-syne text-[22px] font-bold tracking-[-0.5px]">Tenants</h1>
            <p>/Overview</p>
        </div>
        <div className="py-6">
            <KpiCards />
        </div>
    </div>
)
}