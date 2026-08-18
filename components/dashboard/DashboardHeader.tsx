"use client";

import React, { useState, useEffect, useRef } from "react";
import { CalendarDays, ChevronDown, Building2 } from "lucide-react"; 

export default function DashboardHeader() {
  // 1. State for Properties Dropdown
  const [selectedProperty, setSelectedProperty] = useState("All Properties");
  const [isPropertyOpen, setIsPropertyOpen] = useState(false);

  // 2. State for Months Dropdown
  const [selectedMonth, setSelectedMonth] = useState("This Month");
  const [isMonthOpen, setIsMonthOpen] = useState(false);

  // 3. Dropdown Container Ref (for closing on outside click)
  const dropdownContainerRef = useRef(null);

  // 4. Data Arrays (Fixed capitalization)
  const properties = ["All Properties", "Iruveli", "Irufushi", "Vilureef", "Olhuveli", "Pasikudah"];
  const months = ["This Month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Close dropdowns if user clicks outside of them
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target)) {
        setIsPropertyOpen(false);
        setIsMonthOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handlers to toggle one dropdown while closing the other
  const togglePropertyMenu = () => {
    setIsPropertyOpen(!isPropertyOpen);
    setIsMonthOpen(false);
  };

  const toggleMonthMenu = () => {
    setIsMonthOpen(!isMonthOpen);
    setIsPropertyOpen(false);
  };

  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-[25px] font-bold tracking-[-0.5px]">
        Overview
      </h2>

      {/* Attach ref to this container to detect outside clicks */}
      <div ref={dropdownContainerRef} className="flex items-center gap-3">
        
        {/* === PROPERTIES DROPDOWN === */}
        <div className="relative">
          <button 
            onClick={togglePropertyMenu}
            className="hidden h-12 items-center gap-2 rounded-full border border-gray-100 bg-white px-5 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 sm:flex"
          >
            <Building2 size={16} className="text-gray-500" />
            <span className="max-w-[120px] truncate">{selectedProperty}</span>
            <ChevronDown size={16} className="text-gray-500" />
          </button>

          {isPropertyOpen && (
            <div className="absolute right-0 top-14 z-20 w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
              {properties.map((property) => (
                <button
                  key={property}
                  onClick={() => {
                    setSelectedProperty(property);
                    setIsPropertyOpen(false);
                  }}
                  className={`w-full rounded-lg px-4 py-2 text-left text-sm transition-colors hover:bg-gray-100 ${
                    selectedProperty === property ? "bg-gray-50 font-medium" : ""
                  }`}
                >
                  {property}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* === MONTHS DROPDOWN === */}
        <div className="relative">
          <button 
            onClick={toggleMonthMenu}
            className="hidden h-12 items-center gap-2 rounded-full border border-gray-100 bg-white px-5 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 sm:flex"
          >
            <CalendarDays size={16} className="text-gray-500" />
            <span className="w-[80px] text-left">{selectedMonth}</span>
            <ChevronDown size={16} className="text-gray-500" />
          </button>

          {isMonthOpen && (
            <div className="absolute right-0 top-14 z-20 max-h-64 w-48 overflow-y-auto rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
              {months.map((month) => (
                <button
                  key={month}
                  onClick={() => {
                    setSelectedMonth(month);
                    setIsMonthOpen(false);
                  }}
                  className={`w-full rounded-lg px-4 py-2 text-left text-sm transition-colors hover:bg-gray-100 ${
                    selectedMonth === month ? "bg-gray-50 font-medium" : ""
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}