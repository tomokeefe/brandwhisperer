import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface ThankYouVariant {
  headline: string;
  body: string;
  buttonText: string;
  seoTitle: string;
}

const ThankYouPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const offerType = searchParams.get("offer") || "free";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [offerType]);

  const thankYouContent: Record<string, ThankYouVariant> = {
    free: {
      headline: "Your brand is already being torn apart.",
      body: "Check your inbox in the next 24–48 hours for the roast + your score out of 100. If you checked the box for a live call, Tom will shoot you a Calendly link today. Welcome to the dangerous side.",
      buttonText: "Back to homepage →",
      seoTitle: "Thank You – Free Roast | The Brand Whisperer",
    },
    founder: {
      headline: "Slot locked. $15k Founder Brand incoming.",
      body: "Tom's looking at your site right now. You'll get a Calendly link from him within the next 2 hours to kick off your 7-day sprint. Prepare to stop looking early-stage.",
      buttonText: "Back to homepage →",
      seoTitle: "Thank You – Founder Brand | The Brand Whisperer",
    },
    growth: {
      headline: "Your fractional brand team is now active.",
      body: "$5k/mo locked in. Tom will Slack/email you in the next hour with onboarding + first sprint. No contracts. Cancel anytime. Results start this week.",
      buttonText: "Back to homepage →",
      seoTitle: "Thank You – Growth Brand | The Brand Whisperer",
    },
    unicorn: {
      headline: "Invitation request received.",
      body: "If you actually belong at this table, Tom will be in your inbox within 24 hours with next steps (and probably some questions). If not, you'll never hear from us. Either way — respect for swinging big.",
      buttonText: "Back to homepage →",
      seoTitle: "Thank You – Unicorn Brand | The Brand Whisperer",
    },
    agency: {
      headline: "You're on the Agency Waitlist.",
      body: "We'll hit you up when beta spots open — get ready to deliver roasts that make your clients beg for more.",
      buttonText: "Back to homepage →",
      seoTitle: "Thank You – Agency Waitlist | The Brand Whisperer",
    },
  };

  const currentContent = thankYouContent[offerType] || thankYouContent.free;

  return (
    <>
      <Helmet>
        <title>{currentContent.seoTitle}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center">
          {/* Huge Gold Checkmark with Radioactive Glow */}
          <div className="flex justify-center mb-12 md:mb-16">
            <svg
              className="w-32 h-32 md:w-40 md:h-40 text-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter:
                  "drop-shadow(0 0 20px rgba(255, 177, 0, 0.8)) drop-shadow(0 0 40px rgba(255, 177, 0, 0.5)) drop-shadow(0 0 60px rgba(255, 177, 0, 0.3))",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Big Gold Headline (80-100pt Druk) */}
          <h1 className="font-obviously font-[570] text-6xl md:text-8xl lg:text-[100px] leading-[1.1] lg:leading-[100px] text-gold uppercase mb-8 md:mb-12 px-4">
            {currentContent.headline}
          </h1>

          {/* White Supporting Copy (24-28pt Inter) */}
          <p className="text-white text-2xl md:text-[28px] leading-tight md:leading-[1.3] max-w-3xl mx-auto mb-12 md:mb-16 px-4 font-normal">
            {currentContent.body}
          </p>

          {/* Back to Homepage Button (64px tall, gold accent, black text on hover) */}
          <Link
            to="/"
            className="inline-block text-gold text-base md:text-lg font-bold px-8 py-4 md:py-4 border-2 border-gold rounded-md transition-all duration-200 hover:bg-gold hover:text-black hover:scale-105 shadow-[0_0_15px_2px_rgba(255,177,0,0.4)] hover:shadow-[0_0_25px_4px_rgba(255,177,0,0.6)]"
            style={{
              minHeight: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {currentContent.buttonText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
