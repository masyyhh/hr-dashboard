import type { Metadata } from "next";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora HR",
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

        <main className="ml-[220px] min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}