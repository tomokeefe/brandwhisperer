import React from "react";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Clock,
  Users,
  BookOpen,
  Video,
  MessageCircle,
  Download,
  Star,
  Crown,
  Zap,
  Calendar,
  CheckCircle,
  ArrowRight,
  Quote,
  TrendingUp,
  Target,
  Lightbulb,
  Award,
  Shield,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: tiersRef, isVisible: tiersVisible } = useScrollAnimation();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } =
    useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      company: "Series A, $12M raised",
      quote:
        "The daily insights helped us pivot our brand strategy before our Series A. Tom's frameworks saved us months of work.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b589?w=64&h=64&fit=crop&crop=face",
      tier: "Daily Mastery",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, GrowthLab",
      company: "Pre-Seed, $2M raised",
      quote:
        "The weekly breakdowns are gold. I've implemented 3 major brand changes that directly led to better investor conversations.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      tier: "Weekly Insights",
    },
    {
      name: "Emily Foster",
      role: "CMO, DataStream",
      company: "Series B, $25M raised",
      quote:
        "The monthly office hours are incredible. Tom's direct feedback helped us nail our rebrand for Series B.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      tier: "Brand Accelerator",
    },
  ];

  const stats = [
    { label: "Active Subscribers", value: "2,500+", icon: Users },
    { label: "Avg. Open Rate", value: "67%", icon: Mail },
    { label: "Portfolio Companies", value: "150+", icon: TrendingUp },
    { label: "Years Experience", value: "30+", icon: Award },
  ];

  const comparisons = [
    {
      feature: "Weekly startup brand breakdowns",
      free: true,
      daily: true,
      premium: true,
    },
    {
      feature: "Growth stage frameworks",
      free: true,
      daily: true,
      premium: true,
    },
    {
      feature: "Case studies from portfolio",
      free: true,
      daily: true,
      premium: true,
    },
    {
      feature: "Daily insights (Mon-Fri)",
      free: false,
      daily: true,
      premium: true,
    },
    {
      feature: "Detailed brand teardowns",
      free: false,
      daily: true,
      premium: true,
    },
    {
      feature: "Scale-up playbooks by stage",
      free: false,
      daily: true,
      premium: true,
    },
    {
      feature: "Monthly brand playbook PDFs",
      free: false,
      daily: false,
      premium: true,
    },
    {
      feature: "Bi-weekly expert interviews",
      free: false,
      daily: false,
      premium: true,
    },
    {
      feature: "Live monthly webinars",
      free: false,
      daily: false,
      premium: true,
    },
    {
      feature: "Private community access",
      free: false,
      daily: false,
      premium: true,
    },
    {
      feature: "Monthly office hours with Tom",
      free: false,
      daily: false,
      premium: true,
    },
  ];

  const recentContent = [
    {
      title: "Why Canva's Rebrand Actually Makes Perfect Sense",
      type: "Brand Breakdown",
      tier: "All Tiers",
      date: "3 days ago",
      description:
        "Deep dive into Canva's strategic rebrand and what it signals about their Series D plans.",
    },
    {
      title: "The $50M Mistake: When Linear Almost Rebranded",
      type: "Case Study",
      tier: "Daily & Premium",
      date: "1 week ago",
      description:
        "How Linear's brand consistency during hypergrowth saved them from an expensive rebrand.",
    },
    {
      title: "Pitch Deck Brand Signals That VCs Actually Notice",
      type: "Investor Insights",
      tier: "Premium Only",
      date: "2 weeks ago",
      description:
        "The subtle brand elements that make VCs take your startup seriously (with examples).",
    },
  ];

  return (
    <div className="bg-dark-950 pb-16">
      <SEO
        title="The Brand Whisperer Newsletter - Startup Brand Insights"
        description="Join 2,500+ founders getting weekly startup brand insights. Free tier available, premium tiers with daily insights and direct access to Tom."
        keywords="startup newsletter, brand strategy newsletter, startup branding insights, founder newsletter"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative py-20 lg:py-28 overflow-hidden transition-all duration-700 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary-600/10 text-secondary-400 text-sm font-medium px-4 py-2 rounded-full border border-secondary-500/20 mb-6">
              <Sparkles className="w-4 h-4" />3 Tiers Available
            </div>

            <h1 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              The Newsletter That Prevents{" "}
              <span className="text-secondary-400">$500K+ Rebrands</span>
            </h1>

            <p className="text-body-lg text-gray-300 leading-relaxed mb-8">
              Join 2,500+ founders who get actionable brand insights before they
              need them. From weekly frameworks to daily tactical tips to VIP
              mentorship—choose your level of growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-dark-900"
              >
                <a href="#subscribe">Start Free</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-white hover:text-dark-900"
              >
                <a href="#tiers">Compare Tiers</a>
              </Button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
                statsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-secondary-400/10 border border-secondary-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-secondary-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Content Preview */}
      <section
        ref={contentRef}
        className={`section-spacing bg-dark-900/30 transition-all duration-700 ${
          contentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-primary-500/30 text-primary-400 bg-primary-500/10"
            >
              Latest Content
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              What You've Been Missing
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Real insights from real startup brand challenges. Here's what
              subscribers received recently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentContent.map((content, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 card-hover"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-primary-500/20 text-primary-400 text-xs">
                      {content.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-dark-600 text-gray-400"
                    >
                      {content.tier}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white leading-tight">
                    {content.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {content.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {content.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tier Comparison */}
      <section id="tiers" className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Choose Your Level
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              From Weekly Insights to VIP Access
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Start free and upgrade as your startup grows. Every tier builds on
              the previous.
            </p>
          </div>

          {/* Feature Comparison Table */}
          <div className="bg-dark-900/50 rounded-xl border border-dark-700 overflow-hidden mb-12">
            <div className="grid grid-cols-4 gap-0 border-b border-dark-700">
              <div className="p-6 bg-dark-800/50">
                <h3 className="text-lg font-semibold text-white">Features</h3>
              </div>
              <div className="p-6 text-center">
                <div className="mb-2">
                  <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white">Weekly</h4>
                  <p className="text-sm text-gray-400">Free</p>
                </div>
              </div>
              <div className="p-6 text-center bg-primary-500/5 border-x border-primary-500/20">
                <div className="mb-2">
                  <Zap className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white">Daily</h4>
                  <p className="text-sm text-gray-400">$19/mo</p>
                </div>
                <Badge className="bg-primary-500/20 text-primary-400 text-xs">
                  Most Popular
                </Badge>
              </div>
              <div className="p-6 text-center">
                <div className="mb-2">
                  <Crown className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white">Premium</h4>
                  <p className="text-sm text-gray-400">$79/mo</p>
                </div>
              </div>
            </div>

            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-0 border-b border-dark-700 last:border-b-0"
              >
                <div className="p-4 bg-dark-800/30">
                  <span className="text-gray-300 text-sm">
                    {comparison.feature}
                  </span>
                </div>
                <div className="p-4 text-center">
                  {comparison.free ? (
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  ) : (
                    <div className="w-5 h-5 mx-auto"></div>
                  )}
                </div>
                <div className="p-4 text-center bg-primary-500/5">
                  {comparison.daily ? (
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  ) : (
                    <div className="w-5 h-5 mx-auto"></div>
                  )}
                </div>
                <div className="p-4 text-center">
                  {comparison.premium ? (
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  ) : (
                    <div className="w-5 h-5 mx-auto"></div>
                  )}
                </div>
              </div>
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
              className="mb-6 border-green-500/30 text-green-400 bg-green-500/10"
            >
              <Star className="w-4 h-4 mr-2" />
              Subscriber Stories
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Real Results from Real Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-dark-900/50 border-dark-700">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-secondary-400 mb-4" />
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <Badge className="mt-4 bg-primary-500/20 text-primary-400 text-xs">
                    {testimonial.tier} Subscriber
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section id="subscribe" className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge
                variant="outline"
                className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
              >
                <Shield className="w-4 h-4 mr-2" />
                Risk-Free
              </Badge>
              <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
                Start Building a Better Brand Today
              </h2>
              <p className="text-body-lg text-gray-300">
                Join the founders who stay ahead of expensive brand mistakes.
              </p>
            </div>

            <NewsletterSubscription showAllTiers={true} />

            <div className="text-center mt-12 space-y-4">
              <p className="text-sm text-gray-400">
                Questions about the newsletter?{" "}
                <Link
                  to="/contact"
                  className="text-secondary-400 hover:text-secondary-300 underline"
                >
                  Get in touch
                </Link>
              </p>

              <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Weekly on Tuesdays</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
