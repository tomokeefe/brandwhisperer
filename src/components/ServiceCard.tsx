import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  pricing: string;
  equity: string;
  features: string[];
  badge?: string;
  highlighted?: boolean;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  pricing,
  equity,
  features,
  badge,
  highlighted = false,
  link,
}) => {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
        highlighted
          ? "border-2 border-secondary-500 bg-gradient-to-br from-secondary-500/5 to-primary-500/5"
          : "border-dark-700 bg-dark-900/50 hover:border-dark-600"
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
      )}

      {badge && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-secondary-500 text-dark-900 hover:bg-secondary-600">
            {badge}
          </Badge>
        </div>
      )}

      <CardHeader className="pb-4">
        <CardTitle
          className={`text-2xl ${highlighted ? "text-white" : "text-white"}`}
        >
          {title}
        </CardTitle>
        <CardDescription className="text-gray-400 text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">{pricing}</span>
            <span className="text-gray-400">+ {equity} equity</span>
          </div>
          <p className="text-sm text-gray-500">
            Perfect for pre-Series A startups
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white">What's included:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className={`w-full ${
            highlighted
              ? "bg-secondary-500 hover:bg-secondary-600 text-dark-900"
              : "bg-primary-600 hover:bg-primary-700 text-white"
          } font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105`}
        >
          <Link
            to={link}
            className="inline-flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>

        {/* Additional Info */}
        <div className="pt-4 border-t border-dark-700">
          <p className="text-xs text-gray-500 text-center">
            90-day delivery • Equity aligned success
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
