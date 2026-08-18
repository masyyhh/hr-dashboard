import PageHeader from "@/components/layout/PageHeader";

import StrategyMetricCard from "@/components/strategy/StrategyMetricCard";
import TransformationPortfolio from "@/components/strategy/TransformationPortfolio";
import InvestmentPriorities from "@/components/strategy/InvestmentPriorities";
import CostSavingHighlights from "@/components/strategy/CostSavingHighlights";

const metrics = [
  {
    label: "Turnover KPI",
    value: "1.63%",
    subtitle: "Target <2%",
    tone: "success",
  },
  {
    label: "Training KPI",
    value: "9.60",
    subtitle: "Target 12",
    tone: "warning",
  },
  {
    label: "Absenteeism KPI",
    value: "3.25%",
    subtitle: "Target <1.5%",
    tone: "danger",
  },
  {
    label: "Transformation Projects",
    value: "6",
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

export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] p-4 md:p-6">
      <div className="mx-auto max-w-[1500px]">
        <PageHeader
          title="Strategy & Projects"
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
              <StrategyMetricCard
                key={metric.label}
                {...metric}
              />
            ))}
          </section>

          {/* TRANSFORMATION PORTFOLIO */}
          <section className={cardStyle}>
            <TransformationPortfolio />
          </section>

          {/* BOTTOM ROW */}
          <section className="grid grid-cols-1 items-stretch gap-5 xl:grid-cols-5">
            <div
              className={`${cardStyle} xl:col-span-3`}
            >
              <InvestmentPriorities />
            </div>

            <div
              className={`${cardStyle} xl:col-span-2`}
            >
              <CostSavingHighlights />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}