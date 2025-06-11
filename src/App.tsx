
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InvestorDashboard from "./pages/InvestorDashboard";
import OfficialDashboard from "./pages/OfficialDashboard";
import KYA from "./pages/KYA";
import CAF from "./pages/CAF";
import Login from "./pages/Login";
import PaymentGateway from "./pages/PaymentGateway";
import RealTimeDashboard from "./pages/RealTimeDashboard";
import InspectionModule from "./pages/InspectionModule";
import GrievanceRedressal from "./pages/GrievanceRedressal";
import IncentiveManagement from "./pages/IncentiveManagement";
import LandManagement from "./pages/LandManagement";
import NotFound from "./pages/NotFound";
import DocumentCenter from "./pages/DocumentCenter";
import AutoFetchDemo from "./pages/AutoFetchDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/investor-dashboard" element={<InvestorDashboard />} />
          <Route path="/official-dashboard" element={<OfficialDashboard />} />
          <Route path="/kya" element={<KYA />} />
          <Route path="/caf" element={<CAF />} />
          <Route path="/land-management" element={<LandManagement />} />
          <Route path="/document-center" element={<DocumentCenter />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="/real-time-dashboard" element={<RealTimeDashboard />} />
          <Route path="/inspection-module" element={<InspectionModule />} />
          <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
          <Route path="/incentive-management" element={<IncentiveManagement />} />
          <Route path="/auto-fetch-demo" element={<AutoFetchDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
