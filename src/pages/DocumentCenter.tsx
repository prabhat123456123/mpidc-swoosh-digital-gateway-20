
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Download, Trash2, Eye, Plus, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AIchatbot from "@/components/AIchatbot";

const DocumentCenter = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "PAN Card",
      type: "Identity",
      uploadDate: "2024-01-15",
      status: "Verified",
      size: "2.4 MB"
    },
    {
      id: 2,
      name: "GST Certificate",
      type: "Tax",
      uploadDate: "2024-01-10",
      status: "Pending",
      size: "1.8 MB"
    },
    {
      id: 3,
      name: "Bank Statement",
      type: "Financial",
      uploadDate: "2024-01-08",
      status: "Verified",
      size: "3.2 MB"
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Identity", "Tax", "Financial", "Legal", "Technical"];

  const filteredDocuments = selectedCategory === "All" 
    ? documents 
    : documents.filter(doc => doc.type === selectedCategory);

  const handleUpload = () => {
    // Simulate file upload
    const newDoc = {
      id: documents.length + 1,
      name: `Document_${documents.length + 1}.pdf`,
      type: "Identity",
      uploadDate: new Date().toISOString().split('T')[0],
      status: "Pending",
      size: "1.5 MB"
    };
    setDocuments([...documents, newDoc]);
  };

  const handleDelete = (id: number) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-200 group">
              <img 
                src="/lovable-uploads/84ba00cc-443d-4a1e-b79b-9d53d6c2c004.png" 
                alt="MPIDC Logo" 
                className="h-8 w-auto object-contain"
              />
              <div>
                <p className="text-xs text-gray-600">Document Center</p>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline" className="hover:bg-blue-50">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Document Center
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Store, manage and organize your documents for seamless application processing
          </p>
          
          {/* Upload Section */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Button onClick={handleUpload} className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Bulk Upload
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-to-r from-blue-500 to-blue-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredDocuments.map((document) => (
            <Card key={document.id} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base text-gray-900">{document.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {document.type}
                      </Badge>
                    </div>
                  </div>
                  <Badge 
                    variant={document.status === "Verified" ? "default" : "secondary"}
                    className={document.status === "Verified" ? "bg-green-500" : "bg-yellow-500"}
                  >
                    {document.status === "Verified" && <CheckCircle className="h-3 w-3 mr-1" />}
                    {document.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Upload Date:</span>
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {document.uploadDate}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Size:</span>
                    <span>{document.size}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleDelete(document.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4">
              <FileText className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-600 mb-4">Upload your first document to get started</p>
            <Button onClick={handleUpload} className="bg-gradient-to-r from-blue-500 to-blue-600">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>
        )}
      </div>

      {/* AI Chatbot */}
      <AIchatbot />
    </div>
  );
};

export default DocumentCenter;
