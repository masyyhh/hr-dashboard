import PageHeader from "@/components/layout/PageHeader";

import ManagementMetricCard from "@/components/management/ManagementMetricCard";
import ManagementActionRegister from "@/components/management/ManagementActionRegister";

const metrics = [
  {
    label: "Critical",
    value: "3",
    tone: "danger",
  },
  {
    label: "High Priority",
    value: "4",
    tone: "warning",
  },
  {
    label: "Overdue",
    value: "0",
    tone: "default",
  },
  {
    label: "Completed",
    value: "0",
    tone: "success",
  },
] as const;

const monthOptions = [
  "Jun 2026",
  "May 2026",
  "Apr 2026",
  "Mar 2026",
  "Feb 2026",
  "Jan 2026",
];

const propertyOptions = [
  "All properties",
  "Head Office",
  "Siyam World",
  "Olhuveli",
  "Iru Fushi",
  "Vilu Reef",
  "Iru Veli",
];

const cardStyle =
  "overflow-hidden rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.025)]";

export default function ManagementActionsPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] p-4 md:p-6">
      <div className="mx-auto max-w-[1500px]">
        <PageHeader
          title="Management Actions"
          defaultMonth="Jun 2026"
          monthOptions={monthOptions}
          defaultProperty="All properties"
          propertyOptions={propertyOptions}
          filterOrder="month-first"
        />

        <div className="space-y-5">
          {/* KPI ROW */}
          <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <ManagementMetricCard
                key={metric.label}
                {...metric}
              />
            ))}
          </section>

          {/* ACTION REGISTER */}
          <section className={cardStyle}>
            <ManagementActionRegister />
          </section>
        </div>
      </div>
    </main>
  );
}