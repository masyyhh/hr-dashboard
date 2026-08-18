const kpis = [
  {
    name: "Turnover",
    actual: "Actual 1.63% · Target <2%",
    status: "On track",
    dot: "bg-[#2c956b]",
    statusColor: "text-[#25885f]",
  },
  {
    name: "Training hours / FTE",
    actual: "Actual 9.60 · Target 12",
    status: "Gap 2.40",
    dot: "bg-[#df9223]",
    statusColor: "text-[#df9223]",
  },
  {
    name: "Absenteeism",
    actual: "Actual 3.25% · Target <1.5%",
    status: "Above target",
    dot: "bg-[#cb474b]",
    statusColor: "text-[#cb474b]",
  },
];

export default function KpiStatusCard() {
  return (
    <div className="rounded-[24px] border border-[#e7e2da] bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#102b3d]">
          KPI status
        </h2>

        <span className="rounded-full bg-[#eef8f7] px-3 py-1 text-xs font-medium text-[#147c78]">
          Target vs actual
        </span>
      </div>

      <div>
        {kpis.map((kpi) => (
          <div
            key={kpi.name}
            className="flex items-center justify-between border-b border-[#e7e2da] py-4 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${kpi.dot}`} />

              <div>
                <p className="font-semibold text-[#102b3d]">
                  {kpi.name}
                </p>

                <p className="text-sm text-slate-500">
                  {kpi.actual}
                </p>
              </div>
            </div>

            <p className={`font-semibold ${kpi.statusColor}`}>
              {kpi.status}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 max-w-[500px] text-sm leading-5 text-slate-500">
        Tip: keep target KPIs in one compact scorecard so leadership can
        see exceptions immediately.
      </p>
    </div>
  );
}