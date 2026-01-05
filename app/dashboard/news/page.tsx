"use client"

import { useState } from "react"
import { Search, Filter, Clock, MapPin, Bell, AlertTriangle, TrendingUp, Eye, FileText, Waves, Flame, Wind, Cloud } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const newsCategories = [
  { id: "all", name: "All", icon: "news", count: 18 },
  { id: "earthquakes", name: "Earthquakes", icon: "seismic", count: 3 },
  { id: "floods", name: "Floods", icon: "flood", count: 5 },
  { id: "volcanic", name: "Volcanic", icon: "volcano", count: 2 },
  { id: "wildfire", name: "Wildfires", icon: "fire", count: 4 },
  { id: "hurricane", name: "Hurricanes", icon: "storm", count: 4 },
]

const activeIncidents = [
  {
    id: 1,
    title: "Severe Floods Hit Springfield",
    description: "Heavy rainfall causes widespread flooding in the Springfield area, affecting thousands of residents. Emergency services are working around the clock to evacuate affected areas.",
    date: "8th December 2025",
    time: "2 hours ago",
    location: "Springfield, IL",
    imageIcon: Waves,
    category: "floods",
    severity: "critical",
    affected: "12,500 people",
    views: 1234,
  },
  {
    id: 2,
    title: "Tropical Storm Delta Causes Power Outages Across Coastline",
    description: "Storm Delta brings strong winds and heavy rain, leaving thousands without power. Utility crews are working to restore services.",
    date: "8th December 2025",
    time: "3 hours ago",
    location: "Gulf Coast",
    imageIcon: Cloud,
    category: "storm",
    severity: "high",
    affected: "8,200 people",
    views: 892,
  },
  {
    id: 3,
    title: "Wildfire Spreads in Northern California",
    description: "Fast-moving wildfire threatens residential areas. Evacuation orders issued for multiple communities.",
    date: "8th December 2025",
    time: "5 hours ago",
    location: "Northern California",
    imageIcon: Flame,
    category: "wildfire",
    severity: "critical",
    affected: "6,700 people",
    views: 2156,
  },
]

const recentIncidents = [
  {
    id: 4,
    title: "Tornado Touches Down in Central Plains",
    description: "Emergency crews respond to tornado damage in multiple counties. Several structures damaged, injuries reported.",
    date: "6th December 2025",
    location: "Kansas",
    imageIcon: Wind,
    category: "tornado",
    severity: "medium",
    views: 567,
  },
  {
    id: 5,
    title: "Volcano Eruption Forces Mass Evacuation in Hilltown",
    description: "Authorities evacuate nearby towns as volcanic activity intensifies. Air quality warnings issued.",
    date: "4 Days Ago",
    location: "Hilltown",
    imageIcon: AlertTriangle,
    category: "volcanic",
    severity: "high",
    views: 1823,
  },
  {
    id: 6,
    title: "Hurricane Season Preparations Underway",
    description: "Coastal communities prepare for upcoming hurricane season. Emergency kits recommended.",
    date: "1 Week Ago",
    location: "Florida Coast",
    imageIcon: Cloud,
    category: "hurricane",
    severity: "low",
    views: 445,
  },
  {
    id: 7,
    title: "Earthquake Tremors Felt Across Region",
    description: "Minor earthquake registered, no major damage reported. Residents advised to remain vigilant.",
    date: "1 Week Ago",
    location: "San Francisco Bay",
    imageIcon: TrendingUp,
    category: "earthquake",
    severity: "low",
    views: 678,
  },
]

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedIncident, setSelectedIncident] = useState(activeIncidents[0])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <div className="p-6 space-y-6">
        {/* Header with Stats */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Disaster News</h1>
            <p className="text-gray-600 mt-1">Stay informed about emergencies in your area</p>
          </div>
          <div className="flex gap-3">
            <Card className="shadow-sm">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-red-600 animate-pulse" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-600">3</p>
                  <p className="text-xs text-gray-600">Active Alerts</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for disasters, locations, or incidents..."
                  className="pl-12 h-12 text-base"
                />
              </div>
              <Button className="h-12 px-6 bg-[#C91F42] hover:bg-[#A01836]">
                <Filter className="h-5 w-5 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Category Tabs */}
        <Card className="shadow-lg">
          <CardContent className="p-4">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="w-full justify-start">
                {newsCategories.map((category) => {
                  const getIcon = () => {
                    switch(category.icon) {
                      case "news": return <FileText className="h-4 w-4" />
                      case "seismic": return <TrendingUp className="h-4 w-4" />
                      case "flood": return <Waves className="h-4 w-4" />
                      case "volcano": return <AlertTriangle className="h-4 w-4" />
                      case "fire": return <Flame className="h-4 w-4" />
                      case "storm": return <Wind className="h-4 w-4" />
                      default: return <FileText className="h-4 w-4" />
                    }
                  }
                  return (
                    <TabsTrigger key={category.id} value={category.id} className="gap-2">
                      {getIcon()}
                      <span>{category.name}</span>
                      <Badge className="bg-gray-200 text-gray-700 text-xs">{category.count}</Badge>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        {/* Active Incidents (Critical) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              Active Incidents
            </h2>
            <Badge className="bg-red-500 text-white animate-pulse px-4 py-2">
              LIVE UPDATES
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeIncidents.map((incident) => {
              const IncidentIcon = incident.imageIcon
              return (
                <Card
                  key={incident.id}
                  className="overflow-hidden hover:shadow-2xl transition-all cursor-pointer border-l-4 border-l-red-500 group"
                  onClick={() => setSelectedIncident(incident)}
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                    <IncidentIcon className="h-24 w-24 text-blue-600" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Badge className={`${getSeverityColor(incident.severity)} text-white`}>
                      <span className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      {incident.severity.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{incident.time}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#C91F42] transition-colors">
                    {incident.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {incident.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {incident.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3" />
                      {incident.affected}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Eye className="h-3 w-3" />
                      {incident.views} views
                    </span>
                    <Button size="sm" className="h-8 bg-[#C91F42] hover:bg-[#A01836]">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
              )
            })}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="h-6 w-6 text-gray-700" />
              Recent Incidents
            </h2>
            <Button variant="outline" className="gap-2">
              View All
              <TrendingUp className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {recentIncidents.map((incident) => {
              const IncidentIcon = incident.imageIcon
              return (
                <Card
                  key={incident.id}
                  className="hover:shadow-lg transition-all cursor-pointer group"
                >
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      <div className="h-20 w-20 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                        <IncidentIcon className="h-10 w-10 text-gray-700" />
                      </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-bold text-base line-clamp-2 group-hover:text-[#C91F42] transition-colors">
                          {incident.title}
                        </h3>
                        <Badge className={`${getSeverityColor(incident.severity)} text-white text-xs flex-shrink-0`}>
                          {incident.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {incident.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {incident.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {incident.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {incident.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              )
            })}
          </div>
        </div>

        {/* Emergency Alert Banner */}
        <Card className="shadow-xl bg-gradient-to-r from-red-500 to-red-600 text-white overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center text-white flex-shrink-0 animate-pulse">
                <Bell className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Emergency Alert System Active</h3>
                <p className="text-white/90 mb-6 text-lg">
                  You will receive real-time notifications for disasters and emergencies in your area. 
                  Make sure to keep your location services enabled for accurate alerts.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-white text-red-600 hover:bg-gray-100 h-12 px-6">
                    Configure Alert Settings
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-6">
                    View Alert History
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
  )
}
