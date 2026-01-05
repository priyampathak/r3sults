"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "Oliver",
    lastName: "John",
    email: "john007@gamil.com",
    username: "john007",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="mb-6 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#C91F42] mb-2">
              Create Your Profile
            </h1>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-[#C91F42]">
                <AvatarImage src="/avatars/default.png" />
                <AvatarFallback className="bg-gray-100 text-gray-700 text-2xl font-bold">
                  SJ
                </AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 h-10 w-10 bg-[#C91F42] rounded-full flex items-center justify-center text-white hover:bg-[#A01836]">
                <Camera className="h-5 w-5" />
              </button>
            </div>
            <p className="text-[#C91F42] font-medium text-sm">Change Picture</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder="Oliver"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  placeholder="John"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email ID<span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john007@gamil.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">User Name</Label>
              <Input
                id="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                placeholder="john007"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#C91F42] hover:bg-[#A01836] h-12 text-base"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

