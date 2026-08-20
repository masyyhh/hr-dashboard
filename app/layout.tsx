import type { Metadata } from "next";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { DashboardFiltersProvider } from "@/components/filters/DashboardFilters";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sun HR",
  description: "HR Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f7f8fa]">
        <Sidebar />
        
        <Topbar/>

        <DashboardFiltersProvider>
          <main className="ml-[220px] min-h-screen">
            {children}
          </main>
        </DashboardFiltersProvider>
      </body>
    </html>
  );
}
