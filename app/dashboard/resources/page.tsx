"use client"

import { useState } from "react"
import { MapPin, Navigation, Search, Filter, Phone, Clock, Star, TrendingUp, ChevronDown, Home, Utensils, Heart, Shield, Users, HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { LiveMap } from "@/components/live-map"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const resourceCategories = [
  { id: "all", name: "All Resources", icon: HelpCircle, color: "from-gray-500 to-gray-600", count: 45 },
  { id: "shelter", name: "Shelter", icon: Home, color: "from-red-500 to-red-600", count: 12 },
  { id: "food", name: "Food Supply", icon: Utensils, color: "from-orange-500 to-orange-600", count: 18 },
  { id: "medical", name: "Medical", icon: Heart, color: "from-green-500 to-green-600", count: 8 },
  { id: "insurance", name: "Insurance", icon: Shield, color: "from-pink-500 to-pink-600", count: 3 },
  { id: "volunteer", name: "Volunteer", icon: Users, color: "from-purple-500 to-purple-600", count: 4 },
]

const resources = [
  {
    id: 1,
    name: "Broward County Family Relief Center",
    type: "Emergency shelter & food support",
    distance: "3.1 miles",
    updated: "3 min ago",
    rating: 4.8,
    reviews: 124,
    services: ["24/7 assistance", "Child care support", "Case manager"],
    icon: Home,
    status: "open",
    phone: "(305) 555-0123",
    address: "123 Relief Center Dr, Miami, FL",
    capacity: "75% available",
  },
  {
    id: 2,
    name: "Emergency Family Support Line",
    type: "Emergency shelter & food support",
    distance: "3.1 miles",
    updated: "5 min ago",
    rating: 4.9,
    reviews: 89,
    services: ["24/7 hotline", "Child care support", "Case manager"],
    icon: Phone,
    status: "open",
    phone: "(305) 555-0124",
    address: "Virtual Support Center",
    capacity: "Available now",
  },
  {
    id: 3,
    name: "Miami Medical Emergency Center",
    type: "Emergency medical services",
    distance: "4.2 miles",
    updated: "2 min ago",
    rating: 4.7,
    reviews: 256,
    services: ["Emergency care", "Trauma center", "Ambulance"],
    icon: Heart,
    status: "open",
    phone: "(305) 555-0125",
    address: "456 Medical Plaza, Miami, FL",
    capacity: "85% available",
  },
  {
    id: 4,
    name: "Community Food Bank Distribution",
    type: "Food and supplies distribution",
    distance: "2.8 miles",
    updated: "1 min ago",
    rating: 4.6,
    reviews: 178,
    services: ["Food packages", "Water supply", "Hygiene kits"],
    icon: Utensils,
    status: "open",
    phone: "(305) 555-0126",
    address: "789 Community Way, Miami, FL",
    capacity: "60% available",
  },
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("distance")
  const [selectedResource, setSelectedResource] = useState(resources[0])

  return (
    <div className="p-6 space-y-6">
        {/* Header with Stats */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Resource Locator</h1>
            <p className="text-gray-600 mt-1">Find emergency resources near you</p>
          </div>
          <div className="flex gap-3">
            <Card className="shadow-sm">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">45</p>
                  <p className="text-xs text-gray-600">Resources Found</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for shelters, food banks, medical centers..."
                  className="pl-12 h-12 text-base"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48 h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Nearest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="updated">Recently Updated</SelectItem>
                  <SelectItem value="availability">Most Available</SelectItem>
                </SelectContent>
              </Select>
              <Button className="h-12 px-6 bg-[#C91F42] hover:bg-[#A01836]">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Category Filters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {resourceCategories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`h-auto py-4 flex flex-col items-center justify-center transition-all ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-br ${category.color} text-white shadow-lg scale-105`
                    : "hover:shadow-md"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <Icon className="h-6 w-6 mb-2" />
                <span className="text-sm font-semibold">{category.name}</span>
                <Badge className="mt-2 bg-white/20 text-white text-xs">
                  {category.count}
                </Badge>
              </Button>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl overflow-hidden">
              <CardHeader className="border-b bg-gradient-to-r from-[#C91F42] to-[#A01836] text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-white">Interactive Map</CardTitle>
                      <p className="text-sm text-white/80 mt-1">Real-time resource locations</p>
                    </div>
                  </div>
                  <Badge className="bg-white/20 text-white">
                    <span className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse"></span>
                    Live Updates
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-[600px]">
                  <LiveMap />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resources List */}
          <div className="space-y-4">
            <Card className="sticky top-4 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Nearby Resources</CardTitle>
                  <Badge className="bg-[#C91F42]">{resources.length}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
                {resources.map((resource) => {
                  const Icon = resource.icon
                  return (
                    <Card
                      key={resource.id}
                      className={`cursor-pointer transition-all hover:shadow-lg border-2 ${
                        selectedResource.id === resource.id
                          ? "border-[#C91F42] shadow-md"
                          : "border-transparent"
                      }`}
                      onClick={() => setSelectedResource(resource)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="h-12 w-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-gray-700" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-sm line-clamp-2 mb-1">
                              {resource.name}
                            </h3>
                            <p className="text-xs text-gray-600 mb-2">{resource.type}</p>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs font-semibold">{resource.rating}</span>
                                <span className="text-xs text-gray-500">({resource.reviews})</span>
                              </div>
                              <Badge className="text-xs bg-green-100 text-green-700">
                                {resource.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {resource.distance}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {resource.updated}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {resource.services.slice(0, 2).map((service, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs px-2 py-0">
                                  {service}
                                </Badge>
                              ))}
                              {resource.services.length > 2 && (
                                <Badge variant="outline" className="text-xs px-2 py-0">
                                  +{resource.services.length - 2}
                                </Badge>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="flex-1 h-8 bg-[#C91F42] hover:bg-[#A01836] text-xs">
                                <Navigation className="h-3 w-3 mr-1" />
                                Navigate
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
                                <Phone className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Selected Resource Detail */}
        {selectedResource && (
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[#C91F42] to-[#A01836] text-white">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {<selectedResource.icon className="h-8 w-8" />}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">{selectedResource.name}</CardTitle>
                  <p className="text-white/90 mb-3">{selectedResource.type}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-white/90">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {selectedResource.distance}
                    </span>
                    <span className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {selectedResource.phone}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Updated {selectedResource.updated}
                    </span>
                  </div>
                </div>
                <Badge className="bg-white/20 text-white text-sm px-4 py-2">
                  {selectedResource.capacity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Services Available</h4>
                  <div className="space-y-2">
                    {selectedResource.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Location Details</h4>
                  <p className="text-sm text-gray-600 mb-4">{selectedResource.address}</p>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-[#C91F42] hover:bg-[#A01836]">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
    </div>
  )
}
