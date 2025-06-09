
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, FileText, Search, Users, CreditCard, BarChart, MessageSquare, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [userType, setUserType] = useState<'investor' | 'official' | null>(null);

  const features = [
    {
      icon: Search,
      title: "Know Your Approvals (KYA)",
      description: "Identify required approvals through dynamic questionnaires",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Common Application Form",
      description: "Unified application form with auto-fill capabilities",
      color: "bg-green-500"
    },
    {
      icon: CreditCard,
      title: "Unified Payment Gateway",
      description: "Consolidated payments for multiple approvals",
      color: "bg-purple-500"
    },
    {
      icon: BarChart,
      title: "Real-time Dashboard",
      description: "Track application status and compliance metrics",
      color: "bg-orange-500"
    },
    {
      icon: Users,
      title: "Inspection Module",
      description: "Schedule and manage compliance inspections",
      color: "bg-teal-500"
    },
    {
      icon: MessageSquare,
      title: "Grievance Redressal",
      description: "SLA-bound ticket system for investor queries",
      color: "bg-red-500"
    }
  ];

  const stats = [
    { label: "Active Applications", value: "2,543", trend: "+12%" },
    { label: "Approvals Processed", value: "1,892", trend: "+8%" },
    { label: "SLA Compliance", value: "94.2%", trend: "+2.1%" },
    { label: "Average Processing Time", value: "12 days", trend: "-15%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">MPIDC</h1>
                <p className="text-xs text-gray-600">Single Window System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Shield className="h-3 w-3 mr-1" />
                Secure Portal
              </Badge>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Madhya Pradesh Investment Portal
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A unified digital platform for investors to apply, track, and obtain approvals, 
            payments, inspections, and grievance redressal in a transparent, time-bound manner.
          </p>
          
          {/* User Type Selection */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button 
              onClick={() => setUserType('investor')}
              variant={userType === 'investor' ? 'default' : 'outline'}
              size="lg"
              className="min-w-32"
            >
              Investor Portal
            </Button>
            <Button 
              onClick={() => setUserType('official')}
              variant={userType === 'official' ? 'default' : 'outline'}
              size="lg"
              className="min-w-32"
            >
              Official Portal
            </Button>
          </div>

          {userType && (
            <div className="animate-fade-in">
              <Link to={userType === 'investor' ? '/investor-dashboard' : '/official-dashboard'}>
                <Button size="lg" className="px-8">
                  Enter {userType === 'investor' ? 'Investor' : 'Official'} Dashboard
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className="text-xs text-green-600 font-medium mt-1">{stat.trend}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${feature.color}`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
    </div>
  );
};

export default Index;
