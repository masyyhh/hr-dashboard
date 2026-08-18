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
  { property: "Head Office", actual: 200, approved: 265 },
  { property: "Siyam World", actual: 1155, approved: 1265 },
  { property: "Olhuveli", actual: 1040, approved: 1200 },
  { property: "Iru Fushi", actual: 550, approved: 610 },
  { property: "Vilu Reef", actual: 310, approved: 370 },
  { property: "Iru Veli", actual: 350, approved: 430 },
];

export default function HeadcountChart() {
  return (
    <div className="rounded-[24px] border border-[#e7e2da] bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-[#102b3d]">
          Headcount utilization by property
        </h2>

        <span className="rounded-full bg-[#eef8f7] px-3 py-1 text-xs font-medium text-[#147c78]">
          Capacity view
        </span>
      </div>

      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            barGap={4}
          >
            <CartesianGrid
              stroke="#e8e5df"
              vertical={false}
              strokeDasharray="0"
            />

            <XAxis
              dataKey="property"
              axisLine={{ stroke: "#ded9d1" }}
              tickLine={false}
              tick={{
                fill: "#555",
                fontSize: 12,
              }}
            />

            <YAxis
              domain={[0, 1400]}
              ticks={[0, 200, 400, 600, 800, 1000, 1200, 1400]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#555",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.02)" }}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e7e2da",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              }}
            />

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
              dataKey="actual"
              name="Actual HC"
              fill="#147f7a"
              radius={[0, 0, 0, 0]}
            />

            <Bar
              dataKey="approved"
              name="Approved HC"
              fill="#dcebea"
              radius={[0, 0, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}