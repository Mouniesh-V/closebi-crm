"use client"

import {
  ChevronsUpDown,
  LogOut,
  Moon,
  Info,
  Settings2,
  Grid,
  ChevronRight,
} from "lucide-react"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >

              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-64 rounded-xl shadow-lg p-0"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
              
            <div className="px-2 pb-2">
              <DropdownMenuItem className="flex items-center gap-2 rounded-md">
                <Grid className="size-5" />
                <span className="flex-1">Apps</span>
                <ChevronRight className="size-4 ml-auto text-muted-foreground" />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 rounded-md">
                <Moon className="size-5" />
                <span>Toggle theme</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 rounded-md">
                <Settings2 className="size-5" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 rounded-md">
                <Info className="size-5" />
                <span>About</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem className="flex items-center gap-2 rounded-md text-destructive">
                <LogOut className="size-5" />
                <span>Log out</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
