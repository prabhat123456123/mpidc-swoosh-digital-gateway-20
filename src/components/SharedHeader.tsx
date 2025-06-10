
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Globe, Moon, Sun, Home, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className="glass-card sticky top-0 z-50 border-b-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-200 group">
              <img 
                src="/lovable-uploads/84ba00cc-443d-4a1e-b79b-9d53d6c2c004.png" 
                alt="MPIDC Logo" 
                className="h-10 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-sm font-semibold text-gray-900 dark:text-white">MPIDC</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">{title}</p>
              </div>
            </Link>

            {/* Navigation Breadcrumb */}
            {!isHomePage && (
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Home className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">/</span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  {title}
                </span>
              </div>
            )}
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 hover:bg-surface-hover rounded-xl"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium hidden sm:inline">
                {language === 'en' ? 'हिं' : 'EN'}
              </span>
            </Button>
            
            {/* Dark Mode Toggle */}
            {onToggleDarkMode && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={onToggleDarkMode}
                className="hover:bg-surface-hover rounded-xl hover-glow"
              >
                {isDarkMode ? 
                  <Sun className="h-4 w-4 text-yellow-500" /> : 
                  <Moon className="h-4 w-4 text-gray-600" />
                }
              </Button>
            )}
            
            {/* Security Badge */}
            <Badge variant="secondary" className="hidden sm:flex bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1.5 rounded-xl border-0">
              <Shield className="h-3 w-3 mr-1.5" />
              Secure Portal
            </Badge>
            
            {/* Back/Home Button */}
            {showBackButton && (
              <Link to="/">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center space-x-2 hover:bg-surface-hover border-gray-200 dark:border-gray-700 rounded-xl hover-glow"
                >
                  {isHomePage ? (
                    <>
                      <Home className="h-4 w-4" />
                      <span className="hidden sm:inline">Home</span>
                    </>
                  ) : (
                    <>
                      <ArrowLeft className="h-4 w-4" />
                      <span className="hidden sm:inline">Back</span>
                    </>
                  )}
                </Button>
              </Link>
            )}
            
            {/* Login Dropdown */}
            <div className="relative">
              <Button 
                variant="outline" 
                onClick={() => setShowLoginOptions(!showLoginOptions)}
                className="gradient-primary text-white border-0 hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl px-4 py-2"
              >
                Login
              </Button>
              {showLoginOptions && (
                <div className="absolute right-0 mt-2 w-48 glass-card z-10 overflow-hidden">
                  <div className="py-2">
                    <Link 
                      to="/login?type=investor" 
                      className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-surface-hover transition-colors"
                      onClick={() => setShowLoginOptions(false)}
                    >
                      Investor Login
                    </Link>
                    <Link 
                      to="/login?type=official" 
                      className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-surface-hover transition-colors"
                      onClick={() => setShowLoginOptions(false)}
                    >
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
