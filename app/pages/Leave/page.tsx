import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/layout/Card";

import StatCard from "@/components/dashboard/StatCard";

import AbsenteeismChart from "@/components/leave/AbsenteeismChart";
import LeaveBalanceChart from "@/components/leave/LeaveBalanceChart";
import DepartmentLeaveRisk from "@/components/leave/DepartmentLeaveRisk";

const stats = [
  {
    title: "Absenteeism",
    value: "3.25%",
    subtitle: "Target <1.5%",
    valueColor: "text-[#cb4b4d]",
  },
  {
    title: "HO Closing Leave",
    value: "7,037.5",
    subtitle: "Closing balance",
  },
  {
    title: "Olhuveli Closing Leave",
    value: "37,863",
    subtitle: "Closing balance",
  },
  {
    title: "Iru Veli Closing Leave",
    value: "9,047.4",
    subtitle: "Closing balance",
  },
];

export default function LeavePage() {
  return (
    <PageShell>
      <PageHeader
        title="Leave"
        defaultMonth="June"
      />

      <div className="space-y-5">
        {/* KPI CARDS */}
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              {...stat}
              showChart={false}
            />
          ))}
        </section>

        {/* CHARTS */}
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-5">
          <Card className="min-h-[430px] p-6 xl:col-span-3">
            <AbsenteeismChart />
          </Card>

          <Card className="min-h-[430px] p-6 xl:col-span-2">
            <LeaveBalanceChart />
          </Card>
        </section>

        {/* TABLE */}
        <Card className="p-6">
          <DepartmentLeaveRisk />
        </Card>
      </div>
    </PageShell>
  );
}