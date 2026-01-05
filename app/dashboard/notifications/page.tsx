"use client"

import { useState } from "react"
import {
  Bell,
  AlertTriangle,
  Info,
  CheckCircle,
  Clock,
  MapPin,
  Users,
  Heart,
  Flame,
  Waves,
  Wind,
  Trash2,
  Check,
  X,
  Filter,
  Settings,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function NotificationsPage() {
  const [selectedTab, setSelectedTab] = useState("all")

  const notifications = [
    {
      id: 1,
      type: "critical",
      icon: AlertTriangle,
      title: "Severe Weather Alert",
      message: "Hurricane warning issued for your area. Take immediate shelter.",
      time: "5 min ago",
      read: false,
      category: "weather",
      actionable: true,
    },
    {
      id: 2,
      type: "warning",
      icon: Flame,
      title: "Wildfire Update",
      message: "Fire is now 60% contained. Evacuation orders lifted for Zone B.",
      time: "1 hour ago",
      read: false,
      category: "disaster",
      actionable: false,
    },
    {
      id: 3,
      type: "info",
      icon: Users,
      title: "Family Member Check-in",
      message: "John Johnson marked himself as safe.",
      time: "2 hours ago",
      read: true,
      category: "family",
      actionable: false,
    },
    {
      id: 4,
      type: "success",
      icon: CheckCircle,
      title: "Resource Request Approved",
      message: "Your request for emergency supplies has been approved.",
      time: "3 hours ago",
      read: true,
      category: "resources",
      actionable: true,
    },
    {
      id: 5,
      type: "info",
      icon: MapPin,
      title: "New Shelter Opened",
      message: "Emergency shelter opened at 123 Main St, 2.5 miles from you.",
      time: "4 hours ago",
      read: true,
      category: "resources",
      actionable: true,
    },
    {
      id: 6,
      type: "warning",
      icon: Waves,
      title: "Flood Warning",
      message: "Flash flood warning in effect until 11:00 PM.",
      time: "5 hours ago",
      read: true,
      category: "weather",
      actionable: false,
    },
    {
      id: 7,
      type: "info",
      icon: Heart,
      title: "Health Reminder",
      message: "Time to take your evening medication.",
      time: "6 hours ago",
      read: true,
      category: "health",
      actionable: true,
    },
    {
      id: 8,
      type: "info",
      icon: Info,
      title: "System Update",
      message: "R3SULTS app has been updated to version 1.0.02.",
      time: "1 day ago",
      read: true,
      category: "system",
      actionable: false,
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "critical":
        return "from-red-500 to-red-600"
      case "warning":
        return "from-orange-500 to-orange-600"
      case "success":
        return "from-green-500 to-green-600"
      default:
        return "from-blue-500 to-blue-600"
    }
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "critical":
        return "bg-red-500"
      case "warning":
        return "bg-orange-500"
      case "success":
        return "bg-green-500"
      default:
        return "bg-blue-500"
    }
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  const filteredNotifications =
    selectedTab === "all"
      ? notifications
      : selectedTab === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications.filter((n) => n.category === selectedTab)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Bell className="h-8 w-8 text-blue-600" />
              Notifications
              {unreadCount > 0 && (
                <Badge className="bg-red-500 text-white px-3 py-1">{unreadCount} new</Badge>
              )}
            </h1>
            <p className="text-gray-600 mt-1">Stay updated with alerts and important information</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{notifications.length}</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{unreadCount}</div>
                  <div className="text-sm text-gray-600">Unread</div>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {notifications.filter((n) => n.type === "critical").length}
                  </div>
                  <div className="text-sm text-gray-600">Critical</div>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {notifications.filter((n) => n.actionable).length}
                  </div>
                  <div className="text-sm text-gray-600">Action Needed</div>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Card className="shadow-lg">
          <CardContent className="p-4">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="w-full justify-start">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">
                  Unread
                  {unreadCount > 0 && (
                    <Badge className="ml-2 bg-red-500 text-white">{unreadCount}</Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="weather">Weather</TabsTrigger>
                <TabsTrigger value="disaster">Disaster</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="health">Health</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        {unreadCount > 0 && (
          <Card className="shadow-lg bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">
                    You have {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
                  </span>
                </div>
                <Button size="sm" variant="outline" className="gap-2">
                  <Check className="h-4 w-4" />
                  Mark All as Read
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
            <Card className="shadow-lg">
              <CardContent className="p-12 text-center">
                <Bell className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No notifications</h3>
                <p className="text-gray-600">You're all caught up!</p>
              </CardContent>
            </Card>
          ) : (
            filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={`shadow-lg hover:shadow-xl transition-all ${
                  !notification.read ? "border-l-4 border-l-blue-600 bg-blue-50/30" : ""
                }`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${getTypeColor(
                        notification.type
                      )} flex items-center justify-center flex-shrink-0`}
                    >
                      <notification.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 mb-1">
                            {notification.title}
                          </h3>
                          <p className="text-gray-700">{notification.message}</p>
                        </div>
                        {!notification.read && (
                          <Badge className="bg-blue-600 text-white flex-shrink-0">NEW</Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {notification.time}
                        </div>
                        <Badge className={`${getTypeBadgeColor(notification.type)} text-white`}>
                          {notification.type}
                        </Badge>
                        <Badge variant="outline" className="capitalize">
                          {notification.category}
                        </Badge>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        {notification.actionable && (
                          <Button size="sm" className="bg-[#C91F42] hover:bg-[#A01836]">
                            Take Action
                          </Button>
                        )}
                        {!notification.read && (
                          <Button size="sm" variant="outline" className="gap-2">
                            <Check className="h-4 w-4" />
                            Mark as Read
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="gap-2 text-red-600">
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Load More */}
        {filteredNotifications.length > 0 && (
          <div className="text-center">
            <Button variant="outline" className="gap-2">
              Load More Notifications
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

