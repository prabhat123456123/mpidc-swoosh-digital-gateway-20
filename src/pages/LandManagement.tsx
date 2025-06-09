
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, ArrowLeft, Search, FileText, Eye, Download } from "lucide-react";
import { Link } from "react-router-dom";
import AIchatbot from "@/components/AIchatbot";

const LandManagement = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    district: "",
    landType: "",
    minArea: "",
    maxArea: ""
  });

  const [landParcels] = useState([
    {
      id: "MP001",
      location: "Indore Industrial Area",
      area: "25.5 acres",
      type: "Industrial",
      status: "Available",
      price: "₹15,00,000/acre",
      connectivity: "Highway connected"
    },
    {
      id: "MP002", 
      location: "Bhopal Tech Park",
      area: "40.2 acres",
      type: "IT/Software",
      status: "Partially Available",
      price: "₹20,00,000/acre",
      connectivity: "Metro connected"
    },
    {
      id: "MP003",
      location: "Jabalpur Manufacturing Zone",
      area: "60.0 acres",
      type: "Manufacturing",
      status: "Available",
      price: "₹12,00,000/acre",
      connectivity: "Railway connected"
    }
  ]);

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
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <MapPin className="h-8 w-8 text-amber-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Land Management</h1>
              <p className="text-gray-600">Comprehensive land allocation and management system</p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Available Land</CardTitle>
            <CardDescription>Find suitable land parcels based on your requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="district">District</Label>
                <Select value={searchCriteria.district} onValueChange={(value) => setSearchCriteria(prev => ({ ...prev, district: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select District" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indore">Indore</SelectItem>
                    <SelectItem value="bhopal">Bhopal</SelectItem>
                    <SelectItem value="jabalpur">Jabalpur</SelectItem>
                    <SelectItem value="gwalior">Gwalior</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="landType">Land Type</Label>
                <Select value={searchCriteria.landType} onValueChange={(value) => setSearchCriteria(prev => ({ ...prev, landType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="it-software">IT/Software</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="minArea">Min Area (acres)</Label>
                <Input
                  id="minArea"
                  placeholder="Min area"
                  value={searchCriteria.minArea}
                  onChange={(e) => setSearchCriteria(prev => ({ ...prev, minArea: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxArea">Max Area (acres)</Label>
                <Input
                  id="maxArea"
                  placeholder="Max area"
                  value={searchCriteria.maxArea}
                  onChange={(e) => setSearchCriteria(prev => ({ ...prev, maxArea: e.target.value }))}
                />
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full md:w-auto">
                <Search className="h-4 w-4 mr-2" />
                Search Land Parcels
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Available Land Parcels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {landParcels.map((parcel) => (
            <Card key={parcel.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{parcel.location}</CardTitle>
                    <CardDescription>Land ID: {parcel.id}</CardDescription>
                  </div>
                  <Badge variant={parcel.status === "Available" ? "default" : "secondary"}>
                    {parcel.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Area:</span>
                    <span className="font-medium">{parcel.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Type:</span>
                    <span className="font-medium">{parcel.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Price:</span>
                    <span className="font-medium text-green-600">{parcel.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Connectivity:</span>
                    <span className="font-medium">{parcel.connectivity}</span>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Download Map
                    </Button>
                  </div>

                  <Button className="w-full mt-2">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply for Allocation
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <AIchatbot />
    </div>
  );
};

export default LandManagement;
