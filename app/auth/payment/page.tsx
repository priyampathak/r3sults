"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Watch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PaymentPage() {
  const router = useRouter()
  const [showSuccess, setShowSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    firstName: "Oliver",
    lastName: "John",
    email: "john007@gamil.com",
    phone: "+123 456 789",
    addressLine1: "",
    addressLine2: "",
    state: "",
    postcode: "731153",
    billingAddressLine1: "",
    billingAddressLine2: "",
  })

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      router.push("/dashboard")
    }, 2000)
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="flex justify-center">
            <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="h-12 w-12 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your Payment was Successful!
            </h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <Button
            className="bg-[#C91F42] hover:bg-[#A01836] px-8"
            onClick={() => router.push("/dashboard")}
          >
            Continue
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="mb-6 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Subscription Summary */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold">
                    <span className="text-gray-900">R</span>
                    <span className="text-xs align-super text-gray-700">.</span>
                    <span className="text-gray-900">sults</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Respond | Recover | Rebuild
                  </div>
                  <Watch className="h-12 w-12 ml-auto" />
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Subscription Summary</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <p className="font-semibold">Plus Plan</p>
                      <p className="text-sm text-gray-600">$7.99 for 1 month</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>Family Member(s)</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">👥 4</span>
                        <span>$31.96</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold">R3 Life Tracker</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="px-2 py-1 bg-gray-100 rounded">⌚ 2</span>
                        <span>$43.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount</span>
                    <span className="font-semibold">$75.98</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (6% GST)</span>
                    <span className="font-semibold">$4.94</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-base font-bold">
                    <span>Total price</span>
                    <span>$80.92</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full h-12 bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    Pay
                  </Button>

                  <Button className="w-full h-12 bg-[#FFD814] hover:bg-[#F7CA00] text-black font-medium">
                    amazon pay
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-white px-2 text-gray-500">or</span>
                    </div>
                  </div>

                  <Button className="w-full h-12 bg-[#0070BA] hover:bg-[#005A94] text-white">
                    PayPal
                  </Button>

                  <div className="flex items-center justify-center gap-2 pt-2">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%23FF5F00' x='16' y='8' width='16' height='16' rx='2'/%3E%3C/svg%3E" alt="Mastercard" className="h-8" />
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%231434CB' width='48' height='32' rx='4'/%3E%3C/svg%3E" alt="Visa" className="h-8" />
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%23016FD0' width='48' height='32' rx='4'/%3E%3C/svg%3E" alt="Amex" className="h-8" />
                  </div>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  Expires checkout
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Shipping Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name*</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name*</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email ID*</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number*</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Shipping Address* <span className="text-red-500">*Same Address</span>
                    </Label>
                    <Input
                      placeholder="Address Line 1"
                      value={formData.addressLine1}
                      onChange={(e) =>
                        setFormData({ ...formData, addressLine1: e.target.value })
                      }
                      required
                    />
                    <Input
                      placeholder="Address Line 2"
                      value={formData.addressLine2}
                      onChange={(e) =>
                        setFormData({ ...formData, addressLine2: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="state">State*</Label>
                      <Select
                        value={formData.state}
                        onValueChange={(value) =>
                          setFormData({ ...formData, state: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Alabama" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alabama">Alabama</SelectItem>
                          <SelectItem value="california">California</SelectItem>
                          <SelectItem value="texas">Texas</SelectItem>
                          <SelectItem value="florida">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postcode">Postcode*</Label>
                      <Input
                        id="postcode"
                        value={formData.postcode}
                        onChange={(e) =>
                          setFormData({ ...formData, postcode: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Billing Address* <span className="text-red-500">*Same Address</span>
                    </Label>
                    <Input
                      placeholder="Address Line 1"
                      value={formData.billingAddressLine1}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          billingAddressLine1: e.target.value,
                        })
                      }
                    />
                    <Input
                      placeholder="Address Line 2"
                      value={formData.billingAddressLine2}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          billingAddressLine2: e.target.value,
                        })
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#C91F42] hover:bg-[#A01836] h-12"
                  >
                    Continue
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

