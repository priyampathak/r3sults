"use client"

import { MapPin, Navigation, Waves, Wind, Droplets, AlertTriangle, Home, Heart, Users, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface MapMarker {
  id: string
  type: "family" | "resource" | "incident"
  position: { top: string; left: string }
  icon: React.ReactNode
  label: string
  color: string
  pulse?: boolean
}

const markers: MapMarker[] = [
  { id: "1", type: "family", position: { top: "30%", left: "40%" }, icon: <Users className="h-4 w-4" />, label: "Robert J.", color: "bg-green-500", pulse: true },
  { id: "2", type: "family", position: { top: "45%", left: "55%" }, icon: <Users className="h-4 w-4" />, label: "Emily J.", color: "bg-green-500", pulse: true },
  { id: "3", type: "family", position: { top: "50%", left: "35%" }, icon: <Users className="h-4 w-4" />, label: "Oliver J.", color: "bg-green-500", pulse: true },
  { id: "4", type: "family", position: { top: "60%", left: "50%" }, icon: <Users className="h-4 w-4" />, label: "Sophia J.", color: "bg-green-500", pulse: true },
  { id: "5", type: "resource", position: { top: "25%", left: "30%" }, icon: <Heart className="h-4 w-4" />, label: "Hospital", color: "bg-red-500" },
  { id: "6", type: "resource", position: { top: "70%", left: "60%" }, icon: <Home className="h-4 w-4" />, label: "Shelter", color: "bg-blue-500" },
  { id: "7", type: "incident", position: { top: "40%", left: "70%" }, icon: <AlertTriangle className="h-4 w-4" />, label: "Flood Zone", color: "bg-orange-500", pulse: true },
]

export function LiveMap() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 rounded-lg overflow-hidden">
      {/* Map Grid Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Geographic Features */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-blue-200 opacity-30 blur-2xl"></div>
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-green-200 opacity-20 blur-3xl rounded-full"></div>
      </div>

      {/* Road Network */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <line x1="10%" y1="30%" x2="90%" y2="40%" stroke="#666" strokeWidth="2" strokeDasharray="5,5"/>
        <line x1="30%" y1="10%" x2="40%" y2="90%" stroke="#666" strokeWidth="2" strokeDasharray="5,5"/>
        <line x1="50%" y1="20%" x2="70%" y2="80%" stroke="#666" strokeWidth="3"/>
        <line x1="20%" y1="60%" x2="80%" y2="65%" stroke="#666" strokeWidth="3"/>
      </svg>

      {/* Markers */}
      {markers.map((marker) => (
        <div
          key={marker.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{ top: marker.position.top, left: marker.position.left }}
        >
          {marker.pulse && (
            <div className={`absolute inset-0 ${marker.color} rounded-full animate-ping opacity-75`}></div>
          )}
          
          <div className={`relative ${marker.color} h-12 w-12 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white hover:scale-110 transition-transform z-10`}>
            {marker.icon}
          </div>
          
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {marker.label}
          </div>
        </div>
      ))}

      {/* Current Location (You) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-50"></div>
          <div className="relative h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white">
            <Navigation className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
        <Button size="icon" className="bg-white text-gray-700 hover:bg-gray-100 shadow-lg h-10 w-10">
          <span className="text-xl">+</span>
        </Button>
        <Button size="icon" className="bg-white text-gray-700 hover:bg-gray-100 shadow-lg h-10 w-10">
          <span className="text-xl">−</span>
        </Button>
        <Button size="icon" className="bg-white text-gray-700 hover:bg-gray-100 shadow-lg h-10 w-10">
          <Navigation className="h-5 w-5" />
        </Button>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20">
        <h4 className="text-xs font-semibold mb-3 text-gray-700">Map Legend</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Your Location</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Family (Safe)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">Medical Resources</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600">Active Incident</span>
          </div>
        </div>
      </div>

      {/* Weather Overlay */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20">
        <div className="flex items-center gap-3">
          <Waves className="h-8 w-8 text-blue-500" />
          <div>
            <div className="text-2xl font-bold">72°F</div>
            <div className="text-xs text-gray-600">Miami, FL</div>
          </div>
        </div>
        <div className="flex gap-4 mt-3 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Wind className="h-3 w-3" />
            <span>12 mph</span>
          </div>
          <div className="flex items-center gap-1">
            <Droplets className="h-3 w-3" />
            <span>65%</span>
          </div>
        </div>
      </div>

      {/* Active Alert */}
      <div className="absolute top-20 left-4 right-4 max-w-md bg-orange-500/95 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20">
        <div className="flex items-center gap-2 text-white">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 animate-pulse" />
          <div className="text-sm font-semibold">
            Flood Warning: Heavy rainfall expected in your area
          </div>
        </div>
      </div>
    </div>
  )
}
