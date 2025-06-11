
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AutoFetchFormProps {
  title: string;
  description: string;
  fields: Array<{
    id: string;
    label: string;
    type: string;
    autoFetch?: boolean;
    dependsOn?: string[];
    placeholder?: string;
  }>;
}

const AutoFetchForm = ({ title, description, fields }: AutoFetchFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [fetchingStates, setFetchingStates] = useState<Record<string, boolean>>({});
  const [fetchedStates, setFetchedStates] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  // Mock auto-fetch function
  const autoFetchData = async (fieldId: string, dependentValues: Record<string, string>) => {
    setFetchingStates(prev => ({ ...prev, [fieldId]: true }));
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let fetchedValue = "";
    
    // Mock data based on field type
    switch (fieldId) {
      case 'companyName':
        if (dependentValues.panNumber) {
          fetchedValue = "Tech Innovations Pvt Ltd";
        }
        break;
      case 'address':
        if (dependentValues.panNumber) {
          fetchedValue = "123 Business Park, Bhopal, MP 462001";
        }
        break;
      case 'phoneNumber':
        if (dependentValues.panNumber) {
          fetchedValue = "+91 9876543210";
        }
        break;
      case 'gstNumber':
        if (dependentValues.panNumber) {
          fetchedValue = "23ABCDE1234F1Z5";
        }
        break;
      default:
        fetchedValue = "Auto-fetched data";
    }
    
    setFormData(prev => ({ ...prev, [fieldId]: fetchedValue }));
    setFetchingStates(prev => ({ ...prev, [fieldId]: false }));
    setFetchedStates(prev => ({ ...prev, [fieldId]: true }));
    
    toast({
      title: "Data Auto-Fetched",
      description: `${fields.find(f => f.id === fieldId)?.label} has been automatically populated.`,
    });
  };

  // Check for auto-fetch triggers
  useEffect(() => {
    fields.forEach(field => {
      if (field.autoFetch && field.dependsOn) {
        const dependentValues = field.dependsOn.reduce((acc, depField) => {
          acc[depField] = formData[depField] || "";
          return acc;
        }, {} as Record<string, string>);
        
        const allDependenciesFilled = field.dependsOn.every(dep => formData[dep]?.trim());
        const isCurrentlyEmpty = !formData[field.id]?.trim();
        const isNotFetching = !fetchingStates[field.id];
        
        if (allDependenciesFilled && isCurrentlyEmpty && isNotFetching) {
          autoFetchData(field.id, dependentValues);
        }
      }
    });
  }, [formData]);

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
    
    // Reset fetched state if user manually changes auto-fetched field
    if (fetchedStates[fieldId]) {
      setFetchedStates(prev => ({ ...prev, [fieldId]: false }));
    }
  };

  const handleRefresh = (fieldId: string) => {
    const field = fields.find(f => f.id === fieldId);
    if (field?.dependsOn) {
      const dependentValues = field.dependsOn.reduce((acc, depField) => {
        acc[depField] = formData[depField] || "";
        return acc;
      }, {} as Record<string, string>);
      
      autoFetchData(fieldId, dependentValues);
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            Auto-Fetch Enabled
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor={field.id} className="text-sm font-medium">
                {field.label}
                {field.autoFetch && (
                  <Badge variant="outline" className="ml-2 text-xs">
                    Auto-Fetch
                  </Badge>
                )}
              </Label>
              {field.autoFetch && formData[field.id] && !fetchingStates[field.id] && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRefresh(field.id)}
                  className="h-6 w-6 p-0"
                >
                  <RefreshCw className="h-3 w-3" />
                </Button>
              )}
            </div>
            <div className="relative">
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id] || ""}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                disabled={fetchingStates[field.id]}
                className={`${fetchedStates[field.id] ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700' : ''}`}
              />
              {fetchingStates[field.id] && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                </div>
              )}
              {fetchedStates[field.id] && !fetchingStates[field.id] && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
              )}
            </div>
            {field.autoFetch && field.dependsOn && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Auto-fetches when {field.dependsOn.join(", ")} {field.dependsOn.length > 1 ? 'are' : 'is'} provided
              </p>
            )}
          </div>
        ))}
        
        <Button className="w-full mt-6 gradient-primary text-white">
          Submit Application
        </Button>
      </CardContent>
    </Card>
  );
};

export default AutoFetchForm;
