"use client"

import { useState } from "react"
import {
  Shield,
  FileText,
  Upload,
  Camera,
  Plus,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  DollarSign,
  Home,
  Car,
  Heart,
  Briefcase,
  Phone,
  Mail,
  Download,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function InsurancePage() {
  const [selectedTab, setSelectedTab] = useState("overview")

  const insurancePolicies = [
    {
      id: 1,
      type: "Home Insurance",
      provider: "State Farm",
      policyNumber: "HO-123456789",
      coverage: "$350,000",
      premium: "$1,200/year",
      status: "active",
      expiryDate: "Dec 31, 2025",
      icon: Home,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      type: "Auto Insurance",
      provider: "Geico",
      policyNumber: "AU-987654321",
      coverage: "$100,000",
      premium: "$800/year",
      status: "active",
      expiryDate: "Jun 30, 2025",
      icon: Car,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      type: "Health Insurance",
      provider: "Blue Cross",
      policyNumber: "HI-456789123",
      coverage: "$500,000",
      premium: "$3,600/year",
      status: "active",
      expiryDate: "Dec 31, 2025",
      icon: Heart,
      color: "from-red-500 to-red-600",
    },
    {
      id: 4,
      type: "Life Insurance",
      provider: "MetLife",
      policyNumber: "LI-789123456",
      coverage: "$1,000,000",
      premium: "$2,400/year",
      status: "active",
      expiryDate: "Dec 31, 2025",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
    },
  ]

  const claims = [
    {
      id: 1,
      claimNumber: "CLM-2024-001",
      type: "Home Damage",
      policyType: "Home Insurance",
      dateSubmitted: "Dec 1, 2024",
      status: "approved",
      amount: "$15,000",
      description: "Roof damage from hurricane",
      documents: 5,
    },
    {
      id: 2,
      claimNumber: "CLM-2024-002",
      type: "Water Damage",
      policyType: "Home Insurance",
      dateSubmitted: "Nov 15, 2024",
      status: "processing",
      amount: "$8,500",
      description: "Flood damage to basement",
      documents: 3,
    },
    {
      id: 3,
      claimNumber: "CLM-2024-003",
      type: "Vehicle Damage",
      policyType: "Auto Insurance",
      dateSubmitted: "Oct 20, 2024",
      status: "rejected",
      amount: "$3,200",
      description: "Minor collision damage",
      documents: 2,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "approved":
        return "bg-green-500"
      case "processing":
        return "bg-yellow-500"
      case "rejected":
      case "expired":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-5 w-5" />
      case "processing":
        return <Clock className="h-5 w-5" />
      case "rejected":
        return <XCircle className="h-5 w-5" />
      default:
        return <AlertCircle className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Shield className="h-8 w-8 text-blue-600" />
              Insurance & Claims
            </h1>
            <p className="text-gray-600 mt-1">Manage your insurance policies and file claims</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" />
              Upload Documents
            </Button>
            <Button className="bg-[#C91F42] hover:bg-[#A01836] gap-2">
              <Plus className="h-4 w-4" />
              File New Claim
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{insurancePolicies.length}</div>
                  <div className="text-sm text-gray-600">Active Policies</div>
                </div>
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{claims.length}</div>
                  <div className="text-sm text-gray-600">Total Claims</div>
                </div>
                <FileText className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {claims.filter((c) => c.status === "processing").length}
                  </div>
                  <div className="text-sm text-gray-600">Pending</div>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">$26.7K</div>
                  <div className="text-sm text-gray-600">Claimed</div>
                </div>
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Card className="shadow-lg">
          <CardContent className="p-4">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="w-full justify-start">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="policies">My Policies</TabsTrigger>
                <TabsTrigger value="claims">Claims History</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        {/* Insurance Policies */}
        <div className="grid md:grid-cols-2 gap-6">
          {insurancePolicies.map((policy) => (
            <Card key={policy.id} className="shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`h-14 w-14 rounded-xl bg-gradient-to-br ${policy.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <policy.icon className="h-7 w-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{policy.type}</h3>
                        <p className="text-sm text-gray-600">{policy.provider}</p>
                      </div>
                      <Badge className={`${getStatusColor(policy.status)} text-white`}>
                        {policy.status}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Policy Number:</span>
                        <span className="font-semibold text-gray-900">{policy.policyNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Coverage:</span>
                        <span className="font-semibold text-gray-900">{policy.coverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Premium:</span>
                        <span className="font-semibold text-gray-900">{policy.premium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expires:</span>
                        <span className="font-semibold text-gray-900">{policy.expiryDate}</span>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 gap-2">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 gap-2">
                        <FileText className="h-4 w-4" />
                        File Claim
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Claims History */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Recent Claims
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {claims.map((claim) => (
                <div
                  key={claim.id}
                  className="p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{claim.type}</h3>
                          <p className="text-sm text-gray-600">{claim.claimNumber}</p>
                        </div>
                        <Badge className={`${getStatusColor(claim.status)} text-white flex items-center gap-1`}>
                          {getStatusIcon(claim.status)}
                          {claim.status}
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-3">{claim.description}</p>

                      <div className="grid md:grid-cols-4 gap-4 text-sm mb-4">
                        <div>
                          <div className="text-gray-600 mb-1">Policy Type</div>
                          <div className="font-semibold text-gray-900">{claim.policyType}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">Claim Amount</div>
                          <div className="font-semibold text-gray-900">{claim.amount}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">Date Submitted</div>
                          <div className="font-semibold text-gray-900">{claim.dateSubmitted}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">Documents</div>
                          <div className="font-semibold text-gray-900">{claim.documents} files</div>
                        </div>
                      </div>

                      {claim.status === "processing" && (
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Processing Progress</span>
                            <span className="font-semibold text-gray-900">65%</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="gap-2">
                          <Eye className="h-4 w-4" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline" className="gap-2">
                          <Upload className="h-4 w-4" />
                          Add Documents
                        </Button>
                        <Button size="sm" variant="outline" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                        {claim.status === "processing" && (
                          <Button size="sm" variant="outline" className="gap-2">
                            <Phone className="h-4 w-4" />
                            Contact Adjuster
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* File New Claim CTA */}
        <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Plus className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Need to File a Claim?</h3>
                <p className="text-blue-800 mb-4">
                  Start your claim process now. We'll guide you through every step and help you get the
                  support you need.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                    <Plus className="h-4 w-4" />
                    File New Claim
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Camera className="h-4 w-4" />
                    Upload Photos
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insurance Providers Contact */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-green-600" />
              Insurance Provider Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {insurancePolicies.map((policy) => (
                <div
                  key={policy.id}
                  className="p-4 bg-gray-50 rounded-lg flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-lg bg-gradient-to-br ${policy.color} flex items-center justify-center`}
                    >
                      <policy.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{policy.provider}</div>
                      <div className="text-sm text-gray-600">{policy.type}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

