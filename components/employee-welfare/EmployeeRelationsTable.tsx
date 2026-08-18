"use client";

import { usePropertyFilter } from "@/components/filters/DashboardFilters";

const relations = [
  {
    property: "Head Office",
    cases: 0,
    pending: 0,
    resolved: 0,
  },
  {
    property: "Siyam World",
    cases: 18,
    pending: 0,
    resolved: 18,
  },
  {
    property: "Olhuveli",
    cases: 18,
    pending: 1,
    resolved: 18,
  },
  {
    property: "Iru Fushi",
    cases: 6,
    pending: 0,
    resolved: 6,
  },
];

export default function EmployeeRelationsCard() {
  const filteredRelations = usePropertyFilter(relations);
  return (
    <div className="h-full">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h2 className="text-[18px] font-bold tracking-[-0.3px] text-[#102b3d]">
          Employee Relations
        </h2>

        <span className="shrink-0 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Case status
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[430px]">
          <thead>
            <tr className="border-b border-[#e7e4df]">
              <th className="px-2 py-3 text-left text-sm font-semibold text-[#74818d]">
                Property
              </th>

              <th className="px-2 py-3 text-right text-sm font-semibold text-[#74818d]">
                Cases
              </th>

              <th className="px-2 py-3 text-right text-sm font-semibold text-[#74818d]">
                Pending
              </th>

              <th className="px-2 py-3 text-right text-sm font-semibold text-[#74818d]">
                Resolved
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredRelations.map((row) => (
              <tr
                key={row.property}
                className="border-b border-[#ece8e1] last:border-b-0"
              >
                <td className="px-2 py-4 text-sm font-medium text-[#102b3d]">
                  {row.property}
                </td>

                <td className="px-2 py-4 text-right text-sm tabular-nums text-[#102b3d]">
                  {row.cases}
                </td>

                <td className="px-2 py-4 text-right text-sm tabular-nums text-[#102b3d]">
                  {row.pending}
                </td>

                <td className="px-2 py-4 text-right text-sm tabular-nums text-[#102b3d]">
                  {row.resolved}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}