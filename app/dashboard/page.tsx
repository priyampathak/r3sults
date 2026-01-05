"use client"

import { MapPin, Navigation, TrendingUp, Users, AlertTriangle, Activity, Radio, Home, Utensils, Heart, Battery, Phone, MessageSquare, Cloud, Wind, Droplets } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LiveMap } from "@/components/live-map"
import { Badge } from "@/components/ui/badge"

const familyMembers = [
  {
    id: 1,
    name: "Robert Johnson",
    role: "Father - Male - 45 Years",
    status: "safe",
    position: { lat: 37.12, lng: -122.42 },
    lastUpdate: "2 min ago",
    heartRate: 72,
    battery: 85,
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Mother - Female - 42 Years",
    status: "safe",
    position: { lat: 37.14, lng: -122.44 },
    lastUpdate: "5 min ago",
    heartRate: 68,
    battery: 92,
  },
  {
    id: 3,
    name: "Oliver Johnson",
    role: "Son - Male - 18 Years",
    status: "safe",
    position: { lat: 37.13, lng: -122.43 },
    lastUpdate: "1 min ago",
    heartRate: 75,
    battery: 45,
  },
  {
    id: 4,
    name: "Sophia Johnson",
    role: "Daughter - Female - 14 Years",
    status: "safe",
    position: { lat: 37.11, lng: -122.41 },
    lastUpdate: "10 min ago",
    heartRate: 70,
    battery: 78,
  },
]

const quickStats = [
  { label: "Family Safe", value: "4/4", icon: Users, color: "text-green-600", bgColor: "bg-green-50" },
  { label: "Active Alerts", value: "2", icon: AlertTriangle, color: "text-orange-600", bgColor: "bg-orange-50" },
  { label: "Resources", value: "12", icon: MapPin, color: "text-blue-600", bgColor: "bg-blue-50" },
  { label: "Live Tracking", value: "ON", icon: Radio, color: "text-purple-600", bgColor: "bg-purple-50" },
]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-[#C91F42]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.bgColor} ${stat.color} p-4 rounded-xl`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden shadow-xl">
              <CardHeader className="border-b bg-gradient-to-r from-[#C91F42] to-[#A01836] text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-white">Live Supply Map</CardTitle>
                      <p className="text-sm text-white/80 mt-1">Miami, Florida • 37° 23' 22.12" N, 122° 4' 12" W</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Navigation className="h-4 w-4 mr-2" />
                      Re-center
                    </Button>
                    <Badge className="bg-green-500 text-white">
                      <span className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      Live
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-[550px]">
                  <LiveMap />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button className="h-24 flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-red-100 text-gray-700 hover:shadow-lg transition-all border-2 border-red-200">
                    <div className="h-10 w-10 bg-red-500 text-white rounded-full flex items-center justify-center mb-2">
                      <Home className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold">Shelter Locator</span>
                  </Button>
                  <Button className="h-24 flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 text-gray-700 hover:shadow-lg transition-all border-2 border-orange-200">
                    <div className="h-10 w-10 bg-orange-500 text-white rounded-full flex items-center justify-center mb-2">
                      <Utensils className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold">Food Supply</span>
                  </Button>
                  <Button className="h-24 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 text-gray-700 hover:shadow-lg transition-all border-2 border-green-200">
                    <div className="h-10 w-10 bg-green-500 text-white rounded-full flex items-center justify-center mb-2">
                      <Heart className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold">Medical Centre</span>
                  </Button>
                  <Button className="h-24 flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 text-gray-700 hover:shadow-lg transition-all border-2 border-purple-200">
                    <div className="h-10 w-10 bg-purple-500 text-white rounded-full flex items-center justify-center mb-2">
                      <Users className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold">Volunteer</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Family Finder Sidebar */}
          <div className="space-y-4">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#C91F42]" />
                    Family Finder
                  </CardTitle>
                  <Badge className="bg-green-500 text-white">
                    All Safe
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {familyMembers.map((member) => (
                  <Card key={member.id} className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12 border-2 border-green-500">
                            <AvatarFallback className="bg-gradient-to-br from-green-100 to-green-200 text-green-700 font-bold">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm">{member.name}</p>
                          <p className="text-xs text-gray-600 mb-2">{member.role}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Activity className="h-3 w-3" />
                              {member.heartRate} bpm
                            </span>
                            <span className="flex items-center gap-1">
                              <Battery className="h-3 w-3" />
                              {member.battery}%
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">{member.lastUpdate}</p>
                        </div>
                        <Button
                          size="icon"
                          className="h-8 w-8 flex-shrink-0 bg-[#C91F42] hover:bg-[#A01836]"
                        >
                          <Navigation className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-700">
                      Location Sharing
                    </p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#C91F42] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-400 animate-pulse" style={{ width: "100%" }} />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Active</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Actions */}
            <div className="space-y-3">
              <Button className="w-full h-16 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Emergency SOS
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button className="h-14 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md">
                  <Phone className="h-5 w-5 mr-2" />
                  Call 911
                </Button>
                <Button className="h-14 bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-md">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Chat
                </Button>
              </div>
            </div>

            {/* Live Weather Widget */}
            <Card className="shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold">72°F</div>
                    <p className="text-sm opacity-90 mt-1">Partly Cloudy</p>
                    <p className="text-xs opacity-75 mt-1">Miami, Florida</p>
                  </div>
                  <Cloud className="h-16 w-16 opacity-80" />
                </div>
                <div className="mt-4 pt-4 border-t border-white/20 flex justify-between text-xs">
                  <span className="flex items-center gap-1">
                    <Droplets className="h-3 w-3" />
                    65%
                  </span>
                  <span className="flex items-center gap-1">
                    <Wind className="h-3 w-3" />
                    12 mph
                  </span>
                  <span>Visibility: 10 mi</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
    </div>
  )
}
