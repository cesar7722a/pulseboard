import { NavLink } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Subscriptions", url: "/subscriptions", icon: CreditCard },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  return (
    // 2. Definir collapsible="icon" para o modo de apenas ícones
    <Sidebar collapsible="icon">
      <SidebarHeader>d</SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink to={item.url} end={item.url === "/"}>
                    {({ isActive }) => (
                      <SidebarMenuButton
                        tooltip={item.title}
                        isActive={isActive}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
