import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface FormData {
  name: string;
  company: string;
  website: string;
  stage: string;
  message: string;
  callMe: boolean;
}

const AuditForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const offer = searchParams.get("offer") || "free";
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    website: "",
    stage: "Pre-seed",
    message: "",
    callMe: false,
  });
  const [submitted, setSubmitted] = useState(false);

  // Scroll to top when form loads or offer changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [offer]);

  const variants = {
    free: {
      title: "Get Your Brand Roasted",
      subtitle: "7 minutes. Costs nothing. Changes everything.",
      description:
        "We're going to tear apart your logo, site, deck, and messaging and hand you a brutal score + the leaks killing your growth.",
      buttonText: "Roast My Brand →",
      seoTitle: "Free Brand Audit | The Brand Whisperer",
    },
    founder: {
      title: "You're About to Stop Looking Early-Stage",
      subtitle:
        "$15k one-time. Full identity system, pitch deck, website wires, tone of voice. Delivered in 7 days or your round will thank you.",
      description: "",
      buttonText: "Secure My Founder Brand Slot →",
      seoTitle: "The Founder Brand Package | The Brand Whisperer",
    },
    growth: {
      title: "Lock In Your Fractional Brand Team",
      subtitle:
        "$5k/mo. We run product branding, launches, employer brand, executive positioning — everything that moves revenue. No contracts. Cancel anytime.",
      description: "",
      buttonText: "Start My Growth Brand →",
      seoTitle: "The Growth Brand Package | The Brand Whisperer",
    },
    unicorn: {
      title: "You Think You're Ready for Unicorn? Prove It.",
      subtitle:
        "Invite-only. Starts at $40k/mo + warrants. Only for companies already >$20M ARR or on a clear $1B+ trajectory.",
      description: "",
      buttonText: "Request Unicorn Invitation →",
      seoTitle: "The Unicorn Brand Package | The Brand Whisperer",
    },
  };

  const current = variants[offer as keyof typeof variants] || variants.free;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Let Netlify Forms handle the submission
    // Just show success message and reset form
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        website: "",
        stage: "Pre-seed",
        message: "",
        callMe: false,
      });
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>{current.seoTitle}</title>
        <meta
          name="description"
          content={current.subtitle || current.description}
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
              {current.title}
            </h1>

            {/* Subheadline */}
            <p className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[34px] max-w-5xl mx-auto mb-6 md:mb-8 px-4">
              {current.subtitle}
            </p>

            {/* Description (if present) */}
            {current.description && (
              <p className="text-white text-center text-base md:text-lg max-w-3xl mx-auto mb-8 px-4">
                {current.description}
              </p>
            )}

            {/* Back Link */}
            <div className="flex justify-center mt-4">
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
          <div className="max-w-2xl mx-auto">
            <form
              name="audit-form"
              method="POST"
              netlify
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Name */}
              <div>
                <label className="block text-white font-bold text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#3A3A3A] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-white font-bold text-sm mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#3A3A3A] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your company"
                />
              </div>

              {/* Website URL */}
              <div>
                <label className="block text-white font-bold text-sm mb-2">
                  Website URL <span className="text-gold">*</span>
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#3A3A3A] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="https://yourcompany.com"
                />
              </div>

              {/* Current Stage / ARR */}
              <div>
                <label className="block text-white font-bold text-sm mb-2">
                  Current Stage / ARR
                </label>
                <div className="relative">
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-[#3A3A3A] rounded-md text-white focus:outline-none focus:border-gold transition-colors cursor-pointer appearance-none pr-10"
                  >
                    <option>Pre-seed</option>
                    <option>Seed</option>
                    <option>Series A</option>
                    <option>Series B+</option>
                    <option>$10M+ ARR</option>
                    <option>Rather not say</option>
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

              {/* Message / What you want to achieve */}
              <div>
                <label className="block text-white font-bold text-sm mb-2">
                  What You Want to Achieve
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-[#3A3A3A] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us what you're looking to accomplish with your brand..."
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="callMe"
                  name="callMe"
                  checked={formData.callMe}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 cursor-pointer accent-gold"
                  style={{
                    appearance: "auto",
                    accentColor: "#FFB100",
                  }}
                />
                <label
                  htmlFor="callMe"
                  className="text-white text-sm font-medium cursor-pointer leading-6"
                >
                  I'd rather jump on a 15-min live roast call with Tom than get
                  a written report
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-700 text-white font-bold text-base md:text-lg leading-5 px-8 py-[20px] md:py-[20px] rounded-md transition-all duration-200 hover:scale-105 shadow-[0_0_20px_4px_rgba(255,177,0,0.4)] hover:shadow-[0_0_30px_8px_rgba(255,177,0,0.6)]"
                  style={{
                    minHeight: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {current.buttonText}
                </button>
                {submitted && (
                  <p className="text-gold text-center mt-4 font-semibold">
                    Thank you! We'll be in touch shortly.
                  </p>
                )}
              </div>
            </form>

            {/* Bottom Kicker */}
            <div className="mt-8 md:mt-12 text-center">
              <p className="text-white text-lg md:text-xl leading-tight">
                Still hesitating?{" "}
                <span className="text-gold font-bold">
                  Your competitors aren't.
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuditForm;
