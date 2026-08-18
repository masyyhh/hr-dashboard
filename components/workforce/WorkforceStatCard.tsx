type WorkforceStatCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
};

export default function WorkforceStatCard({
  label,
  value,
  highlight = false,
}: WorkforceStatCardProps) {
  return (
    <div className="rounded-[20px] border border-[#e7e1d7] bg-white px-6 py-5 shadow-[0_4px_18px_rgba(0,0,0,0.025)]">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#73828b]">
        {label}
      </p>

      <p
        className={`mt-2 text-[34px] font-bold leading-none tracking-[-1px] ${
          highlight ? "text-[#dc9228]" : "text-[#153246]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}