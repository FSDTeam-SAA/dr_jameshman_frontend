import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "./dashboard/_component/shared/app-sidebar";
import { AppTopBar } from "./dashboard/_component/shared/app-topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider defaultOpen={true} className="px-8">
        <AppSidebar />
        <main className="w-full">
          <div className="lg:hidden">
            <SidebarTrigger />
          </div>
          <header className="mb-8 mt-10">
            <AppTopBar />
          </header>
          <div className="w-full">
            <div>{children}</div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
