"use client"

import { useState } from "react"
import { Upload, Camera, Image as ImageIcon, Video, Bell, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const myDamages = [
  {
    id: 1,
    title: "Home Roof Damage",
    description: "Severe wind damage to roof shingles",
    date: "Dec 8, 2025",
    status: "pending",
    images: 3,
  },
  {
    id: 2,
    title: "Flooded Basement",
    description: "Water damage from recent flooding",
    date: "Dec 5, 2025",
    status: "under_review",
    images: 5,
  },
]

const myRequests = [
  {
    id: 1,
    title: "Emergency Shelter Request",
    date: "Dec 7, 2025",
    status: "approved",
    type: "shelter",
  },
  {
    id: 2,
    title: "Medical Assistance",
    date: "Dec 6, 2025",
    status: "pending",
    type: "medical",
  },
]

export default function ActivityPage() {
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  const handleFileUpload = () => {
    // Simulate file upload
    setUploadedFiles([...uploadedFiles, `file-${uploadedFiles.length + 1}`])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle damage report submission
    alert("Damage report submitted successfully!")
  }

  return (
    <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Activity</h1>
          <Button size="icon" variant="ghost">
            <Bell className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Report Damage Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Report Damage</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Address Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Select value={address} onValueChange={setAddress}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select address" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home">123 Main St, Springfield, IL</SelectItem>
                        <SelectItem value="work">456 Office Blvd, Springfield, IL</SelectItem>
                        <SelectItem value="other">Other Address</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Describe the damage</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Please provide detailed information about the damage..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  {/* Upload Photo/Video */}
                  <div className="space-y-2">
                    <Label>Upload Photo/Video</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300"
                        >
                          <ImageIcon className="h-8 w-8 text-gray-400" />
                        </div>
                      ))}
                      
                      {/* Upload Buttons */}
                      {uploadedFiles.length < 4 && (
                        <>
                          <button
                            type="button"
                            onClick={handleFileUpload}
                            className="aspect-square bg-white rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#C91F42] hover:bg-gray-50 transition-colors"
                          >
                            <Camera className="h-8 w-8 text-gray-400 mb-2" />
                            <span className="text-xs text-gray-600">Camera</span>
                          </button>
                          
                          <button
                            type="button"
                            onClick={handleFileUpload}
                            className="aspect-square bg-white rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#C91F42] hover:bg-gray-50 transition-colors"
                          >
                            <ImageIcon className="h-8 w-8 text-gray-400 mb-2" />
                            <span className="text-xs text-gray-600">Gallery</span>
                          </button>
                          
                          <button
                            type="button"
                            onClick={handleFileUpload}
                            className="aspect-square bg-white rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#C91F42] hover:bg-gray-50 transition-colors"
                          >
                            <Video className="h-8 w-8 text-gray-400 mb-2" />
                            <span className="text-xs text-gray-600">Video</span>
                          </button>
                          
                          <button
                            type="button"
                            onClick={handleFileUpload}
                            className="aspect-square bg-white rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#C91F42] hover:bg-gray-50 transition-colors"
                          >
                            <Upload className="h-8 w-8 text-gray-400 mb-2" />
                            <span className="text-xs text-gray-600">Upload</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#C91F42] hover:bg-[#A01836] h-12"
                  >
                    Request Support
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* My Damages */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">My Damages</h3>
                  <Button variant="ghost" size="sm" className="text-[#C91F42]">
                    View All
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {myDamages.map((damage) => (
                    <Card
                      key={damage.id}
                      className="cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm mb-1">
                              {damage.title}
                            </h4>
                            <p className="text-xs text-gray-600 mb-2">
                              {damage.description}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <span>{damage.date}</span>
                              <span className="flex items-center gap-1">
                                <ImageIcon className="h-3 w-3" />
                                {damage.images} photos
                              </span>
                            </div>
                          </div>
                          <div>
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                damage.status === "pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {damage.status === "pending" ? "Pending" : "Under Review"}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* My Requests Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">My Requests</h3>
                  <Button variant="ghost" size="sm" className="text-[#C91F42]">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {myRequests.map((request) => (
                    <Card
                      key={request.id}
                      className="cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-3">
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold text-sm line-clamp-2">
                              {request.title}
                            </h4>
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                                request.status === "approved"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {request.status === "approved" ? "✓" : "⏳"}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">{request.date}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-[#C91F42] to-[#A01836] text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Activity Summary</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-90">Total Reports</span>
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-90">Pending</span>
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-90">Under Review</span>
                    <span className="text-2xl font-bold">1</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Button */}
            <Button className="w-full h-14 bg-red-500 hover:bg-red-600 text-white text-lg font-bold">
              🆘 Report Emergency
            </Button>
          </div>
      </div>
    </div>
  )
}

