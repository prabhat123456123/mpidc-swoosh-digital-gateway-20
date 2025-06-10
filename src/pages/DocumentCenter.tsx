import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Download, Trash2, Eye, Plus, Calendar, CheckCircle, Filter, Search, FolderOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import AIchatbot from "@/components/AIchatbot";
import SharedHeader from "@/components/SharedHeader";

const DocumentCenter = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

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

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === "All" || doc.type === selectedCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doc.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div className="gradient-surface min-h-screen">
        {/* Header */}
        <SharedHeader 
          title="Document Center"
          showBackButton={true}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 shadow-lg">
                <FolderOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Document Center
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Store, manage and organize your documents for seamless application processing
                </p>
              </div>
            </div>
            
            {/* Search and Actions */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-xl border-gray-200 dark:border-gray-700 glass"
                />
              </div>
              <div className="flex gap-3">
                <Button onClick={handleUpload} className="gradient-primary text-white border-0 hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl hover-lift">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
                <Button variant="outline" className="border-gray-200 dark:border-gray-700 hover:bg-surface-hover rounded-xl hover-glow">
                  <Plus className="h-4 w-4 mr-2" />
                  Bulk Upload
                </Button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <Filter className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-xl transition-all duration-200 ${
                    selectedCategory === category 
                      ? "gradient-primary text-white border-0 shadow-lg" 
                      : "border-gray-200 dark:border-gray-700 hover:bg-surface-hover hover-glow"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredDocuments.map((document) => (
              <Card key={document.id} className="glass-card hover-lift hover-glow cursor-pointer border-0 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="p-2.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {document.name}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1.5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-0">
                          {document.type}
                        </Badge>
                      </div>
                    </div>
                    <Badge 
                      variant={document.status === "Verified" ? "default" : "secondary"}
                      className={`${document.status === "Verified" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" 
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                      } border-0 rounded-xl`}
                    >
                      {document.status === "Verified" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {document.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Upload Date:</span>
                      <span className="flex items-center text-gray-900 dark:text-gray-200">
                        <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                        {document.uploadDate}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Size:</span>
                      <span className="text-gray-900 dark:text-gray-200 font-medium">{document.size}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 border-gray-200 dark:border-gray-700 hover:bg-surface-hover rounded-lg hover-glow">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-gray-200 dark:border-gray-700 hover:bg-surface-hover rounded-lg hover-glow">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDelete(document.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 border-red-200 dark:border-red-800 rounded-lg transition-all duration-200"
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
            <div className="text-center py-16">
              <div className="glass-card max-w-md mx-auto p-8">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <FileText className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {searchTerm ? "No documents found" : "No documents uploaded"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {searchTerm 
                    ? `No documents match "${searchTerm}". Try adjusting your search.`
                    : "Upload your first document to get started with automated form filling."
                  }
                </p>
                <Button onClick={handleUpload} className="gradient-primary text-white border-0 hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl hover-lift">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
              </div>
            </div>
          )}
        </main>

        {/* AI Chatbot */}
        <AIchatbot />
      </div>
    </div>
  );
};

export default DocumentCenter;
