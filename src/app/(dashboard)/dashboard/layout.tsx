import type { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="px-6 py-8">{children}</main>
      </div>
    </div>
  );
}