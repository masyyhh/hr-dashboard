import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import WellnessCard from "@/components/dashboard/WellnessCard";

import HeadcountChart from "@/components/dashboard/HeadcountChart";
import TurnoverChart from "@/components/dashboard/TurnoverChart";
import DiversityChart from "@/components/dashboard/DiversityChart";
import KpiStatusCard from "@/components/dashboard/KpiStatusCard";

const stats = [
  {
    title: "Total Headcount",
    value: "3612",
    change: "2x",
    subtitle: "Across 6 Property",
  },
  {
    title: "New Hires",
    value: "38",
    change: "2x",
    subtitle: "June 2026",
  },
  {
    title: "Avg Monthly Turnover",
    value: "1.68%",
    change: "2x",
    subtitle: "Last month: 2.33%",
  },
  {
    title: "Training Hours/FTE",
    value: "9.60",
    change: "2x",
    subtitle: "Target: 12 hours",
  },
];

const notices = [
  {
    text: "Beach Cleaning",
    time: "1 month ago",
    location: "Irufushi",
    image: "/images/iruveli.jpg",
  },
  {
    text: "Fathers' day gift",
    time: "1 month ago",
    location: "Irufushi",
    image: "/images/siyam_world.jpg",
  },
  {
    text: "Jersey Day",
    time: "1 month ago",
    location: "Irufushi",
    image: "/images/iruveli.jpg",
  },
];

const cardStyle =
  "overflow-hidden rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.025)]";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] p-4 md:p-6">
      <div className="mx-auto max-w-[1500px]">
        <DashboardHeader />

        <div className="space-y-5">
          {/* TOP KPI CARDS */}
          <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </section>

          {/* FIRST CHART ROW */}
          <section className="grid grid-cols-1 items-stretch gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_280px]">
            {/* Headcount */}
            <div className={`${cardStyle} min-h-[390px]`}>
              <HeadcountChart />
            </div>

            {/* KPI Status */}
            <div className={`${cardStyle} min-h-[390px]`}>
              <KpiStatusCard />
            </div>

            {/* Wellness - retains your existing position */}
            <WellnessCard notices={notices} />
          </section>

          {/* SECOND CHART ROW */}
          <section className="grid grid-cols-1 items-stretch gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_280px]">
            {/* Turnover */}
            <div className={`${cardStyle} min-h-[390px]`}>
              <TurnoverChart />
            </div>

            {/* Diversity */}
            <div className={`${cardStyle} min-h-[390px]`}>
              <DiversityChart />
            </div>

            {/*
              Empty column intentionally preserved.

              This keeps Turnover/Diversity exactly aligned
              with Headcount/KPI above and preserves the
              280px Wellness column.
            */}
            <div className="hidden xl:block" />
          </section>
        </div>
      </div>
    </main>
  );
}