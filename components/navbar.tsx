"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function Navbar() {
  const pathname = usePathname()
  const isAuthenticated = pathname.startsWith("/dashboard")

  if (!isAuthenticated) {
    return (
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-gray-900">R</span>
                <span className="text-xs align-super text-gray-700">.</span>
                <span className="text-gray-900">sults</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#features" className="text-sm font-medium text-gray-700 hover:text-[#C91F42] transition-colors">
                Features
              </Link>
              <Link href="/#how-it-works" className="text-sm font-medium text-gray-700 hover:text-[#C91F42] transition-colors">
                How It Works
              </Link>
              <Link href="/#pricing" className="text-sm font-medium text-gray-700 hover:text-[#C91F42] transition-colors">
                Pricing
              </Link>
              <Link href="/auth/login">
                <Button variant="ghost" className="text-sm font-medium">
                  Log In
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button className="bg-[#C91F42] hover:bg-[#A01836]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="border-b bg-white sticky top-0 z-40 shadow-sm">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search resources, family members, news..."
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                3
              </Badge>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
