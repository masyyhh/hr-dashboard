"use client";

import {
  Grid2X2,
  UserRound,
  UsersRound,
  UserRoundSearch,
  CircleDollarSign,
  PieChart,
  CalendarDays,
  Clock3,
  Folder,
  UserCircle,
  PanelLeftClose,
  Settings,
  House,
  Upload,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

const mainNavigation = [
  {
    label: "Dashboard",
    icon: House,
    href: "/dashboard",
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[220px] flex-col border-r border-[#eef0f3] bg-white">

      {/* Logo */}
      <div className="flex h-[94px] items-center justify-between px-6">
        <div className="flex items-center gap-2.5">
          {/* Logo mark */}
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-[#edf4ff]">
            <span className="text-[25px] font-bold leading-none text-[#3563f5]">
              S
            </span>
          </div>

          <div className="text-[19px] font-bold tracking-[-0.7px]">
            <span className="text-[#172033]">Sun</span>
            <span className="font-medium text-[#3563f5]">HR</span>
          </div>
        </div>

        {/* Collapse button */}
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-md text-[#252a31] transition hover:bg-gray-100"
          aria-label="Collapse sidebar"
        >
          <PanelLeftClose size={19} strokeWidth={1.7} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-0 pb-5">
        <div className="space-y-1">
          {mainNavigation.map((item) => (
            <SidebarItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              href={item.href}
              active={item.label === "Home"}
            />
          ))}
        </div>
      </nav>

      {/* Bottom profile */}
      <div className="border-t border-[#f0f1f3] px-3 py-2">
        <SidebarItem
          label="Upload"
          icon={Upload}
          href="/Upload"
        />
      </div>

      {/* Bottom profile */}
      <div className="border-t border-[#f0f1f3] px-3 py-2">
        <SidebarItem
          label="Profile"
          icon={UserCircle}
          href="/profile"
        />
      </div>
      
      {/* Bottom Setting */}
      <div className="border-t border-[#f0f1f3] px-3 py-2">
        <SidebarItem
          label="Setting"
          icon={Settings}
          href="/profile"
        />
      </div>
    </aside>
  );
}