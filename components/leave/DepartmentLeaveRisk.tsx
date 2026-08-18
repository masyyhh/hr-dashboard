"use client";

import { usePropertyFilter } from "@/components/filters/DashboardFilters";

const rows = [
  {
    department: "Engineering",
    property: "Olhuveli",
    hc: 167,
    closingBalance: "7,016.4",
    avgStaff: "42.01",
    risk: "High",
  },
  {
    department: "Human Resources",
    property: "Olhuveli",
    hc: 91,
    closingBalance: "3,834.3",
    avgStaff: "42.14",
    risk: "High",
  },
  {
    department: "Executive Office",
    property: "Head Office",
    hc: 7,
    closingBalance: "436",
    avgStaff: "62.29",
    risk: "High",
  },
  {
    department: "Food & Beverage",
    property: "Iru Fushi",
    hc: 186,
    closingBalance: "5,320.6",
    avgStaff: "28.61",
    risk: "Medium",
  },
  {
    department: "Housekeeping",
    property: "Iru Veli",
    hc: 103,
    closingBalance: "2,180.4",
    avgStaff: "21.17",
    risk: "Low",
  },
];

function riskClass(risk: string) {
  switch (risk) {
    case "High":
      return "bg-[#fff0ee] text-[#c84a45]";
    case "Medium":
      return "bg-[#fff6e6] text-[#d68d20]";
    default:
      return "bg-[#edf8f3] text-[#23845e]";
  }
}

export default function DepartmentLeaveRisk() {
  const filteredRows = usePropertyFilter(rows);
  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-[18px] font-bold text-[#102b3d]">
          Department Leave Risk
        </h2>

        <span className="rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Drill-down example
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-2 py-4 text-left text-sm font-semibold text-[#6f7d87]">
                Department
              </th>

              <th className="px-2 py-4 text-left text-sm font-semibold text-[#6f7d87]">
                Property
              </th>

              <th className="px-2 py-4 text-right text-sm font-semibold text-[#6f7d87]">
                HC
              </th>

              <th className="px-2 py-4 text-right text-sm font-semibold text-[#6f7d87]">
                Closing Balance
              </th>

              <th className="px-2 py-4 text-right text-sm font-semibold text-[#6f7d87]">
                Avg / Staff
              </th>

              <th className="px-2 py-4 text-right text-sm font-semibold text-[#6f7d87]">
                Risk
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.map((row) => (
              <tr
                key={`${row.department}-${row.property}`}
                className="border-b border-gray-100 last:border-b-0"
              >
                <td className="px-2 py-4 text-sm font-medium text-[#153246]">
                  {row.department}
                </td>

                <td className="px-2 py-4 text-sm text-[#153246]">
                  {row.property}
                </td>

                <td className="px-2 py-4 text-right text-sm text-[#153246]">
                  {row.hc}
                </td>

                <td className="px-2 py-4 text-right text-sm text-[#153246]">
                  {row.closingBalance}
                </td>

                <td className="px-2 py-4 text-right text-sm text-[#153246]">
                  {row.avgStaff}
                </td>

                <td className="px-2 py-4 text-right">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${riskClass(
                      row.risk
                    )}`}
                  >
                    {row.risk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}