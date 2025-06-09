
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, Calendar, CheckCircle, Clock, Camera, FileText, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const InspectionModule = () => {
  const [selectedDate, setSelectedDate] = useState("");
  
  const upcomingInspections = [
    { 
      id: "INS001", 
      type: "Factory Safety Inspection", 
      date: "2024-02-05", 
      time: "10:00 AM",
      location: "Plot 123, Industrial Area Phase-1",
      officer: "Mr. Rajesh Kumar",
      status: "Scheduled"
    },
    { 
      id: "INS002", 
      type: "Environmental Compliance", 
      date: "2024-02-08", 
      time: "2:00 PM",
      location: "Manufacturing Unit, Sector-15",
      officer: "Ms. Priya Sharma",
      status: "Confirmed"
    }
  ];

  const completedInspections = [
    {
      id: "INS003",
      type: "Fire Safety Audit",
      date: "2024-01-25",
      officer: "Mr. Amit Singh",
      result: "Approved",
      report: "All safety measures compliance verified"
    }
  ];

  const availableSlots = [
    { date: "2024-02-10", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
    { date: "2024-02-11", slots: ["10:00 AM", "2:00 PM", "4:00 PM"] },
    { date: "2024-02-12", slots: ["9:30 AM", "1:00 PM"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Inspection Module</h1>
                <p className="text-xs text-gray-600">Schedule & Manage Inspections</p>
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
        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="schedule">Schedule Inspection</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule New Inspection</CardTitle>
                  <CardDescription>Book an inspection slot for your facility</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="inspection-type">Inspection Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inspection type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="factory-safety">Factory Safety</SelectItem>
                        <SelectItem value="environmental">Environmental Compliance</SelectItem>
                        <SelectItem value="fire-safety">Fire Safety</SelectItem>
                        <SelectItem value="pollution">Pollution Control</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="application-id">Application ID</Label>
                    <Input id="application-id" placeholder="CAF001234" />
                  </div>

                  <div>
                    <Label htmlFor="facility-address">Facility Address</Label>
                    <Textarea id="facility-address" placeholder="Enter complete facility address" />
                  </div>

                  <div>
                    <Label htmlFor="preferred-date">Preferred Date</Label>
                    <Input 
                      id="preferred-date" 
                      type="date" 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>

                  <Button className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Request Inspection
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Available Slots</CardTitle>
                  <CardDescription>Select from available inspection slots</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {availableSlots.map((day, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="font-medium mb-2">{day.date}</div>
                        <div className="grid grid-cols-3 gap-2">
                          {day.slots.map((slot, slotIndex) => (
                            <Button key={slotIndex} variant="outline" size="sm">
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="space-y-4">
              {upcomingInspections.map((inspection) => (
                <Card key={inspection.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{inspection.type}</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          {inspection.date} at {inspection.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          {inspection.location}
                        </div>
                        <div className="text-sm text-gray-600">
                          Inspector: {inspection.officer}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-blue-100 text-blue-800 mb-2">
                          <Clock className="h-3 w-3 mr-1" />
                          {inspection.status}
                        </Badge>
                        <div className="space-x-2">
                          <Button size="sm" variant="outline">Reschedule</Button>
                          <Button size="sm" variant="outline">Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="space-y-4">
              {completedInspections.map((inspection) => (
                <Card key={inspection.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{inspection.type}</h3>
                        <div className="text-sm text-gray-600">
                          Date: {inspection.date}
                        </div>
                        <div className="text-sm text-gray-600">
                          Inspector: {inspection.officer}
                        </div>
                        <div className="text-sm text-gray-600">
                          Report: {inspection.report}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800 mb-2">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {inspection.result}
                        </Badge>
                        <div className="space-x-2">
                          <Button size="sm" variant="outline">
                            <FileText className="h-4 w-4 mr-1" />
                            View Report
                          </Button>
                          <Button size="sm" variant="outline">
                            <Camera className="h-4 w-4 mr-1" />
                            Photos
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Inspection Reports</CardTitle>
                <CardDescription>Download and view detailed inspection reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p>No inspection reports available</p>
                  <Button className="mt-4" variant="outline">
                    Upload Report
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

export default InspectionModule;
