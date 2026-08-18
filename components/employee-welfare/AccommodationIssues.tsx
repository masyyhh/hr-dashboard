"use client";

import { usePropertyFilter } from "@/components/filters/DashboardFilters";

const issues = [
  {
    property: "Siyam World",
    description:
      "Shortage of 2-share and 6-share beds.",
    level: "high",
  },
  {
    property: "Olhuveli",
    description:
      "Demolition completed; work in progress.",
    level: "high",
  },
  {
    property: "Vilu Reef",
    description:
      "Additional accommodation capacity required.",
    level: "medium",
  },
  {
    property: "Iru Veli",
    description:
      "Accommodation occupancy remains under review.",
    level: "medium",
  },
];

export default function AccommodationIssues() {
  const filteredIssues = usePropertyFilter(issues);
  return (
    <div>
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 className="text-[18px] font-bold tracking-[-0.3px] text-[#102b3d]">
          Accommodation Issues
        </h2>

        <span className="shrink-0 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Narrative risks
        </span>
      </div>

      <div className="space-y-3">
        {filteredIssues.map((issue) => (
          <div
            key={issue.property}
            className={`rounded-[16px] border px-4 py-4 ${
              issue.level === "high"
                ? "border-[#f2ceca] bg-[#fff8f6]"
                : "border-[#f0dfba] bg-[#fffaf1]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[16px] font-bold text-[#102b3d]">
                  {issue.property}
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#6f6663]">
                  {issue.description}
                </p>
              </div>

              <span
                className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                  issue.level === "high"
                    ? "bg-[#cb4b4d]"
                    : "bg-[#df9223]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}