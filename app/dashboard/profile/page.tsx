"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronRight,
  Home,
  Users,
  Bookmark,
  Smartphone,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Camera,
  Activity,
  CreditCard,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Shield,
  Edit,
  Check,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export default function ProfilePage() {
  const [statusSafe, setStatusSafe] = useState(true)
  const [editMode, setEditMode] = useState(false)

  const stats = [
    { label: "Reports", value: "12", icon: Activity, color: "text-blue-600" },
    { label: "Family", value: "5", icon: Users, color: "text-green-600" },
    { label: "Saved", value: "8", icon: Bookmark, color: "text-orange-600" },
    { label: "Devices", value: "2", icon: Smartphone, color: "text-purple-600" },
  ]

  const menuSections = [
    {
      title: "Safety & Status",
      items: [
        {
          id: "status",
          label: "My Status",
          icon: Activity,
          value: statusSafe ? "Safe" : "Need Help",
          showToggle: true,
          color: statusSafe ? "text-green-600" : "text-red-600",
        },
        {
          id: "location",
          label: "Location Sharing",
          icon: MapPin,
          value: "Enabled",
          link: "/dashboard/settings",
        },
      ],
    },
    {
      title: "My Information",
      items: [
        {
          id: "home",
          label: "My Home(s)",
          icon: Home,
          badge: "1",
          link: "/dashboard/settings",
        },
        {
          id: "family",
          label: "Family Members",
          icon: Users,
          badge: "5",
          link: "/dashboard/family",
        },
        {
          id: "devices",
          label: "Linked Devices",
          icon: Smartphone,
          badge: "2",
          link: "/dashboard/devices",
        },
      ],
    },
    {
      title: "Saved & Resources",
      items: [
        {
          id: "resources",
          label: "Saved Resources",
          icon: Bookmark,
          badge: "8",
          link: "/dashboard/resources",
        },
        {
          id: "insurance",
          label: "Insurance & Claims",
          icon: Shield,
          link: "/dashboard/insurance",
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          id: "plan",
          label: "My Plan",
          icon: CreditCard,
          badge: "Plus",
          highlight: true,
          link: "/dashboard/settings",
        },
        {
          id: "settings",
          label: "Account Settings",
          icon: Settings,
          link: "/dashboard/settings",
        },
        {
          id: "notifications",
          label: "Notifications",
          icon: Bell,
          link: "/dashboard/notifications",
        },
        {
          id: "help",
          label: "Help & Support",
          icon: HelpCircle,
          link: "/dashboard/settings",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* Profile Header Card */}
        <Card className="shadow-xl border-0 bg-gradient-to-br from-[#C91F42] to-[#A01836] text-white">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative group">
                <Avatar className="h-32 w-32 border-4 border-white shadow-2xl">
                  <AvatarFallback className="bg-white text-[#C91F42] text-3xl font-bold">
                    SJ
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 h-10 w-10 bg-white text-[#C91F42] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Camera className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                  <h1 className="text-3xl font-bold">Sarah Johnson</h1>
                  <Badge className="bg-white text-[#C91F42] hover:bg-white">
                    <Check className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                <div className="space-y-2 text-white/90">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail className="h-4 w-4" />
                    <span>sarah.johnson@email.com</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Phone className="h-4 w-4" />
                    <span>+1 (202) 564-9595</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <MapPin className="h-4 w-4" />
                    <span>Miami, Florida</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Calendar className="h-4 w-4" />
                    <span>Member since Dec 2024</span>
                  </div>
                </div>
              </div>

              <Button
                variant="secondary"
                className="flex items-center gap-2 bg-white text-[#C91F42] hover:bg-gray-100"
                onClick={() => setEditMode(!editMode)}
              >
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <Card key={sectionIndex} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon
                const content = (
                  <div
                    className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                      itemIndex !== section.items.length - 1 ? "border-b" : ""
                    } ${"highlight" in item && item.highlight ? "bg-gradient-to-r from-pink-50 to-purple-50" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-12 w-12 rounded-xl bg-gradient-to-br ${
                          "highlight" in item && item.highlight
                            ? "from-pink-400 to-purple-400"
                            : "from-gray-100 to-gray-200"
                        } flex items-center justify-center`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            "highlight" in item && item.highlight ? "text-white" : ("color" in item ? item.color : "text-gray-700")
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.label}</div>
                        {"value" in item && item.value && (
                          <div className={`text-sm ${"color" in item ? item.color : "text-gray-600"}`}>
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {"badge" in item && item.badge && (
                        <Badge
                          className={`${
                            "highlight" in item && item.highlight
                              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                      {"showToggle" in item && item.showToggle ? (
                        <Switch
                          checked={statusSafe}
                          onCheckedChange={setStatusSafe}
                          className="data-[state=checked]:bg-green-600"
                        />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                )

                return item.link ? (
                  <Link key={item.id} href={item.link}>
                    {content}
                  </Link>
                ) : (
                  <div key={item.id}>{content}</div>
                )
              })}
            </CardContent>
          </Card>
        ))}

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4">
          <Button className="h-14 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold flex items-center justify-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Chat with Support
          </Button>
          <Link href="/" className="block">
            <Button
              variant="outline"
              className="w-full h-14 border-2 border-red-500 text-red-600 hover:bg-red-50 text-lg font-semibold flex items-center justify-center gap-2"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </Link>
        </div>

        {/* Version Info */}
        <div className="text-center text-sm text-gray-500 pb-4">
          R3SULTS v1.0.01 • © 2024 All Rights Reserved
        </div>
      </div>
    </div>
  )
}
