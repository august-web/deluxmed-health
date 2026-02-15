import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import PrimaryCare from "./pages/PrimaryCare";
import BehavioralHealth from "./pages/BehavioralHealth";
import Telehealth from "./pages/Telehealth";
import ProviderProfile from "./pages/ProviderProfile";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Insurance from "./pages/Insurance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/primary-care-baltimore" element={<PrimaryCare />} />
            <Route path="/behavioral-health-baltimore" element={<BehavioralHealth />} />
            <Route path="/telehealth-maryland" element={<Telehealth />} />
            <Route path="/doreen-ackom-owusu-nurse-practitioner" element={<ProviderProfile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insurance-payment" element={<Insurance />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
