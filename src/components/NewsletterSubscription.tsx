import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
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
  AlertCircle,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
  gradient: string;
  kitFormId?: string;
}

interface NewsletterSubscriptionProps {
  variant?: "compact" | "full" | "modal";
  defaultTier?: string;
  showAllTiers?: boolean;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
  variant = "full",
  defaultTier = "free",
  showAllTiers = true,
}) => {
  const [selectedTier, setSelectedTier] = useState(defaultTier);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tiers: NewsletterTier[] = [
    {
      id: "free",
      name: "Weekly Insights",
      price: "Free",
      description: "Essential startup brand insights delivered weekly",
      icon: <Mail className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      kitFormId: "your-kit-free-form-id", // Replace with actual Kit.com form ID
      features: [
        "Weekly startup brand breakdowns",
        "Growth stage frameworks",
        "Tactical brand building tips",
        "Case studies from my portfolio",
        "Resource recommendations",
      ],
    },
    {
      id: "daily",
      name: "Daily Mastery",
      price: "$19/mo",
      description: "Daily brand insights for serious founders",
      popular: true,
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-primary-500 to-secondary-500",
      kitFormId: "your-kit-daily-form-id", // Replace with actual Kit.com form ID
      features: [
        "Everything in Weekly, plus:",
        "5 daily insights Monday-Friday",
        "Detailed brand teardowns",
        "Scale-up playbooks by stage",
        "Tool & template recommendations",
        "Enhanced tactical content",
      ],
    },
    {
      id: "premium",
      name: "Brand Accelerator",
      price: "$79/mo",
      description: "VIP access with direct mentorship",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-500",
      kitFormId: "your-kit-premium-form-id", // Replace with actual Kit.com form ID
      features: [
        "Everything in Daily, plus:",
        "Monthly brand playbook PDFs",
        "Bi-weekly expert interviews",
        "Live monthly webinars",
        "Exclusive templates & frameworks",
        "Private community access",
        "Monthly office hours with me",
      ],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!email || !firstName.trim()) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const selectedTierData = tiers.find((tier) => tier.id === selectedTier);

      // Kit.com integration - you'll replace this with actual Kit.com API calls
      const kitData = {
        email,
        first_name: firstName,
        tier: selectedTier,
        tier_name: selectedTierData?.name,
        tier_price: selectedTierData?.price,
        source: "website_newsletter_signup",
        timestamp: new Date().toISOString(),
      };

      // For paid tiers, you'd redirect to Kit.com checkout or your payment processor
      if (selectedTier !== "free") {
        // Example Kit.com checkout URL structure - replace with actual URLs
        const checkoutUrls = {
          daily: "https://your-kit-account.kit.com/checkout/daily-mastery",
          premium:
            "https://your-kit-account.kit.com/checkout/brand-accelerator",
        };

        // Store email data temporarily and redirect to checkout
        localStorage.setItem("pendingSubscription", JSON.stringify(kitData));
        window.location.href =
          checkoutUrls[selectedTier as keyof typeof checkoutUrls];
        return;
      }

      // For free tier, submit directly to Kit.com
      const response = await fetch(
        `https://api.kit.com/v3/forms/${selectedTierData?.kitFormId}/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.VITE_KIT_API_KEY}`, // Add this to your .env
          },
          body: JSON.stringify(kitData),
        },
      );

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setIsSubmitted(true);

      // Track successful subscription
      if (window.gtag) {
        window.gtag("event", "newsletter_subscribe", {
          event_category: "conversion",
          event_label: `newsletter_${selectedTier}`,
          tier: selectedTier,
          tier_price: selectedTierData?.price,
        });
      }

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setFirstName("");
      }, 5000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedTierData = tiers.find((tier) => tier.id === selectedTier);

  if (variant === "compact") {
    return (
      <Card className="bg-dark-900/50 border-dark-700">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Join 2,500+ Founders
            </h3>
            <p className="text-gray-300 text-sm">
              Get weekly startup brand insights
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-dark-800 border-dark-600 text-white"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900"
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Subscribe Free"
              )}
            </Button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-3">
            Free • No spam • Unsubscribe anytime
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isSubmitted) {
    return (
      <Card className="bg-dark-900/50 border-dark-700">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            {selectedTier === "free"
              ? "Welcome to the Community!"
              : "Subscription Created!"}
          </h3>
          <p className="text-gray-300 mb-6">
            {selectedTier === "free"
              ? "Check your email for a welcome message and your first insights."
              : "Complete your payment to unlock your premium content."}
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Email confirmed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>First email within 24h</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Tier Selection */}
      {showAllTiers && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={cn(
                "relative cursor-pointer transition-all duration-300 hover:scale-105",
                selectedTier === tier.id
                  ? "bg-dark-800 border-secondary-500 ring-2 ring-secondary-500/50"
                  : "bg-dark-900/50 border-dark-700 hover:border-dark-600",
                tier.popular && "ring-2 ring-primary-500/50",
              )}
              onClick={() => setSelectedTier(tier.id)}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-gradient-to-br",
                    tier.gradient,
                  )}
                >
                  {tier.icon}
                </div>
                <CardTitle className="text-white">{tier.name}</CardTitle>
                <div className="text-3xl font-bold text-white">
                  {tier.price}
                  {tier.price !== "Free" && (
                    <span className="text-sm text-gray-400">/month</span>
                  )}
                </div>
                <CardDescription className="text-gray-300">
                  {tier.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span
                        className={cn(
                          "text-sm",
                          feature.endsWith(":")
                            ? "text-gray-400 font-medium"
                            : "text-gray-300",
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Subscription Form */}
      <Card className="bg-dark-900/50 border-dark-700">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div
              className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br",
                selectedTierData?.gradient,
              )}
            >
              {selectedTierData?.icon}
            </div>
            <div>
              <CardTitle className="text-white">
                Subscribe to {selectedTierData?.name}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {selectedTierData?.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-red-400 font-semibold mb-1">
                    Subscription Error
                  </h4>
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-white mb-2 block">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-dark-800 border-dark-600 text-white"
                  placeholder="Your first name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark-800 border-dark-600 text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="bg-dark-800/50 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3">What you'll get:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {selectedTierData?.features
                  .slice(0, 4)
                  .map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
              </div>
              {selectedTierData && selectedTierData.features.length > 4 && (
                <p className="text-gray-400 text-sm mt-2">
                  + {selectedTierData.features.length - 4} more features
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className={cn(
                "w-full font-semibold text-base",
                selectedTier === "free"
                  ? "bg-secondary-500 hover:bg-secondary-600 text-dark-900"
                  : "bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white",
              )}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  {selectedTier === "free" ? (
                    <Mail className="w-5 h-5" />
                  ) : (
                    <Crown className="w-5 h-5" />
                  )}
                  <span>
                    {selectedTier === "free"
                      ? "Subscribe Free"
                      : `Subscribe for ${selectedTierData?.price}`}
                  </span>
                </div>
              )}
            </Button>

            <div className="text-center space-y-2">
              <p className="text-xs text-gray-400">
                {selectedTier === "free"
                  ? "Free forever • No credit card required • Unsubscribe anytime"
                  : "Cancel anytime • Secure payment • 7-day money-back guarantee"}
              </p>

              <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>2,500+ subscribers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterSubscription;
