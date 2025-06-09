
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building, Gift, CheckCircle, Clock, TrendingUp, Calculator, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

const IncentiveManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const availableSchemes = [
    {
      id: "SCH001",
      name: "Industrial Promotion Subsidy",
      category: "Manufacturing",
      maxAmount: "₹50 lakhs",
      eligibility: "New manufacturing units",
      deadline: "2024-12-31",
      status: "Active"
    },
    {
      id: "SCH002", 
      name: "Employment Generation Incentive",
      category: "Employment",
      maxAmount: "₹25 lakhs",
      eligibility: "Units creating 100+ jobs",
      deadline: "2024-06-30",
      status: "Active"
    },
    {
      id: "SCH003",
      name: "Green Technology Promotion",
      category: "Environment",
      maxAmount: "₹75 lakhs",
      eligibility: "Eco-friendly technologies",
      deadline: "2024-09-30",
      status: "Active"
    }
  ];

  const appliedIncentives = [
    {
      id: "INC001",
      schemeName: "Industrial Promotion Subsidy",
      applicationDate: "2024-01-15",
      status: "Under Review",
      claimedAmount: "₹30 lakhs",
      progress: 65,
      nextAction: "Document verification pending"
    },
    {
      id: "INC002",
      schemeName: "Employment Generation Incentive", 
      applicationDate: "2024-01-10",
      status: "Approved",
      claimedAmount: "₹15 lakhs",
      progress: 100,
      disbursedAmount: "₹15 lakhs"
    }
  ];

  const disbursementHistory = [
    {
      id: "DIS001",
      scheme: "Industrial Promotion Subsidy",
      amount: "₹20 lakhs",
      date: "2023-12-15",
      purpose: "Machinery procurement subsidy"
    },
    {
      id: "DIS002",
      scheme: "Employment Generation Incentive",
      amount: "₹10 lakhs",
      date: "2023-11-20",
      purpose: "Job creation incentive"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': case 'disbursed': return 'bg-green-100 text-green-800';
      case 'under review': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredSchemes = availableSchemes.filter(scheme =>
    scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scheme.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Incentive Management</h1>
                <p className="text-xs text-gray-600">Government Schemes & Subsidies</p>
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
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Applied</p>
                  <p className="text-2xl font-bold text-gray-900">₹45 lakhs</p>
                </div>
                <Gift className="h-6 w-6 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Approved</p>
                  <p className="text-2xl font-bold text-gray-900">₹15 lakhs</p>
                </div>
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Under Review</p>
                  <p className="text-2xl font-bold text-gray-900">₹30 lakhs</p>
                </div>
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Lifetime Received</p>
                  <p className="text-2xl font-bold text-gray-900">₹30 lakhs</p>
                </div>
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="explore" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="explore">Explore Schemes</TabsTrigger>
            <TabsTrigger value="applied">Applied Incentives</TabsTrigger>
            <TabsTrigger value="calculator">Eligibility Calculator</TabsTrigger>
            <TabsTrigger value="history">Disbursement History</TabsTrigger>
          </TabsList>

          <TabsContent value="explore">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Available Schemes</CardTitle>
                    <CardDescription>Explore government incentive schemes for your business</CardDescription>
                  </div>
                  <div className="relative w-64">
                    <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                    <Input
                      placeholder="Search schemes..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSchemes.map((scheme) => (
                    <Card key={scheme.id} className="border border-gray-200">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-lg">{scheme.name}</h3>
                            <Badge variant="secondary">{scheme.category}</Badge>
                          </div>
                          
                          <div className="space-y-2 text-sm text-gray-600">
                            <div>Max Amount: <span className="font-medium">{scheme.maxAmount}</span></div>
                            <div>Eligibility: {scheme.eligibility}</div>
                            <div>Deadline: {scheme.deadline}</div>
                          </div>

                          <div className="flex space-x-2">
                            <Button size="sm" className="flex-1">Apply Now</Button>
                            <Button size="sm" variant="outline">Details</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applied">
            <div className="space-y-4">
              {appliedIncentives.map((incentive) => (
                <Card key={incentive.id}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{incentive.schemeName}</h3>
                          <p className="text-sm text-gray-600">Application ID: {incentive.id}</p>
                          <p className="text-sm text-gray-600">Applied on: {incentive.applicationDate}</p>
                        </div>
                        <Badge className={getStatusColor(incentive.status)}>
                          {incentive.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Claimed Amount</p>
                          <p className="text-xl font-bold">{incentive.claimedAmount}</p>
                          {incentive.disbursedAmount && (
                            <>
                              <p className="text-sm text-gray-600 mt-2">Disbursed Amount</p>
                              <p className="text-lg font-semibold text-green-600">{incentive.disbursedAmount}</p>
                            </>
                          )}
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Progress</span>
                            <span>{incentive.progress}%</span>
                          </div>
                          <Progress value={incentive.progress} className="h-2" />
                          {incentive.nextAction && (
                            <p className="text-sm text-blue-600 mt-2">{incentive.nextAction}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm" variant="outline">Track Status</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calculator">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Incentive Eligibility Calculator
                </CardTitle>
                <CardDescription>Check your eligibility for various incentive schemes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="investment">Total Investment (₹)</Label>
                    <Input id="investment" placeholder="Enter investment amount" />
                  </div>
                  
                  <div>
                    <Label htmlFor="employment">Employment Generated</Label>
                    <Input id="employment" placeholder="Number of jobs created" />
                  </div>

                  <div>
                    <Label htmlFor="industry-type">Industry Type</Label>
                    <Input id="industry-type" placeholder="Manufacturing, Services, etc." />
                  </div>

                  <div>
                    <Label htmlFor="location">Project Location</Label>
                    <Input id="location" placeholder="District/City" />
                  </div>
                </div>

                <Button className="w-full">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate Eligibility
                </Button>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Based on your inputs, you may be eligible for multiple schemes. 
                    Use the calculator to get personalized recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Disbursement History</CardTitle>
                <CardDescription>Record of all incentive payments received</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {disbursementHistory.map((disbursement) => (
                    <div key={disbursement.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">{disbursement.scheme}</div>
                        <div className="text-sm text-gray-600">{disbursement.purpose}</div>
                        <div className="text-sm text-gray-600">Disbursed on: {disbursement.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">{disbursement.amount}</div>
                        <Button size="sm" variant="outline">Download Receipt</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IncentiveManagement;
