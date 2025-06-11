
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Globe, Moon, Sun, Home, Menu } from "lucide-react";
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
    <header className="liquid-glass-surface sticky top-0 z-50 border-b-0 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/84ba00cc-443d-4a1e-b79b-9d53d6c2c004.png" 
                  alt="MPIDC Logo" 
                  className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
                  MPIDC
                </h1>
                <p className="text-sm text-gray-600/80 dark:text-gray-400/80">{title}</p>
              </div>
            </Link>

            {/* Navigation Breadcrumb */}
            {!isHomePage && (
              <div className="hidden md:flex items-center space-x-3 liquid-glass rounded-full px-4 py-2">
                <Home className="h-4 w-4 text-gray-500" />
                <span className="text-gray-400">/</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                  {title}
                </span>
              </div>
            )}
          </div>
          
          {/* Actions - Apple-inspired design */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLanguageToggle}
              className="liquid-glass-button flex items-center space-x-2 hover-liquid border-0"
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
                size="sm"
                onClick={onToggleDarkMode}
                className="liquid-glass-button hover-liquid border-0 p-3"
              >
                {isDarkMode ? 
                  <Sun className="h-4 w-4 text-yellow-500" /> : 
                  <Moon className="h-4 w-4 text-blue-600" />
                }
              </Button>
            )}
            
            {/* Security Badge */}
            <Badge className="hidden lg:flex liquid-glass bg-green-500/20 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-full border-green-300/30 backdrop-blur-xl">
              <Shield className="h-3 w-3 mr-1.5" />
              Secure
            </Badge>
            
            {/* Apple-style Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  className="gradient-liquid text-white border-0 rounded-2xl px-4 py-2.5 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Menu className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline font-medium">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 liquid-glass-card border-0 shadow-2xl backdrop-blur-3xl">
                <DropdownMenuItem asChild>
                  <Link to="/login?type=investor" className="flex items-center space-x-3 px-4 py-3 text-sm hover:bg-white/40 dark:hover:bg-gray-800/40 rounded-xl transition-all duration-200">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Investor Login</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/login?type=official" className="flex items-center space-x-3 px-4 py-3 text-sm hover:bg-white/40 dark:hover:bg-gray-800/40 rounded-xl transition-all duration-200">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span>Official Login</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/auto-fetch-demo" className="flex items-center space-x-3 px-4 py-3 text-sm hover:bg-white/40 dark:hover:bg-gray-800/40 rounded-xl transition-all duration-200">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Auto-Fetch Demo</span>
                  </Link>
                </DropdownMenuItem>
                {!isHomePage && (
                  <DropdownMenuItem asChild>
                    <Link to="/" className="flex items-center space-x-3 px-4 py-3 text-sm hover:bg-white/40 dark:hover:bg-gray-800/40 rounded-xl transition-all duration-200">
                      <Home className="h-4 w-4" />
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
