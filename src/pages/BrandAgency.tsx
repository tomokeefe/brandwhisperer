import React from "react";
import { Helmet } from "react-helmet-async";

const BrandAgency: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Brand Agency - The Brand Whisperer</title>
        <meta
          name="description"
          content="Most branding agencies charge you $150k to make you look like everyone else. We scale your startup brand from pre-seed to unicorn without the rebrand tax."
        />
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
              Most branding agencies charge you $150k to make you look like
              everyone else.
            </h1>

            {/* Subheadline */}
            <p className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[34px] max-w-5xl mx-auto mb-6 md:mb-8 px-4">
              We scale your startup brand from pre-seed to unicorn without the
              rebrand tax. One fixed price.{" "}
              <span className="font-bold">Zero surprises. Ever.</span>
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-4">
              <button className="bg-gold hover:bg-gold-700 text-white font-bold text-base md:text-[17px] leading-5 px-8 py-5 md:py-6 rounded-md transition-all duration-200 hover:scale-105">
                Get Your Free Brand Audit
              </button>
            </div>

            {/* Link */}
            <div className="flex justify-center">
              <button className="text-gold text-sm font-medium px-8 py-3 hover:underline">
                Or see who's under the bars →
              </button>
            </div>
          </div>
        </section>

        {/* Built the Brands Behind Section */}
        <section className="px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <h2 className="font-obviously font-[570] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-[50px] text-gold text-center uppercase mb-6">
                Built the brands behind{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 px-4">________</span>
                  <span className="absolute inset-0 bg-black shadow-[0_0_10.4px_1px_#FFB100] rounded-sm"></span>
                </span>
                ,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 px-4">________</span>
                  <span className="absolute inset-0 bg-black shadow-[0_0_10.4px_1px_#FFB100] rounded-sm"></span>
                </span>{" "}
                raise, and 42 other hypergrowth monsters.
              </h2>
              <p className="text-white text-center text-xl md:text-[28px] leading-tight md:leading-[34px] mt-6">
                Names hidden to protect the dangerous.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="px-4 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {/* The Founder Brand Card */}
              <div className="border border-[#3A3A3A] rounded-lg bg-black p-8 flex flex-col">
                <div className="flex flex-col items-center text-center gap-4 mb-8">
                  <h3 className="text-white font-bold text-base uppercase">
                    The Founder Brand
                  </h3>
                  <div className="text-gold font-obviously font-[570] text-[32px] leading-[48px]">
                    15k
                  </div>
                  <p className="text-white font-bold text-base">
                    one-time payment
                  </p>
                  <p className="text-white font-bold text-base">
                    Full identity system, pitch deck, website wires, tone of
                    voice.
                  </p>
                  <p className="text-white text-base">
                    Built for pre-seed / seed founders who refuse to look
                    early-stage.
                  </p>
                  <p className="text-white font-bold text-base">
                    Done in 7 days or your round will thank you.
                  </p>
                </div>
                <button className="bg-gold hover:bg-gold-700 text-white font-bold text-base leading-6 px-4 py-3 rounded-md transition-all duration-200 mt-auto">
                  Build My Founder Brand →
                </button>
              </div>

              {/* The Growth Brand Card */}
              <div className="border border-[#3A3A3A] rounded-lg bg-black p-8 flex flex-col">
                <div className="flex flex-col items-center text-center gap-4 mb-8">
                  <h3 className="text-white font-bold text-base uppercase">
                    The Growth Brand
                  </h3>
                  <div className="text-gold font-obviously font-[570] text-[32px] leading-[48px]">
                    5k
                  </div>
                  <p className="text-white font-bold text-base">
                    monthly payment
                  </p>
                  <p className="text-white font-bold text-base">
                    We become your fractional brand team.
                  </p>
                  <p className="text-white text-base">
                    Product branding, launches, employer brand, executive
                    positioning — everything that moves revenue, handled.
                  </p>
                  <p className="text-white font-bold text-base">
                    No retainers, no 6-month contracts. Cancel anytime.
                  </p>
                </div>
                <button className="bg-gold hover:bg-gold-700 text-white font-bold text-base leading-6 px-4 py-3 rounded-md transition-all duration-200 mt-auto">
                  Build My Founder Brand →
                </button>
              </div>

              {/* The Unicorn Brand Card */}
              <div className="border border-[#3A3A3A] rounded-lg bg-black p-8 flex flex-col md:col-span-2 lg:col-span-1">
                <div className="flex flex-col items-center text-center gap-4 mb-8">
                  <h3 className="text-white font-bold text-base uppercase">
                    The Unicorn Brand
                  </h3>
                  <div className="text-gold font-obviously font-[570] text-[32px] leading-[48px] uppercase">
                    Invite Only
                  </div>
                  <p className="text-white font-bold text-base">
                    For companies already &gt;$20M ARR or on a $1B+ trajectory.
                  </p>
                  <p className="text-white text-base">
                    We embed as your brand department for 12–36 months and 3–10×
                    your valuation.
                  </p>
                  <p className="text-white font-bold text-base">
                    Starts at $40k/mo + warrants
                  </p>
                </div>
                <button className="bg-gold hover:bg-gold-700 text-white font-bold text-base leading-6 px-4 py-3 rounded-md transition-all duration-200 mt-auto">
                  I Think I Qualify →
                </button>
              </div>
            </div>

            {/* Brand Audit Card - Full Width */}
            <div className="border border-[#3A3A3A] rounded-lg bg-black p-8">
              <div className="flex flex-col items-center text-center gap-5 max-w-5xl mx-auto">
                <h3 className="text-white font-bold text-base">BRAND AUDIT</h3>
                <div className="text-gold font-obviously font-[570] text-[32px] leading-[48px] uppercase tracking-tight">
                  Free
                </div>
                <p className="text-white font-bold text-base">
                  7-minute AI + human roast of your current brand.
                </p>
                <p className="text-white text-base">
                  Logo, site, deck, messaging — we rip it apart and give you a
                  brutal score out of 100 + the 3 biggest leaks. killing your
                  deals and talent.
                </p>
                <p className="text-white font-bold text-base">
                  No sales pitch. Just truth.
                </p>
                <button className="bg-gold hover:bg-gold-700 text-white font-bold text-base leading-6 px-4 py-3 rounded-md transition-all duration-200 w-full max-w-[280px]">
                  Roast My Brand →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-gold"></div>
        </div>

        {/* Anti Case Studies Section */}
        <section className="px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-obviously font-[570] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-[50px] text-gold uppercase mb-6">
              Anti Case Studies
            </h2>
            <p className="text-white text-xl md:text-[28px] leading-tight md:leading-[34px]">
              Real revenue. Real proof. No bullshit.
            </p>
          </div>
        </section>

        {/* What Founders Actually Said Section */}
        <section className="px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-obviously font-[570] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-[50px] text-gold uppercase mb-6">
                What founders actually said after we fixed their brand
              </h2>
              <p className="text-white text-xl md:text-[28px] leading-tight md:leading-[34px]">
                (no ghostwritten fluff)
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div className="flex flex-col gap-8">
                {/* Testimonial 1 */}
                <div className="border border-[#3A3A3A] rounded-lg bg-black p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <span className="text-gold font-semibold">
                        Lars Perkins
                      </span>{" "}
                      <span className="text-white">CEO/Founder</span>
                    </div>
                    <p className="text-white font-semibold leading-6">
                      Over many years, I've worked with The Brand Whisperer team
                      on more than a dozen branding projects. They continue to
                      be my go-to partner for branding because they produce
                      amazing, high quality results quickly that really bring
                      the companies' identity to life. And they do it in a cost
                      effective way. They are easily the best and easiest to
                      work with design group I've ever used.
                    </p>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="border border-[#3A3A3A] rounded-lg bg-black p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <span className="text-gold font-semibold">
                        Mathew Wilson
                      </span>
                    </div>
                    <p className="text-white font-semibold leading-6">
                      Enterprise started replying to cold emails the day we
                      shipped the new brand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-8">
                {/* Testimonial 3 */}
                <div className="border border-[#3A3A3A] rounded-lg bg-black p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <span className="text-gold font-semibold">
                        Tamer Morsy
                      </span>{" "}
                      <span className="text-white">
                        CEO/Founder Spotlight News
                      </span>
                    </div>
                    <p className="text-white font-semibold leading-6">
                      The Brand Whisperer extends far beyond design—he
                      thoughtfully considers the brand, user interaction, and
                      every detail to craft a truly world-class experience.
                    </p>
                  </div>
                </div>

                {/* Testimonial 4 */}
                <div className="border border-[#3A3A3A] rounded-lg bg-black p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <span className="text-gold font-semibold">
                        Mathew Wilson
                      </span>
                    </div>
                    <p className="text-white font-semibold leading-6">
                      Old deck got ghosted. New deck got term sheets in 48
                      hours. Same product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-4 py-12 md:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-obviously font-[570] text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[110px] leading-[1.1] md:leading-[100px] text-gold text-center uppercase mb-8 md:mb-10">
              Stop looking <br />
              like every other startup.
            </h2>

            <p className="text-white text-center text-xl md:text-[28px] leading-tight md:leading-[34px] mb-6 max-w-4xl mx-auto">
              Your competitors already have the same gradient logo, the same
              bland deck, and the same forgettable website.
            </p>

            <p className="text-white text-center text-xl md:text-[28px] leading-tight md:leading-[34px] mb-8 max-w-3xl mx-auto">
              Keep scrolling if you're fine staying invisible.
            </p>

            <div className="flex justify-center mb-6">
              <button className="bg-gold hover:bg-gold-700 text-white font-bold text-base md:text-[17px] leading-5 px-8 py-5 md:py-6 rounded-md transition-all duration-200 hover:scale-105">
                Roast My Brand →
              </button>
            </div>

            <p className="text-white text-center text-base md:text-lg leading-tight max-w-lg mx-auto">
              <span className="font-normal">Takes 7 minutes.</span>{" "}
              <span className="font-bold">
                Costs nothing. Changes everything.
              </span>
              <br />
              <span className="font-normal">
                Or keep wondering why the term sheets never come.
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BrandAgency;
