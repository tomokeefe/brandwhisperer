import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Search,
  Zap,
  Palette,
  Monitor,
  Code,
  Star,
  CheckCircle,
  Calendar,
  Mail,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const Services = () => {
  const [email, setEmail] = useState("");
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: resourcesRef, isVisible: resourcesVisible } = useScrollAnimation();
  const { ref: consultingRef, isVisible: consultingVisible } = useScrollAnimation();
  const { ref: customRef, isVisible: customVisible } = useScrollAnimation();
  const { ref: whyUsRef, isVisible: whyUsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://brandwhisperer.com/services/#service",
    name: "Brand Whisperer Services",
    description: "Scalable branding, UI/UX, and AI solutions for pre-seed to Series A startups. Digital resources, consulting, and custom projects.",
    provider: {
      "@type": "Organization",
      "@id": "https://brandwhisperer.com/#organization",
    },
    serviceType: "Branding and Design Services",
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
  };

  const digitalResources = [
    {
      title: "Startup Brand Stage Quiz",
      description: "2-minute quiz to check your brand's readiness. Get a PDF summary and tips.",
      price: "Free",
      type: "quiz",
      ctaText: "Take Quiz Now",
      ctaLink: "/quiz",
      icon: HelpCircle,
      humor: "Is your brand a seedling or a rocket? Find out!",
      color: "coral",
    },
    {
      title: "Foundations of Startup Branding",
      description: "50-page guide on mission, audience, storytelling. Free templates included.",
      price: "Free",
      type: "ebook",
      ctaText: "Download Free",
      ctaLink: "/resources",
      icon: BookOpen,
      humor: "No mission? No problem—start here.",
      color: "gold",
    },
    {
      title: "Visual Identity Mastery",
      description: "50-page guide on logos, colors, visuals. Mood board templates.",
      price: "Free",
      type: "ebook",
      ctaText: "Grab Free",
      ctaLink: "/resources",
      icon: Palette,
      humor: "Make your brand pop, not flop.",
      color: "gold",
    },
    {
      title: "Mastery Series Subscription",
      description: "Unlimited access to premium ebooks (#3-6: UX, Product Design, AI, Vibe Coding), templates, webinars. New content quarterly.",
      price: "$9/month or $97/year",
      type: "subscription",
      ctaText: "Join Premium",
      ctaLink: "/resources",
      icon: Star,
      humor: "All the branding smarts, none of the overwhelm.",
      color: "coral",
    },
  ];

  const consultingServices = [
    {
      title: "Brand Clarity Session",
      description: "1-hour virtual call to define mission, vision, audience. Includes custom brand brief.",
      price: "$199",
      duration: "1 hour",
      ctaText: "Book Now",
      ctaLink: "/contact",
      icon: Lightbulb,
      humor: "Vague brand? We'll make it crystal-clear.",
      color: "gold",
    },
    {
      title: "Brand Scalability Audit",
      description: "2-hour deep dive into branding, visuals, UX. 10-page report with steps.",
      price: "$999",
      duration: "2 hours",
      ctaText: "Schedule Audit",
      ctaLink: "/contact",
      icon: Search,
      humor: "No more 'hot mess' branding moments.",
      color: "coral",
    },
    {
      title: "AI Design Sprint",
      description: "3-hour session using AI (Midjourney, Cursor) for logos, UI, or prototypes. Includes assets.",
      price: "$1,499",
      duration: "3 hours",
      ctaText: "Start Sprint",
      ctaLink: "/contact",
      icon: Zap,
      humor: "AI magic, human touch—design fast.",
      color: "sapphire",
    },
  ];

  const customProjects = [
    {
      title: "Startup Branding Package",
      description: "Full brand identity (logo, palette, typography, guidelines) plus messaging. 4-6 weeks.",
      priceRange: "$5,000-$10,000",
      duration: "4-6 weeks",
      ctaText: "Get Quote",
      ctaLink: "/contact",
      icon: Award,
      humor: "Investor-ready branding, no DIY stress.",
      color: "gold",
    },
    {
      title: "UI/UX Design Overhaul",
      description: "Complete UX audit, wireframes, prototypes, design system. 6-8 weeks.",
      priceRange: "$7,500-$15,000",
      duration: "6-8 weeks",
      ctaText: "Request Quote",
      ctaLink: "/contact",
      icon: Monitor,
      humor: "Users won't rage-quit with this UX.",
      color: "coral",
    },
    {
      title: "AI/Vibe Coding Prototype",
      description: "Functional prototype using AI tools (Cursor, v0) for landing pages/UI. 3-5 weeks.",
      priceRange: "$3,000-$7,500",
      duration: "3-5 weeks",
      ctaText: "Build It",
      ctaLink: "/contact",
      icon: Code,
      humor: "Vibe your idea into reality—fast.",
      color: "sapphire",
    },
  ];

  const whyChooseUsPoints = [
    "Scalable solutions for pre-seed to Series A",
    "AI and vibe coding expertise for 2025",
    "Proven results with startups like yours",
    "40% funding boosts, 50% better conversions",
  ];

  const testimonials = [
    {
      quote: "Brand Whisperer doubled our sign-ups and made our pitch deck unforgettable!",
      author: "Sarah K.",
      company: "TechFlow (Series A)",
    },
    {
      quote: "The AI design sprint saved us months of work. Our prototype looks incredible.",
      author: "Mike R.",
      company: "DataSync (Seed)",
    },
    {
      quote: "Finally, a brand that doesn't look like every other startup. Investors noticed.",
      author: "Alex P.",
      company: "GrowthLab (Pre-Seed)",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const getColorClasses = (color: string, type: 'button' | 'bg' | 'text' | 'border' = 'button') => {
    const colorMap = {
      gold: {
        button: "bg-yellow-500 hover:bg-yellow-600 text-black",
        bg: "bg-yellow-500/10",
        text: "text-yellow-500",
        border: "border-yellow-500/30",
      },
      coral: {
        button: "bg-yellow-500 hover:bg-yellow-600 text-black",
        bg: "bg-yellow-500/10",
        text: "text-yellow-500",
        border: "border-yellow-500/30",
      },
      sapphire: {
        button: "bg-blue-600 hover:bg-blue-700 text-white",
        bg: "bg-blue-600/10",
        text: "text-blue-600",
        border: "border-blue-600/30",
      },
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || colorMap.gold[type];
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle Mailchimp integration here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="bg-dark-950 pb-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <SEO
        title="Branding Services for Startups | Brand Whisperer"
        description="Scalable branding, UI/UX, and AI solutions for startups. Free ebooks and quiz at brandwhisperer.io!"
        keywords="startup branding, UI/UX design, AI prototyping 2025"
        url="https://brandwhisperer.com/services"
        schema={servicesPageSchema}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative py-20 lg:py-28 overflow-hidden transition-all duration-700 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.3)' }}
          >
            <source
              src="https://www.dropbox.com/scl/fi/5x1glwa4mhrdu4p6g5uqt/6593843-hd_1920_1080_30fps.mp4?rlkey=g59ows8jpf4klv20yga8tov2f&dl=1"
              type="video/mp4"
            />
          </video>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ background: 'linear-gradient(135deg, rgba(15, 82, 186, 0.8) 0%, rgba(26, 26, 46, 0.9) 100%)' }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 lg:mb-6 text-white">
              Brand Whisperer Services: From{" "}
              <span style={{ color: '#FFD700' }}>Meh to Money Magnet</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Scalable branding, UI/UX, and AI solutions for pre-seed to Series A startups.
              Start free with our ebooks or quiz, or go big with custom projects.
            </p>
            <p className="text-base text-white/70 mb-8 italic">
              Ready to make your brand shine brighter than a Series A pitch deck?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold"
              >
                <Link to="/quiz">Take Our Free Quiz</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold"
              >
                <Link to="/resources">Get Free Ebook</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Resources Section */}
      <section
        ref={resourcesRef}
        className={`section-spacing transition-all duration-700 ${
          resourcesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#FFD700' }}>
              Digital Resources: DIY Branding That Packs a Punch
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Learn to brand like a pro with our free and premium tools—no design degree needed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {digitalResources.map((resource, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 hover:border-secondary-500/30 transition-all duration-300 group overflow-hidden"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${getColorClasses(resource.color, 'bg')}`}>
                    <resource.icon className={`w-8 h-8 ${getColorClasses(resource.color, 'text')}`} />
                  </div>
                  <CardTitle className="text-xl text-white mb-2">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-secondary-400 mb-2">
                      {resource.price}
                    </div>
                    <p className="text-sm text-gray-400 italic">
                      {resource.humor}
                    </p>
                  </div>
                  <Button
                    asChild
                    className={`w-full ${getColorClasses(resource.color)} font-semibold`}
                  >
                    <Link to={resource.ctaLink}>{resource.ctaText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section
        ref={consultingRef}
        className={`section-spacing bg-dark-900/30 transition-all duration-700 ${
          consultingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#FFD700' }}>
              Consulting: Your Brand's Personal Trainer
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              One-on-one sessions to get your brand investor-ready or user-loved.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 hover:border-secondary-500/30 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${getColorClasses(service.color, 'bg')}`}>
                    <service.icon className={`w-8 h-8 ${getColorClasses(service.color, 'text')}`} />
                  </div>
                  <CardTitle className="text-xl text-white mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-secondary-400 mb-1">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      Duration: {service.duration}
                    </div>
                    <p className="text-sm text-gray-400 italic">
                      {service.humor}
                    </p>
                  </div>
                  <Button
                    asChild
                    className={`w-full ${getColorClasses(service.color)} font-semibold`}
                  >
                    <Link to={service.ctaLink}>{service.ctaText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Projects Section */}
      <section
        ref={customRef}
        className={`section-spacing transition-all duration-700 ${
          customVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#FFD700' }}>
              Custom Projects: From Garage to Unicorn
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Bespoke branding, UI/UX, and AI prototyping to scale your startup.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {customProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 hover:border-secondary-500/30 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${getColorClasses(project.color, 'bg')}`}>
                    <project.icon className={`w-8 h-8 ${getColorClasses(project.color, 'text')}`} />
                  </div>
                  <CardTitle className="text-xl text-white mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-secondary-400 mb-1">
                      {project.priceRange}
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      Timeline: {project.duration}
                    </div>
                    <p className="text-sm text-gray-400 italic">
                      {project.humor}
                    </p>
                  </div>
                  <Button
                    asChild
                    className={`w-full ${getColorClasses(project.color)} font-semibold`}
                  >
                    <Link to={project.ctaLink}>{project.ctaText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={whyUsRef}
        className={`section-spacing bg-dark-900/30 transition-all duration-700 ${
          whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' }}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
              Why Brand Whisperer?
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto mb-8">
              Our stra-tactical™ approach blends strategy and creativity to deliver results—40% funding boosts, 50% better conversions.
            </p>
            <p className="text-base text-black/70 italic">
              We're not your average agency—think less suits, more startup swagger.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {whyChooseUsPoints.map((point, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-black font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-600 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-black mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-black">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-black/70">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-black scale-125' : 'bg-black/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`section-spacing transition-all duration-700 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ background: 'linear-gradient(135deg, #0F52BA 0%, #1a1a2e 100%)' }}
      >
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Ready to Make Your Brand Unforgettable?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Start free, go premium, or partner with us for custom magic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold"
            >
              <Link to="/quiz">Take Free Quiz</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold"
            >
              <Link to="/resources">Get Free Ebook</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Email Capture Form */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Join our waitlist for exclusive tips!
            </h3>
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
