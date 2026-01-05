"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const plans = [
  {
    id: "basic",
    name: "Basic Plan",
    monthlyPrice: 2.99,
    yearlyPrice: 29.99,
    popular: true,
    features: [
      "Basic emergency assistance and guidance",
      "Access to shelters and relief supply locations",
      "Standard medical support information",
    ],
  },
  {
    id: "plus",
    name: "Plus Plan",
    monthlyPrice: 7.99,
    yearlyPrice: 79.99,
    popular: true,
    features: [
      "All features from Essential Support",
      "Priority access to medical care and emergency hotlines",
      "Fast-track connections with volunteers and charities",
      "Personalized consultation and safety planning",
      "Real-time disaster alerts and updates",
    ],
  },
]

export default function PricingPage() {
  const router = useRouter()
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [selectedPlan, setSelectedPlan] = useState("basic")

  const handleContinue = () => {
    router.push("/auth/payment")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="mb-6 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#C91F42] mb-6">
              Select Package
            </h1>
            
            <Tabs
              value={billingCycle}
              onValueChange={(value) => setBillingCycle(value as "monthly" | "yearly")}
              className="inline-flex"
            >
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-6">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? "border-2 border-[#C91F42] shadow-lg"
                    : "border-2 border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold">{plan.name}</h3>
                            {plan.popular && (
                              <span className="inline-block bg-red-100 text-[#C91F42] text-xs font-semibold px-2 py-1 rounded">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="mt-2">
                            <span className="text-3xl font-bold text-[#C91F42]">
                              ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                            </span>
                            <span className="text-gray-600 ml-1">
                              /{billingCycle === "monthly" ? "month" : "year"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-[#C91F42] mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-center md:justify-end">
                      <Button
                        className={`px-8 ${
                          selectedPlan === plan.id
                            ? "bg-[#C91F42] hover:bg-[#A01836]"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedPlan(plan.id)
                        }}
                      >
                        Select Plan
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            className="w-full bg-[#C91F42] hover:bg-[#A01836] h-12 text-base"
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

