const priorities = [
  {
    title: "Accommodation capacity gaps",
    description: "Siyam World, Olhuveli and Iru Veli.",
    level: "high",
  },
  {
    title: "Accelerate accommodation works",
    description: "Iru Fushi, Iru Veli and Olhuveli.",
    level: "high",
  },
  {
    title: "AI capability",
    description:
      "Develop HR and learning capability for AI-enabled workflows.",
    level: "medium",
  },
];

export default function InvestmentPriorities() {
  return (
    <div>
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 className="text-[18px] font-bold tracking-[-0.3px] text-[#102b3d]">
          Urgent Investment Priorities
        </h2>

        <span className="shrink-0 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Priority
        </span>
      </div>

      <div className="space-y-3">
        {priorities.map((item) => (
          <div
            key={item.title}
            className={`rounded-[16px] border px-4 py-4 ${
              item.level === "high"
                ? "border-[#f2ceca] bg-[#fff8f6]"
                : "border-[#f0dfba] bg-[#fffaf1]"
            }`}
          >
            <h3 className="text-[16px] font-bold text-[#102b3d]">
              {item.title}
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#6f6663]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}