"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, CalendarDays, ChevronDown } from "lucide-react";
import {
  ALL_PROPERTIES,
  useDashboardFilters,
} from "@/components/filters/DashboardFilters";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  defaultMonth?: string;
  defaultProperty?: string;
  monthOptions?: string[];
  propertyOptions?: string[];
  filterOrder?: "property-first" | "month-first";
};

const defaultProperties = [
  ALL_PROPERTIES, "Head Office", "Siyam World", "Olhuveli", "Iru Fushi", "Vilu Reef", "Iru Veli",
];
const defaultMonths = [
  "This month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
];

export default function PageHeader({
  title,
  subtitle,
  defaultMonth = "This month",
  defaultProperty = ALL_PROPERTIES,
  monthOptions = defaultMonths,
  propertyOptions = defaultProperties,
  filterOrder = "property-first",
}: PageHeaderProps) {
  const { property, month, setProperty, setMonth } = useDashboardFilters();
  const [open, setOpen] = useState<"property" | "month" | null>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProperty(defaultProperty);
    setMonth(defaultMonth);
  }, [defaultMonth, defaultProperty, setMonth, setProperty]);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!controlsRef.current?.contains(event.target as Node)) setOpen(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const propertyControl = (
    <FilterMenu
      key="property"
      icon={<Building2 size={16} />}
      label="Property"
      value={property}
      options={propertyOptions}
      open={open === "property"}
      onToggle={() => setOpen(open === "property" ? null : "property")}
      onSelect={(value) => { setProperty(value); setOpen(null); }}
    />
  );
  const monthControl = (
    <FilterMenu
      key="month"
      icon={<CalendarDays size={16} />}
      label="Reporting period"
      value={month}
      options={monthOptions}
      open={open === "month"}
      onToggle={() => setOpen(open === "month" ? null : "month")}
      onSelect={(value) => { setMonth(value); setOpen(null); }}
    />
  );

  return (
    <header className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-[25px] font-bold tracking-[-0.5px] text-[#102b3d]">{title}</h1>
        {subtitle && <p className="mt-1 text-sm font-medium text-[#7a8594]">{subtitle}</p>}
        <p aria-live="polite" className="mt-1 text-xs font-medium text-[#7a8594]">
          Viewing {property === ALL_PROPERTIES ? "all properties" : property} · {month}
        </p>
      </div>
      <div ref={controlsRef} className="flex flex-wrap items-center gap-3">
        {filterOrder === "month-first"
          ? [monthControl, propertyControl]
          : [propertyControl, monthControl]}
      </div>
    </header>
  );
}

function FilterMenu({ icon, label, value, options, open, onToggle, onSelect }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  options: string[];
  open: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="relative">
      <button type="button" aria-label={`${label}: ${value}`} aria-haspopup="listbox" aria-expanded={open} onClick={onToggle} className="flex h-12 items-center gap-2 rounded-full border border-gray-100 bg-white px-5 text-sm font-medium text-[#405266] shadow-sm transition hover:bg-gray-50">
        <span className="text-gray-500">{icon}</span>
        <span className="max-w-[130px] truncate">{value}</span>
        <ChevronDown size={15} className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div role="listbox" aria-label={label} className="absolute right-0 top-14 z-50 max-h-72 w-52 overflow-y-auto rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
          {options.map((option) => (
            <button key={option} type="button" role="option" aria-selected={value === option} onClick={() => onSelect(option)} className={`w-full rounded-xl px-4 py-2.5 text-left text-sm transition hover:bg-gray-50 ${value === option ? "bg-gray-50 font-semibold text-[#102b3d]" : "text-gray-600"}`}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
