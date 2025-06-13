import React from "react";
import { Helmet } from "react-helmet-async";
import LogoWall from "@/components/LogoWall";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, TrendingUp, Users, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedLogos, clientLogos } from "@/data/clientLogos";

const Clients = () => {
  // Use real client logos for the page
  const featuredLogos = getFeaturedLogos(12); // Featured logos for display

  const handleCtaClick = () => {
    window.location.href = "/contact";
  };

  const stats = [
    {
      icon: Users,
      value: "150+",
      label: "Brands Transformed",
      description: "From pre-seed to Series A",
    },
    {
      icon: TrendingUp,
      value: "$2.5B+",
      label: "Capital Raised",
      description: "By our client brands",
    },
    {
      icon: Star,
      value: "98%",
      label: "Success Rate",
      description: "Funding goals achieved",
    },
    {
      icon: Award,
      value: "24x",
      label: "Average Growth",
      description: "In brand recognition",
    },
  ];

  const testimonials = [
    {
      quote:
        "The Brand Whisperer transformed our pitch deck into a funding magnet. We raised our Series A in just 3 months.",
      author: "Sarah Chen",
      title: "CEO, TechFlow",
      company: "SaaS Platform",
      category: "SaaS",
      funding: "$12M Series A",
    },
    {
      quote:
        "Their brand strategy was the foundation of our $50M exit. Every investor meeting became a 'yes' after their rebrand.",
      author: "Marcus Rodriguez",
      title: "Founder, FinanceFirst",
      company: "FinTech Platform",
      category: "FinTech",
      funding: "$50M Exit",
    },
    {
      quote:
        "We went from unknown startup to industry leader. Their positioning strategy was pure magic.",
      author: "Lisa Park",
      title: "Co-founder, HealthHub",
      company: "HealthTech Startup",
      category: "HealthTech",
      funding: "$8M Seed",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Clients - Success Stories | The Brand Whisperer</title>
        <meta
          name="description"
          content="Discover how 150+ startups raised $2.5B+ with our brand strategy. From pre-seed to Series A, see the success stories and client testimonials."
        />
        <meta
          name="keywords"
          content="startup clients, brand success stories, funded startups, client testimonials, startup branding results"
        />
        <link rel="canonical" href="https://brandwhisperer.io/clients" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Our Clients - Success Stories | The Brand Whisperer"
        />
        <meta
          property="og:description"
          content="Discover how 150+ startups raised $2.5B+ with our brand strategy. From pre-seed to Series A, see the success stories."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandwhisperer.io/clients" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Clients - Success Stories | The Brand Whisperer"
        />
        <meta
          name="twitter:description"
          content="Discover how 150+ startups raised $2.5B+ with our brand strategy. From pre-seed to Series A, see the success stories."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Clients - Success Stories",
            description:
              "Client success stories and testimonials from startups that raised funding with our brand strategy",
            url: "https://brandwhisperer.io/clients",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: clientLogos.length,
              itemListElement: clientLogos.map((client, index) => ({
                "@type": "Organization",
                position: index + 1,
                name: client.name,
                description: `${client.category} startup client`,
              })),
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
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary-600/10 text-secondary-400 text-sm font-medium px-4 py-2 rounded-full border border-secondary-500/20 mb-6">
              <Zap className="w-4 h-4" />
              150+ Success Stories
            </div>

            <h1 className="text-display-xl lg:text-display-2xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Brands That Raised
              <br />
              <span className="bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
                $2.5B+ Together
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              From pre-seed pitch decks to Series A success stories, see how
              strategic branding transforms startups into investor magnets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 text-lg font-semibold group"
                >
                  Start Your Success Story
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <Link to="/calculator">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary-500/30 text-secondary-400 hover:bg-secondary-500/10 px-8 py-3 text-lg font-semibold"
                >
                  Calculate Your Investment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-dark-900/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-600/10 rounded-2xl border border-secondary-500/20 mb-4 group-hover:bg-secondary-600/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-secondary-400" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LogoWall Section */}
      <LogoWall
        logos={clientLogos}
        title="Trusted by 150+ Growing Brands"
        subtitle="From pre-seed startups to Series A companies, we've helped brands across industries build trust, clarity, and momentum that converts investors and customers."
        ctaTitle="Ready to Join These Success Stories?"
        ctaDescription="Let's build a brand that investors and customers can't ignore. Start with a free brand assessment and see how we can transform your startup's trajectory."
        ctaButtonText="Get Your Free Assessment"
        onCtaClick={handleCtaClick}
      />

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-dark-900/50">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-display-lg font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Real founders, real results, real impact on their funding journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 hover:border-secondary-500/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      {testimonial.title}
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <span className="text-xs bg-secondary-600/20 text-secondary-400 px-2 py-1 rounded-full">
                        {testimonial.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-secondary-400">
                      {testimonial.funding}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-secondary-600/10 to-secondary-500/10">
        <div className="container-custom text-center">
          <h2 className="text-display-lg font-bold mb-4 text-white">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the ranks of funded startups. Let's build a brand that opens
            doors, builds trust, and drives results.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 text-lg font-semibold group"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Clients;
