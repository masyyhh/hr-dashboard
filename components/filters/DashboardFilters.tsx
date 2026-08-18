"use client";

import { createContext, useContext, useMemo, useState } from "react";

export const ALL_PROPERTIES = "All properties";

type DashboardFilterContextValue = {
  property: string;
  month: string;
  setProperty: (property: string) => void;
  setMonth: (month: string) => void;
};

const DashboardFilterContext = createContext<DashboardFilterContextValue | null>(null);

export function DashboardFiltersProvider({ children }: { children: React.ReactNode }) {
  const [property, setProperty] = useState(ALL_PROPERTIES);
  const [month, setMonth] = useState("This month");
  const value = useMemo(
    () => ({ property, month, setProperty, setMonth }),
    [property, month],
  );

  return (
    <DashboardFilterContext.Provider value={value}>
      {children}
    </DashboardFilterContext.Provider>
  );
}

export function useDashboardFilters() {
  const context = useContext(DashboardFilterContext);
  if (!context) {
    throw new Error("useDashboardFilters must be used within DashboardFiltersProvider");
  }
  return context;
}

export function usePropertyFilter<T extends { property: string }>(rows: T[]) {
  const { property } = useDashboardFilters();
  return useMemo(
    () =>
      property === ALL_PROPERTIES
        ? rows
        : rows.filter((row) => row.property === property),
    [property, rows],
  );
}
