import PageHeader from "@/components/layout/PageHeader";

import WelfareMetricCard from "@/components/employee-welfare/WelfareMetricCard";
import AdditionalBedsChart from "@/components/employee-welfare/AdditionalBedsChart";
import EmployeeRelationsCard from "@/components/employee-welfare/EmployeeRelationsTable";
import AccommodationIssues from "@/components/employee-welfare/AccommodationIssues";

const metrics = [
  {
    label: "Total Beds",
    value: "3,961",
    tone: "default",
  },
  {
    label: "Beds Occupied",
    value: "3,684",
    tone: "default",
  },
  {
    label: "Additional Beds Needed",
    value: "316",
    tone: "danger",
  },
  {
    label: "Relations Cases",
    value: "42+",
    subtitle: "Based on reported cases",
    tone: "default",
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

export default function EmployeeWelfarePage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] p-4 md:p-6">
      <div className="mx-auto max-w-[1500px]">
        <PageHeader
          title="Employee Welfare & Relations"
          defaultMonth="Jun 2026"
          monthOptions={monthOptions}
          defaultProperty="All properties"
          propertyOptions={propertyOptions}
          filterOrder="month-first"
        />

        <div className="space-y-5">
          {/* KPI CARDS */}
          <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <WelfareMetricCard
                key={metric.label}
                {...metric}
              />
            ))}
          </section>

          {/* CHART + RELATIONS */}
          <section className="grid grid-cols-1 items-stretch gap-5 xl:grid-cols-5">
            <div
              className={`${cardStyle} min-h-[440px] xl:col-span-3`}
            >
              <AdditionalBedsChart />
            </div>

            <div
              className={`${cardStyle} min-h-[440px] xl:col-span-2`}
            >
              <EmployeeRelationsCard />
            </div>
          </section>

          {/* ACCOMMODATION ISSUES */}
          <section className={cardStyle}>
            <AccommodationIssues />
          </section>
        </div>
      </div>
    </main>
  );
}