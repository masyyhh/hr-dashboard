"use client";

import { usePropertyFilter } from "@/components/filters/DashboardFilters";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { property: "Head Office", male: 73, female: 27 },
  { property: "Siyam World", male: 87, female: 13 },
  { property: "Olhuveli", male: 85, female: 15 },
  { property: "Iru Fushi", male: 88, female: 12 },
  { property: "Vilu Reef", male: 88, female: 12 },
  { property: "Iru Veli", male: 89, female: 11 },
];

export default function GenderDistributionChart() {
  const filteredData = usePropertyFilter(data);
  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-[#153246]">
          Gender Distribution
        </h2>

        <span className="rounded-full bg-[#edf8f6] px-3 py-1 text-xs font-medium text-[#167d78]">
          Diversity
        </span>
      </div>

      <div className="min-h-[340px] flex-1">
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
              formatter={(value) => `${value}%`}
            />

            <Legend
              verticalAlign="top"
              align="center"
              iconType="circle"
              iconSize={12}
              wrapperStyle={{
                paddingBottom: "12px",
                fontSize: "12px",
              }}
            />

            <Bar
              dataKey="male"
              name="Male"
              stackId="gender"
              fill="#5c9dd5"
              maxBarSize={68}
            />

            <Bar
              dataKey="female"
              name="Female"
              stackId="gender"
              fill="#df9fb9"
              maxBarSize={68}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}