
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, FileText, Search, Users, CreditCard, BarChart, MessageSquare, Shield, Gift, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import AIchatbot from "@/components/AIchatbot";

const Index = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const features = [
    {
      icon: Search,
      title: "Know Your Approvals (KYA)",
      description: "Identify required approvals through dynamic questionnaires",
      color: "bg-blue-500",
      link: "/kya"
    },
    {
      icon: FileText,
      title: "Common Application Form",
      description: "Unified application form with auto-fill capabilities",
      color: "bg-green-500",
      link: "/caf"
    },
    {
      icon: MapPin,
      title: "Land Management",
      description: "Comprehensive land allocation and management system",
      color: "bg-amber-500",
      link: "/land-management"
    },
    {
      icon: Gift,
      title: "Incentive Management",
      description: "Track and manage government incentives and subsidies",
      color: "bg-indigo-500",
      link: "/incentive-management"
    },
    {
      icon: BarChart,
      title: "Real-time Dashboard",
      description: "Track application status and compliance metrics",
      color: "bg-orange-500",
      link: "/real-time-dashboard"
    },
    {
      icon: Users,
      title: "Inspection Module",
      description: "Schedule and manage compliance inspections",
      color: "bg-teal-500",
      link: "/inspection-module"
    },
    {
      icon: MessageSquare,
      title: "Grievance Redressal",
      description: "SLA-bound ticket system for investor queries",
      color: "bg-red-500",
      link: "/grievance-redressal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">MPIDC</h1>
                <p className="text-xs text-gray-600">Single Window System</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Shield className="h-3 w-3 mr-1" />
                Secure Portal
              </Badge>
              <div className="relative">
                <Button 
                  variant="outline" 
                  onClick={() => setShowLoginOptions(!showLoginOptions)}
                >
                  Login
                </Button>
                {showLoginOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-10">
                    <div className="py-1">
                      <Link to="/login?type=investor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Investor Login
                      </Link>
                      <Link to="/login?type=official" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Official Login
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Madhya Pradesh Investment Portal
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            A unified digital platform for investors to apply, track, and obtain approvals, 
            payments, inspections, and grievance redressal in a transparent, time-bound manner.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${feature.color}`}>
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-base leading-tight">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2024 Madhya Pradesh Industrial Development Corporation. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Developed by PRIMUS SOLUTIONS | Version 1.0
            </p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIchatbot />
    </div>
  );
};

export default Index;
