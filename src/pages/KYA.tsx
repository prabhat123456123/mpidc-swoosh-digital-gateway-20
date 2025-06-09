
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Download, Building, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const KYA = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "business_type",
      title: "What type of business are you planning to establish?",
      type: "radio",
      options: [
        "Manufacturing Unit",
        "Service Industry", 
        "Trading Business",
        "IT/Software Company",
        "Food Processing Unit"
      ]
    },
    {
      id: "investment_size", 
      title: "What is your planned investment size?",
      type: "radio",
      options: [
        "Below ₹1 Crore (Micro)",
        "₹1-10 Crores (Small)",
        "₹10-50 Crores (Medium)", 
        "Above ₹50 Crores (Large)"
      ]
    },
    {
      id: "location_type",
      title: "Where do you plan to set up your business?",
      type: "radio", 
      options: [
        "Industrial Area/Park",
        "Special Economic Zone (SEZ)",
        "Rural Area",
        "Urban Commercial Area"
      ]
    },
    {
      id: "environmental_impact",
      title: "Will your business have environmental impact?",
      type: "checkbox",
      options: [
        "Air emissions",
        "Water discharge", 
        "Solid waste generation",
        "Noise pollution",
        "No environmental impact"
      ]
    },
    {
      id: "employment",
      title: "How many people do you plan to employ?",
      type: "radio",
      options: [
        "1-10 employees",
        "11-50 employees",
        "51-100 employees",
        "More than 100 employees"
      ]
    }
  ];

  const generateRecommendations = () => {
    const recommendations = [
      {
        category: "Essential Approvals",
        approvals: [
          { name: "Industrial License", department: "Industries Department", sla: "30 days", fee: "₹5,000" },
          { name: "Factory License", department: "Labor Department", sla: "21 days", fee: "₹2,500" },
          { name: "Trade License", department: "Municipal Corporation", sla: "15 days", fee: "₹1,000" }
        ]
      },
      {
        category: "Environmental Clearances", 
        approvals: [
          { name: "Environmental Clearance", department: "MPPCB", sla: "60 days", fee: "₹25,000" },
          { name: "Water NOC", department: "Water Resources", sla: "30 days", fee: "₹10,000" }
        ]
      },
      {
        category: "Safety & Compliance",
        approvals: [
          { name: "Fire Safety Certificate", department: "Fire Services", sla: "21 days", fee: "₹3,000" },
          { name: "Building Plan Approval", department: "Town Planning", sla: "45 days", fee: "₹15,000" }
        ]
      }
    ];

    return recommendations;
  };

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResults) {
    const recommendations = generateRecommendations();
    const totalApprovals = recommendations.reduce((acc, cat) => acc + cat.approvals.length, 0);
    const totalFees = recommendations.reduce((acc, cat) => 
      acc + cat.approvals.reduce((sum, app) => sum + parseInt(app.fee.replace(/[₹,]/g, '')), 0), 0
    );
    const maxSLA = Math.max(...recommendations.flatMap(cat => 
      cat.approvals.map(app => parseInt(app.sla.split(' ')[0]))
    ));

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Building className="h-8 w-8 text-blue-600" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Know Your Approvals</h1>
                  <p className="text-xs text-gray-600">Approval Recommendations</p>
                </div>
              </div>
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" />
                Your Approval Requirements Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{totalApprovals}</div>
                  <div className="text-sm text-gray-600">Total Approvals Required</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">₹{totalFees.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Estimated Total Fees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{maxSLA} days</div>
                  <div className="text-sm text-gray-600">Maximum Processing Time</div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 mt-6">
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
                <Link to="/caf">
                  <Button variant="outline">
                    Start Application Process
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <div className="space-y-6">
            {recommendations.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.approvals.map((approval, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold">{approval.name}</div>
                          <div className="text-sm text-gray-600">{approval.department}</div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline" className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {approval.sla}
                          </Badge>
                          <div className="font-semibold text-green-600">{approval.fee}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Know Your Approvals</h1>
                <p className="text-xs text-gray-600">Step {currentStep + 1} of {questions.length}</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </CardContent>
        </Card>

        {/* Question */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">{currentQuestion.title}</CardTitle>
            <CardDescription>
              Please select the option(s) that best describe your business plan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentQuestion.type === 'radio' && (
              <RadioGroup 
                value={answers[currentQuestion.id] || ""}
                onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
              >
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`${currentQuestion.id}-${index}`} />
                      <Label htmlFor={`${currentQuestion.id}-${index}`} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}

            {currentQuestion.type === 'checkbox' && (
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`${currentQuestion.id}-${index}`}
                      checked={(answers[currentQuestion.id] || []).includes(option)}
                      onCheckedChange={(checked) => {
                        const current = answers[currentQuestion.id] || [];
                        if (checked) {
                          handleAnswer(currentQuestion.id, [...current, option]);
                        } else {
                          handleAnswer(currentQuestion.id, current.filter((item: string) => item !== option));
                        }
                      }}
                    />
                    <Label htmlFor={`${currentQuestion.id}-${index}`} className="cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={!answers[currentQuestion.id] || (Array.isArray(answers[currentQuestion.id]) && answers[currentQuestion.id].length === 0)}
          >
            {currentStep === questions.length - 1 ? 'Get Recommendations' : 'Next'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KYA;
