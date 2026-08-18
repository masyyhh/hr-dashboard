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
  { property: "Head Office", balance: 7037.5 },
  { property: "Olhuveli", balance: 37863 },
  { property: "Iru Veli", balance: 9047.4 },
];

export default function LeaveBalanceChart() {
  const filteredData = usePropertyFilter(data);
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[18px] font-bold text-[#102b3d]">
          Leave Balance by Property
        </h2>

        <span className="rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Sample
        </span>
      </div>

      <div className="min-h-[330px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={filteredData}
            margin={{
              top: 5,
              right: 5,
              left: 5,
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
              domain={[0, 40000]}
              ticks={[
                0,
                5000,
                10000,
                15000,
                20000,
                25000,
                30000,
                35000,
                40000,
              ]}
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#5f6368",
                fontSize: 11,
              }}
              tickFormatter={(value) =>
                value === 0 ? "0" : `${value / 1000},000`
              }
            />

            <Tooltip
              formatter={(value) => [
                Number(value).toLocaleString(),
                "Closing Balance",
              ]}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
            />

            <Bar
              dataKey="balance"
              fill="#16827d"
              maxBarSize={90}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}