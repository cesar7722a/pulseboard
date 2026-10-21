import { Outlet } from "react-router";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
