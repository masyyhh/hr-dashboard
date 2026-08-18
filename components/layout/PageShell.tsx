import { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[#f7f8fa] p-4 md:p-6">
      <div className="mx-auto max-w-[1500px]">
        {children}
      </div>
    </main>
  );
}