"use client"

import { useState } from "react"
import {
  Settings,
  User,
  Bell,
  Lock,
  MapPin,
  Smartphone,
  CreditCard,
  Shield,
  Globe,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Mail,
  Phone,
  Home,
  Users,
  HelpCircle,
  LogOut,
  ChevronRight,
  Check,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [locationSharing, setLocationSharing] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [biometricEnabled, setBiometricEnabled] = useState(true)

  const settingsSections = [
    {
      id: "account",
      title: "Account Settings",
      icon: User,
      items: [
        { label: "Full Name", value: "Sarah Johnson", type: "input" },
        { label: "Email", value: "sarah.johnson@email.com", type: "input" },
        { label: "Phone", value: "+1 (202) 564-9595", type: "input" },
        { label: "Date of Birth", value: "01/15/1990", type: "input" },
      ],
    },
    {
      id: "notifications",
      title: "Notification Preferences",
      icon: Bell,
      items: [
        { label: "Push Notifications", value: notifications, type: "toggle", onChange: setNotifications },
        { label: "Email Notifications", value: true, type: "toggle" },
        { label: "SMS Alerts", value: true, type: "toggle" },
        { label: "Emergency Alerts", value: true, type: "toggle" },
      ],
    },
    {
      id: "privacy",
      title: "Privacy & Security",
      icon: Lock,
      items: [
        { label: "Location Sharing", value: locationSharing, type: "toggle", onChange: setLocationSharing },
        { label: "Biometric Login", value: biometricEnabled, type: "toggle", onChange: setBiometricEnabled },
        { label: "Two-Factor Authentication", value: false, type: "toggle" },
        { label: "Share Data with Family", value: true, type: "toggle" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Settings className="h-8 w-8 text-blue-600" />
              Settings
            </h1>
            <p className="text-gray-600 mt-1">Manage your account and preferences</p>
          </div>
          <Button className="bg-[#C91F42] hover:bg-[#A01836] gap-2">
            <Check className="h-4 w-4" />
            Save Changes
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Settings Navigation */}
          <Card className="lg:col-span-1 shadow-lg h-fit">
            <CardHeader>
              <CardTitle className="text-lg">Settings Menu</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {settingsSections.map((section, index) => (
                  <button
                    key={section.id}
                    className={`w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left ${
                      index !== settingsSections.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{section.title}</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                ))}

                <Separator />

                <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Billing & Plans</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>

                <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <HelpCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Help & Support</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>

                <Separator />

                <button className="w-full flex items-center gap-3 p-4 hover:bg-red-50 transition-colors text-left text-red-600">
                  <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <LogOut className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Logout</div>
                  </div>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Settings Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Settings */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600" />
                  Account Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input id="fullname" defaultValue="Sarah Johnson" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="sarah.johnson@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (202) 564-9595" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" defaultValue="1990-01-15" />
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="address">Home Address</Label>
                  <Input id="address" defaultValue="123 Main Street, Miami, FL 33101" />
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-orange-600" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-gray-700" />
                    <div>
                      <div className="font-semibold text-gray-900">Push Notifications</div>
                      <div className="text-sm text-gray-600">Receive alerts on your device</div>
                    </div>
                  </div>
                  <Switch checked={notifications} onCheckedChange={setNotifications} />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-700" />
                    <div>
                      <div className="font-semibold text-gray-900">Email Notifications</div>
                      <div className="text-sm text-gray-600">Get updates via email</div>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-700" />
                    <div>
                      <div className="font-semibold text-gray-900">SMS Alerts</div>
                      <div className="text-sm text-gray-600">Emergency alerts via text</div>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-2 border-red-200">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-red-600" />
                    <div>
                      <div className="font-semibold text-red-900">Emergency Alerts</div>
                      <div className="text-sm text-red-700">Critical disaster notifications</div>
                    </div>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-red-600" />
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-green-600" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-700" />
                    <div>
                      <div className="font-semibold text-gray-900">Location Sharing</div>
                      <div className="text-sm text-gray-600">Share location with family</div>
                    </div>
                  </div>
                  <Switch checked={locationSharing} onCheckedChange={setLocationSharing} />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-gray-700" />
                    <div>
                      <div className="font-semibold text-gray-900">Biometric Login</div>
                      <div className="text-sm text-gray-600">Use fingerprint or Face ID</div>
                    </div>
                  </div>
                  <Switch checked={biometricEnabled} onCheckedChange={setBiometricEnabled} />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-gray-700" />
                    <div>
                      <div className="font-semibold text-gray-900">Two-Factor Authentication</div>
                      <div className="text-sm text-gray-600">Extra security layer</div>
                    </div>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <Button variant="outline" className="w-full gap-2">
                  <Lock className="h-4 w-4" />
                  Change Password
                </Button>
              </CardContent>
            </Card>

            {/* App Preferences */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-purple-600" />
                  App Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {darkMode ? (
                      <Moon className="h-5 w-5 text-gray-700" />
                    ) : (
                      <Sun className="h-5 w-5 text-gray-700" />
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">Dark Mode</div>
                      <div className="text-sm text-gray-600">Use dark theme</div>
                    </div>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {soundEnabled ? (
                      <Volume2 className="h-5 w-5 text-gray-700" />
                    ) : (
                      <VolumeX className="h-5 w-5 text-gray-700" />
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">Sound Effects</div>
                      <div className="text-sm text-gray-600">App sounds and alerts</div>
                    </div>
                  </div>
                  <Switch checked={soundEnabled} onCheckedChange={setSoundEnabled} />
                </div>

                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Time Zone</Label>
                  <Select defaultValue="est">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Time (ET)</SelectItem>
                      <SelectItem value="cst">Central Time (CT)</SelectItem>
                      <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="shadow-lg border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-900">
                  <Shield className="h-5 w-5" />
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-100">
                  Deactivate Account
                </Button>
                <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-100">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

