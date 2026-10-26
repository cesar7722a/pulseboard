import { Outlet } from "react-router";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { PageHeader } from "./components/header";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <PageHeader />
        <SidebarTrigger />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
      <Toaster position="top-right" richColors />
    </SidebarProvider>
  );
}
