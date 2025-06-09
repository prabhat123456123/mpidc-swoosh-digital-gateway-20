
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Building, Upload, Save, Send, FileText, User, MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const CAF = () => {
  const [currentTab, setCurrentTab] = useState("basic");
  const [formData, setFormData] = useState({
    // Basic Info
    companyName: "",
    panNumber: "",
    businessType: "",
    investmentAmount: "",
    
    // Contact Info
    address: "",
    city: "",
    state: "Madhya Pradesh",
    pincode: "",
    contactPerson: "",
    email: "",
    phone: "",
    
    // Business Details
    projectDescription: "",
    products: "",
    employment: "",
    landArea: "",
    
    // Approvals
    selectedApprovals: [] as string[]
  });

  const approvals = [
    { id: "industrial_license", name: "Industrial License", fee: "₹5,000", sla: "30 days" },
    { id: "factory_license", name: "Factory License", fee: "₹2,500", sla: "21 days" },
    { id: "trade_license", name: "Trade License", fee: "₹1,000", sla: "15 days" },
    { id: "environmental_clearance", name: "Environmental Clearance", fee: "₹25,000", sla: "60 days" },
    { id: "fire_safety", name: "Fire Safety Certificate", fee: "₹3,000", sla: "21 days" },
    { id: "building_plan", name: "Building Plan Approval", fee: "₹15,000", sla: "45 days" }
  ];

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleApprovalToggle = (approvalId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedApprovals: prev.selectedApprovals.includes(approvalId)
        ? prev.selectedApprovals.filter(id => id !== approvalId)
        : [...prev.selectedApprovals, approvalId]
    }));
  };

  const calculateProgress = () => {
    const fields = Object.values(formData);
    const filledFields = fields.filter(field => 
      Array.isArray(field) ? field.length > 0 : field !== ""
    );
    return (filledFields.length / fields.length) * 100;
  };

  const calculateTotalFee = () => {
    return formData.selectedApprovals.reduce((total, approvalId) => {
      const approval = approvals.find(a => a.id === approvalId);
      return total + (approval ? parseInt(approval.fee.replace(/[₹,]/g, '')) : 0);
    }, 0);
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
                <h1 className="text-xl font-bold text-gray-900">Common Application Form</h1>
                <p className="text-xs text-gray-600">CAF ID: Will be generated on submit</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Link to="/investor-dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Form Completion</span>
              <span className="text-sm text-gray-600">{Math.round(calculateProgress())}%</span>
            </div>
            <Progress value={calculateProgress()} className="h-3" />
          </CardContent>
        </Card>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Basic Info
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Contact
            </TabsTrigger>
            <TabsTrigger value="business" className="flex items-center">
              <Briefcase className="h-4 w-4 mr-2" />
              Business
            </TabsTrigger>
            <TabsTrigger value="approvals" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Approvals
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Enter your company's basic details. This information will be auto-filled from DigiLocker where available.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => updateFormData("companyName", e.target.value)}
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="panNumber">PAN Number *</Label>
                    <Input
                      id="panNumber"
                      value={formData.panNumber}
                      onChange={(e) => updateFormData("panNumber", e.target.value)}
                      placeholder="ABCDE1234F"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select value={formData.businessType} onValueChange={(value) => updateFormData("businessType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturing">Manufacturing Unit</SelectItem>
                        <SelectItem value="service">Service Industry</SelectItem>
                        <SelectItem value="trading">Trading Business</SelectItem>
                        <SelectItem value="it">IT/Software Company</SelectItem>
                        <SelectItem value="food">Food Processing Unit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investmentAmount">Investment Amount *</Label>
                    <Select value={formData.investmentAmount} onValueChange={(value) => updateFormData("investmentAmount", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select investment range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="micro">Below ₹1 Crore (Micro)</SelectItem>
                        <SelectItem value="small">₹1-10 Crores (Small)</SelectItem>
                        <SelectItem value="medium">₹10-50 Crores (Medium)</SelectItem>
                        <SelectItem value="large">Above ₹50 Crores (Large)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Provide your business address and contact details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="address">Business Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => updateFormData("address", e.target.value)}
                    placeholder="Enter complete business address"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => updateFormData("city", e.target.value)}
                      placeholder="Enter city"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      disabled
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      value={formData.pincode}
                      onChange={(e) => updateFormData("pincode", e.target.value)}
                      placeholder="Enter pincode"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => updateFormData("contactPerson", e.target.value)}
                      placeholder="Enter contact person name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email ID *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="business">
            <Card>
              <CardHeader>
                <CardTitle>Business Details</CardTitle>
                <CardDescription>
                  Provide detailed information about your business project.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => updateFormData("projectDescription", e.target.value)}
                    placeholder="Describe your business project in detail"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="products">Products/Services *</Label>
                  <Textarea
                    id="products"
                    value={formData.products}
                    onChange={(e) => updateFormData("products", e.target.value)}
                    placeholder="List the products or services you plan to offer"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="employment">Expected Employment *</Label>
                    <Select value={formData.employment} onValueChange={(value) => updateFormData("employment", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-100">51-100 employees</SelectItem>
                        <SelectItem value="100+">More than 100 employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="landArea">Land Area (in acres) *</Label>
                    <Input
                      id="landArea"
                      value={formData.landArea}
                      onChange={(e) => updateFormData("landArea", e.target.value)}
                      placeholder="Enter land area required"
                    />
                  </div>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                      <Upload className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-blue-900">Document Upload</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-2">
                      Upload supporting documents (Project Report, Land Documents, etc.)
                    </p>
                    <Button variant="outline" className="mt-3">
                      Choose Files
                    </Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approvals">
            <Card>
              <CardHeader>
                <CardTitle>Required Approvals</CardTitle>
                <CardDescription>
                  Select the approvals you need for your business. Fees will be calculated automatically.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {approvals.map((approval) => (
                    <div key={approval.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={approval.id}
                          checked={formData.selectedApprovals.includes(approval.id)}
                          onCheckedChange={() => handleApprovalToggle(approval.id)}
                        />
                        <div>
                          <Label htmlFor={approval.id} className="font-medium cursor-pointer">
                            {approval.name}
                          </Label>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">{approval.sla}</Badge>
                        <span className="font-semibold text-green-600">{approval.fee}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {formData.selectedApprovals.length > 0 && (
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-green-900">Total Fee</span>
                        <span className="text-2xl font-bold text-green-700">
                          ₹{calculateTotalFee().toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-green-700 mt-2">
                        Selected {formData.selectedApprovals.length} approval(s)
                      </p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Submit Section */}
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Ready to Submit?</h3>
                <p className="text-sm text-gray-600">
                  Review all information before submitting your application.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline">
                  <Save className="h-4 w-4 mr-2" />
                  Save Draft
                </Button>
                <Button className="min-w-32">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Application
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CAF;
