"use client";

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
  { property: "Head Office", local: 45, expat: 55 },
  { property: "Siyam World", local: 25, expat: 75 },
  { property: "Olhuveli", local: 23, expat: 77 },
  { property: "Iru Fushi", local: 28, expat: 72 },
  { property: "Vilu Reef", local: 28, expat: 72 },
  { property: "Iru Veli", local: 29, expat: 71 },
];

export default function LocalExpatChart() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-[#153246]">
          Local vs Expat
        </h2>

        <span className="rounded-full bg-[#edf8f6] px-3 py-1 text-xs font-medium text-[#167d78]">
          Diversity
        </span>
      </div>

      <div className="min-h-[340px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
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
              dataKey="local"
              name="Local"
              stackId="mix"
              fill="#74bbb7"
              maxBarSize={80}
            />

            <Bar
              dataKey="expat"
              name="Expat"
              stackId="mix"
              fill="#d49fbc"
              maxBarSize={80}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}