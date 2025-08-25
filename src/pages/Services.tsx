import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ServiceCard from "@/components/ServiceCard";
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
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Target,
  Zap,
  Shield,
  Rocket,
  Calendar,
  Briefcase,
  FileText,
} from "lucide-react";

const Services = () => {
  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://brandwhisperer.com/services/#service",
    name: "Startup Brand Strategy Services",
    description:
      "Comprehensive brand strategy, visual identity, website design, UI/UX, and product design services for startups from pre-seed to Series A and beyond.",
    provider: {
      "@type": "Organization",
      "@id": "https://brandwhisperer.com/#organization",
    },
    serviceType: "Brand Strategy Consulting",
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brand Strategy Service Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Pre-Seed Foundation",
          description: "Essential brand foundation for early-stage startups",
          price: "15000",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Pre-Seed Brand Package",
          },
        },
        {
          "@type": "Offer",
          name: "Seed Growth System",
          description: "Complete brand system for scaling startups",
          price: "25000",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Seed Growth Brand Package",
          },
        },
        {
          "@type": "Offer",
          name: "Series A Ready",
          description: "Investment-grade brand strategy for funding rounds",
          price: "40000",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Series A Brand Package",
          },
        },
      ],
    },
  };

  const mainServices = [
    {
      title: "Pre-Seed Foundation",
      description:
        "Essential brand foundation for early-stage startups ready to scale smart from day one.",
      pricing: "$15,000",
      equity: "0.25%",
      features: [
        "Brand strategy & positioning",
        "Logo & visual identity",
        "Core messaging framework",
        "Basic brand guidelines",
        "Pitch deck template",
        "Social media starter kit",
      ],
      timeline: "3-4 weeks",
      link: "/contact",
      ideal: "Pre-seed startups, MVP stage, early customers",
      icon: Target,
    },
    {
      title: "Seed Growth System",
      description:
        "Comprehensive brand system designed for rapid scaling and Series A preparation.",
      pricing: "$25,000",
      equity: "0.2%",
      features: [
        "Complete visual identity system",
        "Scalable design templates",
        "Website design framework",
        "Marketing collateral system",
        "Brand voice & tone guide",
        "6-month growth roadmap",
      ],
      timeline: "4-6 weeks",
      badge: "Most Popular",
      highlighted: true,
      link: "/contact",
      ideal: "Seed stage, scaling teams, Series A prep",
      icon: TrendingUp,
    },
    {
      title: "Series A Ready",
      description:
        "Investment-grade brand system that attracts funding and scales to enterprise levels.",
      pricing: "$40,000",
      equity: "0.1%",
      features: [
        "Investor presentation materials",
        "Enterprise sales collateral",
        "Brand architecture for products",
        "Crisis communication framework",
        "Global expansion guidelines",
        "12-month strategic roadmap",
      ],
      timeline: "6-8 weeks",
      link: "/contact",
      ideal: "Pre-Series A, high-growth teams, investor readiness",
      icon: Rocket,
    },
  ];

  const specialtyServices = [
    {
      icon: Users,
      title: "Brand Advisory Retainer",
      description:
        "Ongoing strategic brand guidance as you scale through growth milestones.",
      pricing: "$5,000/month",
      equity: "0.15%",
      features: [
        "Monthly strategy sessions",
        "Brand decision support",
        "Evolution planning",
        "Crisis brand guidance",
        "Team training & education",
        "Quarterly brand audits",
      ],
      timeline: "Ongoing",
      type: "retainer",
    },
    {
      icon: Calendar,
      title: "Design Subscription",
      description:
        "Ongoing design support with monthly design assets, consultation hours, and strategic guidance for growing teams.",
      pricing: "$8,500/month",
      pricingAnnual: "$85,000/year",
      equity: "0.5%",
      features: [
        "Monthly design asset allocation",
        "Ongoing brand evolution support",
        "Priority response time",
        "Marketing material templates",
        "Website & UI/UX design support",
        "Product design consultation",
        "Brand health monitoring",
      ],
      timeline: "Monthly/Annual",
      type: "subscription",
      flexible: true,
      savings: "Save $17,000 annually",
    },
    {
      icon: Zap,
      title: "Rapid Brand Sprint",
      description:
        "Emergency brand foundation for urgent deadlines and funding pressures.",
      pricing: "$8,000",
      equity: null,
      features: [
        "Logo & basic identity (5 days)",
        "Simple brand guidelines",
        "Core messaging points",
        "Pitch deck template",
        "Basic marketing materials",
        "Implementation support",
      ],
      timeline: "1 week delivery",
      type: "sprint",
      urgent: true,
    },
    {
      icon: FileText,
      title: "Investor Pitch Package",
      description:
        "Professional presentation materials that make VCs take notice.",
      pricing: "$3,000-$5,000",
      equity: null,
      features: [
        "Pitch deck design",
        "One-page company summary",
        "Financial presentation templates",
        "Demo day materials",
        "Investor meeting collateral",
        "Due diligence package",
      ],
      timeline: "2-3 weeks",
      type: "pitch",
    },
  ];

  const scaleFramework = [
    {
      letter: "S",
      title: "Strategic Foundation",
      description:
        "Market analysis, competitive positioning, and investor-grade messaging that works at any scale",
    },
    {
      letter: "C",
      title: "Creative Systems",
      description:
        "Visual identity designed for infinite scalability and consistent application across all touchpoints",
    },
    {
      letter: "A",
      title: "Architecture Planning",
      description:
        "Brand frameworks that accommodate business evolution, new products, and market expansion",
    },
    {
      letter: "L",
      title: "Launch Excellence",
      description:
        "Implementation support that ensures consistent brand execution across your entire organization",
    },
    {
      letter: "E",
      title: "Evolution Readiness",
      description:
        "Ongoing adaptation and optimization as you hit growth milestones and funding stages",
    },
  ];

  return (
    <div className="bg-dark-950 pb-16">
      <SEO
        title="Startup Brand Strategy Services | Pre-Seed to Series A Branding Packages"
        description="Comprehensive brand strategy packages for every growth stage. From $15K pre-seed foundation to $40K Series A ready. Equity options available. 150+ successful startups branded."
        keywords="startup brand strategy, pre-seed branding, Series A branding, startup visual identity, brand strategy packages, startup brand consultant, equity-based branding, investor-ready brand"
        url="https://brandwhisperer.com/services"
        image="https://brandwhisperer.com/og-services.jpg"
        schema={servicesPageSchema}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary-600/10 text-secondary-400 text-sm font-medium px-4 py-2 rounded-full border border-secondary-500/20 mb-6">
              <Briefcase className="w-4 h-4" />
              Service Packages
            </div>
            <h1 className="text-display-lg lg:text-display-xl font-bold mb-8 text-white">
              Brands Built for Every{" "}
              <span className="text-secondary-400">Growth Stage</span>
            </h1>
            <p className="text-body-lg text-gray-300 leading-relaxed mb-8">
              From pre-seed to Series A, we have comprehensive brand strategy,
              visual identity, website design, UI/UX, and product design
              packages for your current stage with the scalability to grow with
              your business. Strategic partnerships with equity alignment
              because we believe in your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-dark-900"
              >
                <Link to="/contact">Schedule a Call</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-white hover:text-dark-900"
              >
                <Link to="#compare-packages">Compare Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Packages */}
      <section id="packages" className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Core Brand Packages
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive brand strategy, visual identity, website design,
              UI/UX, and product design systems for startups at different growth
              stages. Each package includes equity participation for true
              partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const serviceId = service.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");

              return (
                <div key={index} id={serviceId} className="space-y-4">
                  <ServiceCard {...service} />
                  <Card className="bg-dark-800/50 border-dark-700">
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-secondary-400" />
                          <span className="text-gray-400">
                            Timeline: {service.timeline}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-secondary-400" />
                          <span className="text-gray-400">
                            Ideal for: {service.ideal}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package Comparison Table */}
      <section id="compare-packages" className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Compare Brand Packages
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto mb-12">
              Choose the perfect package for your growth stage. All packages
              include equity options to align our success with yours.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-16">
            <div className="min-w-[800px] bg-dark-800/50 rounded-xl border border-dark-700 relative pt-4">
              {/* Table Header */}
              <div className="grid grid-cols-4 border-b border-dark-700">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">Features</h3>
                </div>
                <div className="p-6 text-center border-l border-dark-700">
                  <div className="mb-2">
                    <Badge
                      variant="outline"
                      className="border-primary-500/30 text-primary-400 bg-primary-500/10 mb-2"
                    >
                      <Target className="w-3 h-3 mr-1" />
                      Early Stage
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Pre-Seed Foundation
                  </h3>
                  <p className="text-2xl font-bold text-secondary-400 mb-1">
                    $15,000
                  </p>
                  <p className="text-sm text-gray-400">+ 0.25% equity</p>
                  <p className="text-xs text-gray-500 mt-2">3-4 weeks</p>
                </div>
                <div className="p-6 text-center border-l border-dark-700 bg-secondary-500/5 relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-secondary-600 text-white">
                      Most Popular
                    </Badge>
                  </div>
                  <div className="mb-2 mt-2">
                    <Badge
                      variant="outline"
                      className="border-secondary-500/30 text-secondary-400 bg-secondary-500/10 mb-2"
                    >
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Growth Stage
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Seed Growth System
                  </h3>
                  <p className="text-2xl font-bold text-secondary-400 mb-1">
                    $25,000
                  </p>
                  <p className="text-sm text-gray-400">+ 0.2% equity</p>
                  <p className="text-xs text-gray-500 mt-2">4-6 weeks</p>
                </div>
                <div className="p-6 text-center border-l border-dark-700">
                  <div className="mb-2">
                    <Badge
                      variant="outline"
                      className="border-green-500/30 text-green-400 bg-green-500/10 mb-2"
                    >
                      <Rocket className="w-3 h-3 mr-1" />
                      Scale Ready
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Series A Ready
                  </h3>
                  <p className="text-2xl font-bold text-secondary-400 mb-1">
                    $40,000
                  </p>
                  <p className="text-sm text-gray-400">+ 0.1% equity</p>
                  <p className="text-xs text-gray-500 mt-2">6-8 weeks</p>
                </div>
              </div>

              {/* Feature Comparison Rows */}
              {[
                {
                  category: "Brand Strategy",
                  features: [
                    {
                      name: "Brand positioning & strategy",
                      preSeed: true,
                      seed: true,
                      seriesA: true,
                    },
                    {
                      name: "Competitive analysis",
                      preSeed: "Basic",
                      seed: true,
                      seriesA: true,
                    },
                    {
                      name: "Target audience research",
                      preSeed: true,
                      seed: true,
                      seriesA: "Advanced",
                    },
                    {
                      name: "Brand architecture",
                      preSeed: false,
                      seed: true,
                      seriesA: true,
                    },
                    {
                      name: "Brand storytelling framework",
                      preSeed: "Basic",
                      seed: true,
                      seriesA: "Advanced",
                    },
                  ],
                },
                {
                  category: "Visual Identity",
                  features: [
                    {
                      name: "Logo & mark design",
                      preSeed: true,
                      seed: true,
                      seriesA: true,
                    },
                    {
                      name: "Color palette & typography",
                      preSeed: true,
                      seed: true,
                      seriesA: true,
                    },
                    {
                      name: "Brand guidelines",
                      preSeed: "Basic",
                      seed: "Complete",
                      seriesA: "Enterprise",
                    },
                    {
                      name: "Business card & stationery",
                      preSeed: true,
                      seed: true,
                      seriesA: true,
                    },
                    {
                      name: "Icon system",
                      preSeed: false,
                      seed: true,
                      seriesA: true,
                    },
                    {
                      name: "Pattern & texture library",
                      preSeed: false,
                      seed: false,
                      seriesA: true,
                    },
                  ],
                },
                {
                  category: "Marketing Materials",
                  features: [
                    {
                      name: "Pitch deck template",
                      preSeed: true,
                      seed: true,
                      seriesA: "Custom design",
                    },
                    {
                      name: "Website design framework",
                      preSeed: false,
                      seed: true,
                      seriesA: true,
                    },
                    {
                      name: "Social media templates",
                      preSeed: "Starter kit",
                      seed: "Complete system",
                      seriesA: "Enterprise system",
                    },
                    {
                      name: "Marketing collateral",
                      preSeed: false,
                      seed: true,
                      seriesA: "Full suite",
                    },
                    {
                      name: "Sales materials",
                      preSeed: false,
                      seed: "Basic",
                      seriesA: "Enterprise grade",
                    },
                  ],
                },
                {
                  category: "Strategic Support",
                  features: [
                    {
                      name: "Brand messaging guide",
                      preSeed: "Core messages",
                      seed: "Voice & tone guide",
                      seriesA: "Complete messaging system",
                    },
                    {
                      name: "Implementation roadmap",
                      preSeed: false,
                      seed: "6-month plan",
                      seriesA: "12-month strategic plan",
                    },
                    {
                      name: "Crisis communication plan",
                      preSeed: false,
                      seed: false,
                      seriesA: true,
                    },
                    {
                      name: "Global expansion guidelines",
                      preSeed: false,
                      seed: false,
                      seriesA: true,
                    },
                    {
                      name: "Investor relations materials",
                      preSeed: false,
                      seed: "Basic",
                      seriesA: "Complete suite",
                    },
                  ],
                },
                {
                  category: "Ongoing Support",
                  features: [
                    {
                      name: "Revision rounds",
                      preSeed: "2 rounds",
                      seed: "3 rounds",
                      seriesA: "Unlimited",
                    },
                    {
                      name: "Follow-up consultation",
                      preSeed: "1 month",
                      seed: "3 months",
                      seriesA: "6 months",
                    },
                    {
                      name: "Team training session",
                      preSeed: false,
                      seed: true,
                      seriesA: "Multiple sessions",
                    },
                    {
                      name: "Brand health monitoring",
                      preSeed: false,
                      seed: false,
                      seriesA: true,
                    },
                  ],
                },
              ].map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  {/* Category Header */}
                  <div className="grid grid-cols-4 border-b border-dark-700/50 bg-dark-700/30">
                    <div className="p-4 font-semibold text-secondary-400 text-sm uppercase tracking-wide">
                      {category.category}
                    </div>
                    <div className="border-l border-dark-700/50"></div>
                    <div className="border-l border-dark-700/50"></div>
                    <div className="border-l border-dark-700/50"></div>
                  </div>

                  {/* Features */}
                  {category.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="grid grid-cols-4 border-b border-dark-700/50 hover:bg-dark-700/20 transition-colors"
                    >
                      <div className="p-4 text-gray-300 text-sm">
                        {feature.name}
                      </div>
                      <div className="p-4 text-center border-l border-dark-700/50">
                        {feature.preSeed === true ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : feature.preSeed === false ? (
                          <div className="w-5 h-5 mx-auto"></div>
                        ) : (
                          <span className="text-xs text-gray-400">
                            {feature.preSeed}
                          </span>
                        )}
                      </div>
                      <div className="p-4 text-center border-l border-dark-700/50 bg-secondary-500/5">
                        {feature.seed === true ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : feature.seed === false ? (
                          <div className="w-5 h-5 mx-auto"></div>
                        ) : (
                          <span className="text-xs text-gray-400">
                            {feature.seed}
                          </span>
                        )}
                      </div>
                      <div className="p-4 text-center border-l border-dark-700/50">
                        {feature.seriesA === true ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : feature.seriesA === false ? (
                          <div className="w-5 h-5 mx-auto"></div>
                        ) : (
                          <span className="text-xs text-gray-400">
                            {feature.seriesA}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* CTA Row */}
              <div className="grid grid-cols-4 p-6">
                <div></div>
                <div className="text-center border-l border-dark-700/50 px-4">
                  <Button
                    asChild
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
                <div className="text-center border-l border-dark-700/50 px-4 bg-secondary-500/5">
                  <Button
                    asChild
                    className="w-full bg-secondary-600 hover:bg-secondary-700 text-white"
                  >
                    <Link to="/contact">Choose Popular</Link>
                  </Button>
                </div>
                <div className="text-center border-l border-dark-700/50 px-4">
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Link to="/contact">Scale Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Specialized Offerings
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Flexible Solutions for Every Need
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Beyond our core packages, we offer specialized services for urgent
              needs, ongoing support, and specific investor requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <Card
                key={index}
                className={`bg-dark-900/50 border-dark-700 card-hover relative ${
                  service.urgent ? "ring-2 ring-red-500/30" : ""
                } ${service.flexible ? "ring-2 ring-secondary-500/30" : ""}`}
              >
                {service.urgent && (
                  <Badge className="absolute -top-2 left-4 bg-red-600 text-white">
                    Urgent
                  </Badge>
                )}
                {service.flexible && (
                  <Badge className="absolute -top-2 left-4 bg-secondary-600 text-white">
                    Flexible
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary-400/10 border border-secondary-400/20 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-secondary-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.type === "subscription" ? (
                      <div>
                        <div className="text-2xl font-bold text-secondary-400">
                          {service.pricing}
                        </div>
                        <div className="text-lg text-gray-300">
                          {service.pricingAnnual}
                        </div>
                        {service.savings && (
                          <div className="text-sm text-green-400 font-medium">
                            {service.savings}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-2xl font-bold text-secondary-400">
                        {service.pricing}
                      </div>
                    )}
                    {service.equity && (
                      <div className="text-sm text-gray-400">
                        + {service.equity} equity
                      </div>
                    )}
                    {service.timeline && (
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{service.timeline}</span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full bg-primary-600 hover:bg-primary-700"
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SCALE Framework */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Our Methodology
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              The SCALE Framework
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Our proven 5-step methodology that ensures every brand we build
              can scale from startup to unicorn.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {scaleFramework.map((step, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 text-center card-hover"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {step.letter}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-white">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Equity Participation */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge
                variant="outline"
                className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
              >
                Partnership Over Vendorship
              </Badge>
              <h2 className="text-display-md font-bold mb-6 text-white">
                Why We Take Equity
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We take equity because we believe in true partnership. When
                  you succeed, we succeed. When you face challenges, we're
                  invested in solutions. This isn't a transaction—it's a
                  relationship that lasts through your growth journey.
                </p>
                <p>
                  Equity participation allows us to offer startup-friendly
                  pricing while ensuring we're aligned with your long-term
                  success. We're not just building a brand for today—we're
                  building for the company you'll become.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  "Aligned incentives for long-term success",
                  "Startup-friendly cash pricing",
                  "Ongoing support through growth stages",
                  "True partnership, not just vendor relationship",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary-500" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-dark-900/50 border-dark-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Service Comparison
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between items-center py-3 border-b border-dark-700">
                    <span className="text-gray-300">Foundation</span>
                    <span className="text-secondary-400 font-semibold">
                      $15K + 0.25%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-dark-700">
                    <span className="text-gray-300">Growth System</span>
                    <span className="text-secondary-400 font-semibold">
                      $25K + 0.2%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-dark-700">
                    <span className="text-gray-300">Series A Ready</span>
                    <span className="text-secondary-400 font-semibold">
                      $40K + 0.1%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-dark-700">
                    <span className="text-gray-300">Advisory Retainer</span>
                    <span className="text-secondary-400 font-semibold">
                      $5K/mo + 0.15%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">Sprint/Pitch</span>
                    <span className="text-secondary-400 font-semibold">
                      $3K-$8K
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
            Ready to Start Your Brand Journey?
          </h2>
          <p className="text-body-lg text-primary-100 mb-8 max-w-3xl mx-auto">
            Schedule a free consultation to discuss your startup's unique needs
            and find the perfect package for your growth stage.
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
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-300 text-primary-100 hover:bg-primary-100 hover:text-primary-900 px-8 py-4"
            >
              <Link to="/about">Learn About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
