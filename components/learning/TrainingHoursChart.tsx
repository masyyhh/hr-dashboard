"use client";

import { usePropertyFilter } from "@/components/filters/DashboardFilters";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    property: "Siyam World",
    actual: 7.69,
    target: 12,
  },
  {
    property: "Olhuveli",
    actual: 9.7,
    target: 12,
  },
  {
    property: "Iru Fushi",
    actual: 12.25,
    target: 12,
  },
  {
    property: "Vilu Reef",
    actual: 8.34,
    target: 12,
  },
  {
    property: "Iru Veli",
    actual: 10.03,
    target: 12,
  },
];

export default function TrainingHoursChart() {
  const filteredData = usePropertyFilter(data);
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-[18px] font-bold tracking-[-0.3px] text-[#102b3d]">
          Training Hours/FTE vs Target
        </h2>

        <span className="shrink-0 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Target 12
        </span>
      </div>

      <div className="min-h-[330px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={filteredData}
            margin={{
              top: 4,
              right: 8,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#e7e4df"
            />

            <XAxis
              dataKey="property"
              tickLine={false}
              axisLine={{
                stroke: "#dedbd5",
              }}
              tick={{
                fill: "#5f6368",
                fontSize: 11,
              }}
            />

            <YAxis
              domain={[0, 14]}
              ticks={[0, 2, 4, 6, 8, 10, 12, 14]}
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#5f6368",
                fontSize: 11,
              }}
            />

            <Tooltip
              formatter={(value, name) => {
                if (name === "actual") {
                  return [value, "Actual"];
                }

                return [value, "Target"];
              }}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.08)",
              }}
            />

            <Legend
              verticalAlign="top"
              align="center"
              iconType="circle"
              iconSize={10}
              wrapperStyle={{
                paddingBottom: "12px",
                fontSize: "12px",
              }}
              formatter={(value) =>
                value === "actual" ? "Actual" : "Target"
              }
            />

            <Bar
              dataKey="actual"
              fill="#16827d"
              maxBarSize={88}
            />

            <Line
              type="monotone"
              dataKey="target"
              stroke="#cb4b4d"
              strokeWidth={3}
              dot={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}