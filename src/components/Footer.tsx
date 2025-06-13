import React, { useState, useEffect, useRef } from "react";
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
  BarChart3,
  Sparkles,
  Heart,
  Coffee,
  Wifi,
  Activity,
  Globe,
  Star,
  Shield,
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

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
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
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const footerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // Initialize floating particles
  useEffect(() => {
    const initialParticles: FloatingParticle[] = Array.from(
      { length: 20 },
      (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      }),
    );
    setParticles(initialParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y <= 0 ? 100 : particle.y - particle.speed,
          opacity: Math.sin(Date.now() * 0.001 + particle.id) * 0.2 + 0.3,
        })),
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const footer = footerRef.current;
    if (footer) {
      footer.addEventListener("mousemove", handleMouseMove);
      return () => footer.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Update time every minute with smooth transitions
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for footer animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    const footer = footerRef.current;
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
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
      // Simulate API call with visual feedback
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Track newsletter signup with enhanced analytics
      if (window.gtag) {
        window.gtag("event", "newsletter_signup", {
          event_category: "engagement",
          event_label: "footer_newsletter_enhanced",
          value: 1,
          custom_parameter: "living_footer",
        });
      }

      setNewsletterState({
        email: "",
        isSubmitting: false,
        isSubscribed: true,
        error: null,
      });

      // Trigger celebration animation
      triggerCelebration();

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
          event_label: "footer_quick_contact_enhanced",
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

      // Trigger success animation
      triggerSuccess();

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

    // Enhanced analytics tracking
    if (window.gtag) {
      window.gtag("event", "scroll_to_top", {
        event_category: "navigation",
        event_label: "footer_scroll_top_enhanced",
        scroll_depth: window.scrollY,
      });
    }
  };

  const trackLinkClick = (linkName: string, category: string) => {
    if (window.gtag) {
      window.gtag("event", "footer_link_click", {
        event_category: category,
        event_label: linkName,
        timestamp: Date.now(),
      });
    }
  };

  const triggerCelebration = () => {
    // Create celebration particles
    const celebrationParticles = Array.from({ length: 50 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: 50,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      opacity: 1,
    }));

    setParticles((prev) => [...prev, ...celebrationParticles]);

    // Remove celebration particles after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id < Date.now()));
    }, 3000);
  };

  const triggerSuccess = () => {
    // Success ripple effect
    console.log("🎉 Success animation triggered!");
  };

  const footerLinks = {
    Services: [
      {
        name: "Pre-Seed Package",
        path: "/services#pre-seed-package",
      },
      {
        name: "Seed Growth Package",
        path: "/services#seed-growth-package",
      },
      {
        name: "Series A Ready",
        path: "/services#series-a-ready-package",
      },
      {
        name: "Brand Advisory",
        path: "/services#advisory",
      },
      { name: "Pricing Calculator", path: "/calculator" },
    ],
    Resources: [
      { name: "Blog", path: "/blog" },
      { name: "Free Resources", path: "/resources" },
      {
        name: "Brand Assessment",
        path: "/resources#assessment",
      },
      { name: "SCALE Framework", path: "/resources#framework" },
      { name: "Case Studies", path: "/about#cases" },
    ],
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Our Process", path: "/about#process" },
      { name: "Contact", path: "/contact" },
      { name: "Schedule Call", path: "/contact#schedule" },
      { name: "Careers", path: "/contact#careers" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "Data Processing", path: "/data" },
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
      color: "hover:bg-blue-600",
      description: "Professional updates & insights",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/brandwhisperer",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      color: "hover:bg-blue-400",
      description: "Quick tips & thought leadership",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@brandwhisperer",
      icon: <Youtube className="w-5 h-5" />,
      color: "hover:bg-red-600",
      description: "Video content & case studies",
    },
    {
      name: "GitHub",
      url: "https://github.com/brandwhisperer",
      icon: <Github className="w-5 h-5" />,
      color: "hover:bg-gray-700",
      description: "Open source tools & resources",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#030616" }}
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary-400 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: `translate(-50%, -50%)`,
              transition: "all 0.1s linear",
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(79, 70, 229, 0.03) 0%, transparent 50%)`,
          transition: "background 0.3s ease",
        }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>

      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container-custom py-20 lg:py-24 px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Newsletter Signup */}
              <div
                className={cn(
                  "text-center lg:text-left transition-all duration-1000",
                  isFooterVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
              >
                <Badge
                  variant="outline"
                  className="mb-8 border-primary-300 text-primary-100 bg-primary-100/10 animate-pulse"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Weekly Insights • Live
                </Badge>
                <h2 className="text-display-md lg:text-display-lg mb-8 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                  Join 2,500+ Founders Getting Startup Brand Insights
                </h2>
                <p className="text-body-lg text-primary-100 mb-10 max-w-2xl lg:max-w-none">
                  Get actionable brand strategy tips, case studies, and
                  frameworks delivered to your inbox every Tuesday. No spam,
                  just value.
                </p>

                {newsletterState.isSubscribed ? (
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-8 max-w-md lg:max-w-none backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center justify-center lg:justify-start space-x-2 text-green-400 mb-2">
                      <CheckCircle className="w-5 h-5 animate-pulse" />
                      <span>You're subscribed!</span>
                      <Sparkles className="w-4 h-4 animate-spin" />
                    </div>
                    <p className="text-green-100 text-sm">
                      Welcome to the community. Check your email for a
                      confirmation and your first resource.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg lg:max-w-none">
                      <div className="relative flex-1">
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
                          className={cn(
                            "bg-primary-900/50 border-primary-500 text-white placeholder:text-primary-200 flex-1 py-3 px-4 transition-all duration-300",
                            "focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400",
                            "hover:bg-primary-900/70",
                          )}
                          disabled={newsletterState.isSubmitting}
                          required
                        />
                        {newsletterState.email &&
                          validateEmail(newsletterState.email) && (
                            <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                          )}
                      </div>
                      <Button
                        type="submit"
                        disabled={newsletterState.isSubmitting}
                        className={cn(
                          "bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold px-8 py-3 disabled:opacity-50 transition-all duration-300",
                          "hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/25",
                          newsletterState.isSubmitting && "animate-pulse",
                        )}
                      >
                        {newsletterState.isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            <span>Subscribing...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            <span>Subscribe Free</span>
                          </>
                        )}
                      </Button>
                    </div>
                    {newsletterState.error && (
                      <div className="flex items-center space-x-2 text-red-400 text-sm animate-in slide-in-from-top-2 duration-300">
                        <AlertCircle className="w-4 h-4" />
                        <span>{newsletterState.error}</span>
                      </div>
                    )}
                  </form>
                )}

                <p className="text-primary-200 text-sm mt-6 flex items-center justify-center lg:justify-start space-x-2">
                  <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                  <span>
                    Join founders from Y Combinator, Techstars, and 500 Startups
                  </span>
                </p>
              </div>

              {/* Quick Contact Form - Enhanced */}
              <Card
                className={cn(
                  "bg-white/5 border-white/10 backdrop-blur-sm transition-all duration-1000 hover:bg-white/10",
                  isFooterVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
                style={{ animationDelay: "200ms" }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-secondary-400" />
                    <h3 className="text-xl font-bold text-white">
                      Quick Question?
                    </h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Live</span>
                    </div>
                  </div>
                  <p className="text-primary-100 text-sm mb-6">
                    Get a personal response within 24 hours
                  </p>

                  {quickContactState.isSubmitted ? (
                    <div className="text-center py-6 animate-in zoom-in-50 duration-500">
                      <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4 animate-bounce" />
                      <h4 className="text-white font-semibold mb-2 flex items-center justify-center space-x-2">
                        <span>Message Sent!</span>
                        <Sparkles className="w-4 h-4 text-yellow-400" />
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
                        className="bg-white/10 border-white/20 text-white placeholder:text-primary-200 focus:ring-2 focus:ring-secondary-400 transition-all duration-300"
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
                        className="bg-white/10 border-white/20 text-white placeholder:text-primary-200 focus:ring-2 focus:ring-secondary-400 transition-all duration-300"
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
                        className="bg-white/10 border-white/20 text-white placeholder:text-primary-200 min-h-[80px] focus:ring-2 focus:ring-secondary-400 transition-all duration-300"
                        disabled={quickContactState.isSubmitting}
                      />
                      {quickContactState.error && (
                        <div className="flex items-center space-x-2 text-red-400 text-sm animate-in slide-in-from-top-2 duration-300">
                          <AlertCircle className="w-4 h-4" />
                          <span>{quickContactState.error}</span>
                        </div>
                      )}
                      <Button
                        type="submit"
                        disabled={quickContactState.isSubmitting}
                        className={cn(
                          "w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold transition-all duration-300",
                          "hover:scale-105 hover:shadow-lg",
                          quickContactState.isSubmitting && "animate-pulse",
                        )}
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
            {/* Brand Section - Enhanced */}
            <div
              className={cn(
                "lg:col-span-4 px-4 transition-all duration-1000",
                isFooterVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
              style={{ animationDelay: "400ms" }}
            >
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg opacity-20 blur group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors duration-300">
                    The Brand Whisperer
                  </div>
                  <div className="text-sm text-dark-600 flex items-center space-x-2">
                    <span>Building brands that scale</span>
                    <Activity className="w-3 h-3 text-green-500 animate-pulse" />
                  </div>
                </div>
              </Link>

              <p className="text-dark-600 mb-8 max-w-md leading-relaxed">
                We build brands for the company you're becoming, not just the
                company you are. With 30+ years of experience and 150+ startup
                projects, we prevent the expensive rebrands that break momentum
                during hypergrowth.
              </p>

              {/* Enhanced Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-dark-600 hover:text-primary-600 transition-colors duration-300 group">
                  <Mail className="w-5 h-5 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="mailto:hello@brandwhisperer.io"
                    className="transition-colors duration-300"
                    onClick={() => trackLinkClick("Email", "contact")}
                  >
                    hello@brandwhisperer.io
                  </a>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center space-x-3 text-dark-600 hover:text-primary-600 transition-colors duration-300 group">
                  <Phone className="w-5 h-5 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="tel:+16177923378"
                    className="transition-colors duration-300"
                    onClick={() => trackLinkClick("Phone", "contact")}
                  >
                    +1 (617) 792-3378
                  </a>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center space-x-3 text-dark-600 group">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span>Boston, MA</span>
                  <Badge className="ml-2 bg-green-500/20 text-green-600 text-xs">
                    <Wifi className="w-3 h-3 mr-1" />
                    Online
                  </Badge>
                </div>
                <div className="flex items-center space-x-3 text-dark-600">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span className="flex items-center space-x-2">
                    <span>
                      EST:{" "}
                      {currentTime.toLocaleTimeString("en-US", {
                        timeZone: "America/New_York",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Coffee className="w-3 h-3 text-amber-500" />
                      <span className="text-xs text-amber-600">Available</span>
                    </div>
                  </span>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <div key={social.name} className="relative group">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-12 h-12 bg-dark-100 rounded-lg flex items-center justify-center text-dark-600 transition-all duration-300 group relative",
                        "hover:text-white hover:scale-110 hover:shadow-lg",
                        social.color,
                      )}
                      aria-label={social.name}
                      onClick={() => trackLinkClick(social.name, "social")}
                      onMouseEnter={() => setHoveredSocial(social.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      {social.icon}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 absolute top-1 right-1 transition-opacity duration-300" />
                    </a>

                    {/* Enhanced Tooltip */}
                    <div
                      className={cn(
                        "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-dark-900 text-white text-xs rounded-lg shadow-lg transition-all duration-300 pointer-events-none",
                        "opacity-0 translate-y-2",
                        hoveredSocial === social.name &&
                          "opacity-100 translate-y-0",
                      )}
                    >
                      <div className="font-medium">{social.name}</div>
                      <div className="text-gray-300 text-xs">
                        {social.description}
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-900"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Links Sections - Enhanced */}
            <div
              className={cn(
                "lg:col-span-8 px-4 transition-all duration-1000",
                isFooterVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
              style={{ animationDelay: "600ms" }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
                {Object.entries(footerLinks).map(
                  ([category, links], categoryIndex) => (
                    <div
                      key={category}
                      className={cn(
                        "transition-all duration-500",
                        isFooterVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4",
                      )}
                      style={{
                        animationDelay: `${800 + categoryIndex * 100}ms`,
                      }}
                    >
                      <h3 className="text-lg font-semibold text-dark-900 mb-6">
                        {category}
                      </h3>
                      <ul className="space-y-4">
                        {links.map((link, linkIndex) => (
                          <li
                            key={link.name}
                            className={cn(
                              "transition-all duration-300",
                              isFooterVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-4",
                            )}
                            style={{
                              animationDelay: `${1000 + categoryIndex * 100 + linkIndex * 50}ms`,
                            }}
                          >
                            <Link
                              to={link.path}
                              className="text-dark-600 hover:text-primary-600 transition-all duration-300 inline-flex items-center group hover:translate-x-1"
                              onClick={() =>
                                trackLinkClick(
                                  link.name,
                                  category.toLowerCase(),
                                )
                              }
                            >
                              <span className="group-hover:underline underline-offset-2">
                                {link.name}
                              </span>
                              <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <Separator className="my-12 bg-dark-200" />

          {/* Enhanced Bottom Bar */}
          <div
            className={cn(
              "px-4 transition-all duration-1000",
              isFooterVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
            style={{ animationDelay: "1200ms" }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="text-dark-600 text-sm text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-1">
                  <span>
                    © {currentYear} The Brand Whisperer. All rights reserved.
                  </span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                </div>
                <p className="text-xs mt-1 flex items-center justify-center lg:justify-start space-x-2">
                  <span>Building brands that scale since 1995.</span>
                  <span>•</span>
                  <span>Made with</span>
                  <Coffee className="w-3 h-3 text-amber-500" />
                  <span>in Boston.</span>
                  <span>•</span>
                  <Badge className="bg-green-500/20 text-green-600 text-xs">
                    <Globe className="w-3 h-3 mr-1" />
                    Online
                  </Badge>
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-2 text-sm">
                <Link
                  to="/privacy"
                  className="text-dark-600 hover:text-primary-600 transition-colors duration-200 hover:underline underline-offset-2"
                  onClick={() => trackLinkClick("Privacy Policy", "legal")}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-600 hover:text-primary-600 transition-colors duration-200 hover:underline underline-offset-2"
                  onClick={() => trackLinkClick("Terms of Service", "legal")}
                >
                  Terms of Service
                </Link>
                <Link
                  to="/sitemap"
                  className="text-dark-600 hover:text-primary-600 transition-colors duration-200 hover:underline underline-offset-2"
                  onClick={() => trackLinkClick("Sitemap", "navigation")}
                >
                  Sitemap
                </Link>
                <Badge className="bg-primary-500/20 text-primary-600 text-xs">
                  v2.1.0
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-2xl transition-all duration-300 group",
          showScrollTop
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-75 pointer-events-none",
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 animate-pulse opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </Button>
    </footer>
  );
};

export default Footer;
