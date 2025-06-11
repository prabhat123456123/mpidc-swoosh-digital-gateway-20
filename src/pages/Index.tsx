
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, Users, BarChart, MessageSquare, Shield, Gift, MapPin, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import AIchatbot from "@/components/AIchatbot";
import SharedHeader from "@/components/SharedHeader";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedLanguage = localStorage.getItem('language') || 'en';
    setIsDarkMode(savedDarkMode);
    setLanguage(savedLanguage);
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

  const toggleLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
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
      color: "from-blue-500 via-blue-600 to-indigo-600",
      link: "/kya",
      badge: "Essential"
    },
    {
      icon: FileText,
      title: currentLang.features[1].title,
      description: currentLang.features[1].description,
      color: "from-emerald-500 via-green-600 to-teal-600",
      link: "/caf",
      badge: "Core"
    },
    {
      icon: MapPin,
      title: currentLang.features[2].title,
      description: currentLang.features[2].description,
      color: "from-slate-500 via-gray-600 to-zinc-600",
      link: "/land-management",
      badge: "New"
    },
    {
      icon: Gift,
      title: currentLang.features[4].title,
      description: currentLang.features[4].description,
      color: "from-purple-500 via-violet-600 to-indigo-600",
      link: "/incentive-management",
      badge: "Popular"
    },
    {
      icon: BarChart,
      title: currentLang.features[5].title,
      description: currentLang.features[5].description,
      color: "from-pink-500 via-rose-600 to-red-600",
      link: "/real-time-dashboard",
      badge: "Live"
    },
    {
      icon: Users,
      title: currentLang.features[6].title,
      description: currentLang.features[6].description,
      color: "from-cyan-500 via-teal-600 to-blue-600",
      link: "/inspection-module",
      badge: "Smart"
    },
    {
      icon: MessageSquare,
      title: currentLang.features[7].title,
      description: currentLang.features[7].description,
      color: "from-orange-500 via-red-600 to-pink-600",
      link: "/grievance-redressal",
      badge: "24/7"
    },
    {
      icon: FolderOpen,
      title: currentLang.features[3].title,
      description: currentLang.features[3].description,
      color: "from-indigo-500 via-purple-600 to-pink-600",
      link: "/document-center",
      badge: "Secure"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div className="gradient-surface-liquid min-h-screen">
        {/* Header */}
        <SharedHeader 
          title="Single Window System"
          showBackButton={false}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          language={language}
          onToggleLanguage={toggleLanguage}
        />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12 float-animation">
            <div className="liquid-glass-card p-8 mb-8 hover-glow-liquid">
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-4 leading-tight">
                {currentLang.title}
              </h1>
              
              <p className="text-lg text-gray-700/80 dark:text-gray-300/80 mb-6 max-w-3xl mx-auto leading-relaxed">
                {currentLang.subtitle}
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/login">
                  <Button className="gradient-liquid text-white border-0 hover:scale-105 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 rounded-2xl px-8 py-4 text-lg font-medium pulse-glow">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="group">
                <Card className="liquid-glass-card h-full hover-liquid hover-glow-liquid cursor-pointer group-hover:border-blue-300/40 dark:group-hover:border-blue-600/40 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${feature.color} shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-300`}>
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <Badge className="liquid-glass bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-300/30 rounded-full px-3 py-1">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-base leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm text-gray-600/80 dark:text-gray-400/80 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* AI Chatbot */}
          <div className="liquid-glass-card p-6 hover-glow-liquid">
            <AIchatbot />
          </div>
        </main>

        {/* Footer */}
        <footer className="liquid-glass-surface border-t border-white/20 dark:border-gray-700/30 mt-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/84ba00cc-443d-4a1e-b79b-9d53d6c2c004.png" 
                    alt="MPIDC Logo" 
                    className="h-8 w-auto object-contain mr-3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
                  MPIDC
                </span>
              </div>
              <p className="text-sm text-gray-600/80 dark:text-gray-400/80 mb-2">
                {currentLang.footer}
              </p>
              <p className="text-xs text-gray-500/70 dark:text-gray-500/70">
                {currentLang.developed}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
