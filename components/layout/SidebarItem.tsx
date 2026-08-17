import Link from "next/link";
import { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  label: string;
  icon: LucideIcon;
  href: string;
  active?: boolean;
};

export default function SidebarItem({
  label,
  icon: Icon,
  href,
  active = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`
        group mx-3 flex h-[50px] items-center gap-4 rounded-full px-4
        text-[15px] font-medium transition-all duration-200
        ${
          active
            ? "bg-[#3563f5] text-white shadow-[0_6px_16px_rgba(53,99,245,0.18)]"
            : "text-[#555b66] hover:bg-[#f5f7fa] hover:text-[#222]"
        }
      `}
    >
      <Icon
        size={21}
        strokeWidth={1.8}
        className={`
          shrink-0 transition-colors
          ${active ? "text-white" : "text-[#626873] group-hover:text-[#3563f5]"}
        `}
      />

      <span>{label}</span>
    </Link>
  );
}