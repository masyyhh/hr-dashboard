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
  {
    property: "Head Office",
    bedsNeeded: 0,
  },
  {
    property: "Siyam World",
    bedsNeeded: 176,
  },
  {
    property: "Olhuveli",
    bedsNeeded: 32,
  },
  {
    property: "Iru Fushi",
    bedsNeeded: 0,
  },
  {
    property: "Vilu Reef",
    bedsNeeded: 54,
  },
  {
    property: "Iru Veli",
    bedsNeeded: 54,
  },
];

export default function AdditionalBedsChart() {
  const filteredData = usePropertyFilter(data);
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 className="text-[18px] font-bold tracking-[-0.3px] text-[#102b3d]">
          Additional Beds Required
        </h2>

        <span className="shrink-0 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Accommodation
        </span>
      </div>

      <div className="min-h-[340px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={filteredData}
            margin={{
              top: 4,
              right: 8,
              left: -10,
              bottom: 0,
            }}
            barCategoryGap="28%"
          >
            <CartesianGrid
              vertical={false}
              stroke="#e7e4df"
            />

            <XAxis
              dataKey="property"
              interval={0}
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
              domain={[0, 180]}
              ticks={[
                0,
                20,
                40,
                60,
                80,
                100,
                120,
                140,
                160,
                180,
              ]}
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#5f6368",
                fontSize: 11,
              }}
            />

            <Tooltip
              formatter={(value) => [
                Number(value).toLocaleString(),
                "Beds needed",
              ]}
              cursor={{
                fill: "rgba(223,146,35,0.05)",
              }}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.08)",
              }}
              labelStyle={{
                color: "#102b3d",
                fontWeight: 600,
              }}
            />

            <Bar
              dataKey="bedsNeeded"
              fill="#c99c49"
              maxBarSize={80}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}