
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, CreditCard, Shield, CheckCircle, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentGateway = () => {
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
  
  const pendingPayments = [
    { id: "CAF001234", title: "Manufacturing License", amount: 25000, department: "Industries" },
    { id: "CAF001235", title: "Environmental Clearance", amount: 15000, department: "Environment" },
    { id: "CAF001236", title: "Fire Safety Certificate", amount: 5000, department: "Fire Services" }
  ];

  const totalAmount = pendingPayments
    .filter(payment => selectedApplications.includes(payment.id))
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Unified Payment Gateway</h1>
                <p className="text-xs text-gray-600">Consolidated Payment System</p>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Payments */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Payments</CardTitle>
              <CardDescription>Select applications to pay for</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingPayments.map((payment) => (
                <div key={payment.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <input
                    type="checkbox"
                    checked={selectedApplications.includes(payment.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedApplications([...selectedApplications, payment.id]);
                      } else {
                        setSelectedApplications(selectedApplications.filter(id => id !== payment.id));
                      }
                    }}
                    className="w-4 h-4"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{payment.title}</div>
                    <div className="text-sm text-gray-600">{payment.id} • {payment.department}</div>
                  </div>
                  <div className="font-semibold">₹{payment.amount.toLocaleString()}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Payment Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Amount:</span>
                  <span className="text-2xl font-bold text-blue-600">₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="payment-method">Payment Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="netbanking">Net Banking</SelectItem>
                      <SelectItem value="upi">UPI</SelectItem>
                      <SelectItem value="card">Debit/Credit Card</SelectItem>
                      <SelectItem value="wallet">Digital Wallet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="email">Email for Receipt</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>

                <div>
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input id="mobile" type="tel" placeholder="Enter mobile number" />
                </div>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                disabled={selectedApplications.length === 0}
              >
                <Shield className="h-4 w-4 mr-2" />
                Proceed to Secure Payment
              </Button>

              <div className="text-center text-sm text-gray-600">
                <Shield className="h-4 w-4 inline mr-1" />
                Secured by 256-bit SSL encryption
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <div className="font-medium">Factory License Fee</div>
                  <div className="text-sm text-gray-600">TXN123456 • 15 Jan 2024</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">₹20,000</div>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Success
                  </Badge>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <div className="font-medium">Environmental Clearance</div>
                  <div className="text-sm text-gray-600">TXN123455 • 12 Jan 2024</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">₹15,000</div>
                  <Badge className="bg-yellow-100 text-yellow-800">
                    <Clock className="h-3 w-3 mr-1" />
                    Processing
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentGateway;
