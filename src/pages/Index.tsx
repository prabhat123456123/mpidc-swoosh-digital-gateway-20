
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, FileText, Search, Users, BarChart, MessageSquare, Shield, Gift, MapPin, FolderOpen, Globe, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import AIchatbot from "@/components/AIchatbot";

const Index = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const translations = {
    en: {
      title: "Madhya Pradesh Investment Portal",
      subtitle: "A unified digital platform for investors to apply, track, and obtain approvals, payments, inspections, and grievance redressal in a transparent, time-bound manner.",
      login: "Login",
      investorLogin: "Investor Login",
      officialLogin: "Official Login",
      securePortal: "Secure Portal",
      features: [
        {
          title: "Know Your Approvals (KYA)",
          description: "Identify required approvals through dynamic questionnaires"
        },
        {
          title: "Common Application Form",
          description: "Unified application form with auto-fill capabilities"
        },
        {
          title: "Land Management",
          description: "Comprehensive land allocation and management system"
        },
        {
          title: "Document Center",
          description: "Store and manage documents for auto-filling applications"
        },
        {
          title: "Incentive Management",
          description: "Track and manage government incentives and subsidies"
        },
        {
          title: "Real-time Dashboard",
          description: "Track application status and compliance metrics"
        },
        {
          title: "Inspection Module",
          description: "Schedule and manage compliance inspections"
        },
        {
          title: "Grievance Redressal",
          description: "SLA-bound ticket system for investor queries"
        }
      ],
      footer: "© 2024 Madhya Pradesh Industrial Development Corporation. All rights reserved.",
      developed: "Developed by PRIMUS SOLUTIONS | Version 1.0"
    },
    hi: {
      title: "मध्य प्रदेश निवेश पोर्टल",
      subtitle: "निवेशकों के लिए एक एकीकृत डिजिटल प्लेटफॉर्म जो पारदर्शी और समयबद्ध तरीके से आवेदन, ट्रैकिंग और अनुमोदन प्राप्त करने के लिए है।",
      login: "लॉगिन",
      investorLogin: "निवेशक लॉगिन",
      officialLogin: "अधिकारी लॉगिन",
      securePortal: "सुरक्षित पोर्टल",
      features: [
        {
          title: "अपनी मंजूरी जानें (केवाईए)",
          description: "गतिशील प्रश्नावली के माध्यम से आवश्यक अनुमोदन की पहचान करें"
        },
        {
          title: "सामान्य आवेदन फॉर्म",
          description: "ऑटो-फिल क्षमताओं के साथ एकीकृत आवेदन फॉर्म"
        },
        {
          title: "भूमि प्रबंधन",
          description: "व्यापक भूमि आवंटन और प्रबंधन प्रणाली"
        },
        {
          title: "दस्तावेज़ केंद्र",
          description: "आवेदन भरने के लिए दस्तावेज़ स्टोर और प्रबंधित करें"
        },
        {
          title: "प्रोत्साहन प्रबंधन",
          description: "सरकारी प्रोत्साहन और सब्सिडी को ट्रैक और प्रबंधित करें"
        },
        {
          title: "रियल-टाइम डैशबोर्ड",
          description: "आवेदन स्थिति और अनुपालन मेट्रिक्स को ट्रैक करें"
        },
        {
          title: "निरीक्षण मॉड्यूल",
          description: "अनुपालन निरीक्षण का शेड्यूल और प्रबंधन करें"
        },
        {
          title: "शिकायत निवारण",
          description: "निवेशक प्रश्नों के लिए एसएलए-बाध्य टिकट सिस्टम"
        }
      ],
      footer: "© 2024 मध्य प्रदेश औद्योगिक विकास निगम। सभी अधिकार सुरक्षित।",
      developed: "प्राइमस सॉल्यूशंस द्वारा विकसित | संस्करण 1.0"
    }
  };

  const currentLang = translations[language];

  const features = [
    {
      icon: Search,
      title: currentLang.features[0].title,
      description: currentLang.features[0].description,
      color: "from-blue-500 to-blue-600",
      link: "/kya"
    },
    {
      icon: FileText,
      title: currentLang.features[1].title,
      description: currentLang.features[1].description,
      color: "from-green-500 to-green-600",
      link: "/caf"
    },
    {
      icon: MapPin,
      title: currentLang.features[2].title,
      description: currentLang.features[2].description,
      color: "from-amber-500 to-amber-600",
      link: "/land-management"
    },
    {
      icon: FolderOpen,
      title: currentLang.features[3].title,
      description: currentLang.features[3].description,
      color: "from-purple-500 to-purple-600",
      link: "/document-center"
    },
    {
      icon: Gift,
      title: currentLang.features[4].title,
      description: currentLang.features[4].description,
      color: "from-indigo-500 to-indigo-600",
      link: "/incentive-management"
    },
    {
      icon: BarChart,
      title: currentLang.features[5].title,
      description: currentLang.features[5].description,
      color: "from-orange-500 to-orange-600",
      link: "/real-time-dashboard"
    },
    {
      icon: Users,
      title: currentLang.features[6].title,
      description: currentLang.features[6].description,
      color: "from-teal-500 to-teal-600",
      link: "/inspection-module"
    },
    {
      icon: MessageSquare,
      title: currentLang.features[7].title,
      description: currentLang.features[7].description,
      color: "from-red-500 to-red-600",
      link: "/grievance-redressal"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-200 group">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl group-hover:shadow-lg transition-all duration-200">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">MPIDC</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Single Window System</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-2"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{language === 'en' ? 'हिं' : 'EN'}</span>
              </Button>
              
              {/* Dark Mode Toggle */}
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleDarkMode}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1">
                <Shield className="h-3 w-3 mr-1" />
                {currentLang.securePortal}
              </Badge>
              
              <div className="relative">
                <Button 
                  variant="outline" 
                  onClick={() => setShowLoginOptions(!showLoginOptions)}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {currentLang.login}
                </Button>
                {showLoginOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-10 overflow-hidden">
                    <div className="py-2">
                      <Link to="/login?type=investor" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                        {currentLang.investorLogin}
                      </Link>
                      <Link to="/login?type=official" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                        {currentLang.officialLogin}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            {currentLang.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            {currentLang.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="group">
              <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer h-full border-0 shadow-lg hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-base leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* AI Chatbot */}
        <AIchatbot />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-300">
              {currentLang.footer}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {currentLang.developed}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
