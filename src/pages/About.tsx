import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
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
  Target,
  Shield,
  Zap,
  Rocket,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  Star,
} from "lucide-react";

const About = () => {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://brandwhisperer.com/about/#person",
    name: "The Brand Whisperer",
    jobTitle: "Brand Strategy Consultant",
    description:
      "30+ years of brand strategy experience from New Relic IPO to 150+ startup portfolio. Expert in building scalable brands for hypergrowth companies.",
    knowsAbout: [
      "Brand Strategy",
      "Visual Identity Design",
      "Startup Branding",
      "Hypergrowth Companies",
      "Series A Preparation",
      "Investor Relations",
      "IPO Readiness",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Brand Strategy Consultant",
      occupationalCategory: "Design and Creative Services",
      skills: [
        "Brand Strategy Development",
        "Visual Identity Systems",
        "Startup Brand Consulting",
        "Growth Stage Branding",
        "Investor Presentation Design",
      ],
    },
    worksFor: {
      "@type": "Organization",
      "@id": "https://brandwhisperer.com/#organization",
    },
    alumniOf: [
      {
        "@type": "Organization",
        name: "New Relic",
      },
      {
        "@type": "Organization",
        name: "Idealab",
      },
    ],
  };

  const experience = [
    {
      company: "New Relic",
      role: "Creative Director",
      duration: "2011-2014",
      description:
        "Lived through hypergrowth from 50 employees to IPO. Witnessed firsthand the cost of delaying brand evolution.",
      achievements: [
        "IPO brand readiness",
        "Global expansion support",
        "Product portfolio integration",
      ],
    },
    {
      company: "Idealab",
      role: "Brand Design Director",
      duration: "1999-2003",
      description:
        "Worked within proven startup studio environment, understanding unique branding needs of high-potential startups.",
      achievements: [
        "150+ company portfolio",
        "45 IPO success stories",
        "Startup methodology development",
      ],
    },
    {
      company: "Boston Creative Agencies",
      role: "Designer",
      duration: "1994-1998",
      description:
        "Foundation years building expertise across industries and company stages.",
      achievements: [
        "Multi-industry experience",
        "Traditional to digital transition",
        "Strategic framework development",
      ],
    },
  ];

  const values = [
    {
      title: "Partnership Over Vendorship",
      description:
        "We take equity because we believe in true partnership. When you succeed, we succeed.",
      icon: Users,
    },
    {
      title: "Substance Over Style",
      description:
        'Every design decision must answer: "How does this help the company scale?"',
      icon: Target,
    },
    {
      title: "Transparency Over Sales",
      description:
        "We tell you what you need to hear, not what you want to hear.",
      icon: Shield,
    },
    {
      title: "Systems Over Solutions",
      description:
        "We build systems that prevent future brand problems, not just solve today's.",
      icon: Zap,
    },
    {
      title: "Evidence Over Opinion",
      description:
        "Brand decisions should be strategic, not aesthetic. Data guides every choice.",
      icon: Award,
    },
  ];

  const methodology = [
    {
      phase: "Discovery & Research",
      duration: "1-2 weeks",
      description:
        "Deep dive into your market, competitors, and growth trajectory.",
      deliverables: [
        "Market analysis",
        "Competitive audit",
        "Stakeholder interviews",
        "Brand positioning foundation",
      ],
    },
    {
      phase: "Strategy Development",
      duration: "2-3 weeks",
      description:
        "Create the strategic foundation that will guide all visual and messaging decisions.",
      deliverables: [
        "Brand strategy document",
        "Messaging framework",
        "Target audience definition",
        "Brand architecture",
      ],
    },
    {
      phase: "Visual Identity",
      duration: "3-4 weeks",
      description:
        "Design the scalable visual system that grows with your business.",
      deliverables: [
        "Logo system",
        "Color palette",
        "Typography",
        "Visual guidelines",
        "Asset library",
      ],
    },
    {
      phase: "Implementation & Launch",
      duration: "2-3 weeks",
      description:
        "Ensure consistent application across all touchpoints and train your team.",
      deliverables: [
        "Brand guidelines",
        "Template library",
        "Team training",
        "Launch support",
      ],
    },
    {
      phase: "Evolution Planning",
      duration: "Ongoing",
      description:
        "Roadmap for how your brand evolves as you hit growth milestones.",
      deliverables: [
        "Growth milestone planning",
        "Brand health monitoring",
        "Adaptation guidelines",
      ],
    },
  ];

  const caseStudies = [
    {
      company: "TechFlow",
      stage: "Seed to Series B",
      challenge: "Needed brand that could scale from 10 to 500+ employees",
      solution: "Built modular brand system with flexible applications",
      result: "Zero rebrands through 50x growth, $50M Series B",
      metric: "500+ employees, no rebrand needed",
    },
    {
      company: "DataSync",
      stage: "Pre-Series A",
      challenge: 'Brand looked too "startup" for enterprise customers',
      solution: "Investment-grade visual system with enterprise credibility",
      result: "Successfully raised $15M Series A, 10x more professional",
      metric: "$15M Series A raised",
    },
    {
      company: "GrowthLabs",
      stage: "Multiple pivots",
      challenge: "Three pivots threatened brand consistency",
      solution:
        "Pivot-proof brand architecture that adapts to business changes",
      result: "Maintained brand equity through all business model changes",
      metric: "3 pivots, same core brand",
    },
  ];

  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="About The Brand Whisperer | 30+ Years Building Scalable Startup Brands"
        description="Meet the brand strategist behind 150+ successful startups. 30+ years experience from New Relic IPO to Series A brand strategies. Expert in building brands that scale with your growth."
        keywords="brand strategist, startup brand expert, New Relic brand, Idealab experience, brand consultant background, startup branding expert, series a brand specialist"
        url="https://brandwhisperer.com/about"
        image="https://brandwhisperer.com/og-about.jpg"
        type="profile"
        schema={aboutPageSchema}
      />
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              About The Brand Whisperer
            </Badge>
            <h1 className="text-display-lg lg:text-display-xl font-bold mb-8 text-white">
              30 Years of Building{" "}
              <span className="text-secondary-400">Brands That Scale</span>
            </h1>
            <p className="text-body-lg text-gray-300 leading-relaxed mb-8">
              We're not your typical brand agency. With three decades of
              experience, 150+ startup projects, and having lived through
              hypergrowth at companies like New Relic and Idealab, we understand
              what it takes to build brands that don't break during rapid
              scaling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-dark-900"
              >
                <Link to="/contact">Work With Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-white hover:text-dark-900"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="section-spacing bg-secondary-400 text-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-dark-900">
              Our Core Belief
            </h2>
            <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed text-dark-800 mb-8">
              "Brands are not logos. Brands are promises kept at scale."
            </blockquote>
            <p className="text-body-lg text-dark-700 leading-relaxed">
              In the hypergrowth startup world, most companies build brands for
              today that shatter tomorrow. We build brands for the company
              you're becoming, not just the company you are. Every pixel, every
              word, every decision considers one question: "Will this work when
              we're 100x bigger?"
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Our Journey
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Three Decades of Startup Experience
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              From Boston creative agencies to Microsoft to hypergrowth
              unicorns, our experience spans the entire startup ecosystem.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 card-hover"
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="text-secondary-400 font-semibold text-sm mb-1">
                        {exp.duration}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.company}
                      </h3>
                      <div className="text-gray-400">{exp.role}</div>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    <div className="lg:col-span-1">
                      <h4 className="text-white font-semibold mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Our Values
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Values in Action
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              These aren't just words on a wall. These are the principles that
              guide every decision we make and every brand we build.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 card-hover"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="process" className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Our Process
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              The SCALE Methodology
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Our proven 5-phase process ensures your brand is built for scale
              from day one. No expensive rebrands, no momentum-killing pivots.
            </p>
          </div>

          <div className="space-y-8">
            {methodology.map((phase, index) => (
              <Card key={index} className="bg-dark-900/50 border-dark-700">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {phase.phase}
                      </h3>
                      <div className="flex items-center space-x-2 mb-4">
                        <Clock className="w-4 h-4 text-secondary-400" />
                        <span className="text-secondary-400 text-sm">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                    <div className="lg:col-span-7">
                      <h4 className="text-white font-semibold mb-4">
                        Deliverables:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Success Stories
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              <span className="text-secondary-400">Brands That Scaled</span>{" "}
              Without Breaking
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Real examples of startups that built brands designed for
              hypergrowth. These companies avoided expensive rebrands and
              maintained brand equity through rapid scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 card-hover"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
                    >
                      {study.stage}
                    </Badge>
                    <Star className="w-5 h-5 text-secondary-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">
                    {study.company}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {study.challenge}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Result:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-dark-700">
                    <div className="text-2xl font-bold text-secondary-400">
                      {study.metric}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Track Record
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Our Measure of Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "87%",
                label: "Series A Success Rate",
                description: "Of our clients raise funding within 12 months",
                icon: TrendingUp,
              },
              {
                value: "15-30%",
                label: "Higher Valuations",
                description: "Compared to companies without strategic branding",
                icon: DollarSign,
              },
              {
                value: "150+",
                label: "Startup Projects",
                description: "30 years of experience across all stages",
                icon: Users,
              },
              {
                value: "5-10x",
                label: "Scale Without Rebrands",
                description: "Growth achieved without breaking brand systems",
                icon: Rocket,
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 text-center card-hover"
              >
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-secondary-400 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400 leading-relaxed">
                    {stat.description}
                  </div>
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
            With 30 years of experience and 150+ startup projects behind us,
            we're ready to help you build a brand that grows with your business.
            Let's start the conversation.
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
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
