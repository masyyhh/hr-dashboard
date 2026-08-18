import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-[24px]
        border
        border-gray-100
        bg-white
        shadow-[0_4px_20px_rgba(0,0,0,0.025)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}