import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "./dashboard/_component/shared/app-sidebar";
import { AppTopBar } from "./dashboard/_component/shared/app-topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <main className="w-full">
          <header>
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
