
import SharedHeader from "@/components/SharedHeader";
import AutoFetchForm from "@/components/AutoFetchForm";
import { useState, useEffect } from "react";

const AutoFetchDemo = () => {
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

  const formFields = [
    {
      id: 'panNumber',
      label: 'PAN Number',
      type: 'text',
      placeholder: 'Enter PAN Number (e.g., ABCDE1234F)'
    },
    {
      id: 'companyName',
      label: 'Company Name',
      type: 'text',
      placeholder: 'Company name will be auto-fetched',
      autoFetch: true,
      dependsOn: ['panNumber']
    },
    {
      id: 'address',
      label: 'Registered Address',
      type: 'text',
      placeholder: 'Address will be auto-fetched',
      autoFetch: true,
      dependsOn: ['panNumber']
    },
    {
      id: 'phoneNumber',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Phone number will be auto-fetched',
      autoFetch: true,
      dependsOn: ['panNumber']
    },
    {
      id: 'gstNumber',
      label: 'GST Number',
      type: 'text',
      placeholder: 'GST number will be auto-fetched',
      autoFetch: true,
      dependsOn: ['panNumber']
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div className="gradient-surface min-h-screen">
        <SharedHeader 
          title="Auto-Fetch Demo"
          showBackButton={true}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          language={language}
          onToggleLanguage={toggleLanguage}
        />

        <main className="max-w-2xl mx-auto px-4 lg:px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Auto-Fetch Feature Demo
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Enter a PAN number to see how the form automatically fetches related information
            </p>
          </div>

          <AutoFetchForm
            title="Company Registration Form"
            description="This form demonstrates the auto-fetch feature. Enter a PAN number and watch other fields populate automatically."
            fields={formFields}
          />
        </main>
      </div>
    </div>
  );
};

export default AutoFetchDemo;
