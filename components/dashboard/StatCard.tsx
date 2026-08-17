import { ArrowUpRight } from "lucide-react";
import MiniChart from "./MiniChart";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  subtitle: string;
};

export default function StatCard({
  title,
  value,
  change,
  subtitle,
}: StatCardProps) {
  return (
    <div className="relative min-h-[175px] overflow-hidden rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.025)]">
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-gray-600">
          {title}
        </span>

        <ArrowUpRight size={18} className="text-gray-400" />
      </div>

      <div className="mt-7 flex items-end justify-between gap-3">
        <div>
          <p className="text-[38px] font-medium leading-none tracking-[-1px] text-gray-950">
            {value}
          </p>

          <p className="mt-3 text-sm text-gray-500">
            {subtitle}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          <span className="text-xs font-medium text-green-500">
            {change}
          </span>

          <MiniChart />
        </div>
      </div>
    </div>
  );
}