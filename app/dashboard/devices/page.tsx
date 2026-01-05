"use client"

import { useState } from "react"
import {
  Smartphone,
  Laptop,
  Watch,
  Tablet,
  Monitor,
  Battery,
  BatteryCharging,
  BatteryLow,
  Wifi,
  WifiOff,
  MapPin,
  Clock,
  Plus,
  Trash2,
  Edit,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Signal,
  Bluetooth,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

export default function DevicesPage() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>("device1")

  const devices = [
    {
      id: "device1",
      name: "iPhone 14 Pro",
      type: "smartphone",
      icon: Smartphone,
      status: "online",
      battery: 85,
      charging: false,
      location: "Home",
      lastSeen: "Active now",
      connected: true,
      signal: 4,
      bluetooth: true,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "device2",
      name: "MacBook Pro",
      type: "laptop",
      icon: Laptop,
      status: "online",
      battery: 62,
      charging: true,
      location: "Home",
      lastSeen: "Active now",
      connected: true,
      signal: 4,
      bluetooth: true,
      color: "from-gray-500 to-gray-600",
    },
    {
      id: "device3",
      name: "Apple Watch",
      type: "watch",
      icon: Watch,
      status: "online",
      battery: 45,
      charging: false,
      location: "Home",
      lastSeen: "2 min ago",
      connected: true,
      signal: 3,
      bluetooth: true,
      color: "from-pink-500 to-pink-600",
    },
    {
      id: "device4",
      name: "iPad Air",
      type: "tablet",
      icon: Tablet,
      status: "offline",
      battery: 28,
      charging: false,
      location: "Unknown",
      lastSeen: "2 hours ago",
      connected: false,
      signal: 0,
      bluetooth: false,
      color: "from-purple-500 to-purple-600",
    },
  ]

  const getBatteryIcon = (battery: number, charging: boolean) => {
    if (charging) return BatteryCharging
    if (battery < 20) return BatteryLow
    return Battery
  }

  const getBatteryColor = (battery: number) => {
    if (battery < 20) return "text-red-600"
    if (battery < 50) return "text-yellow-600"
    return "text-green-600"
  }

  const getSignalBars = (signal: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`h-${i + 1} w-1 rounded-full ${
          i < signal ? "bg-green-600" : "bg-gray-300"
        }`}
        style={{ height: `${(i + 1) * 4}px` }}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Smartphone className="h-8 w-8 text-blue-600" />
              Linked Devices
            </h1>
            <p className="text-gray-600 mt-1">Manage and monitor all your connected devices</p>
          </div>
          <Button className="bg-[#C91F42] hover:bg-[#A01836] gap-2">
            <Plus className="h-4 w-4" />
            Add Device
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {devices.filter((d) => d.status === "online").length}
                  </div>
                  <div className="text-sm text-gray-600">Online</div>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {devices.filter((d) => d.status === "offline").length}
                  </div>
                  <div className="text-sm text-gray-600">Offline</div>
                </div>
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {Math.round(devices.reduce((acc, d) => acc + d.battery, 0) / devices.length)}%
                  </div>
                  <div className="text-sm text-gray-600">Avg Battery</div>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Battery className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{devices.length}</div>
                  <div className="text-sm text-gray-600">Total Devices</div>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Devices Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {devices.map((device) => {
            const DeviceIcon = device.icon
            const BatteryIcon = getBatteryIcon(device.battery, device.charging)
            const isSelected = selectedDevice === device.id

            return (
              <Card
                key={device.id}
                className={`shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                  isSelected ? "ring-2 ring-[#C91F42]" : ""
                }`}
                onClick={() => setSelectedDevice(device.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Device Icon */}
                    <div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${device.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <DeviceIcon className="h-8 w-8 text-white" />
                    </div>

                    {/* Device Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{device.name}</h3>
                          <p className="text-sm text-gray-600 capitalize">{device.type}</p>
                        </div>
                        <Badge
                          className={`${
                            device.status === "online"
                              ? "bg-green-500"
                              : "bg-gray-400"
                          } text-white`}
                        >
                          {device.status}
                        </Badge>
                      </div>

                      <Separator className="my-3" />

                      {/* Device Stats */}
                      <div className="space-y-3">
                        {/* Battery */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <BatteryIcon
                                className={`h-4 w-4 ${getBatteryColor(device.battery)}`}
                              />
                              <span className="text-gray-700">Battery</span>
                            </div>
                            <span className="font-semibold text-gray-900">
                              {device.battery}%
                              {device.charging && " (Charging)"}
                            </span>
                          </div>
                          <Progress value={device.battery} className="h-2" />
                        </div>

                        {/* Connection Status */}
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            {device.connected ? (
                              <Wifi className="h-4 w-4 text-green-600" />
                            ) : (
                              <WifiOff className="h-4 w-4 text-gray-400" />
                            )}
                            <span className="text-gray-700">
                              {device.connected ? "Connected" : "Disconnected"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Bluetooth
                              className={`h-4 w-4 ${
                                device.bluetooth ? "text-blue-600" : "text-gray-400"
                              }`}
                            />
                            <span className="text-gray-700">
                              {device.bluetooth ? "Paired" : "Unpaired"}
                            </span>
                          </div>
                        </div>

                        {/* Location & Last Seen */}
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="h-4 w-4 text-red-600" />
                            <span>{device.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span>{device.lastSeen}</span>
                          </div>
                        </div>

                        {/* Signal Strength */}
                        {device.connected && (
                          <div className="flex items-center gap-2">
                            <Signal className="h-4 w-4 text-gray-500" />
                            <div className="flex items-end gap-0.5">
                              {getSignalBars(device.signal)}
                            </div>
                            <span className="text-xs text-gray-600 ml-2">
                              {device.signal === 4
                                ? "Excellent"
                                : device.signal === 3
                                ? "Good"
                                : device.signal === 2
                                ? "Fair"
                                : "Poor"}
                            </span>
                          </div>
                        )}
                      </div>

                      <Separator className="my-3" />

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <MapPin className="h-4 w-4 mr-2" />
                          Locate
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Refresh
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Device Management Tips */}
        <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <AlertCircle className="h-5 w-5" />
              Device Management Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-blue-900">
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Keep your devices updated with the latest software for optimal performance</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Enable location services to help locate your devices in emergencies</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Regularly check battery levels to ensure devices are ready when needed</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

