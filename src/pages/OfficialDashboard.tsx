
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  BarChart3,
  Search,
  Filter,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Building,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const OfficialDashboard = () => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const applications = [
    {
      id: "CAF001234",
      applicant: "ABC Manufacturing Pvt Ltd",
      type: "Industrial License",
      status: "Pending Review",
      priority: "high",
      submittedDate: "2024-01-15",
      slaDeadline: "2024-02-14",
      department: "Industries",
      officer: "Not Assigned"
    },
    {
      id: "CAF001235",
      applicant: "XYZ Textiles Ltd",
      type: "Factory License", 
      status: "Under Review",
      priority: "medium",
      submittedDate: "2024-01-12",
      slaDeadline: "2024-02-02",
      department: "Labor",
      officer: "Rajesh Kumar"
    },
    {
      id: "CAF001236",
      applicant: "PQR Foods India",
      type: "Environmental Clearance",
      status: "Approved",
      priority: "low",
      submittedDate: "2024-01-08",
      slaDeadline: "2024-03-08",
      department: "Environment",
      officer: "Priya Sharma"
    }
  ];

  const stats = [
    { 
      title: "Pending Applications", 
      value: "156", 
      change: "+12", 
      icon: Clock, 
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    { 
      title: "Under Review", 
      value: "89", 
      change: "-5", 
      icon: FileText, 
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    { 
      title: "Approved Today", 
      value: "23", 
      change: "+8", 
      icon: CheckCircle, 
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    { 
      title: "SLA Breaches", 
      value: "7", 
      change: "-2", 
      icon: AlertTriangle, 
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  const recentActivities = [
    { action: "Application CAF001240 submitted", time: "5 min ago", type: "new" },
    { action: "Environmental clearance approved for CAF001235", time: "15 min ago", type: "approved" },
    { action: "Document verification completed for CAF001238", time: "1 hour ago", type: "update" },
    { action: "Inspection scheduled for CAF001237", time: "2 hours ago", type: "inspection" }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'under review': return 'bg-blue-100 text-blue-800';
      case 'pending review': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || app.status.toLowerCase().includes(filterStatus.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Official Dashboard</h1>
                <p className="text-xs text-gray-600">Industries Department</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">
                <Users className="h-3 w-3 mr-1" />
                Officer Portal
              </Badge>
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500">
                      <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                        {stat.change}
                      </span> from yesterday
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="applications" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="inspections">Inspections</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="applications">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Application Queue</CardTitle>
                      <div className="flex space-x-2">
                        <div className="relative">
                          <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                          <Input
                            placeholder="Search applications..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-64"
                          />
                        </div>
                        <Select value={filterStatus} onValueChange={setFilterStatus}>
                          <SelectTrigger className="w-40">
                            <Filter className="h-4 w-4 mr-2" />
                            <SelectValue placeholder="Filter" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="review">Under Review</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredApplications.map((app) => (
                        <div key={app.id} className={`border-l-4 ${getPriorityColor(app.priority)} bg-white p-4 rounded-lg shadow-sm`}>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="font-semibold text-gray-900">{app.applicant}</h3>
                                <Badge className={getStatusColor(app.status)}>
                                  {app.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-1">
                                {app.type} • {app.id}
                              </p>
                              <p className="text-xs text-gray-500">
                                Submitted: {app.submittedDate} | SLA: {app.slaDeadline}
                              </p>
                              <p className="text-xs text-gray-500">
                                Officer: {app.officer}
                              </p>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                              {app.status !== "Approved" && (
                                <>
                                  <Button size="sm" variant="outline" className="text-green-600">
                                    <ThumbsUp className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline" className="text-red-600">
                                    <ThumbsDown className="h-4 w-4" />
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="inspections">
                <Card>
                  <CardHeader>
                    <CardTitle>Scheduled Inspections</CardTitle>
                    <CardDescription>
                      Upcoming and completed site inspections
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p>No inspections scheduled</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Reports</CardTitle>
                    <CardDescription>
                      Department-wise performance and SLA compliance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p>Reports will be available soon</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Bulk Assignment
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  SLA Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialDashboard;
