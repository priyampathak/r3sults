"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, ArrowLeft, Home, Utensils, Heart, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [step, setStep] = useState<"welcome" | "phone" | "social">("welcome")

  if (step === "welcome") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="relative h-64 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              <div className="space-y-3">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <Home className="h-16 w-16 text-blue-600" />
                </div>
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <Utensils className="h-12 w-12 text-orange-600" />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <Heart className="h-12 w-12 text-green-600" />
                </div>
                <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-red-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#C91F42]">
              Respond. Recover. Rebuild.
            </h1>
            <p className="text-gray-600">
              All in one platform for your disaster preparedness, relief & recovery
            </p>
          </div>

          <div className="space-y-4">
            <Link href="/dashboard" className="block">
              <Button
                className="w-full bg-[#C91F42] hover:bg-[#A01836] h-12 text-base"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button
              variant="ghost"
              className="w-full h-12 text-base"
              onClick={() => setStep("phone")}
            >
              Log in
            </Button>
          </div>

          <div className="text-center text-sm text-gray-500">
            v 1.0.01
          </div>
        </div>
      </div>
    )
  }

  if (step === "phone") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="relative h-64 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm opacity-50">
              <div className="space-y-3">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <Home className="h-16 w-16 text-blue-600" />
                </div>
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <Utensils className="h-12 w-12 text-orange-600" />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <Heart className="h-12 w-12 text-green-600" />
                </div>
                <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-red-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-[#C91F42]">Let's Get Started</h2>
              <p className="text-gray-600">Log in using your Mobile Number</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 border rounded-md w-24 bg-white">
                    <span className="text-sm font-medium">US +1</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(202) 564 9595"
                    className="flex-1"
                  />
                </div>
              </div>

              <Button
                className="w-full bg-[#C91F42] hover:bg-[#A01836] h-12"
                onClick={() => router.push("/auth/otp")}
              >
                Next
              </Button>

              <div className="text-center">
                <button
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onClick={() => setStep("social")}
                >
                  Don't Have a Phone No.?{" "}
                  <span className="text-[#C91F42] font-medium">Continue with Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (step === "social") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="relative h-64 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm opacity-50">
              <div className="space-y-3">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <Home className="h-16 w-16 text-blue-600" />
                </div>
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <Utensils className="h-12 w-12 text-orange-600" />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <Heart className="h-12 w-12 text-green-600" />
                </div>
                <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-red-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#C91F42]">Create Account With</h2>
            </div>

            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full h-12 flex items-center justify-center gap-3 hover:border-[#C91F42]"
                onClick={() => router.push("/dashboard")}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 flex items-center justify-center gap-3 hover:border-[#C91F42]"
                onClick={() => router.push("/dashboard")}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span>Sign in with Apple</span>
              </Button>
            </div>

            <div className="text-center">
              <button
                className="text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center gap-1 mx-auto"
                onClick={() => setStep("phone")}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to phone login
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

