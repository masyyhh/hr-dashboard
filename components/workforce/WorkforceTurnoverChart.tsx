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
  { property: "Head Office", turnover: 4 },
  { property: "Siyam World", turnover: 12.6 },
  { property: "Olhuveli", turnover: 12.4 },
  { property: "Iru Fushi", turnover: 17.3 },
  { property: "Vilu Reef", turnover: 15.3 },
  { property: "Iru Veli", turnover: 18.2 },
];

export default function WorkforceTurnoverChart() {
  const filteredData = usePropertyFilter(data);
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-[#153246]">
          YTD Turnover
        </h2>

        <span className="rounded-full bg-[#edf8f6] px-3 py-1 text-xs font-medium text-[#167d78]">
          Jan–Jun
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
              bottom: 20,
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
              angle={-18}
              textAnchor="end"
              height={55}
              tick={{
                fill: "#5f6368",
                fontSize: 11,
              }}
            />

            <YAxis
              domain={[0, 20]}
              ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#5f6368",
                fontSize: 12,
              }}
            />

            <Tooltip
              formatter={(value) => [`${value}%`, "Turnover"]}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
            />

            <Bar
              dataKey="turnover"
              fill="#5798aa"
              maxBarSize={55}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}