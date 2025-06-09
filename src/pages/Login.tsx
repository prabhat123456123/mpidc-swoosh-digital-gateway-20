
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Shield, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    otp: ""
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Building className="h-10 w-10 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MPIDC Portal</h1>
              <p className="text-sm text-gray-600">Single Window System</p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Secure Login</CardTitle>
            <CardDescription className="text-center">
              Access your investor or official dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="investor" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="investor">Investor Login</TabsTrigger>
                <TabsTrigger value="official">Official Login</TabsTrigger>
              </TabsList>

              <TabsContent value="investor">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="investor-email">PAN Number</Label>
                    <Input
                      id="investor-email"
                      placeholder="ABCDE1234F"
                      value={credentials.email}
                      onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="investor-password">Password</Label>
                    <Input
                      id="investor-password"
                      type="password"
                      placeholder="Enter your password"
                      value={credentials.password}
                      onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investor-otp">OTP (sent to registered mobile)</Label>
                    <Input
                      id="investor-otp"
                      placeholder="Enter 6-digit OTP"
                      value={credentials.otp}
                      onChange={(e) => setCredentials(prev => ({ ...prev, otp: e.target.value }))}
                    />
                  </div>

                  <Link to="/investor-dashboard" className="block">
                    <Button className="w-full">
                      <User className="h-4 w-4 mr-2" />
                      Login as Investor
                    </Button>
                  </Link>

                  <div className="text-center">
                    <Button variant="link" size="sm">
                      New Investor? Register Here
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="official">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="official-email">Official ID</Label>
                    <Input
                      id="official-email"
                      placeholder="Enter your official ID"
                      value={credentials.email}
                      onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="official-password">Password</Label>
                    <Input
                      id="official-password"
                      type="password"
                      placeholder="Enter your password"
                      value={credentials.password}
                      onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    />
                  </div>

                  <Link to="/official-dashboard" className="block">
                    <Button className="w-full">
                      <Shield className="h-4 w-4 mr-2" />
                      Login as Official
                    </Button>
                  </Link>

                  <div className="text-center">
                    <Button variant="link" size="sm">
                      Forgot Password?
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Security Notice */}
            <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">Secure Portal</span>
              </div>
              <p className="text-xs text-blue-700 mt-1">
                This is a secure government portal. All activities are logged and monitored.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/">
            <Button variant="ghost">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
