"use client"

import { useState } from "react"
import { Search, MapPin, Phone, Video, MessageSquare, Navigation, Bell, Heart, Battery, Activity, Clock, UserPlus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LiveMap } from "@/components/live-map"

const familyMembers = [
  {
    id: 1,
    name: "Robert Johnson",
    role: "Father",
    age: 45,
    gender: "Male",
    status: "Safe",
    location: { lat: 37.12, lng: -122.42 },
    phone: "+1 (305) 123-4567",
    lastSeen: "2 min ago",
    avatar: "👨",
    heartRate: 72,
    battery: 85,
    steps: 8456,
    distance: "0.3 mi away",
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Mother",
    age: 42,
    gender: "Female",
    status: "Safe",
    location: { lat: 37.14, lng: -122.44 },
    phone: "+1 (305) 123-4568",
    lastSeen: "5 min ago",
    avatar: "👩",
    heartRate: 68,
    battery: 92,
    steps: 6234,
    distance: "0.5 mi away",
  },
  {
    id: 3,
    name: "Oliver Johnson",
    role: "Son",
    age: 18,
    gender: "Male",
    status: "Safe",
    location: { lat: 37.13, lng: -122.43 },
    phone: "+1 (305) 123-4569",
    lastSeen: "1 min ago",
    avatar: "👦",
    heartRate: 75,
    battery: 45,
    steps: 12456,
    distance: "0.2 mi away",
  },
  {
    id: 4,
    name: "Sophia Johnson",
    role: "Daughter",
    age: 14,
    gender: "Female",
    status: "Safe",
    location: { lat: 37.11, lng: -122.41 },
    phone: "+1 (305) 123-4570",
    lastSeen: "10 min ago",
    avatar: "👧",
    heartRate: 70,
    battery: 78,
    steps: 5789,
    distance: "0.7 mi away",
  },
]

const groups = [
  { id: "primary", name: "Primary", members: 4, color: "bg-blue-500" },
  { id: "general", name: "General", members: 2, color: "bg-purple-500" },
  { id: "request", name: "Request", members: 1, color: "bg-orange-500" },
]

export default function FamilyPage() {
  const [selectedMember, setSelectedMember] = useState(familyMembers[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [locationSharing, setLocationSharing] = useState(true)
  const [selectedGroup, setSelectedGroup] = useState("primary")

  return (
    <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-3xl">👨‍👩‍👧‍👦</span>
              Family Finder
            </h1>
            <p className="text-gray-600 mt-1">Track and connect with your loved ones</p>
          </div>
          <div className="flex gap-3">
            <Badge className="bg-green-500 text-white px-4 py-2 text-sm">
              <span className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse"></span>
              All Family Members Safe
            </Badge>
            <Button className="bg-[#C91F42] hover:bg-[#A01836]">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Member
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="shadow-lg">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search family member by name..."
                className="pl-12 h-12 text-base"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-xl overflow-hidden">
              <CardHeader className="border-b bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-white">Live Location Tracking</CardTitle>
                      <p className="text-sm text-white/80 mt-1">Real-time family member positions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-white/20 text-white">
                      <Navigation className="h-3 w-3 mr-1" />
                      4 Members Active
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-[600px]">
                  <LiveMap />
                  
                  {/* Location Sharing Control */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Location Sharing</p>
                        <p className="text-xs text-gray-500 mt-1">Share your real-time location</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={locationSharing}
                          onChange={(e) => setLocationSharing(e.target.checked)}
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#C91F42] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500 shadow-inner"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Family Members Grid */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle>Family Members & Groups</CardTitle>
                  <Tabs value={selectedGroup} onValueChange={setSelectedGroup} className="w-auto">
                    <TabsList>
                      {groups.map((group) => (
                        <TabsTrigger key={group.id} value={group.id} className="gap-2">
                          {group.name}
                          <Badge className={`${group.color} text-white text-xs`}>{group.members}</Badge>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {familyMembers.map((member) => (
                    <Card
                      key={member.id}
                      className={`cursor-pointer transition-all hover:shadow-lg border-2 ${
                        selectedMember.id === member.id
                          ? "border-[#C91F42] shadow-md"
                          : "border-transparent"
                      }`}
                      onClick={() => setSelectedMember(member)}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <Avatar className="h-16 w-16 text-4xl border-4 border-green-500">
                              <AvatarFallback className="bg-gradient-to-br from-green-100 to-green-200 text-4xl">
                                {member.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-base mb-1">{member.name}</h3>
                            <p className="text-xs text-gray-600 mb-2">
                              {member.role} • {member.age} Years • {member.gender}
                            </p>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge className="bg-green-100 text-green-700 text-xs">
                                <span className="h-1.5 w-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                                {member.status}
                              </Badge>
                              <span className="text-xs text-gray-500">{member.distance}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mb-3">
                              <div className="text-center p-2 bg-red-50 rounded-lg">
                                <Heart className="h-3 w-3 text-red-500 mx-auto mb-1" />
                                <p className="text-xs font-semibold">{member.heartRate}</p>
                                <p className="text-[10px] text-gray-500">bpm</p>
                              </div>
                              <div className="text-center p-2 bg-green-50 rounded-lg">
                                <Battery className="h-3 w-3 text-green-500 mx-auto mb-1" />
                                <p className="text-xs font-semibold">{member.battery}%</p>
                                <p className="text-[10px] text-gray-500">battery</p>
                              </div>
                              <div className="text-center p-2 bg-blue-50 rounded-lg">
                                <Activity className="h-3 w-3 text-blue-500 mx-auto mb-1" />
                                <p className="text-xs font-semibold">{member.steps}</p>
                                <p className="text-[10px] text-gray-500">steps</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="flex-1 h-8">
                                <Phone className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="flex-1 h-8">
                                <Video className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="flex-1 h-8">
                                <MessageSquare className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Selected Member Details */}
          <div className="space-y-4">
            <Card className="shadow-xl sticky top-4">
              <CardHeader className="bg-gradient-to-r from-[#C91F42] to-[#A01836] text-white">
                <div className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4 text-5xl border-4 border-white/30">
                    <AvatarFallback className="bg-white/20 text-5xl">
                      {selectedMember.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl text-white">{selectedMember.name}</CardTitle>
                  <p className="text-white/80 mt-2 text-sm">
                    {selectedMember.role} • {selectedMember.age} Years • {selectedMember.gender}
                  </p>
                  <Badge className="mt-3 bg-white/20 text-white">
                    <Clock className="h-3 w-3 mr-1" />
                    Last seen {selectedMember.lastSeen}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {/* Status Banner */}
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-center">
                  <div className="inline-flex items-center gap-2 text-green-700 font-semibold">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                    {selectedMember.status} & Secure
                  </div>
                </div>

                {/* Health Vitals */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Health Vitals</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-xs font-medium text-gray-600">Heart Rate</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{selectedMember.heartRate}</p>
                      <p className="text-xs text-gray-500">bpm</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="h-4 w-4 text-blue-500" />
                        <span className="text-xs font-medium text-gray-600">Steps</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{selectedMember.steps.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">today</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">{selectedMember.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">{selectedMember.distance}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Battery className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">Device: {selectedMember.battery}%</span>
                    </div>
                  </div>
                </div>

                {/* Communication Actions */}
                <div className="space-y-2">
                  <Button className="w-full h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Call {selectedMember.name}
                  </Button>
                  <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                    <Video className="h-4 w-4 mr-2" />
                    Video Call
                  </Button>
                  <Button className="w-full h-12 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button className="w-full h-12 bg-[#C91F42] hover:bg-[#A01836] text-white">
                    <Navigation className="h-4 w-4 mr-2" />
                    Navigate to Location
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Button */}
            <Button className="w-full h-16 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg font-bold shadow-xl">
              <span className="text-2xl mr-2">🆘</span>
              Emergency SOS
            </Button>
          </div>
        </div>
    </div>
  )
}
