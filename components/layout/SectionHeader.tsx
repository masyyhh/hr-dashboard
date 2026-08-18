import { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  badge?: string;
  action?: ReactNode;
};

export default function SectionHeader({
  title,
  badge,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <h2 className="text-[18px] font-bold leading-tight tracking-[-0.3px] text-[#102b3d]">
        {title}
      </h2>

      {badge && (
        <span className="shrink-0 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          {badge}
        </span>
      )}

      {action}
    </div>
  );
}