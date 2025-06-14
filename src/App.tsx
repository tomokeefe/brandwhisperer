import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogPost";
import Analytics from "@/components/Analytics";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import PerformanceOptimizations, {
  ResourceHints,
} from "@/components/PerformanceOptimizations";
import ConversionTracking from "@/components/ConversionTracking";
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Resources from "@/pages/Resources";
import Calculator from "@/pages/Calculator";
import Clients from "@/pages/Clients";
import Assessment from "@/pages/Assessment";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import DataProcessing from "@/pages/DataProcessing";
import Sitemap from "@/pages/Sitemap";
import NotFound from "@/pages/NotFound";
import MobileTestingPanel from "@/components/MobileTestingPanel";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-dark-950 text-white">
          <ResourceHints />
          <PerformanceOptimizations />
          <Analytics />
          <ConversionTracking />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/data" element={<DataProcessing />} />
              <Route path="/sitemap" element={<Sitemap />} />
              {/* Blog post routes - in a real app, these would be dynamic */}
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ExitIntentPopup />
          <MobileTestingPanel />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
