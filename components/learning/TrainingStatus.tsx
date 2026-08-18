const rows = [
  {
    property: "Siyam World",
    actual: "7.69",
    status: "Below",
  },
  {
    property: "Olhuveli",
    actual: "9.70",
    status: "Gap",
  },
  {
    property: "Iru Fushi",
    actual: "12.25",
    status: "Met",
  },
  {
    property: "Vilu Reef",
    actual: "8.34",
    status: "Below",
  },
  {
    property: "Iru Veli",
    actual: "10.03",
    status: "Gap",
  },
];

function statusStyle(status: string) {
  if (status === "Met") {
    return "bg-[#eaf7ef] text-[#27835f]";
  }

  if (status === "Gap") {
    return "bg-[#fff4df] text-[#c77d17]";
  }

  return "bg-[#fff0ee] text-[#c84945]";
}

export default function TrainingStatus() {
  return (
    <div className="h-full">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-[18px] font-bold tracking-[-0.3px] text-[#102b3d]">
          Training Status
        </h2>

        <span className="shrink-0 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          By property
        </span>
      </div>

      <div>
        <div className="grid grid-cols-[1fr_100px_100px] border-b border-gray-100 px-2 py-3">
          <span className="text-sm font-semibold text-[#6d7b85]">
            Property
          </span>

          <span className="text-right text-sm font-semibold text-[#6d7b85]">
            Actual
          </span>

          <span className="text-right text-sm font-semibold text-[#6d7b85]">
            Status
          </span>
        </div>

        {rows.map((row) => (
          <div
            key={row.property}
            className="grid grid-cols-[1fr_100px_100px] items-center border-b border-gray-100 px-2 py-4 last:border-b-0"
          >
            <span className="text-sm font-medium text-[#153246]">
              {row.property}
            </span>

            <span className="text-right text-sm text-[#153246]">
              {row.actual}
            </span>

            <div className="text-right">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                  row.status
                )}`}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}