"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import type { ReactNode } from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <div
          className={cn(
            "transition-all duration-300 ease-in-out bg-white border-r h-full",
            collapsed ? "w-16" : "w-60"
          )}
        >
          <AppSidebar onToggle={setCollapsed} />
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
