import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Loader2,
  ExternalLink,
  Calendar,
  Clock,
  Users,
  Award,
  TrendingUp,
  Github,
  Youtube,
  MessageCircle,
  BookOpen,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface NewsletterState {
  email: string;
  isSubmitting: boolean;
  isSubscribed: boolean;
  error: string | null;
}

interface QuickContactState {
  name: string;
  email: string;
  message: string;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

const Footer = () => {
  const [newsletterState, setNewsletterState] = useState<NewsletterState>({
    email: "",
    isSubmitting: false,
    isSubscribed: false,
    error: null,
  });

  const [quickContactState, setQuickContactState] = useState<QuickContactState>(
    {
      name: "",
      email: "",
      message: "",
      isSubmitting: false,
      isSubmitted: false,
      error: null,
    },
  );

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset states when location changes
  useEffect(() => {
    setNewsletterState((prev) => ({ ...prev, error: null }));
    setQuickContactState((prev) => ({ ...prev, error: null }));
  }, [location]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setNewsletterState((prev) => ({
      ...prev,
      isSubmitting: true,
      error: null,
    }));

    if (!validateEmail(newsletterState.email)) {
      setNewsletterState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: "Please enter a valid email address",
      }));
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Track newsletter signup
      if (window.gtag) {
        window.gtag("event", "newsletter_signup", {
          event_category: "engagement",
          event_label: "footer_newsletter",
          value: 1,
        });
      }

      setNewsletterState({
        email: "",
        isSubmitting: false,
        isSubscribed: true,
        error: null,
      });

      // Reset success state after 10 seconds
      setTimeout(() => {
        setNewsletterState((prev) => ({ ...prev, isSubscribed: false }));
      }, 10000);
    } catch (error) {
      setNewsletterState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: "Something went wrong. Please try again.",
      }));
    }
  };

  const handleQuickContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setQuickContactState((prev) => ({
      ...prev,
      isSubmitting: true,
      error: null,
    }));

    if (
      !quickContactState.name.trim() ||
      !validateEmail(quickContactState.email) ||
      !quickContactState.message.trim()
    ) {
      setQuickContactState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: "Please fill in all fields with valid information",
      }));
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Track contact form submission
      if (window.gtag) {
        window.gtag("event", "contact_form_submit", {
          event_category: "conversion",
          event_label: "footer_quick_contact",
          value: 1,
        });
      }

      setQuickContactState({
        name: "",
        email: "",
        message: "",
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });

      // Reset success state after 8 seconds
      setTimeout(() => {
        setQuickContactState((prev) => ({ ...prev, isSubmitted: false }));
      }, 8000);
    } catch (error) {
      setQuickContactState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: "Failed to send message. Please try again.",
      }));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Track scroll to top
    if (window.gtag) {
      window.gtag("event", "scroll_to_top", {
        event_category: "navigation",
        event_label: "footer_scroll_top",
      });
    }
  };

  const trackLinkClick = (linkName: string, category: string) => {
    if (window.gtag) {
      window.gtag("event", "footer_link_click", {
        event_category: category,
        event_label: linkName,
      });
    }
  };

  const footerLinks = {
    Services: [
      { name: "Pre-Seed Package", path: "/services#pre-seed", icon: Users },
      {
        name: "Seed Growth Package",
        path: "/services#seed-growth",
        icon: TrendingUp,
      },
      { name: "Series A Ready", path: "/services#series-a", icon: Award },
      {
        name: "Brand Advisory",
        path: "/services#advisory",
        icon: MessageCircle,
      },
      { name: "Pricing Calculator", path: "/calculator", icon: Calculator },
    ],
    Resources: [
      { name: "Blog", path: "/blog", icon: BookOpen },
      { name: "Free Resources", path: "/resources", icon: Download },
      {
        name: "Brand Assessment",
        path: "/resources#assessment",
        icon: CheckCircle,
      },
      { name: "SCALE Framework", path: "/resources#framework", icon: Zap },
      { name: "Case Studies", path: "/about#cases", icon: Award },
    ],
    Company: [
      { name: "About Us", path: "/about", icon: Users },
      { name: "Our Process", path: "/about#process", icon: ArrowRight },
      { name: "Contact", path: "/contact", icon: Mail },
      { name: "Schedule Call", path: "/contact#schedule", icon: Calendar },
      { name: "Careers", path: "/contact#careers", icon: Users },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy", icon: null },
      { name: "Terms of Service", path: "/terms", icon: null },
      { name: "Cookie Policy", path: "/cookies", icon: null },
      { name: "Data Processing", path: "/data", icon: null },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/brandwhisperer",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/brandwhisperer",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@brandwhisperer",
      icon: <Youtube className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/brandwhisperer",
      icon: <Github className="w-5 h-5" />,
    },
  ];

  const trustMetrics = [
    { value: "87%", label: "Series A funding success", trend: "+12%" },
    { value: "150+", label: "Startups branded", trend: "+23 this year" },
    { value: "$2B+", label: "Funding raised by clients", trend: "+$400M YTD" },
    { value: "4.9★", label: "Average client rating", trend: "2,847 reviews" },
  ];

  return (
    <footer className="bg-white text-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-20 lg:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Newsletter Signup */}
              <div className="text-center lg:text-left">
                <Badge
                  variant="outline"
                  className="mb-8 border-primary-300 text-primary-100 bg-primary-100/10"
                >
                  Weekly Insights
                </Badge>
                <h2 className="text-display-md lg:text-display-lg mb-8">
                  Join 2,500+ Founders Getting Startup Brand Insights
                </h2>
                <p className="text-body-lg text-primary-100 mb-10 max-w-2xl lg:max-w-none">
                  Get actionable brand strategy tips, case studies, and
                  frameworks delivered to your inbox every Tuesday. No spam,
                  just value.
                </p>

                {newsletterState.isSubscribed ? (
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-8 max-w-md lg:max-w-none">
                    <div className="flex items-center justify-center lg:justify-start space-x-2 text-green-400 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>You're subscribed!</span>
                    </div>
                    <p className="text-green-100 text-sm">
                      Welcome to the community. Check your email for a
                      confirmation and your first resource.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg lg:max-w-none">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={newsletterState.email}
                        onChange={(e) =>
                          setNewsletterState((prev) => ({
                            ...prev,
                            email: e.target.value,
                            error: null,
                          }))
                        }
                        className="bg-primary-900/50 border-primary-500 text-white placeholder:text-primary-200 flex-1 py-3 px-4"
                        disabled={newsletterState.isSubmitting}
                        required
                      />
                      <Button
                        type="submit"
                        disabled={newsletterState.isSubmitting}
                        className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold px-8 py-3 disabled:opacity-50"
                      >
                        {newsletterState.isSubmitting ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4 mr-2" />
                        )}
                        {newsletterState.isSubmitting
                          ? "Subscribing..."
                          : "Subscribe Free"}
                      </Button>
                    </div>
                    {newsletterState.error && (
                      <div className="flex items-center space-x-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{newsletterState.error}</span>
                      </div>
                    )}
                  </form>
                )}

                <p className="text-primary-200 text-sm mt-6">
                  Join founders from Y Combinator, Techstars, and 500 Startups
                </p>
              </div>

              {/* Quick Contact Form */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Quick Question?
                  </h3>
                  <p className="text-primary-100 text-sm mb-6">
                    Get a personal response within 24 hours
                  </p>

                  {quickContactState.isSubmitted ? (
                    <div className="text-center py-6">
                      <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h4 className="text-white font-semibold mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-primary-100 text-sm">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleQuickContactSubmit}
                      className="space-y-4"
                    >
                      <Input
                        placeholder="Your name"
                        value={quickContactState.name}
                        onChange={(e) =>
                          setQuickContactState((prev) => ({
                            ...prev,
                            name: e.target.value,
                            error: null,
                          }))
                        }
                        className="bg-white/10 border-white/20 text-white placeholder:text-primary-200"
                        disabled={quickContactState.isSubmitting}
                      />
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={quickContactState.email}
                        onChange={(e) =>
                          setQuickContactState((prev) => ({
                            ...prev,
                            email: e.target.value,
                            error: null,
                          }))
                        }
                        className="bg-white/10 border-white/20 text-white placeholder:text-primary-200"
                        disabled={quickContactState.isSubmitting}
                      />
                      <Textarea
                        placeholder="Your question or message..."
                        value={quickContactState.message}
                        onChange={(e) =>
                          setQuickContactState((prev) => ({
                            ...prev,
                            message: e.target.value,
                            error: null,
                          }))
                        }
                        className="bg-white/10 border-white/20 text-white placeholder:text-primary-200 min-h-[80px]"
                        disabled={quickContactState.isSubmitting}
                      />
                      {quickContactState.error && (
                        <div className="flex items-center space-x-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{quickContactState.error}</span>
                        </div>
                      )}
                      <Button
                        type="submit"
                        disabled={quickContactState.isSubmitting}
                        className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold"
                      >
                        {quickContactState.isSubmitting ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4 mr-2" />
                        )}
                        {quickContactState.isSubmitting
                          ? "Sending..."
                          : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative">
        <div className="container-custom py-20 lg:py-24 px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Brand Section */}
            <div className="lg:col-span-4 px-4">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg opacity-20 blur"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark-900">
                    The Brand Whisperer
                  </div>
                  <div className="text-sm text-dark-600">
                    Building brands that scale
                  </div>
                </div>
              </Link>

              <p className="text-dark-600 mb-8 max-w-md leading-relaxed">
                We build brands for the company you're becoming, not just the
                company you are. With 30+ years of experience and 150+ startup
                projects, we prevent the expensive rebrands that break momentum
                during hypergrowth.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-dark-600">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <a
                    href="mailto:hello@brandwhisperer.com"
                    className="hover:text-primary-600 transition-colors"
                    onClick={() => trackLinkClick("Email", "contact")}
                  >
                    hello@brandwhisperer.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-dark-600">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <a
                    href="tel:+15551234567"
                    className="hover:text-primary-600 transition-colors"
                    onClick={() => trackLinkClick("Phone", "contact")}
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-dark-600">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3 text-dark-600">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span>
                    PST:{" "}
                    {currentTime.toLocaleTimeString("en-US", {
                      timeZone: "America/Los_Angeles",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-100 rounded-lg flex items-center justify-center text-dark-600 hover:bg-primary-500 hover:text-white transition-colors duration-200 group"
                    aria-label={social.name}
                    onClick={() => trackLinkClick(social.name, "social")}
                  >
                    {social.icon}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 absolute top-1 right-1 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8 px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-dark-900 mb-6">
                      {category}
                    </h3>
                    <ul className="space-y-4">
                      {links.map((link) => {
                        const IconComponent = link.icon;
                        return (
                          <li key={link.name}>
                            <Link
                              to={link.path}
                              className="text-dark-600 hover:text-primary-600 transition-colors duration-200 inline-flex items-center group"
                              onClick={() =>
                                trackLinkClick(
                                  link.name,
                                  category.toLowerCase(),
                                )
                              }
                            >
                              {IconComponent && (
                                <IconComponent className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100" />
                              )}
                              <span>{link.name}</span>
                              <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-12 border-t border-dark-200 px-4">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-dark-900 mb-2">
                Trusted by Top Startups
              </h3>
              <p className="text-dark-600 text-sm">
                Real results from real companies
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {trustMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-dark-600 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    {metric.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-12 bg-dark-200" />

          {/* Bottom Bar */}
          <div className="px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="text-dark-600 text-sm text-center lg:text-left">
                <p>
                  © {currentYear} The Brand Whisperer. All rights reserved.
                </p>
                <p className="text-xs mt-1">
                  Building brands that scale since 1995. Made with ❤️ in San
                  Francisco.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-2 text-sm">
                <Link
                  to="/privacy"
                  className="text-dark-600 hover:text-primary-600 transition-colors duration-200"
                  onClick={() => trackLinkClick("Privacy Policy", "legal")}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-600 hover:text-primary-600 transition-colors duration-200"
                  onClick={() => trackLinkClick("Terms of Service", "legal")}
                >
                  Terms of Service
                </Link>
                <Link
                  to="/sitemap"
                  className="text-dark-600 hover:text-primary-600 transition-colors duration-200"
                  onClick={() => trackLinkClick("Sitemap", "navigation")}
                >
                  Sitemap
                </Link>
                <span className="text-dark-400">v2.1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg transition-all duration-300",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none",
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};

export default Footer;
