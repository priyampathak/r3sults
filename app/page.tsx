import Link from "next/link"
import { ArrowRight, Shield, Users, MapPin, Bell, Clock, HeartPulse, Home, Utensils, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  R<span className="text-xs align-super text-gray-700">.</span>sults
                </h1>
                <p className="text-3xl font-semibold text-[#C91F42]">
                  Respond | Recover | Rebuild
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  All-in-one platform for disaster preparedness, relief & recovery
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/login">
                  <Button size="lg" className="bg-[#C91F42] hover:bg-[#A01836] text-white px-8">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline" className="border-[#C91F42] text-[#C91F42] hover:bg-[#C91F42] hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900">10K+</p>
                  <p className="text-sm text-gray-600">Active Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Communities</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">24/7</p>
                  <p className="text-sm text-gray-600">Support</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden flex items-center justify-center">
                    <Home className="h-24 w-24 text-blue-600" />
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden flex items-center justify-center">
                    <Utensils className="h-16 w-16 text-orange-600" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden flex items-center justify-center">
                    <Heart className="h-16 w-16 text-green-600" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-lg overflow-hidden flex items-center justify-center">
                    <MapPin className="h-24 w-24 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in a Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools to keep you and your family safe before, during, and after disasters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-[#C91F42] transition-colors hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-[#C91F42]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#C91F42]" />
                </div>
                <h3 className="text-xl font-semibold">Real-Time Location Tracking</h3>
                <p className="text-gray-600">
                  Track family members in real-time with GPS integration and location sharing
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-[#C91F42] transition-colors hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-[#C91F42]/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#C91F42]" />
                </div>
                <h3 className="text-xl font-semibold">Family Management</h3>
                <p className="text-gray-600">
                  Connect with family members, create groups, and manage emergency contacts
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-[#C91F42] transition-colors hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-[#C91F42]/10 rounded-lg flex items-center justify-center">
                  <Bell className="h-6 w-6 text-[#C91F42]" />
                </div>
                <h3 className="text-xl font-semibold">Emergency Alerts</h3>
                <p className="text-gray-600">
                  Receive instant notifications about disasters, warnings, and safety updates
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-[#C91F42] transition-colors hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-[#C91F42]/10 rounded-lg flex items-center justify-center">
                  <HeartPulse className="h-6 w-6 text-[#C91F42]" />
                </div>
                <h3 className="text-xl font-semibold">Health Vitals Monitoring</h3>
                <p className="text-gray-600">
                  Connect smart devices to monitor vital signs and health status during emergencies
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-[#C91F42] transition-colors hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-[#C91F42]/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-[#C91F42]" />
                </div>
                <h3 className="text-xl font-semibold">Resource Locator</h3>
                <p className="text-gray-600">
                  Find nearby shelters, medical facilities, food supplies, and emergency services
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-[#C91F42] transition-colors hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-[#C91F42]/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-[#C91F42]" />
                </div>
                <h3 className="text-xl font-semibold">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock assistance with SOS features and direct access to emergency services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and stay protected 24/7
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-[#C91F42] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold">Sign Up & Create Profile</h3>
              <p className="text-gray-600">
                Register with your phone or email, add family members, and customize your profile
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-[#C91F42] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold">Connect Devices</h3>
              <p className="text-gray-600">
                Link smartwatches and health devices to track vitals and location in real-time
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-[#C91F42] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold">Stay Safe & Protected</h3>
              <p className="text-gray-600">
                Monitor news, access resources, and receive alerts to stay prepared for any emergency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing for individuals and families
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <div className="inline-block bg-red-100 text-[#C91F42] text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                  <h3 className="text-2xl font-bold">Basic Plan</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-[#C91F42]">$2.99</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#C91F42] mr-2">✓</span>
                    <span className="text-gray-600">Basic emergency assistance and guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C91F42] mr-2">✓</span>
                    <span className="text-gray-600">Access to shelters and relief supply locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C91F42] mr-2">✓</span>
                    <span className="text-gray-600">Standard medical support information</span>
                  </li>
                </ul>
                <Link href="/auth/login" className="block">
                  <Button className="w-full bg-[#C91F42] hover:bg-[#A01836]">
                    Select Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#C91F42] shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <div className="inline-block bg-red-100 text-[#C91F42] text-xs font-semibold px-3 py-1 rounded-full">
                    Recommended
                  </div>
                  <h3 className="text-2xl font-bold">Plus Plan</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-[#C91F42]">$7.99</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#C91F42] mr-2">✓</span>
                    <span className="text-gray-600">All features from Essential Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C91F42] mr-2">✓</span>
                    <span className="text-gray-600">Priority access to medical care and emergency hotlines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C91F42] mr-2">✓</span>
                    <span className="text-gray-600">Fast-track connections with volunteers and charities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C91F42] mr-2">✓</span>
                    <span className="text-gray-600">Personalized consultation and safety planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C91F42] mr-2">✓</span>
                    <span className="text-gray-600">Real-time disaster alerts and updates</span>
                  </li>
                </ul>
                <Link href="/auth/login" className="block">
                  <Button className="w-full bg-[#C91F42] hover:bg-[#A01836]">
                    Select Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C91F42]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of families who trust R3SULTS for disaster preparedness and emergency response
          </p>
          <Link href="/auth/login">
            <Button size="lg" className="bg-white text-[#C91F42] hover:bg-gray-100">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                <span>R</span>
                <span className="text-xs align-super">.</span>
                <span>sults</span>
              </div>
              <p className="text-gray-400 text-sm">
                Respond | Recover | Rebuild
              </p>
              <p className="text-gray-400 text-sm">
                v1.0.01
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 R3SULTS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
