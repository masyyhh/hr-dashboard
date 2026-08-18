"use client";

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
  { property: "Head Office", absenteeism: 5.1, target: 1.5 },
  { property: "Siyam World", absenteeism: 1.3, target: 1.5 },
  { property: "Olhuveli", absenteeism: 2.0, target: 1.5 },
  { property: "Iru Fushi", absenteeism: 5.5, target: 1.5 },
  { property: "Vilu Reef", absenteeism: 3.7, target: 1.5 },
  { property: "Iru Veli", absenteeism: 1.9, target: 1.5 },
];

export default function AbsenteeismChart() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[18px] font-bold text-[#102b3d]">
          Absenteeism vs Target
        </h2>

        <span className="rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Target 1.5%
        </span>
      </div>

      <div className="min-h-[330px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 5,
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
              axisLine={{ stroke: "#dedbd5" }}
              tick={{
                fill: "#5f6368",
                fontSize: 11,
              }}
            />

            <YAxis
              domain={[0, 6]}
              ticks={[0, 1, 2, 3, 4, 5, 6]}
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#5f6368",
                fontSize: 11,
              }}
            />

            <Tooltip
              formatter={(value, name) => {
                if (name === "absenteeism") {
                  return [`${value}%`, "Absenteeism"];
                }

                return [`${value}%`, "Target"];
              }}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            />

            <Legend
              verticalAlign="top"
              align="center"
              iconType="circle"
              iconSize={10}
              formatter={(value) =>
                value === "absenteeism" ? "Absenteeism %" : "Target"
              }
            />

            <Bar
              dataKey="absenteeism"
              fill="#cb4b4d"
              maxBarSize={72}
            />

            <Line
              type="monotone"
              dataKey="target"
              stroke="#258f68"
              strokeWidth={3}
              dot={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}