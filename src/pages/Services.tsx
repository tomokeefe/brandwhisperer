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
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="Startup Branding Services & Packages - The Brand Whisperer"
        description="Expert brand strategy and visual identity services for hypergrowth startups. Pre-Seed to Series A packages with equity options. Build brands that scale."
        keywords="startup branding services, brand strategy packages, startup visual identity, Series A branding, hypergrowth brand services"
      />

      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Service Packages
            </Badge>
            <h1 className="text-display-lg lg:text-display-xl font-bold mb-8 text-white">
              Brands Built for Every Growth Stage
            </h1>
            <p className="text-body-lg text-gray-300 leading-relaxed mb-8">
              From pre-seed to Series A, we have packages designed for your
              current stage with the scalability to grow with your business.
              Strategic partnerships with equity alignment because we believe in
              your success.
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
                <Link to="#packages">Compare Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Packages */}
      <section id="packages" className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Core Brand Packages
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive brand systems designed for startups at different
              growth stages. Each package includes equity participation for true
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
                }`}
              >
                {service.urgent && (
                  <Badge className="absolute -top-2 left-4 bg-red-600 text-white">
                    Urgent
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
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
                    <div className="text-2xl font-bold text-secondary-400">
                      {service.pricing}
                    </div>
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
