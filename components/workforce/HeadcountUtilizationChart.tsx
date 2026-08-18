"use client";

import { usePropertyFilter } from "@/components/filters/DashboardFilters";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { property: "Head Office", utilization: 77.3 },
  { property: "Siyam World", utilization: 91.5 },
  { property: "Olhuveli", utilization: 86.5 },
  { property: "Iru Fushi", utilization: 89.5 },
  { property: "Vilu Reef", utilization: 83.5 },
  { property: "Iru Veli", utilization: 87.2 },
];

export default function HeadcountUtilizationChart() {
  const filteredData = usePropertyFilter(data);
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-[#153246]">
          Headcount Utilization
        </h2>

        <span className="rounded-full bg-[#edf8f6] px-3 py-1 text-xs font-medium text-[#167d78]">
          By property
        </span>
      </div>

      <div className="min-h-[330px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={filteredData}
            margin={{
              top: 0,
              right: 0,
              left: -12,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#e6e1d8"
              vertical={false}
            />

            <XAxis
              dataKey="property"
              axisLine={{ stroke: "#d9d3c9" }}
              tickLine={false}
              tick={{
                fill: "#5f6368",
                fontSize: 12,
              }}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#5f6368",
                fontSize: 12,
              }}
            />

            <Tooltip
              formatter={(value) => [`${value}%`, "Utilization"]}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            />

            <Bar
              dataKey="utilization"
              fill="#17827d"
              maxBarSize={72}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}