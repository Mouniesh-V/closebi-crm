"use client"

import * as React from "react"
import {
  LifeBuoy, Settings2, ChevronRight, LogOut,
  Moon, Info, Grid, Handshake, PhoneCall, ChevronLeft, LayoutDashboard
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { SettingsDialog } from "./settings-dialog"

const data = {
  navMain: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Leads", url: "/leads", icon: Handshake },
    { title: "Call Logs", url: "/call-logs", icon: PhoneCall },
  ],
  navSecondary: [
    { title: "Help", url: "#", icon: LifeBuoy },
    { title: "Collapse", url: "#", icon: ChevronLeft },
  ],
}

type AppSidebarProps = Omit<React.ComponentProps<typeof Sidebar>, "onToggle"> & {
  onToggle?: (collapsed: boolean) => void;
};

export function AppSidebar({ onToggle, ...props }: AppSidebarProps) {
  const [collapsed, setCollapsed] = React.useState(false)
  const [settingsOpen, setSettingsOpen] = React.useState(false)

  React.useEffect(() => {
    onToggle?.(collapsed);
  }, [collapsed, onToggle]);

  const navItems = data.navMain.filter((item) => item.title !== "Settings")

  return (
    <Sidebar
      data-collapsed={collapsed}
      variant="sidebar"
      className={cn(
        "transition-[width] duration-500 ease-in-out",
        collapsed ? "w-14" : "w-60"
      )}
      collapsible="icon"
      {...props}
    >
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className={cn(
                "bg-white rounded-xl shadow p-3 flex items-center gap-3 cursor-pointer border border-gray-100",
                collapsed ? "justify-center px-0" : ""
              )}
            >
              <span
                className={cn(
                  "font-extrabold text-md text-[#4F46E5] transition-all duration-300 ease-in-out",
                  collapsed ? "opacity-100 scale-90" : "opacity-100 scale-100"
                )}
              >
                {collapsed ? "CB" : "CLOSEBI"}
              </span>
              {!collapsed && (
                <ChevronRight className="ml-auto size-5 text-muted-foreground" />
              )}
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="min-w-56 rounded-xl shadow-lg p-0 mt-2"
            align="start"
            sideOffset={4}
          >
            <div className="px-2 py-2">
              {/* Nested Dropdown for Apps */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex items-center gap-2 rounded-md data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
                  <Grid className="size-5" />
                  <span className="flex-1">Apps</span>
                  
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="min-w-40 rounded-xl shadow-md p-1">
                  <DropdownMenuItem className="flex items-center gap-2 rounded-md">
                    <LayoutDashboard className="size-5" />
                    <span>Desk</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              {/* Toggle Theme */}
              <DropdownMenuItem className="flex items-center gap-2 rounded-md">
                <Moon className="size-5" />
                <span>Toggle theme</span>
              </DropdownMenuItem>

              {/* Settings */}
              <DropdownMenuItem
                className="flex items-center gap-2 rounded-md"
                onSelect={(e) => {
                  e.preventDefault()
                  setSettingsOpen(true)
                }}
              >
                <Settings2 className="size-5" />
                <span>Settings</span>
              </DropdownMenuItem>
              <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />

              {/* About */}
              <DropdownMenuItem className="flex items-center gap-2 rounded-md">
                <Info className="size-5" />
                <span>About</span>
              </DropdownMenuItem>

              {/* Logout */}
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem className="flex items-center gap-2 rounded-md text-destructive">
                <LogOut className="size-5" />
                <span>Log out</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navItems} collapsed={collapsed} />
        <NavSecondary
          items={[
            ...data.navSecondary.filter((item) => item.title !== "Collapse"),
            {
              title: collapsed ? "Expand" : "Collapse",
              url: "#",
              icon: collapsed ? ChevronRight : ChevronLeft,
            },
          ]}
          onToggleCollapse={() => setCollapsed((prev) => !prev)}
          className="mt-auto"
        />
      </SidebarContent>
    </Sidebar>
  )
}
