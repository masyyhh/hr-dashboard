"use client";

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
  { property: "Iru Veli", turnover: 18.2 },
  { property: "Olhuveli", turnover: 12.4 },
  { property: "Siyam World", turnover: 12.6 },
  { property: "Iru Fushi", turnover: 17.3 },
  { property: "Vilu Reef", turnover: 15.3 },
  { property: "Head Office", turnover: 4 },
];

export default function TurnoverChart() {
  return (
    <div className="rounded-[24px] border border-[#e7e2da] bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-[#102b3d]">
          YTD turnover by property
        </h2>

        <span className="rounded-full bg-[#eef8f7] px-3 py-1 text-xs font-medium text-[#147c78]">
          Jan–Jun 2026
        </span>
      </div>

      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="#e8e5df" vertical={false} />

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
              domain={[0, 20]}
              ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
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
              }}
            />

            <Bar dataKey="turnover" fill="#5598aa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}