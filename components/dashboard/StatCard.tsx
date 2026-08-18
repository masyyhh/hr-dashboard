import { ArrowUpRight } from "lucide-react";
import MiniChart from "./MiniChart";

type StatCardProps = {
  title: string;
  value: string;
  change?: string;
  subtitle?: string;
  valueColor?: string;
  showChart?: boolean;
};

export default function StatCard({
  title,
  value,
  change,
  subtitle,
  valueColor = "text-gray-950",
  showChart = true,
}: StatCardProps) {
  return (
    <div className="relative min-h-[175px] overflow-hidden rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.025)]">
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-[#405266]">
          {title}
        </span>

        <ArrowUpRight
          size={18}
          className="text-gray-400"
        />
      </div>

      <div className="mt-7 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p
            className={`text-[38px] font-medium leading-none tracking-[-1px] ${valueColor}`}
          >
            {value}
          </p>

          {subtitle && (
            <p className="mt-3 text-sm font-medium text-[#687386]">
              {subtitle}
            </p>
          )}
        </div>

        {showChart && (
          <div className="flex shrink-0 flex-col items-end gap-2">
            {change && (
              <span className="text-xs font-semibold text-[#00bd50]">
                {change}
              </span>
            )}

            <MiniChart />
          </div>
        )}
      </div>
    </div>
  );
}