"use client"

import { useState } from "react"
import {
  Phone,
  MapPin,
  AlertTriangle,
  Users,
  Heart,
  Flame,
  Waves,
  Wind,
  Zap,
  Home,
  Car,
  ShieldAlert,
  Clock,
  Navigation,
  MessageCircle,
  Video,
  Share2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function SOSPage() {
  const [emergencyActive, setEmergencyActive] = useState(false)

  const emergencyContacts = [
    { name: "911", type: "Emergency Services", icon: Phone, color: "bg-red-600" },
    { name: "Fire Department", type: "(555) 123-4567", icon: Flame, color: "bg-orange-600" },
    { name: "Police", type: "(555) 123-4568", icon: ShieldAlert, color: "bg-blue-600" },
    { name: "Medical", type: "(555) 123-4569", icon: Heart, color: "bg-green-600" },
  ]

  const quickAlerts = [
    { id: "medical", label: "Medical Emergency", icon: Heart, color: "from-red-500 to-red-600" },
    { id: "fire", label: "Fire", icon: Flame, color: "from-orange-500 to-orange-600" },
    { id: "flood", label: "Flood", icon: Waves, color: "from-blue-500 to-blue-600" },
    { id: "storm", label: "Storm", icon: Wind, color: "from-gray-500 to-gray-600" },
    { id: "earthquake", label: "Earthquake", icon: Zap, color: "from-yellow-500 to-yellow-600" },
    { id: "trapped", label: "Trapped", icon: AlertTriangle, color: "from-purple-500 to-purple-600" },
  ]

  const familyMembers = [
    { name: "John Johnson", relation: "Spouse", status: "safe", lastSeen: "2 min ago" },
    { name: "Emma Johnson", relation: "Daughter", status: "safe", lastSeen: "5 min ago" },
    { name: "Michael Johnson", relation: "Son", status: "unknown", lastSeen: "1 hour ago" },
    { name: "Mary Smith", relation: "Mother", status: "safe", lastSeen: "10 min ago" },
  ]

  const handleEmergencySOS = () => {
    setEmergencyActive(true)
    // Simulate emergency activation
    setTimeout(() => {
      setEmergencyActive(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <ShieldAlert className="h-8 w-8 text-red-600" />
              Emergency SOS
            </h1>
            <p className="text-gray-600 mt-1">Quick access to emergency services and alerts</p>
          </div>
          <Badge className="bg-green-500 text-white px-4 py-2 text-base">
            <MapPin className="h-4 w-4 mr-2" />
            Location Enabled
          </Badge>
        </div>

        {/* Main SOS Button */}
        <Card className="shadow-2xl border-4 border-red-600">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <button
                  onClick={handleEmergencySOS}
                  className={`h-64 w-64 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-4 ${
                    emergencyActive ? "animate-pulse scale-110" : ""
                  }`}
                  disabled={emergencyActive}
                >
                  <AlertTriangle className="h-24 w-24" />
                  <div>
                    <div className="text-4xl font-bold">SOS</div>
                    <div className="text-lg">Emergency</div>
                  </div>
                </button>
                {emergencyActive && (
                  <div className="absolute -top-4 -right-4">
                    <Badge className="bg-red-600 text-white animate-pulse px-4 py-2 text-lg">
                      ACTIVE
                    </Badge>
                  </div>
                )}
              </div>

              <div className="max-w-md mx-auto space-y-3">
                <p className="text-gray-700 font-semibold">
                  Press and hold for 3 seconds to activate emergency SOS
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800">
                    <AlertTriangle className="h-4 w-4 inline mr-2" />
                    This will alert emergency services and all your emergency contacts with your
                    current location
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Emergency Contacts */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-red-600" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <Button
                  key={index}
                  className={`w-full h-16 ${contact.color} hover:opacity-90 text-white justify-start text-left`}
                >
                  <contact.icon className="h-6 w-6 mr-3" />
                  <div className="flex-1">
                    <div className="font-bold">{contact.name}</div>
                    <div className="text-sm opacity-90">{contact.type}</div>
                  </div>
                  <Phone className="h-5 w-5" />
                </Button>
              ))}

              <Separator className="my-4" />

              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="h-14 flex-col gap-1">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-xs">SMS</span>
                </Button>
                <Button variant="outline" className="h-14 flex-col gap-1">
                  <Video className="h-5 w-5" />
                  <span className="text-xs">Video</span>
                </Button>
                <Button variant="outline" className="h-14 flex-col gap-1">
                  <Share2 className="h-5 w-5" />
                  <span className="text-xs">Share</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Alerts */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-600" />
                Quick Alert Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {quickAlerts.map((alert) => (
                  <Button
                    key={alert.id}
                    variant="outline"
                    className={`h-24 flex-col gap-2 bg-gradient-to-br ${alert.color} text-white border-0 hover:opacity-90`}
                  >
                    <alert.icon className="h-8 w-8" />
                    <span className="text-sm font-semibold">{alert.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Family Status */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Family Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {familyMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{member.name}</div>
                    <div className="text-sm text-gray-600">{member.relation}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{member.lastSeen}</span>
                    </div>
                  </div>
                  <Badge
                    className={`${
                      member.status === "safe"
                        ? "bg-green-500"
                        : member.status === "unknown"
                        ? "bg-gray-400"
                        : "bg-red-500"
                    } text-white`}
                  >
                    {member.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Location */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="h-5 w-5 text-green-600" />
              Your Current Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">123 Main Street</div>
                  <div className="text-gray-600">Miami, FL 33101</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Coordinates: 25.7617° N, 80.1918° W
                  </div>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Share2 className="h-4 w-4 mr-2" />
                Share My Location
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

