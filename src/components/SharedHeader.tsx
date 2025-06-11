
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Globe, Moon, Sun, Home, ArrowLeft, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SharedHeaderProps {
  title?: string;
  showBackButton?: boolean;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  language?: string;
  onToggleLanguage?: (lang: string) => void;
}

const SharedHeader = ({ 
  title = "Single Window System", 
  showBackButton = true,
  isDarkMode = false,
  onToggleDarkMode,
  language = 'en',
  onToggleLanguage
}: SharedHeaderProps) => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleLanguageToggle = () => {
    const newLanguage = language === 'en' ? 'hi' : 'en';
    if (onToggleLanguage) {
      onToggleLanguage(newLanguage);
    }
  };

  return (
    <header className="glass-card sticky top-0 z-50 border-b-0 shadow-lg backdrop-blur-xl bg-white/90 dark:bg-gray-900/90">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-all duration-200 group">
              <img 
                src="/lovable-uploads/84ba00cc-443d-4a1e-b79b-9d53d6c2c004.png" 
                alt="MPIDC Logo" 
                className="h-8 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-sm font-semibold text-gray-900 dark:text-white">MPIDC</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">{title}</p>
              </div>
            </Link>

            {/* Navigation Breadcrumb */}
            {!isHomePage && (
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Home className="h-3 w-3 text-gray-400" />
                <span className="text-gray-400">/</span>
                <span className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                  {title}
                </span>
              </div>
            )}
          </div>
          
          {/* Actions - Apple-inspired compact design */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLanguageToggle}
              className="flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-3 py-1.5 text-sm"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="text-sm font-medium hidden sm:inline">
                {language === 'en' ? 'हिं' : 'EN'}
              </span>
            </Button>
            
            {/* Dark Mode Toggle */}
            {onToggleDarkMode && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onToggleDarkMode}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-1.5"
              >
                {isDarkMode ? 
                  <Sun className="h-3.5 w-3.5 text-yellow-500" /> : 
                  <Moon className="h-3.5 w-3.5 text-gray-600" />
                }
              </Button>
            )}
            
            {/* Security Badge */}
            <Badge variant="secondary" className="hidden lg:flex bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded-md border-0 text-xs">
              <Shield className="h-3 w-3 mr-1" />
              Secure
            </Badge>
            
            {/* Apple-style Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-lg px-3 py-1.5 text-sm shadow-sm"
                >
                  <Menu className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 glass-card border-0 shadow-xl">
                <DropdownMenuItem asChild>
                  <Link to="/login?type=investor" className="flex items-center space-x-2 px-3 py-2 text-sm">
                    <span>Investor Login</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/login?type=official" className="flex items-center space-x-2 px-3 py-2 text-sm">
                    <span>Official Login</span>
                  </Link>
                </DropdownMenuItem>
                {!isHomePage && (
                  <DropdownMenuItem asChild>
                    <Link to="/" className="flex items-center space-x-2 px-3 py-2 text-sm">
                      <Home className="h-3.5 w-3.5" />
                      <span>Home</span>
                    </Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SharedHeader;
