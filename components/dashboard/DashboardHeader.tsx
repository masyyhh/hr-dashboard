import { CalendarDays } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-[25px] font-bold tracking-[-0.5px]">
        Overview
      </h2>

      <div className="flex items-center gap-3">
        <button className="hidden h-12 items-center gap-2 rounded-full border border-gray-100 bg-white px-5 text-sm font-medium shadow-sm sm:flex">
          All Properties
          <CalendarDays size={17} className="text-gray-500" />
        </button>

        <button className="hidden h-12 items-center gap-2 rounded-full border border-gray-100 bg-white px-5 text-sm font-medium shadow-sm sm:flex">
          This Month
          <CalendarDays size={17} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}