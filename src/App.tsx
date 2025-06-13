import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Resources from "@/pages/Resources";
import Calculator from "@/pages/Calculator";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-dark-950 text-white">
          <Analytics />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/calculator" element={<Calculator />} />
              {/* Blog post routes - in a real app, these would be dynamic */}
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ExitIntentPopup />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

// Simple blog post component for individual articles
const BlogPost = () => {
  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-display-lg font-bold text-white mb-6">
              Blog Post Coming Soon
            </h1>
            <p className="text-body-lg text-gray-300">
              Individual blog posts will be dynamically generated based on the
              content management system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
