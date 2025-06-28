import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  BarChart3,
  FileText,
  Target,
  Lightbulb,
} from "lucide-react";

interface LeadMagnetProps {
  type:
    | "assessment"
    | "guide"
    | "template"
    | "calculator"
    | "case-study"
    | "newsletter";
  title: string;
  description: string;
  benefits: string[];
  buttonText?: string;
  badge?: string;
  className?: string;
  variant?: "default" | "compact" | "sidebar";
  stats?: {
    downloads?: string;
    rating?: string;
    users?: string;
  };
}

const LeadMagnet: React.FC<LeadMagnetProps> = ({
  type,
  title,
  description,
  benefits,
  buttonText = "Download Free",
  badge = "Free Resource",
  className = "",
  variant = "default",
  stats,
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getIcon = () => {
    switch (type) {
      case "assessment":
        return Target;
      case "guide":
        return FileText;
      case "template":
        return Download;
      case "calculator":
        return BarChart3;
      case "case-study":
        return Star;
      case "newsletter":
        return Users;
      default:
        return Download;
    }
  };

  const getGradient = () => {
    switch (type) {
      case "assessment":
        return "from-blue-500 to-purple-500";
      case "guide":
        return "from-green-500 to-emerald-500";
      case "template":
        return "from-orange-500 to-red-500";
      case "calculator":
        return "from-secondary-500 to-amber-500";
      case "case-study":
        return "from-purple-500 to-pink-500";
      case "newsletter":
        return "from-primary-500 to-blue-500";
      default:
        return "from-primary-500 to-secondary-500";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Track conversion
      if (window.gtag) {
        window.gtag("event", "lead_magnet_conversion", {
          event_category: "lead_generation",
          event_label: type,
          lead_magnet_type: type,
          page_location: window.location.href,
        });
      }
    }, 1000);
  };

  const Icon = getIcon();

  if (variant === "compact") {
    return (
      <Card className={`bg-dark-900/50 border-dark-700 ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 bg-gradient-to-br ${getGradient()} rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white truncate">
                {title}
              </h4>
              <p className="text-xs text-gray-400 truncate">{description}</p>
            </div>
            <Button
              size="sm"
              className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 flex-shrink-0"
            >
              Get Free
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === "sidebar") {
    return (
      <Card className={`bg-dark-900/50 border-dark-700 ${className}`}>
        <CardHeader className="pb-3">
          <Badge className="w-fit bg-secondary-500/20 text-secondary-400 border-secondary-500/30 mb-2">
            {badge}
          </Badge>
          <div className="flex items-center space-x-3 mb-3">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${getGradient()} rounded-lg flex items-center justify-center`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg text-white leading-tight">
                {title}
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-gray-300 text-sm">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          {isSubmitted ? (
            <div className="text-center py-4">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-green-400 font-medium">
                Check your email!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-dark-800 border-dark-600 text-white text-sm"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900 text-sm"
              >
                {isSubmitting ? "Sending..." : buttonText}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-dark-900/50 border-dark-700 ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge className="bg-secondary-500/20 text-secondary-400 border-secondary-500/30">
            {badge}
          </Badge>
          {stats && (
            <div className="flex items-center space-x-3 text-xs text-gray-400">
              {stats.downloads && (
                <div className="flex items-center space-x-1">
                  <Download className="w-3 h-3" />
                  <span>{stats.downloads}</span>
                </div>
              )}
              {stats.rating && (
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3" />
                  <span>{stats.rating}</span>
                </div>
              )}
              {stats.users && (
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{stats.users}</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-start space-x-4">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${getGradient()} rounded-2xl flex items-center justify-center flex-shrink-0`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-xl text-white leading-tight mb-2">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-300">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {benefits.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-3">
              What you'll get:
            </h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {isSubmitted ? (
          <div className="text-center py-6">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Download Sent!
            </h3>
            <p className="text-gray-300 mb-4">
              Check your email for the download link.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button
                asChild
                className="bg-secondary-500 hover:bg-secondary-600 text-dark-900"
              >
                <a href="/contact">Schedule Consultation</a>
              </Button>
              <Button
                variant="outline"
                className="border-dark-600 text-gray-300 hover:bg-dark-800"
                onClick={() => setIsSubmitted(false)}
              >
                Get Another Resource
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label
                htmlFor="lead-email"
                className="text-white text-sm mb-2 block"
              >
                Enter your email for instant access:
              </Label>
              <Input
                id="lead-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-dark-800 border-dark-600 text-white"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-dark-900 border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>{buttonText}</span>
                </div>
              )}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              No spam. Unsubscribe anytime. Used by 150+ funded startups.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default LeadMagnet;
