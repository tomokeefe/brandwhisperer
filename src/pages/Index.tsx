import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ClientShowcase from "@/components/ClientShowcase";
import LeadMagnet from "@/components/LeadMagnet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  Zap,
  Shield,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
  CheckCircle,
  Quote,
  Star,
  Users,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://brandwhisperer.com/#organization",
    name: "The Brand Whisperer",
    alternateName: "Brand Whisperer",
    description:
      "Building brands that scale from startup to unicorn without breaking. Expert brand strategy and visual identity for hypergrowth startups.",
    url: "https://brandwhisperer.com",
    logo: {
      "@type": "ImageObject",
      url: "https://brandwhisperer.com/logo.png",
      width: "180",
      height: "60",
    },
    foundingDate: "1995",
    founder: {
      "@type": "Person",
      name: "The Brand Whisperer",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boston",
      addressRegion: "MA",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-617-792-3378",
      contactType: "customer service",
      email: "hello@brandwhisperer.io",
      availableLanguage: "en",
    },
    sameAs: [
      "https://linkedin.com/company/brandwhisperer",
      "https://twitter.com/brandwhisperer",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brand Strategy Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pre-Seed Brand Foundation",
            description:
              "Essential brand strategy and visual identity for early-stage startups",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Seed Growth System",
            description: "Comprehensive brand system for scaling startups",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Series A Ready Package",
            description: "Investment-grade brand strategy for funding rounds",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  const services = [
    {
      title: "Pre-Seed Package",
      description:
        "Perfect for early-stage startups who need a strong foundation without breaking the bank.",
      pricing: "$12,000",
      equity: "0.25%",
      features: [
        "Brand strategy & positioning",
        "Basic visual identity system",
        "Simple brand guidelines",
        "Startup-ready logo package",
        "Initial messaging framework",
      ],
      link: "/services#pre-seed",
    },
    {
      title: "Seed Growth Package",
      description:
        "Comprehensive brand system for startups ready to scale their marketing and customer acquisition.",
      pricing: "$25,000",
      equity: "0.2%",
      features: [
        "Complete brand system",
        "Advanced messaging framework",
        "Marketing asset templates",
        "Pitch deck integration",
        "Implementation guidelines",
        "Growth-ready foundations",
      ],
      badge: "Most Popular",
      highlighted: true,
      link: "/services#seed-growth",
    },
    {
      title: "Series A Ready",
      description:
        "Investment-grade brand system designed to impress investors and scale with rapid growth.",
      pricing: "$40,000",
      equity: "0.1%",
      features: [
        "Investment-grade brand system",
        "Comprehensive style guide",
        "Advanced brand architecture",
        "Investor presentation materials",
        "Scale-ready implementation",
        "Ongoing brand evolution plan",
      ],
      link: "/services#series-a",
    },
  ];

  const pillars = [
    {
      icon: Target,
      title: "Scale-First Thinking",
      description:
        "We design for tomorrow's scale, not today's size. Building visual systems that expand without breaking.",
      tagline: "\"Design for tomorrow's scale, not today's size\"",
    },
    {
      icon: Shield,
      title: "Investor-Grade Standards",
      description:
        "Build brands that open doors, don't just look good. Your brand is often your first impression with VCs.",
      tagline: '"Build brands that open doors, don\'t just look good"',
    },
    {
      icon: Zap,
      title: "Pivot-Proof Architecture",
      description:
        "Change direction without changing identity. Flexible brand systems that evolve with your business.",
      tagline: '"Change direction without changing identity"',
    },
    {
      icon: Rocket,
      title: "Startup-Native Execution",
      description:
        "Move fast without breaking brands. Delivering enterprise-quality work at startup speed and budgets.",
      tagline: '"Move fast without breaking brands"',
    },
  ];

  const testimonials = [
    {
      quote:
        "Over many years, I've worked with The Brand Whisperer team on more than a dozen branding projects. They continue to be my go-to partner for branding because they produce amazing, high quality results quickly that really bring the companies' identity to life. And they do it in a cost effective way. They are easily the best and easiest to work with design group I've ever used.",
      author: "Lars Perkins",
      title: "CEO/Founder",
      company: "Seed Round",
    },
    {
      quote:
        "Tom's work extends far beyond design—he thoughtfully considers the brand, user interaction, and every detail to craft a truly world-class experience",
      author: "Tamer Morsey",
      title: "CEO/Founder Spotlight News",
      company: "Seed Round",
    },
    {
      quote:
        "We went from 50 to 500 customers in 8 months without a single brand crisis. Every new hire, every product launch, every marketing campaign felt consistent. The system just works.",
      author: "Marcus Rodriguez",
      title: "Founder",
      company: "Seed Round",
    },
    {
      quote:
        "Our first landing page converted at 45% – unheard of for B2B SaaS. The messaging framework helped us find product-market fit faster because prospects immediately understood our value.",
      author: "Jennifer Lee",
      title: "Co-founder",
      company: "Series A",
    },
    {
      quote:
        "The investor deck template and brand materials were so polished, we started fundraising 3 months earlier than planned. Investors kept commenting on how 'mature' our brand felt for a Series A company.",
      author: "Alex Rivera",
      title: "Founder CEO",
      company: "Series A",
    },
  ];

  return (
    <div>
      <SEO
        title="The Brand Whisperer - Building Brands That Scale | Startup Brand Strategy"
        description="Expert brand strategy & visual identity for hypergrowth startups. 150+ successful brands built from pre-seed to Series A. Get investor-ready branding that scales with your growth."
        keywords="startup branding, brand strategy, hypergrowth branding, Series A branding, startup visual identity, scalable brand systems, startup brand consultant, investor-ready branding, brand strategy for startups"
        url="https://brandwhisperer.com"
        image="https://brandwhisperer.com/og-homepage.jpg"
        schema={homePageSchema}
      />
      <Hero />

      {/* Core Belief Section */}
      <section className="section-spacing bg-secondary-400 text-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 border-dark-900/20 text-dark-700 bg-dark-900/10"
            >
              Our Core Belief
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-black mb-8 text-dark-900">
              Brands are not logos. Brands are promises kept at scale.
            </h2>
            <p className="text-body-lg text-dark-700 leading-relaxed max-w-3xl mx-auto">
              In the hypergrowth startup world, most companies build brands for
              today that shatter tomorrow. We build brands for the company
              you're becoming, not just the company you are. Every pixel, every
              word, every decision considers one question: "Will this work when
              we're 100x bigger?"
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Our Philosophy
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              The Four Pillars
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Our methodology is built on four core principles that ensure your
              brand scales from garage to IPO without breaking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 card-hover"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">
                    {pillar.title}
                  </CardTitle>
                  <div className="text-secondary-400 italic mb-4">
                    {pillar.tagline}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Service Packages
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Brands Built for Every Growth Stage
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto mb-8">
              From pre-seed to Series A, we have packages designed for your
              current stage with the scalability to grow with your business.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-white hover:text-dark-900"
            >
              <Link
                to="/services"
                className="inline-flex items-center space-x-2"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Our Track Record
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              We Measure Success by Your Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "87%",
                label: "Series A funding success rate",
                description: "Our clients raise funding within 12 months",
              },
              {
                value: "15-30%",
                label: "Higher valuations",
                description: "vs comparable companies",
              },
              {
                value: "150+",
                label: "Startup projects",
                description: "30 years of experience",
              },
              {
                value: "5-10x",
                label: "Scale without rebrands",
                description: "Growth without breaking",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 text-center card-hover"
              >
                <CardContent className="pt-8">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-secondary-400 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Client Success
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Brands That Opened Doors
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <Card className="bg-dark-900/50 border-dark-700 card-hover">
              <CardContent className="p-8 lg:p-12 text-center">
                <Quote className="w-12 h-12 lg:w-16 lg:h-16 text-secondary-400 mx-auto mb-6 lg:mb-8" />
                <blockquote className="text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 lg:mb-8 leading-relaxed font-medium min-h-[120px] lg:min-h-[140px] flex items-center justify-center">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4 lg:space-x-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg lg:text-xl font-semibold text-white">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-sm lg:text-base text-gray-400">
                      {testimonials[currentTestimonial].title}
                    </div>
                    <div className="text-sm lg:text-base text-secondary-400">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 hover:bg-dark-700 border border-dark-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 touch-feedback"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 hover:bg-dark-700 border border-dark-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 touch-feedback"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? "bg-secondary-400"
                      : "bg-dark-600 hover:bg-dark-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet - Brand Assessment */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <LeadMagnet
              type="assessment"
              title="Free Startup Brand Readiness Assessment"
              description="Discover if your brand is ready for hypergrowth with our 50-point evaluation framework used by Series A startups."
              benefits={[
                "50-point brand readiness checklist",
                "Series A preparation scorecard",
                "Investor perception analysis",
                "Action plan for improvement",
                "Used by 150+ funded startups",
              ]}
              buttonText="Get Free Assessment"
              badge="Free 50-Point Audit"
              stats={{
                downloads: "2,847",
                rating: "4.9/5",
                users: "150+ startups",
              }}
            />
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <ClientShowcase />

      {/* What We Stand Against */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              What We Stand Against
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Not Your Typical{" "}
              <span className="text-secondary-400">Brand Agency</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: '"Logo Mills" That Commoditize Branding',
                description:
                  "Your brand is not a contest where 100 designers compete for the cheapest price. It's a strategic business asset that requires deep understanding.",
              },
              {
                title: '"Brand Theater" That Prioritizes Awards',
                description:
                  "We're not building brands to win design competitions. We're building brands to win customers, investors, and market share.",
              },
              {
                title: "Corporate Consultants Who Don't Get Startups",
                description:
                  "Enterprise methodologies break startups. You can't spend 18 months on strategy when your runway is 12 months.",
              },
              {
                title: "Aesthetic-Only Designers Who Ignore Strategy",
                description:
                  "Color palettes don't build businesses. Market positioning and scalable systems do. Design is the expression of strategy.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-secondary-900/10 border-secondary-800/30"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
            Ready to Build a Brand That Scales?
          </h2>
          <p className="text-body-lg text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the ranks of successful startups who've built brands that grow
            with their business. Let's start the conversation about your brand's
            future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold px-8 py-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2"
              >
                <span>Start Your Brand Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-300 text-primary-100 hover:bg-primary-100 hover:text-primary-900 px-8 py-4"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;