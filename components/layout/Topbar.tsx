"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelLeft } from "lucide-react";

const navItems = [
  {
    label: "Overview",
    href: "/pages/dashboard",
  },
  {
    label: "Employees",
    href: "/pages/employees",
  },
  {
    label: "Attendance",
    href: "/pages/attendance",
  },
  {
    label: "Leave",
    href: "/pages/leave",
  },
  {
    label: "Recruitment",
    href: "/pages/recruitment",
  },
  {
    label: "Payroll",
    href: "/pages/payroll",
  },
  {
    label: "Reports",
    href: "/pages/reports",
  },
];

export default function Topbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 h-20 border-b border-gray-100 bg-white">
      <div className="flex h-full items-center px-6">
        {/* Sidebar toggle */}
        <div className="flex w-12 shrink-0 items-center">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100"
          >
            <PanelLeft size={18} />
          </button>
        </div>

        {/* Center Navigation */}
        <div className="flex flex-1 justify-center">
          <nav className="flex items-center gap-1 rounded-full bg-[#f7f7f7] p-1.5">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[13px] transition ${
                    active
                      ? "bg-white font-medium text-gray-900 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                      : "text-gray-600 hover:bg-white hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Keeps navigation centered */}
        <div className="w-12 shrink-0" />
      </div>
    </header>
  );
}