"use client"

import { useState } from "react"
import {
  Heart,
  Activity,
  Thermometer,
  Droplet,
  Wind,
  TrendingUp,
  TrendingDown,
  Clock,
  Calendar,
  Plus,
  Download,
  Share2,
  AlertCircle,
  CheckCircle,
  Users,
  Pill,
  Stethoscope,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function VitalsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("today")

  const vitals = [
    {
      id: "heartrate",
      name: "Heart Rate",
      value: "72",
      unit: "bpm",
      icon: Heart,
      status: "normal",
      trend: "stable",
      color: "from-red-500 to-red-600",
      range: "60-100 bpm",
    },
    {
      id: "bloodpressure",
      name: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      icon: Activity,
      status: "normal",
      trend: "up",
      color: "from-blue-500 to-blue-600",
      range: "90/60-120/80 mmHg",
    },
    {
      id: "temperature",
      name: "Temperature",
      value: "98.6",
      unit: "°F",
      icon: Thermometer,
      status: "normal",
      trend: "stable",
      color: "from-orange-500 to-orange-600",
      range: "97-99 °F",
    },
    {
      id: "oxygen",
      name: "Blood Oxygen",
      value: "98",
      unit: "%",
      icon: Wind,
      status: "normal",
      trend: "stable",
      color: "from-green-500 to-green-600",
      range: "95-100%",
    },
  ]

  const medications = [
    {
      name: "Aspirin",
      dosage: "81mg",
      frequency: "Once daily",
      time: "Morning",
      taken: true,
    },
    {
      name: "Vitamin D",
      dosage: "1000 IU",
      frequency: "Once daily",
      time: "Morning",
      taken: true,
    },
    {
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      time: "Evening",
      taken: false,
    },
  ]

  const recentReadings = [
    {
      date: "Today, 9:30 AM",
      heartRate: 72,
      bloodPressure: "120/80",
      temperature: 98.6,
      oxygen: 98,
    },
    {
      date: "Today, 6:00 AM",
      heartRate: 68,
      bloodPressure: "118/78",
      temperature: 98.4,
      oxygen: 97,
    },
    {
      date: "Yesterday, 9:30 PM",
      heartRate: 75,
      bloodPressure: "122/82",
      temperature: 98.7,
      oxygen: 98,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "bg-green-500"
      case "warning":
        return "bg-yellow-500"
      case "critical":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <Activity className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Stethoscope className="h-8 w-8 text-red-600" />
              Health & Vitals
            </h1>
            <p className="text-gray-600 mt-1">Track and monitor your health metrics</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button className="bg-[#C91F42] hover:bg-[#A01836] gap-2">
              <Plus className="h-4 w-4" />
              Add Reading
            </Button>
          </div>
        </div>

        {/* Current Vitals */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {vitals.map((vital) => (
            <Card key={vital.id} className="shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${vital.color} flex items-center justify-center`}
                  >
                    <vital.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge className={`${getStatusColor(vital.status)} text-white`}>
                    {vital.status}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-gray-600">{vital.name}</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold text-gray-900">{vital.value}</div>
                    <div className="text-lg text-gray-600 mb-1">{vital.unit}</div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Normal: {vital.range}</span>
                    {getTrendIcon(vital.trend)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Readings */}
          <Card className="lg:col-span-2 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Recent Readings
                </CardTitle>
                <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <TabsList>
                    <TabsTrigger value="today">Today</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentReadings.map((reading, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {reading.date}
                      </div>
                      <Badge variant="outline">Complete</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Heart Rate</div>
                        <div className="font-semibold text-gray-900">{reading.heartRate} bpm</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Blood Pressure</div>
                        <div className="font-semibold text-gray-900">{reading.bloodPressure}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Temperature</div>
                        <div className="font-semibold text-gray-900">{reading.temperature}°F</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Oxygen</div>
                        <div className="font-semibold text-gray-900">{reading.oxygen}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Medications */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-purple-600" />
                Medications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {medications.map((med, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${
                      med.taken
                        ? "bg-green-50 border-green-200"
                        : "bg-orange-50 border-orange-200"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-semibold text-gray-900">{med.name}</div>
                        <div className="text-sm text-gray-600">{med.dosage}</div>
                      </div>
                      {med.taken ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-orange-600" />
                      )}
                    </div>
                    <div className="text-xs text-gray-600">
                      {med.frequency} • {med.time}
                    </div>
                    {!med.taken && (
                      <Button size="sm" className="w-full mt-3 bg-orange-600 hover:bg-orange-700">
                        Mark as Taken
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="outline" className="w-full gap-2">
                  <Plus className="h-4 w-4" />
                  Add Medication
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Health Goals */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Daily Health Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Steps</span>
                  </div>
                  <span className="text-sm text-gray-600">7,234 / 10,000</span>
                </div>
                <Progress value={72} className="h-3" />
                <div className="text-xs text-gray-600">72% complete</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Water</span>
                  </div>
                  <span className="text-sm text-gray-600">6 / 8 glasses</span>
                </div>
                <Progress value={75} className="h-3" />
                <div className="text-xs text-gray-600">75% complete</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-600" />
                    <span className="font-semibold text-gray-900">Active Minutes</span>
                  </div>
                  <span className="text-sm text-gray-600">45 / 60 min</span>
                </div>
                <Progress value={75} className="h-3" />
                <div className="text-xs text-gray-600">75% complete</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="shadow-lg bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-900">
              <AlertCircle className="h-5 w-5" />
              Medical Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button className="h-16 bg-red-600 hover:bg-red-700 text-white justify-start">
                <Heart className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="font-bold">Emergency</div>
                  <div className="text-sm">911</div>
                </div>
              </Button>
              <Button className="h-16 bg-blue-600 hover:bg-blue-700 text-white justify-start">
                <Stethoscope className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="font-bold">Dr. Smith</div>
                  <div className="text-sm">(555) 123-4567</div>
                </div>
              </Button>
              <Button className="h-16 bg-green-600 hover:bg-green-700 text-white justify-start">
                <Users className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="font-bold">Family Contact</div>
                  <div className="text-sm">(555) 987-6543</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

