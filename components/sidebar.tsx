"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Map, Layers, Users, Bell, Activity, User, Settings, LogOut, Menu, X, AlertCircle, Smartphone, Heart, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useState } from "react"

const navItems = [
  {
    title: "Live Map",
    href: "/dashboard",
    icon: Map,
    description: "Real-time tracking"
  },
  {
    title: "Resources",
    href: "/dashboard/resources",
    icon: Layers,
    description: "Find emergency resources"
  },
  {
    title: "Family",
    href: "/dashboard/family",
    icon: Users,
    description: "Family finder"
  },
  {
    title: "News",
    href: "/dashboard/news",
    icon: Bell,
    description: "Disaster updates"
  },
  {
    title: "My Activity",
    href: "/dashboard/activity",
    icon: Activity,
    description: "Report & track"
  },
  {
    title: "SOS Emergency",
    href: "/dashboard/sos",
    icon: AlertCircle,
    description: "Emergency alerts"
  },
  {
    title: "Devices",
    href: "/dashboard/devices",
    icon: Smartphone,
    description: "Manage devices"
  },
  {
    title: "Health & Vitals",
    href: "/dashboard/vitals",
    icon: Heart,
    description: "Track health"
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
    description: "View alerts"
  },
  {
    title: "Insurance",
    href: "/dashboard/insurance",
    icon: Shield,
    description: "Claims & policies"
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    description: "App settings"
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
    description: "Account settings"
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 transition-all duration-300",
          isCollapsed ? "w-20" : "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
            {!isCollapsed && (
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-gray-900">
                  R<span className="text-xs align-super text-gray-600">.</span>sults
                </div>
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* User Profile Section */}
          <div className={cn(
            "p-4 border-b border-gray-200",
            isCollapsed ? "px-2" : "px-4"
          )}>
            <div className={cn(
              "flex items-center gap-3",
              isCollapsed ? "justify-center" : ""
            )}>
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-[#C91F42] text-white font-bold">
                  SJ
                </AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    Smith Johnson
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    john007@email.com
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-lg transition-all group",
                    isActive
                      ? "bg-[#C91F42] text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100",
                    isCollapsed ? "justify-center" : ""
                  )}
                >
                  <Icon className={cn(
                    "h-5 w-5 flex-shrink-0",
                    isActive ? "text-white" : "text-gray-500 group-hover:text-[#C91F42]"
                  )} />
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <p className={cn(
                        "text-sm font-medium truncate",
                        isActive ? "text-white" : "text-gray-900"
                      )}>
                        {item.title}
                      </p>
                      <p className={cn(
                        "text-xs truncate",
                        isActive ? "text-white/80" : "text-gray-500"
                      )}>
                        {item.description}
                      </p>
                    </div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-gray-200 space-y-2">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3",
                isCollapsed ? "justify-center px-0" : ""
              )}
            >
              <Settings className="h-5 w-5 text-gray-500" />
              {!isCollapsed && <span>Settings</span>}
            </Button>
            <Link href="/">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50",
                  isCollapsed ? "justify-center px-0" : ""
                )}
              >
                <LogOut className="h-5 w-5" />
                {!isCollapsed && <span>Logout</span>}
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}

