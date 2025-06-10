
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Globe, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface SharedHeaderProps {
  title?: string;
  showBackButton?: boolean;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

const SharedHeader = ({ 
  title = "Single Window System", 
  showBackButton = true,
  isDarkMode = false,
  onToggleDarkMode 
}: SharedHeaderProps) => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-200 group">
            <img 
              src="/lovable-uploads/84ba00cc-443d-4a1e-b79b-9d53d6c2c004.png" 
              alt="MPIDC Logo" 
              className="h-8 w-auto object-contain"
            />
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">{title}</p>
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
            {onToggleDarkMode && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={onToggleDarkMode}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1">
              <Shield className="h-3 w-3 mr-1" />
              Secure Portal
            </Badge>
            
            {showBackButton && (
              <Link to="/">
                <Button variant="outline" className="hover:bg-blue-50 dark:hover:bg-gray-700">
                  Back to Home
                </Button>
              </Link>
            )}
            
            <div className="relative">
              <Button 
                variant="outline" 
                onClick={() => setShowLoginOptions(!showLoginOptions)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Login
              </Button>
              {showLoginOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-10 overflow-hidden">
                  <div className="py-2">
                    <Link to="/login?type=investor" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                      Investor Login
                    </Link>
                    <Link to="/login?type=official" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                      Official Login
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SharedHeader;
