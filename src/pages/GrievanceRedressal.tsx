
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, MessageSquare, AlertTriangle, CheckCircle, Clock, Star, ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const GrievanceRedressal = () => {
  const [rating, setRating] = useState(0);
  
  const activeTickets = [
    {
      id: "GRV001234",
      subject: "Delay in Environmental Clearance",
      category: "Processing Delay",
      priority: "High",
      status: "Under Review",
      createdDate: "2024-01-20",
      lastUpdate: "2024-01-22",
      slaDeadline: "2024-01-25",
      assignedTo: "Mr. Rajesh Kumar"
    },
    {
      id: "GRV001235",
      subject: "Payment Gateway Issue",
      category: "Technical",
      priority: "Medium",
      status: "In Progress",
      createdDate: "2024-01-18",
      lastUpdate: "2024-01-21",
      slaDeadline: "2024-01-23",
      assignedTo: "Support Team"
    }
  ];

  const resolvedTickets = [
    {
      id: "GRV001230",
      subject: "Document Upload Problem",
      category: "Technical",
      status: "Resolved",
      resolvedDate: "2024-01-15",
      resolution: "Issue fixed with browser compatibility update",
      rating: 4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'under review': return 'bg-blue-100 text-blue-800';
      case 'in progress': return 'bg-yellow-100 text-yellow-800';
      case 'escalated': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Grievance Redressal</h1>
                <p className="text-xs text-gray-600">SLA-bound Support System</p>
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
        <Tabs defaultValue="raise" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="raise">Raise Grievance</TabsTrigger>
            <TabsTrigger value="active">Active Tickets</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="raise">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="h-5 w-5 mr-2" />
                    Raise New Grievance
                  </CardTitle>
                  <CardDescription>Submit your complaint or query for quick resolution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grievance category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="processing-delay">Processing Delay</SelectItem>
                        <SelectItem value="technical-issue">Technical Issue</SelectItem>
                        <SelectItem value="payment-problem">Payment Problem</SelectItem>
                        <SelectItem value="document-issue">Document Issue</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="application-id">Related Application ID (if any)</Label>
                    <Input id="application-id" placeholder="CAF001234" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief description of the issue" />
                  </div>

                  <div>
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Provide detailed information about your grievance"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="attachments">Supporting Documents</Label>
                    <Input id="attachments" type="file" multiple />
                    <p className="text-xs text-gray-500 mt-1">Upload any relevant documents or screenshots</p>
                  </div>

                  <Button className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Submit Grievance
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SLA Guidelines</CardTitle>
                  <CardDescription>Expected resolution timelines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-red-600">High Priority</div>
                        <div className="text-sm text-gray-600">Critical issues affecting business operations</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">24 hours</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-yellow-600">Medium Priority</div>
                        <div className="text-sm text-gray-600">Issues affecting functionality</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">48 hours</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-green-600">Low Priority</div>
                        <div className="text-sm text-gray-600">General queries and suggestions</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">72 hours</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="active">
            <div className="space-y-4">
              {activeTickets.map((ticket) => (
                <Card key={ticket.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold text-lg">{ticket.subject}</h3>
                          <Badge className={getStatusColor(ticket.status)}>
                            {ticket.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          Ticket ID: {ticket.id} • Category: {ticket.category}
                        </div>
                        <div className="text-sm text-gray-600">
                          Priority: <span className={getPriorityColor(ticket.priority)}>{ticket.priority}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Assigned to: {ticket.assignedTo}
                        </div>
                        <div className="text-sm text-gray-600">
                          Created: {ticket.createdDate} • Last Update: {ticket.lastUpdate}
                        </div>
                        <div className="text-sm text-gray-600">
                          SLA Deadline: {ticket.slaDeadline}
                        </div>
                      </div>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm" variant="outline">Add Comment</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resolved">
            <div className="space-y-4">
              {resolvedTickets.map((ticket) => (
                <Card key={ticket.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold text-lg">{ticket.subject}</h3>
                          <Badge className={getStatusColor(ticket.status)}>
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {ticket.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          Ticket ID: {ticket.id} • Category: {ticket.category}
                        </div>
                        <div className="text-sm text-gray-600">
                          Resolved on: {ticket.resolvedDate}
                        </div>
                        <div className="text-sm text-gray-600">
                          Resolution: {ticket.resolution}
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm text-gray-600">Rating:</span>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= ticket.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Quick answers to common queries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">How long does it take to process an application?</h4>
                    <p className="text-sm text-gray-600">Processing times vary by department and approval type. You can check the SLA timeline in the KYA tool.</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">How can I track my application status?</h4>
                    <p className="text-sm text-gray-600">You can track your application status in real-time through your investor dashboard using your CAF ID.</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">What if my payment fails?</h4>
                    <p className="text-sm text-gray-600">If your payment fails, you can retry the payment through the payment gateway. If the issue persists, raise a grievance.</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">How do I reschedule an inspection?</h4>
                    <p className="text-sm text-gray-600">You can reschedule inspections through the inspection module or contact the assigned inspection officer.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GrievanceRedressal;
