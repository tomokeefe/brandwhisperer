import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogPost";
import Analytics from "@/components/Analytics";

import PerformanceOptimizations, {
  ResourceHints,
} from "@/components/PerformanceOptimizations";
import ConversionTracking from "@/components/ConversionTracking";
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Newsletter from "@/pages/Newsletter";
import Quiz from "@/pages/Quiz";
import Resources from "@/pages/Resources";
import ResourceSnapshot from "@/pages/ResourceSnapshot";
import Calculator from "@/pages/Calculator";
import Clients from "@/pages/Clients";
import Assessment from "@/pages/Assessment";
import BrandAgency from "@/pages/BrandAgency";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";

import Sitemap from "@/pages/Sitemap";
import ThankYou from "@/pages/ThankYou";
import NotFound from "@/pages/NotFound";

function AppContent() {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/brand-agency";

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <ResourceHints />
      <PerformanceOptimizations />
      <Analytics />
      <ConversionTracking />
      {!isStandalonePage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/snapshot" element={<ResourceSnapshot />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/brand-agency" element={<BrandAgency />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/thank-you" element={<ThankYou />} />

          <Route path="/sitemap" element={<Sitemap />} />
          {/* Blog post routes - in a real app, these would be dynamic */}
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isStandalonePage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
