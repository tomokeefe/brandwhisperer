import React from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      title: "Pre-Seed Package",
      description:
        "Perfect for early-stage startups who need a strong foundation without breaking the bank. Get the essentials to start building trust with customers and investors.",
      pricing: "$12,000",
      equity: "0.25%",
      features: [
        "Brand strategy & competitive positioning",
        "Core visual identity system",
        "Logo package with variations",
        "Basic brand guidelines (20 pages)",
        "Initial messaging framework",
        "Business card & email signature templates",
        "Social media assets starter pack",
        "90-day implementation support",
      ],
      timeline: "4-6 weeks",
      link: "/contact",
      ideal: "Pre-seed startups, MVP stage, first customers",
    },
    {
      title: "Seed Growth Package",
      description:
        "Comprehensive brand system for startups ready to scale their marketing and customer acquisition. Everything you need to grow confidently.",
      pricing: "$25,000",
      equity: "0.2%",
      features: [
        "Complete brand strategy & architecture",
        "Advanced visual identity system",
        "Comprehensive messaging framework",
        "Detailed brand guidelines (50+ pages)",
        "Marketing asset template library",
        "Website design system components",
        "Pitch deck design integration",
        "Social media brand kit",
        "Email marketing templates",
        "Ongoing brand evolution roadmap",
      ],
      timeline: "6-8 weeks",
      badge: "Most Popular",
      highlighted: true,
      link: "/contact",
      ideal: "Seed stage, scaling teams, Series A prep",
    },
    {
      title: "Series A Ready Package",
      description:
        "Investment-grade brand system designed to impress investors and scale with rapid growth. Built for companies preparing to 10x their business.",
      pricing: "$40,000",
      equity: "0.1%",
      features: [
        "Investment-grade brand strategy",
        "Complete visual identity ecosystem",
        "Advanced brand architecture planning",
        "Premium brand guidelines (100+ pages)",
        "Investor presentation materials",
        "Website design system & style guide",
        "Marketing automation templates",
        "Advanced pitch deck design",
        "Brand implementation playbook",
        "Team training & workshops",
        "Ongoing brand advisory (3 months)",
        "Scale-ready expansion guidelines",
      ],
      timeline: "8-12 weeks",
      link: "/contact",
      ideal: "Pre-Series A, high-growth teams, investor readiness",
    },
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "Brand Advisory Retainer",
      description: "Ongoing strategic guidance for your brand evolution",
      pricing: "$5,000/month + 0.15% equity",
      features: [
        "Monthly strategy sessions",
        "Brand health monitoring",
        "Growth milestone planning",
      ],
    },
    {
      icon: TrendingUp,
      title: "Project + Performance",
      description: "Base fee plus success bonus tied to funding milestones",
      pricing: "Custom pricing",
      features: [
        "Reduced upfront cost",
        "Success-based bonuses",
        "Funding milestone rewards",
      ],
    },
    {
      icon: Rocket,
      title: "Equity-Heavy Option",
      description: "Minimal cash investment for strategic partnerships",
      pricing: "$5K-$10K + 0.5-1% equity",
      features: [
        "Low cash requirement",
        "Higher equity participation",
        "Long-term partnership",
      ],
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
              current stage with the scalability to grow with your business. All
              packages include equity participation because we believe in true
              partnership.
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="space-y-4">
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
            ))}
          </div>
        </div>
      </section>

      {/* SCALE Framework */}
      <section className="section-spacing">
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

      {/* Alternative Engagement Models */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Flexible Options
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Alternative Engagement Models
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              We understand startup constraints. Beyond our main packages, we
              offer flexible engagement models to match your specific needs and
              budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 card-hover"
              >
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
                  <div className="text-2xl font-bold text-secondary-400">
                    {service.pricing}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary-500" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-primary-600 hover:bg-primary-700"
                  >
                    <Link to="/contact">Learn More</Link>
                  </Button>
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
                  Our Promise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                  "We build brands that don't break. When you're celebrating
                  your Series A, your brand will be ready. When you're scaling
                  from 10 to 100 employees, your visual systems will handle the
                  growth."
                </blockquote>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-dark-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-400">
                      87%
                    </div>
                    <div className="text-sm text-gray-400">
                      Funding success rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-400">
                      5-10x
                    </div>
                    <div className="text-sm text-gray-400">
                      Scale without rebrands
                    </div>
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
