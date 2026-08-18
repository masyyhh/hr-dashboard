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
  { property: "Vilu Reef", local: 27, expat: 73 },
  { property: "Iru Veli", local: 29, expat: 71 },
];

export default function DiversityChart() {
  return (
    <div className="rounded-[24px] border border-[#e7e2da] bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-[#102b3d]">
          Local vs expat mix
        </h2>

        <span className="rounded-full bg-[#eef8f7] px-3 py-1 text-xs font-medium text-[#147c78]">
          Workforce diversity
        </span>
      </div>

      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
          >
            <CartesianGrid stroke="#e8e5df" vertical={false} />

            <XAxis
              dataKey="property"
              axisLine={{ stroke: "#ded9d1" }}
              tickLine={false}
              angle={-18}
              textAnchor="end"
              height={60}
              tick={{
                fill: "#555",
                fontSize: 12,
              }}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#555",
                fontSize: 12,
              }}
            />

            <Tooltip />

            <Legend
              verticalAlign="top"
              align="center"
              iconType="circle"
              wrapperStyle={{
                paddingBottom: "18px",
                fontSize: "13px",
              }}
            />

            <Bar
              dataKey="local"
              name="Local %"
              stackId="mix"
              fill="#75b9b5"
            />

            <Bar
              dataKey="expat"
              name="Expat %"
              stackId="mix"
              fill="#d39ab9"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}