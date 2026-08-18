const workforce = [
  {
    property: "Head Office",
    approved: "264",
    actual: "204",
    gap: "60",
    utilization: "77.3%",
    newHires: "4",
    turnover: "1.50%",
  },
  {
    property: "Siyam World",
    approved: "1,264",
    actual: "1,156",
    gap: "108",
    utilization: "91.5%",
    newHires: "15",
    turnover: "1.82%",
  },
  {
    property: "Olhuveli",
    approved: "1,203",
    actual: "1,041",
    gap: "162",
    utilization: "86.5%",
    newHires: "13",
    turnover: "0.86%",
  },
  {
    property: "Iru Fushi",
    approved: "612",
    actual: "548",
    gap: "64",
    utilization: "89.5%",
    newHires: "3",
    turnover: "1.64%",
  },
  {
    property: "Vilu Reef",
    approved: "370",
    actual: "309",
    gap: "61",
    utilization: "83.5%",
    newHires: "2",
    turnover: "2.27%",
  },
  {
    property: "Iru Veli",
    approved: "432",
    actual: "354",
    gap: "78",
    utilization: "81.9%",
    newHires: "1",
    turnover: "2.10%",
  },
];

export default function WorkforceSnapshot() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#e7e1d7] bg-white p-6 shadow-[0_4px_18px_rgba(0,0,0,0.025)]">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-[#153246]">
          Workforce Snapshot
        </h2>

        <span className="rounded-full bg-[#edf8f6] px-3 py-1 text-xs font-medium text-[#167d78]">
          June 2026
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-[#e2ddd4]">
              <th className="pb-4 pl-2 text-left text-sm font-semibold text-[#718087]">
                Property
              </th>

              <th className="pb-4 text-right text-sm font-semibold text-[#718087]">
                Approved
              </th>

              <th className="pb-4 text-right text-sm font-semibold text-[#718087]">
                Actual
              </th>

              <th className="pb-4 text-right text-sm font-semibold text-[#718087]">
                Gap
              </th>

              <th className="pb-4 text-right text-sm font-semibold text-[#718087]">
                Utilization
              </th>

              <th className="pb-4 text-right text-sm font-semibold text-[#718087]">
                New Hires
              </th>

              <th className="pb-4 pr-2 text-right text-sm font-semibold text-[#718087]">
                Monthly Turnover
              </th>
            </tr>
          </thead>

          <tbody>
            {workforce.map((row) => (
              <tr
                key={row.property}
                className="border-b border-[#e8e2d9] last:border-b-0"
              >
                <td className="py-4 pl-2 text-sm font-medium text-[#153246]">
                  {row.property}
                </td>

                <td className="py-4 text-right text-sm text-[#153246]">
                  {row.approved}
                </td>

                <td className="py-4 text-right text-sm text-[#153246]">
                  {row.actual}
                </td>

                <td className="py-4 text-right text-sm text-[#153246]">
                  {row.gap}
                </td>

                <td className="py-4 text-right text-sm text-[#153246]">
                  {row.utilization}
                </td>

                <td className="py-4 text-right text-sm text-[#153246]">
                  {row.newHires}
                </td>

                <td className="py-4 pr-2 text-right text-sm text-[#153246]">
                  {row.turnover}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}