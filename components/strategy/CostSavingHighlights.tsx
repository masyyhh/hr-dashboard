"use client";

import { usePropertyFilter } from "@/components/filters/DashboardFilters";

const savings = [
  {
    property: "Siyam World",
    action: "OT, recruitment hold, trips",
  },
  {
    property: "Vilu Reef",
    action: "Leave liability, NPL, AC",
  },
  {
    property: "Iru Fushi",
    action: "Recruitment hold, leave",
  },
  {
    property: "Olhuveli",
    action: "Positions on hold, ferry charges",
  },
];

export default function CostSavingHighlights() {
  const filteredSavings = usePropertyFilter(savings);
  return (
    <div>
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 className="text-[18px] font-bold tracking-[-0.3px] text-[#102b3d]">
          Cost Saving Highlights
        </h2>

        <span className="shrink-0 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Validate before roll-up
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px]">
          <thead>
            <tr className="border-b border-[#e7e4df]">
              <th className="px-2 py-3 text-left text-sm font-semibold text-[#74818d]">
                Property
              </th>

              <th className="px-2 py-3 text-right text-sm font-semibold text-[#74818d]">
                Saving / Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredSavings.map((row) => (
              <tr
                key={row.property}
                className="border-b border-[#ece8e1] last:border-b-0"
              >
                <td className="px-2 py-4 text-sm font-medium text-[#102b3d]">
                  {row.property}
                </td>

                <td className="px-2 py-4 text-right text-sm text-[#102b3d]">
                  {row.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}