import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Analytics from "@/components/Analytics";
import PerformanceOptimizations, {
  ResourceHints,
} from "@/components/PerformanceOptimizations";
import ConversionTracking from "@/components/ConversionTracking";
import Index from "@/pages/Index";
import AuditForm from "@/pages/AuditForm";
import ThankYouPage from "@/pages/ThankYouPage";
import AgencyPage from "@/pages/AgencyPage";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <div className="min-h-screen bg-black text-white">
          <ResourceHints />
          <PerformanceOptimizations />
          <Analytics />
          <ConversionTracking />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/audit" element={<AuditForm />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="*" element={<Index />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
