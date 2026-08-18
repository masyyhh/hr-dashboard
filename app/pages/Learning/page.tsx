import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/layout/Card";

import StatCard from "@/components/dashboard/StatCard";

import TrainingHoursChart from "@/components/learning/TrainingHoursChart";
import TrainingStatus from "@/components/learning/TrainingStatus";
import EngagementGallery from "@/components/learning/EngagementGallery";

const stats = [
  {
    title: "Group Hours/FTE",
    value: "9.60",
    subtitle: "Target 12",
    valueColor: "text-[#df9223]",
  },
  {
    title: "Best Property",
    value: "12.25",
    subtitle: "Iru Fushi",
    valueColor: "text-[#278d63]",
  },
  {
    title: "Olhuveli Learning Hours",
    value: "10,267.6",
    subtitle: "June 2026",
  },
  {
    title: "Engagement Gallery",
    value: "6",
    subtitle: "Properties",
  },
];

export default function LearningPage() {
  return (
    <PageShell>
      <PageHeader
        title="Learning & Engagement"
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

        {/* MAIN ROW */}
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-5">
          <Card className="min-h-[430px] p-6 xl:col-span-3">
            <TrainingHoursChart />
          </Card>

          <Card className="min-h-[430px] p-6 xl:col-span-2">
            <TrainingStatus />
          </Card>
        </section>

        {/* ENGAGEMENT */}
        <Card className="p-6">
          <EngagementGallery />
        </Card>
      </div>
    </PageShell>
  );
}