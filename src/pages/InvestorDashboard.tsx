
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  CreditCard, 
  Calendar,
  MessageSquare,
  Download,
  Plus,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";

const InvestorDashboard = () => {
  const applications = [
    {
      id: "CAF001234",
      title: "Manufacturing Unit License",
      status: "Under Review",
      progress: 65,
      department: "Industrial Development",
      submittedDate: "2024-01-15",
      expectedCompletion: "2024-02-15",
      priority: "high"
    },
    {
      id: "CAF001235", 
      title: "Environmental Clearance",
      status: "Approved",
      progress: 100,
      department: "Environment & Forest",
      submittedDate: "2024-01-10",
      expectedCompletion: "2024-01-25",
      priority: "medium"
    },
    {
      id: "CAF001236",
      title: "Fire Safety Certificate",
      status: "Pending Documents",
      progress: 30,
      department: "Fire Services",
      submittedDate: "2024-01-20",
      expectedCompletion: "2024-02-20",
      priority: "low"
    }
  ];

  const payments = [
    { id: "PAY001", amount: "₹25,000", status: "Completed", date: "2024-01-15", for: "License Fee" },
    { id: "PAY002", amount: "₹10,500", status: "Pending", date: "2024-01-18", for: "Processing Fee" }
  ];

  const inspections = [
    { id: "INS001", type: "Site Inspection", date: "2024-02-05", status: "Scheduled", officer: "Mr. Rajesh Kumar" },
    { id: "INS002", type: "Safety Audit", date: "2024-01-25", status: "Completed", officer: "Ms. Priya Sharma" }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': case 'completed': return 'bg-green-100 text-green-800';
      case 'under review': case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'pending documents': case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Investor Dashboard</h1>
                <p className="text-xs text-gray-600">SBID: INV202400001</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/kya">
                <Button variant="outline">Know Your Approvals</Button>
              </Link>
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Link to="/caf">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="flex items-center p-6">
                <Plus className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <div className="font-semibold">New Application</div>
                  <div className="text-sm text-gray-600">Submit CAF</div>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex items-center p-6">
              <CreditCard className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <div className="font-semibold">Make Payment</div>
                <div className="text-sm text-gray-600">Pay fees online</div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex items-center p-6">
              <Calendar className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="font-semibold">Schedule Inspection</div>
                <div className="text-sm text-gray-600">Book slot</div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex items-center p-6">
              <MessageSquare className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <div className="font-semibold">Raise Grievance</div>
                <div className="text-sm text-gray-600">Get support</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="inspections">Inspections</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="applications">
            <div className="space-y-4">
              {applications.map((app) => (
                <Card key={app.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{app.title}</CardTitle>
                        <CardDescription>
                          Application ID: {app.id} | {app.department}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(app.status)}>
                        {app.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Progress</span>
                          <span>{app.progress}%</span>
                        </div>
                        <Progress value={app.progress} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Submitted:</span>
                          <span className="ml-2 font-medium">{app.submittedDate}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Expected:</span>
                          <span className="ml-2 font-medium">{app.expectedCompletion}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payments">
            <div className="space-y-4">
              {payments.map((payment) => (
                <Card key={payment.id}>
                  <CardContent className="flex justify-between items-center p-6">
                    <div>
                      <div className="font-semibold">{payment.for}</div>
                      <div className="text-sm text-gray-600">
                        Payment ID: {payment.id} | {payment.date}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-lg">{payment.amount}</div>
                      <Badge className={getStatusColor(payment.status)}>
                        {payment.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inspections">
            <div className="space-y-4">
              {inspections.map((inspection) => (
                <Card key={inspection.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold">{inspection.type}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Officer: {inspection.officer}
                        </div>
                        <div className="text-sm text-gray-600">
                          Date: {inspection.date}
                        </div>
                      </div>
                      <Badge className={getStatusColor(inspection.status)}>
                        {inspection.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Document Repository</CardTitle>
                <CardDescription>
                  All your submitted and approved documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p>No documents available</p>
                  <Button className="mt-4" variant="outline">
                    Upload Documents
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InvestorDashboard;
