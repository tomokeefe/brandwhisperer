import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Zap,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  Star,
  Quote,
  Mail,
  BookOpen,
  HelpCircle,
  Sparkles,
} from "lucide-react";

// Neon Rebellion Palette
const GOLD = "#FFD700";
const SAPPHIRE = "#0F52BA";
const CORAL = "#FF6F61";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const About = () => {
  // Scroll animations
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: whoWeAreRef, isVisible: whoWeAreVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: whyUsRef, isVisible: whyUsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  // Mailchimp form state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://brandwhisperer.com/about/#organization",
    name: "Brand Whisperer",
    description: "Your startup's secret weapon for branding, UI/UX, and AI solutions. We help startups scale without breaking their brands.",
    url: "https://brandwhisperer.com/about",
    foundingDate: "1995",
    knowsAbout: [
      "Startup Branding",
      "UI/UX Design", 
      "AI Design Solutions",
      "Brand Strategy",
      "Series A Preparation"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brand Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Clarity Session",
            price: "$199"
          }
        }
      ]
    }
  };

  const handleMailchimpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Track GA4 event
    try {
      if (window.gtag) {
        window.gtag("event", "email_signup", {
          event_category: "engagement",
          event_label: "about_page_mailchimp",
          value: 1,
          utm_source: "about"
        });
      }
    } catch {}

    // Simulate Mailchimp integration (replace with actual endpoint)
    try {
      // In real implementation, this would call your Mailchimp API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (err) {
      console.error("Mailchimp signup failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const achievements = [
    "40% funding boosts for clients",
    "AI expertise since 2023", 
    "Featured in WWD & NY Times",
    "150+ startups scaled successfully"
  ];

  const testimonials = [
    {
      quote: "Brand Whisperer turned our 'hot mess' brand into investor gold. We raised Series A in 6 months!",
      author: "Sarah Chen",
      company: "TechFlow (Series A)",
      metric: "$15M raised"
    },
    {
      quote: "Finally, someone who gets that startups can't afford to rebrand every year. Our brand scaled 10x without breaking.",
      author: "Marcus Rodriguez", 
      company: "DataSync (Series B)",
      metric: "10x growth, same brand"
    }
  ];

  return (
    <div className="bg-dark-950 pb-16" style={{ fontFamily: "Poppins, sans-serif" }}>
      <SEO
        title="About Brand Whisperer: Your Startup's Secret Weapon | Branding, UI/UX, AI"
        description="We help startups scale with branding, UI/UX, AI. Clients featured in WWD, NY Times. 40% funding boosts. Disruptors who love creators—unless their brand's a hot mess!"
        keywords="startup branding expert, UI/UX design, AI design solutions, brand strategy, series a branding, about brand whisperer"
        url="https://brandwhisperer.com/about?utm_source=about"
        schema={aboutPageSchema}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative py-20 lg:py-28 overflow-hidden transition-all duration-700 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Background Video/Image */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(15,23,42,0.8)" }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge 
              variant="outline" 
              className="mb-6 border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Your Startup's Secret Weapon
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 lg:mb-6 text-white">
              About Brand Whisperer:{" "}
              <span style={{ color: GOLD }}>Your Startup's Secret Weapon</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              The branding partner that gets startups. We turn "hot mess" brands into investor magnets—no corporate BS, just results that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-black font-semibold px-8 py-4"
                style={{ backgroundColor: GOLD }}
              >
                <Link to="/resources?utm_source=about&utm_campaign=hero">
                  Get Free Ebooks
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="text-white font-semibold px-8 py-4"
                style={{ backgroundColor: CORAL }}
              >
                <Link to="/quiz?utm_source=about&utm_campaign=hero">
                  Take Quiz
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section
        ref={whoWeAreRef}
        className={`section-spacing transition-all duration-700 ${
          whoWeAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge 
              variant="outline" 
              className="mb-6 border-blue-500/30 bg-blue-500/10 text-blue-400"
            >
              Who We Are
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: GOLD }}>
              We Help Startups Scale with Branding, UI/UX, AI
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our clients have been featured in <strong style={{ color: GOLD }}>Women's Wear Daily</strong> and the <strong style={{ color: GOLD }}>New York Times</strong>. We're the team behind brands that don't break when startups scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-dark-900/50 border" style={{ borderColor: SAPPHIRE }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${GOLD}20`, border: `1px solid ${GOLD}40` }}>
                  <Zap className="w-8 h-8" style={{ color: GOLD }} />
                </div>
                <CardTitle className="text-xl text-white">Branding That Scales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  From logo to complete visual identity systems that grow with your business. No expensive rebrands when you hit Series A.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-900/50 border" style={{ borderColor: SAPPHIRE }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${CORAL}20`, border: `1px solid ${CORAL}40` }}>
                  <Users className="w-8 h-8" style={{ color: CORAL }} />
                </div>
                <CardTitle className="text-xl text-white">UI/UX Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  User experiences that convert visitors into customers and investors into believers. Beautiful and functional.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-900/50 border" style={{ borderColor: SAPPHIRE }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${SAPPHIRE}20`, border: `1px solid ${SAPPHIRE}40` }}>
                  <Sparkles className="w-8 h-8" style={{ color: SAPPHIRE }} />
                </div>
                <CardTitle className="text-xl text-white">AI-Powered Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Cutting-edge AI tools and vibe coding to bring your brand vision to life faster than traditional methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        ref={storyRef}
        className={`section-spacing transition-all duration-700 ${
          storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ backgroundColor: `${CORAL}15` }}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge 
              variant="outline" 
              className="mb-6 text-white"
              style={{ borderColor: CORAL, backgroundColor: `${CORAL}20` }}
            >
              Our Story
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: GOLD }}>
              Disruptors Who Love Creators—Unless Their Brand's a Hot Mess!
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              We've seen too many brilliant startups with brands that look like they were designed by a committee of colorblind robots. That's where we come in—to turn your visual chaos into brand clarity that actually helps you raise money and scale faster.
            </p>
            <p className="text-base text-gray-400 italic">
              "Life's too short for ugly brands and even shorter for startups that run out of runway because their pitch deck looks like a ransom note."
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section
        ref={whyUsRef}
        className={`section-spacing transition-all duration-700 ${
          whyUsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-yellow-500/30 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 transition-all duration-300"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              40% Funding Boosts & AI Expertise That Actually Works
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We're not just pretty pixels—we're growth accelerators with <strong className="text-yellow-400">receipts</strong> to prove it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column - Stats & Achievements */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-gradient-to-r from-dark-800/50 to-dark-900/50 border border-dark-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/10"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animation: whyUsVisible ? `fadeInUp 0.6s ease-out forwards` : 'none'
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${GOLD}20`, border: `2px solid ${GOLD}` }}>
                        <CheckCircle className="w-5 h-5" style={{ color: GOLD }} />
                      </div>
                      <span className="text-white font-semibold text-base group-hover:text-yellow-300 transition-colors duration-300">
                        {achievement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* The Secret Sauce - Enhanced */}
              <div
                className="relative p-8 rounded-2xl border-2 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm overflow-hidden group hover:border-blue-400/50 transition-all duration-500"
                style={{ borderColor: SAPPHIRE }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-500/20" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${SAPPHIRE}30`, border: `2px solid ${SAPPHIRE}` }}>
                      <Sparkles className="w-6 h-6" style={{ color: SAPPHIRE }} />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      The Secret Sauce
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                    While other agencies are still figuring out Figma, we're using cutting-edge AI tools like <strong style={{ color: GOLD }}>Visual Electric</strong> and <strong style={{ color: GOLD }}>Builder.io</strong> to create brands that are both future-proof and investor-ready.
                  </p>
                  <div className="mt-4 text-sm font-medium" style={{ color: CORAL }}>
                    💡 Your competitors' brands will look like they're from 2019.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Testimonials */}
            <div className="lg:col-span-7 space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="relative bg-gradient-to-br from-dark-800/80 to-dark-900/80 border-dark-700/50 hover:border-coral-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-coral-500/10 group overflow-hidden"
                >
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-coral-500/20 to-yellow-500/20" />

                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${CORAL}20`, border: `2px solid ${CORAL}` }}>
                        <Quote className="w-6 h-6" style={{ color: CORAL }} />
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-white text-lg mb-6 leading-relaxed font-medium group-hover:text-gray-100 transition-colors duration-300">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-coral-500 flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-bold text-white text-lg group-hover:text-yellow-300 transition-colors duration-300">
                            {testimonial.author}
                          </div>
                          <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <Badge
                          className="font-bold text-lg px-4 py-2 hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: GOLD, color: "black" }}
                        >
                          {testimonial.metric}
                        </Badge>
                        <div className="text-xs text-gray-500 mt-1">Success Metric</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Call-to-Action Card */}
              <Card className="bg-gradient-to-r from-yellow-500/10 to-coral-500/10 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold text-white mb-2">Ready for Similar Results?</h4>
                  <p className="text-gray-300 mb-4">Join 150+ startups who chose growth over pretty pixels</p>
                  <Button
                    asChild
                    className="text-black font-semibold hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: GOLD }}
                  >
                    <Link to="/contact?utm_source=about&utm_campaign=why_us">
                      Book Your $199 Session
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`section-spacing transition-all duration-700 ${
          ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ backgroundColor: SAPPHIRE }}
      >
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Ready to Turn Your Brand from Mess to Money Magnet?
          </h2>
          <p className="text-lg text-white/90 mb-12 max-w-3xl mx-auto">
            Stop losing investors because your pitch deck looks like a preschool art project. Let's build something that scales.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* CTA Buttons */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Get Started Today</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-black font-semibold"
                  style={{ backgroundColor: GOLD }}
                >
                  <Link to="/resources?utm_source=about&utm_campaign=cta">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Get Free Ebook
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  size="lg" 
                  className="text-white font-semibold"
                  style={{ backgroundColor: CORAL }}
                >
                  <Link to="/quiz?utm_source=about&utm_campaign=cta">
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Take Quiz
                  </Link>
                </Button>
              </div>

              <Button 
                asChild 
                size="lg" 
                className="w-full bg-white text-black font-semibold hover:bg-gray-100"
              >
                <Link to="/contact?utm_source=about&utm_campaign=cta">
                  Book $199 Session
                </Link>
              </Button>
            </div>

            {/* Mailchimp Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Join Our Insider List</h3>
              <p className="text-white/80 mb-6">
                Get weekly startup branding insights that actually help you raise money.
              </p>
              
              {isSubmitted ? (
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: GOLD }} />
                  <h4 className="text-lg font-bold text-white mb-2">You're In!</h4>
                  <p className="text-white/80">Check your inbox for golden brand tips.</p>
                </div>
              ) : (
                <form onSubmit={handleMailchimpSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="founder@yourstartup.com"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-black font-semibold"
                    style={{ backgroundColor: GOLD }}
                  >
                    {isSubmitting ? (
                      "Adding you to the list..."
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-2" />
                        Get Brand Insights
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-white/60 text-center">
                    No spam, just startup gold. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
