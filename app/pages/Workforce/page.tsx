import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/layout/Card";

import StatCard from "@/components/dashboard/StatCard";

import HeadcountUtilizationChart from "@/components/workforce/HeadcountUtilizationChart";
import WorkforceTurnoverChart from "@/components/workforce/WorkforceTurnoverChart";
import LocalExpatChart from "@/components/workforce/LocalExpatChart";
import GenderDistributionChart from "@/components/workforce/GenderDistributionChart";
import WorkforceSnapshot from "@/components/workforce/WorkforceSnapshot";

const stats = [
  {
    title: "Approved HC",
    value: "4,145",
    subtitle: "Approved workforce",
  },
  {
    title: "Actual HC",
    value: "3,612",
    subtitle: "Current workforce",
  },
  {
    title: "HC Gap",
    value: "533",
    subtitle: "Open positions",
    valueColor: "text-[#df9223]",
  },
  {
    title: "New Hires",
    value: "38",
    subtitle: "June 2026",
  },
];

export default function WorkforcePage() {
  return (
    <PageShell>
      <PageHeader
        title="Workforce"
        defaultMonth="June"
      />

      <div className="space-y-5">
        {/* KPI cards */}
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              {...stat}
              showChart={false}
            />
          ))}
        </section>

        {/* Chart row */}
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <Card className="min-h-[430px] p-6">
            <HeadcountUtilizationChart />
          </Card>

          <Card className="min-h-[430px] p-6">
            <WorkforceTurnoverChart />
          </Card>
        </section>

        {/* Diversity row */}
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <Card className="min-h-[430px] p-6">
            <LocalExpatChart />
          </Card>

          <Card className="min-h-[430px] p-6">
            <GenderDistributionChart />
          </Card>
        </section>

        {/* Table */}
        <Card className="p-6">
          <WorkforceSnapshot />
        </Card>
      </div>
    </PageShell>
  );
}