import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import WellnessCard from "@/components/dashboard/WellnessCard";

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
    time: "1 hour ago",
    location: "Irufushi",
    image: "/images/iruveli.jpg",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] p-4 md:p-6">
      <div className="mx-auto max-w-[1500px]">
        <DashboardHeader />

        <div className="space-y-5">
          <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </section>

          <section className="grid grid-cols-1 items-stretch gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_280px]">
            <div className="h-full min-h-[390px] rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.025)]">
              {/* Attendance */}
            </div>

            <div className="h-full min-h-[390px] rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.025)]">
              {/* Hiring */}
            </div>

            <WellnessCard notices={notices} />
          </section>
        </div>
      </div>
    </main>
  );
}