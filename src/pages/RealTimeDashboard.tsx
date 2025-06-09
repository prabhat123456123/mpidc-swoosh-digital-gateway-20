
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Building, TrendingUp, Clock, CheckCircle, AlertTriangle, Users, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RealTimeDashboard = () => {
  const metrics = [
    { title: "Total Applications", value: "2,543", change: "+12%", icon: FileText, color: "text-blue-600" },
    { title: "Approved Today", value: "89", change: "+8%", icon: CheckCircle, color: "text-green-600" },
    { title: "Pending Review", value: "156", change: "-5%", icon: Clock, color: "text-orange-600" },
    { title: "SLA Breaches", value: "7", change: "-15%", icon: AlertTriangle, color: "text-red-600" }
  ];

  const departmentStats = [
    { name: "Industries", applications: 450, slaCompliance: 95, avgTime: "8 days" },
    { name: "Environment", applications: 234, slaCompliance: 92, avgTime: "12 days" },
    { name: "Fire Services", applications: 189, slaCompliance: 98, avgTime: "5 days" },
    { name: "Labor", applications: 167, slaCompliance: 89, avgTime: "15 days" }
  ];

  const recentActivities = [
    { action: "Environmental clearance approved", application: "CAF001240", time: "2 min ago" },
    { action: "New application submitted", application: "CAF001241", time: "5 min ago" },
    { action: "Payment received", application: "CAF001235", time: "10 min ago" },
    { action: "Inspection completed", application: "CAF001238", time: "15 min ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Real-time Dashboard</h1>
                <p className="text-xs text-gray-600">Live System Metrics & Analytics</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-xs text-gray-500">
                      <span className={metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                        {metric.change}
                      </span> from yesterday
                    </p>
                  </div>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Department Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Department Performance</CardTitle>
              <CardDescription>SLA compliance and processing metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {departmentStats.map((dept, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{dept.name}</span>
                      <Badge variant="secondary">{dept.applications} apps</Badge>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>SLA Compliance: {dept.slaCompliance}%</span>
                      <span>Avg Time: {dept.avgTime}</span>
                    </div>
                    <Progress value={dept.slaCompliance} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Live Activity Feed</CardTitle>
              <CardDescription>Real-time system updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                    <div>
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-600">{activity.application}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              System Health Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1.2s</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">847</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RealTimeDashboard;
