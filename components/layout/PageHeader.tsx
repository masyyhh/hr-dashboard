"use client";

import { useState } from "react";
import {
  Building2,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  defaultMonth?: string;
};

const properties = [
  "All Properties",
  "Iruveli",
  "Irufushi",
  "Vilu Reef",
  "Olhuveli",
  "Pasikudah",
];

const months = [
  "This Month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function PageHeader({
  title,
  subtitle,
  defaultMonth = "This Month",
}: PageHeaderProps) {
  const [selectedProperty, setSelectedProperty] =
    useState("All Properties");

  const [selectedMonth, setSelectedMonth] =
    useState(defaultMonth);

  const [propertyOpen, setPropertyOpen] =
    useState(false);

  const [monthOpen, setMonthOpen] =
    useState(false);

  return (
    <header className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-[25px] font-bold tracking-[-0.5px] text-[#102b3d]">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-1 text-sm font-medium text-[#7a8594]">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Property */}
        <div className="relative">
          <button
            onClick={() => {
              setPropertyOpen((prev) => !prev);
              setMonthOpen(false);
            }}
            className="flex h-12 items-center gap-2 rounded-full border border-gray-100 bg-white px-5 text-sm font-medium text-[#405266] shadow-sm transition hover:bg-gray-50"
          >
            <Building2
              size={16}
              className="text-gray-500"
            />

            <span className="max-w-[120px] truncate">
              {selectedProperty}
            </span>

            <ChevronDown
              size={15}
              className={`text-gray-400 transition-transform ${
                propertyOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {propertyOpen && (
            <div className="absolute right-0 top-14 z-50 w-52 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
              {properties.map((property) => (
                <button
                  key={property}
                  onClick={() => {
                    setSelectedProperty(property);
                    setPropertyOpen(false);
                  }}
                  className={`w-full rounded-xl px-4 py-2.5 text-left text-sm transition hover:bg-gray-50 ${
                    selectedProperty === property
                      ? "bg-gray-50 font-semibold text-[#102b3d]"
                      : "text-gray-600"
                  }`}
                >
                  {property}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Month */}
        <div className="relative">
          <button
            onClick={() => {
              setMonthOpen((prev) => !prev);
              setPropertyOpen(false);
            }}
            className="flex h-12 items-center gap-2 rounded-full border border-gray-100 bg-white px-5 text-sm font-medium text-[#405266] shadow-sm transition hover:bg-gray-50"
          >
            <CalendarDays
              size={16}
              className="text-gray-500"
            />

            <span>{selectedMonth}</span>

            <ChevronDown
              size={15}
              className={`text-gray-400 transition-transform ${
                monthOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {monthOpen && (
            <div className="absolute right-0 top-14 z-50 max-h-72 w-48 overflow-y-auto rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
              {months.map((month) => (
                <button
                  key={month}
                  onClick={() => {
                    setSelectedMonth(month);
                    setMonthOpen(false);
                  }}
                  className={`w-full rounded-xl px-4 py-2.5 text-left text-sm transition hover:bg-gray-50 ${
                    selectedMonth === month
                      ? "bg-gray-50 font-semibold text-[#102b3d]"
                      : "text-gray-600"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}