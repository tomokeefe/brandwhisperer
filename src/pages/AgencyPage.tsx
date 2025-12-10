import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { submitFormToSupabase } from "@/lib/supabase";

interface AgencyFormData {
  email: string;
  agency_name: string;
  website: string;
  audits_per_month: string;
  excites_you_most: string;
}

const AgencyPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AgencyFormData>({
    email: "",
    agency_name: "",
    website: "",
    audits_per_month: "1-10",
    excites_you_most: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitFormToSupabase({
        name: formData.agency_name,
        email: formData.email,
        company: formData.agency_name,
        website: formData.website,
        stage: formData.audits_per_month,
        message: formData.excites_you_most,
        call_preference: false,
        offer_type: "agency",
      });

      // Navigate to thank-you page
      navigate("/thank-you?offer=agency");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to submit form",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Agency Waitlist | The Brand Whisperer</title>
        <meta
          name="description"
          content="Deliver brutal, AI-powered brand audits with your branding. Join the agency waitlist for beta access."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative px-4 pt-12 md:pt-20 lg:pt-24 pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto">
            {/* Lightning Bolt Icon */}
            <div className="flex justify-center mb-8 md:mb-12">
              <svg
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                viewBox="0 0 97 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8389 0H63.1459C90.4098 0 97 9.92956 97 20.7419C97 31.5542 89.8964 40.3562 76.2027 43.8743C84.6971 46.0136 90.6568 52.1737 90.6568 61.2205C90.6568 76.0536 78.7374 88 48.3018 88H0L23.8389 0ZM32.5023 46.1812H45.6956L40.3208 67.7414L64.5107 36.9797H53.5141L59.8638 20.2651H40.8082L32.5023 46.1876V46.1812Z"
                  fill="#FFB100"
                />
              </svg>
            </div>

            {/* Main Headline */}
            <h1 className="font-obviously font-[570] text-5xl md:text-7xl lg:text-[110px] leading-[1.1] lg:leading-[110px] text-gold text-center uppercase mb-6 md:mb-8 px-4">
              The Most Dangerous Brand Audit Tool: Now Custom for Agencies
            </h1>

            {/* Subheadline */}
            <p className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[34px] max-w-5xl mx-auto mb-6 md:mb-8 px-4">
              Agencies: Deliver brutal, AI-powered roasts under your branding.
              Start at $99/mo and close clients faster. Join the waitlist —
              spots vanishing.
            </p>

            {/* Description */}
            <p className="text-white text-center text-base md:text-lg max-w-3xl mx-auto mb-8 px-4">
              Imagine delivering brutal, AI-powered brand audits (websites,
              decks, apps, products) under your logo — in 7 minutes flat. No
              code. No bullshit. Just results that make you the go-to for
              founders.
            </p>

            {/* Kicker Text */}
            <p className="text-gold text-center text-base md:text-lg font-medium mb-8 px-4">
              Beta launches Q1 2026. Limited spots. Be the agency that owns the
              roast game.
            </p>

            {/* Back Link */}
            <div className="flex justify-center">
              <Link
                to="/"
                className="text-gold text-sm font-medium px-8 py-3 hover:underline"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="px-4 py-6 md:py-8 lg:py-10">
          <div style={{ maxWidth: "640px" }} className="mx-auto">
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              id="agency-form"
            >
              {/* Email */}
              <div>
                <label className="block text-white font-bold text-sm mb-2">
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#3A3A3A] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Agency Name */}
              <div>
                <label className="block text-white font-bold text-sm mb-2">
                  Agency Name
                </label>
                <input
                  type="text"
                  name="agency_name"
                  value={formData.agency_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-[#3A3A3A] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your agency name"
                />
              </div>

              {/* Agency Website */}
              <div>
                <label className="block text-white font-bold text-sm mb-2">
                  Agency Website <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#3A3A3A] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="youragency.com"
                />
              </div>

              {/* How many audits per month */}
              <div>
                <label className="block text-white font-bold text-sm mb-2">
                  How many audits do you run per month?
                </label>
                <div className="relative">
                  <select
                    name="audits_per_month"
                    value={formData.audits_per_month}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-[#3A3A3A] rounded-md text-white focus:outline-none focus:border-gold transition-colors cursor-pointer appearance-none pr-10"
                  >
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="50+">50+</option>
                  </select>
                  {/* Chevron Icon */}
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </div>
              </div>

              {/* What excites you most */}
              <div>
                <label className="block text-white font-bold text-sm mb-2">
                  What excites you most about custom audits?
                </label>
                <textarea
                  name="excites_you_most"
                  value={formData.excites_you_most}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-[#3A3A3A] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us what gets you excited..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-700 disabled:bg-gray-500 text-white font-bold text-base md:text-lg leading-5 px-8 py-[20px] md:py-[20px] rounded-md transition-all duration-200 hover:scale-105 shadow-[0_0_20px_4px_rgba(255,177,0,0.4)] hover:shadow-[0_0_30px_8px_rgba(255,177,0,0.6)] disabled:shadow-none disabled:scale-100"
                  style={{
                    minHeight: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Join the Waitlist"}
                </button>
                {submitError && (
                  <p className="text-red-500 text-center mt-4 font-semibold">
                    {submitError}
                  </p>
                )}
              </div>

              {/* No spam message */}
              <div className="text-center">
                <p className="text-gray-500 text-xs">
                  No spam. Just launch updates.
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default AgencyPage;
