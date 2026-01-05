"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Home, Utensils, Heart, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OTPPage() {
  const router = useRouter()
  const [otp, setOtp] = useState(["", "", "", "", "", ""])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

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
            <p className="text-sm text-gray-600">OTP has been sent to your Phone</p>
            <h2 className="text-2xl font-bold text-[#C91F42]">Enter OTP</h2>
          </div>

          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-[#C91F42] focus:outline-none"
              />
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-center text-sm text-gray-600">
              OTP has been sent to your number
              <br />
              <button className="text-[#C91F42] font-medium hover:underline">
                Not received the code? Resend
              </button>
            </p>

            <Button
              className="w-full bg-[#C91F42] hover:bg-[#A01836] h-12"
              onClick={() => router.push("/dashboard")}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

