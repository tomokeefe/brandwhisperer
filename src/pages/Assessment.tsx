import React from "react";
import { Helmet } from "react-helmet-async";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BrandAssessment from "@/components/BrandAssessment";

const Assessment = () => {
  return (
    <>
      <Helmet>
        <title>
          Free Brand Assessment - Evaluate Your Startup's Brand | The Brand
          Whisperer
        </title>
        <meta
          name="description"
          content="Take our free interactive brand assessment to evaluate your startup's brand maturity. Get personalized recommendations and discover which branding package is right for you."
        />
        <meta
          name="keywords"
          content="brand assessment, startup brand evaluation, brand audit, brand maturity test, startup branding tool, free brand analysis"
        />
        <link rel="canonical" href="https://brandwhisperer.io/assessment" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Free Brand Assessment - Evaluate Your Startup's Brand | The Brand Whisperer"
        />
        <meta
          property="og:description"
          content="Take our free interactive brand assessment to evaluate your startup's brand maturity and get personalized recommendations."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://brandwhisperer.io/assessment"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Free Brand Assessment - Evaluate Your Startup's Brand"
        />
        <meta
          name="twitter:description"
          content="Take our free interactive brand assessment to evaluate your startup's brand maturity and get personalized recommendations."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Brand Assessment Tool",
            description:
              "Interactive brand evaluation tool for startups to assess their brand maturity and get personalized recommendations",
            url: "https://brandwhisperer.io/assessment",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            provider: {
              "@type": "Organization",
              name: "The Brand Whisperer",
              url: "https://brandwhisperer.io",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.05),transparent_50%)]" />

        <div className="container-custom relative">
          {/* Assessment Tool */}
          <BrandAssessment />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Why Take Our Brand Assessment?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get insights that help you make informed decisions about your
              brand investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600/10 rounded-2xl border border-secondary-500/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Data-Driven Insights
              </h3>
              <p className="text-gray-400">
                Get objective scoring based on proven brand success metrics used
                by 150+ startups
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600/10 rounded-2xl border border-secondary-500/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Personalized Recommendations
              </h3>
              <p className="text-gray-400">
                Receive tailored next steps and package recommendations based on
                your unique situation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600/10 rounded-2xl border border-secondary-500/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Investment Readiness
              </h3>
              <p className="text-gray-400">
                Understand how investor-ready your brand appears and what to
                improve before fundraising
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Assessment;
