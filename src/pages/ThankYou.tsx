import React from "react";
import { Link, useLocation } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const GOLD = "#FFD700";
const SAPPHIRE = "#0F52BA";

const ThankYou: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-dark-950 pb-24" style={{ fontFamily: "Poppins, sans-serif" }}>
      <SEO
        title="Thanks! We’ve Got You Covered | Brand Whisperer"
        description="We’ll reach out within 24 hours. Grab a free ebook while you wait."
        keywords="thank you, contact confirmation, startup branding resources"
      />

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: "rgba(15,82,186,0.12)", border: `1px solid ${SAPPHIRE}` }}>
              <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: GOLD }}>
              Thanks! We’ve Got You Covered
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We’ll reach out within 24 hours. Check your inbox for next steps.
            </p>
            <p className="text-sm text-gray-400 italic mb-10">
              Your branding journey’s off to a flying start—cowabunga!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-4">
                <Link to={`/resources?utm_source=thank_you${location.search ? "&" + location.search.substring(1) : ""}`}>
                  Explore Free Ebooks
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-4">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
