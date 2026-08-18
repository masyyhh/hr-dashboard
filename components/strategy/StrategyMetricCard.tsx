type MetricTone =
  | "default"
  | "success"
  | "warning"
  | "danger";

type StrategyMetricCardProps = {
  label: string;
  value: string;
  subtitle?: string;
  tone?: MetricTone;
};

const toneClasses: Record<MetricTone, string> = {
  default: "text-[#102b3d]",
  success: "text-[#2f936b]",
  warning: "text-[#df9223]",
  danger: "text-[#cb4b4d]",
};

export default function StrategyMetricCard({
  label,
  value,
  subtitle,
  tone = "default",
}: StrategyMetricCardProps) {
  return (
    <div className="min-h-[142px] rounded-[24px] border border-gray-100 bg-white px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.025)]">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#74818d]">
        {label}
      </p>

      <p
        className={`mt-3 text-[36px] font-bold leading-none tracking-[-1px] ${toneClasses[tone]}`}
      >
        {value}
      </p>

      {subtitle && (
        <p className="mt-2 text-sm font-medium text-[#74818d]">
          {subtitle}
        </p>
      )}
    </div>
  );
}