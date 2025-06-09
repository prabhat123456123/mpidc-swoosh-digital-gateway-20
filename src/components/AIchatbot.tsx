
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const AIchatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your MPIDC assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage("");
  };

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("kya") || lowerMessage.includes("approval")) {
      return "The Know Your Approvals (KYA) tool helps identify required approvals for your investment. You can access it from the main dashboard.";
    } else if (lowerMessage.includes("caf") || lowerMessage.includes("application")) {
      return "The Common Application Form (CAF) allows you to submit a unified application for multiple approvals. It includes auto-fill capabilities to save time.";
    } else if (lowerMessage.includes("land") || lowerMessage.includes("allocation")) {
      return "Our Land Management system helps you find and apply for suitable land parcels. You can search by district, type, and area requirements.";
    } else if (lowerMessage.includes("payment") || lowerMessage.includes("fee")) {
      return "The Unified Payment Gateway allows you to make consolidated payments for multiple approvals. All major payment methods are supported.";
    } else if (lowerMessage.includes("track") || lowerMessage.includes("status")) {
      return "You can track your application status in real-time through the dashboard. You'll receive notifications for any updates.";
    } else if (lowerMessage.includes("grievance") || lowerMessage.includes("complaint")) {
      return "The Grievance Redressal system provides SLA-bound ticket management for any queries or complaints. Response times are guaranteed.";
    } else {
      return "I can help you with information about approvals, applications, land management, payments, tracking status, and grievances. What specific information do you need?";
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96">
          <Card className="h-full flex flex-col shadow-xl">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg py-3">
              <CardTitle className="text-lg flex items-center">
                <Bot className="h-5 w-5 mr-2" />
                MPIDC Assistant
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t p-3">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AIchatbot;
