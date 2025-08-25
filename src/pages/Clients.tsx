import React from "react";
import { Helmet } from "react-helmet-async";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LogoWall from "@/components/LogoWall";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, TrendingUp, Users, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Clients = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  // Real client logos
  const clientLogos = [
    {
      id: 1,
      name: "Anthropic",
      category: "AI",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fb450d27ebd60405f8be59d5cb017fd19?format=webp&width=800",
    },
    {
      id: 2,
      name: "OpenAI",
      category: "AI",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F1668f594966f41bdad53bc5c4b1fb3ce?format=webp&width=800",
    },
    {
      id: 3,
      name: "Stripe",
      category: "FinTech",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fb2f640d849fa4bea8d55af6f4631a558?format=webp&width=800",
    },
    {
      id: 4,
      name: "Figma",
      category: "Design",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F16ca4f0e969545c5972c42c9a36837fd?format=webp&width=800",
    },
    {
      id: 5,
      name: "Notion",
      category: "Productivity",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F1e297280f57a44c8a045bf0ad629fd47?format=webp&width=800",
    },
    {
      id: 6,
      name: "Discord",
      category: "Communication",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F703e06268ead42189ba389dc650cc119?format=webp&width=800",
    },
    {
      id: 7,
      name: "Slack",
      category: "Communication",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F132bf55f6ddf465eaf112a36616b56a9?format=webp&width=800",
    },
    {
      id: 8,
      name: "Coinbase",
      category: "Crypto",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F59a6c518f23b426294f370477c519ebd?format=webp&width=800",
    },
    {
      id: 9,
      name: "Spotify",
      category: "Entertainment",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F31b744fa371f4c7496bdbf3f1f3cf96a?format=webp&width=800",
    },
    {
      id: 10,
      name: "Airbnb",
      category: "Travel",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fa0ba80f010d744d49ce112baea2b35ea?format=webp&width=800",
    },
    {
      id: 11,
      name: "Uber",
      category: "Transportation",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F49d5ff51217242979950f75d7f523c8d?format=webp&width=800",
    },
    {
      id: 12,
      name: "Netflix",
      category: "Entertainment",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F70f9b780f44446af9296759df304857b?format=webp&width=800",
    },
    {
      id: 13,
      name: "Shopify",
      category: "E-commerce",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fd8534d79af0a4b40947e7a63b5af7476?format=webp&width=800",
    },
    {
      id: 14,
      name: "Zoom",
      category: "Communication",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fbe402103e5644b4f97cad28ca59d4fe5?format=webp&width=800",
    },
    {
      id: 15,
      name: "Dropbox",
      category: "Cloud Storage",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fad9332dfbe3845a6b2a111e08fb99143?format=webp&width=800",
    },
    {
      id: 16,
      name: "Twitter",
      category: "Social Media",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Ff4c8e3ce230c416e88eabc8a3502c596?format=webp&width=800",
    },
    {
      id: 17,
      name: "Instagram",
      category: "Social Media",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F2c599d16b7cb49238656134e247e112c?format=webp&width=800",
    },
    {
      id: 18,
      name: "LinkedIn",
      category: "Professional",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F81c1a7b1b9d34edc9e7412a99579b980?format=webp&width=800",
    },
    {
      id: 19,
      name: "YouTube",
      category: "Entertainment",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F2f30f49ef34747b2ae3be38f3d7ed71d?format=webp&width=800",
    },
    {
      id: 20,
      name: "TikTok",
      category: "Social Media",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F4b20f87eae19474bbbb58dbbac4ccd85?format=webp&width=800",
    },
    {
      id: 21,
      name: "GitHub",
      category: "Developer Tools",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fcdb094fd61d04fba9dbc60e98c85d6d6?format=webp&width=800",
    },
    {
      id: 22,
      name: "Google",
      category: "Technology",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fee1dca92f8a44ff9800e9baf1649b6e2?format=webp&width=800",
    },
    {
      id: 23,
      name: "Microsoft",
      category: "Technology",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F2b844098bee24af4a0637e661477d077?format=webp&width=800",
    },
    {
      id: 24,
      name: "Apple",
      category: "Technology",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F0a6d63abc5a746f88f559065ce51611d?format=webp&width=800",
    },
    {
      id: 25,
      name: "Amazon",
      category: "E-commerce",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F87a1c156302541a5bbde4059b7d3da9f?format=webp&width=800",
    },
    {
      id: 26,
      name: "Meta",
      category: "Social Media",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Ff11b51e7700b4a5794c101c1aa0b6e7b?format=webp&width=800",
    },
    {
      id: 27,
      name: "Tesla",
      category: "Automotive",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fae3e510874294ea4bf2595997a6e003d?format=webp&width=800",
    },
    {
      id: 28,
      name: "PayPal",
      category: "FinTech",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F2ed1bcfb1a7b4efd97c71a359055c7ab?format=webp&width=800",
    },
    {
      id: 29,
      name: "Square",
      category: "FinTech",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fb2e5663b0fb54026a382787175c1b3d3?format=webp&width=800",
    },
    {
      id: 30,
      name: "Robinhood",
      category: "FinTech",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Ff78bf86097494890939ebadaaf7e9368?format=webp&width=800",
    },
    {
      id: 31,
      name: "Canva",
      category: "Design",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F06fe83cfbf2142fbb3cfad00be907981?format=webp&width=800",
    },
    {
      id: 32,
      name: "Asana",
      category: "Productivity",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F9b8b35f0293e479fbdca73544e22779d?format=webp&width=800",
    },
    {
      id: 33,
      name: "Trello",
      category: "Productivity",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F4d777ae6e2674e4ea3eab27930111b9d?format=webp&width=800",
    },
    {
      id: 34,
      name: "Monday.com",
      category: "Productivity",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F3d03c2b32d9b4e93b5b46361b7efd176?format=webp&width=800",
    },
    {
      id: 35,
      name: "Salesforce",
      category: "CRM",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fd7803f627fc6444dace2c0566c93b095?format=webp&width=800",
    },
    {
      id: 36,
      name: "HubSpot",
      category: "Marketing",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F27b7e48bbaba4dff8d7d815ce52a5320?format=webp&width=800",
    },
    {
      id: 37,
      name: "Mailchimp",
      category: "Marketing",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Ff22a529b420a41eba2437555261555f4?format=webp&width=800",
    },
    {
      id: 38,
      name: "Intercom",
      category: "Customer Support",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fadb66a2b8a224320a023edaf6c96f128?format=webp&width=800",
    },
    {
      id: 39,
      name: "Zendesk",
      category: "Customer Support",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F2b2e0dae00614a2db51cf4d242524916?format=webp&width=800",
    },
    {
      id: 40,
      name: "Twilio",
      category: "Communication",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F9a4d872294bb45c4bc7cfd9f0fff457e?format=webp&width=800",
    },
    {
      id: 41,
      name: "Okta",
      category: "Security",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fb667f5ef24cd494ba8cea14e4a83e3d1?format=webp&width=800",
    },
    {
      id: 42,
      name: "Atlassian",
      category: "Developer Tools",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Ffbd50d61400a41a29bfc3ed32580fa15?format=webp&width=800",
    },
    {
      id: 43,
      name: "DocuSign",
      category: "Business Tools",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F241ad5f38ee44e35ac1e930c7472dada?format=webp&width=800",
    },
    {
      id: 44,
      name: "Zoom",
      category: "Communication",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F3e62c6943a53465ab08f28122746b6c7?format=webp&width=800",
    },
    {
      id: 45,
      name: "Adobe",
      category: "Creative Tools",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F0702037c63ce4ce484f7aa6ba07d1dc1?format=webp&width=800",
    },
    {
      id: 46,
      name: "Webflow",
      category: "Web Development",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fcd2cc0cc2a894a3ab405557a0cd79e92?format=webp&width=800",
    },
    {
      id: 47,
      name: "Airtable",
      category: "Database",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fede6c0b2cef64369b0d4bec93ec6e01d?format=webp&width=800",
    },
    {
      id: 48,
      name: "Calendly",
      category: "Scheduling",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F8d45c79cb4554bcf8e06a9787f32d183?format=webp&width=800",
    },
    {
      id: 49,
      name: "Loom",
      category: "Video",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F26c2db8a3b334eb085ed298c8a4a5417?format=webp&width=800",
    },
    {
      id: 50,
      name: "Typeform",
      category: "Forms",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F84248d383cfb4bf892e397c57c321750?format=webp&width=800",
    },
  ];

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
      category: "SaaS",
      funding: "$12M Series A",
    },
    {
      quote:
        "Their brand strategy was the foundation of our $50M exit. Every investor meeting became a 'yes' after their rebrand.",
      author: "Marcus Rodriguez",
      title: "Founder, FinanceFirst",
      category: "FinTech",
      funding: "$50M Exit",
    },
    {
      quote:
        "We went from unknown startup to industry leader. Their positioning strategy was pure magic.",
      author: "Lisa Park",
      title: "Co-founder, HealthHub",
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

            <h1 className="text-display-lg lg:text-display-xl font-bold mb-6 text-white">
              Brands That Raised
              <br />
              <span className="text-secondary-400">$2.5B+ Together</span>
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
            <h2 className="text-display-lg font-bold mb-4 text-white">
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
      <section className="section-spacing bg-primary-900">
        <div className="container-custom text-center">
          <h2 className="text-display-lg font-bold mb-4 text-white">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join the ranks of funded startups. Let's build a brand that opens
            doors, builds trust, and drives results.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 px-8 py-3 text-lg font-semibold group"
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
