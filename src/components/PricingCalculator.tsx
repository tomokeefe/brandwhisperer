import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";

const PricingCalculator = () => {
  const [formData, setFormData] = useState({
    fundingStage: "",
    teamSize: [10],
    timeline: "",
    services: [] as string[],
    complexity: "",
    equity: true,
  });

  const [estimate, setEstimate] = useState({
    basePrice: 0,
    equityPercentage: 0,
    totalInvestment: 0,
    timeline: "",
    recommendedPackage: "",
  });

  const serviceOptions = [
    {
      id: "brand-strategy",
      name: "Brand Strategy & Positioning",
      basePrice: 8000,
    },
    { id: "visual-identity", name: "Visual Identity System", basePrice: 12000 },
    { id: "messaging", name: "Messaging Framework", basePrice: 5000 },
    { id: "guidelines", name: "Brand Guidelines", basePrice: 6000 },
    { id: "templates", name: "Marketing Templates", basePrice: 4000 },
    { id: "pitch-deck", name: "Pitch Deck Integration", basePrice: 3000 },
    { id: "website-design", name: "Website Design System", basePrice: 10000 },
    { id: "implementation", name: "Implementation Support", basePrice: 5000 },
  ];

  const fundingStageMultipliers = {
    "pre-seed": 0.8,
    seed: 1.0,
    "series-a-prep": 1.2,
    "series-a": 1.4,
    "series-b+": 1.6,
  };

  const complexityMultipliers = {
    simple: 0.8,
    moderate: 1.0,
    complex: 1.3,
    enterprise: 1.6,
  };

  const timelineMultipliers = {
    rush: 1.5,
    standard: 1.0,
    flexible: 0.9,
  };

  useEffect(() => {
    calculateEstimate();
  }, [formData]);

  const calculateEstimate = () => {
    let basePrice = 0;
    let equityPercentage = 0;
    let timeline = "8-12 weeks";
    let recommendedPackage = "Custom Package";

    // Calculate base price from selected services
    formData.services.forEach((serviceId) => {
      const service = serviceOptions.find((s) => s.id === serviceId);
      if (service) {
        basePrice += service.basePrice;
      }
    });

    // Apply multipliers
    const stageMultiplier =
      fundingStageMultipliers[
        formData.fundingStage as keyof typeof fundingStageMultipliers
      ] || 1;
    const complexityMultiplier =
      complexityMultipliers[
        formData.complexity as keyof typeof complexityMultipliers
      ] || 1;
    const timelineMultiplier =
      timelineMultipliers[
        formData.timeline as keyof typeof timelineMultipliers
      ] || 1;

    basePrice =
      basePrice * stageMultiplier * complexityMultiplier * timelineMultiplier;

    // Determine equity percentage and adjust pricing
    if (formData.equity) {
      if (basePrice <= 15000) {
        equityPercentage = 0.25;
        basePrice = basePrice * 0.7; // 30% discount for equity
      } else if (basePrice <= 30000) {
        equityPercentage = 0.2;
        basePrice = basePrice * 0.75; // 25% discount for equity
      } else {
        equityPercentage = 0.15;
        basePrice = basePrice * 0.8; // 20% discount for equity
      }
    }

    // Determine timeline
    if (formData.timeline === "rush") {
      timeline = "4-6 weeks";
    } else if (formData.timeline === "flexible") {
      timeline = "12-16 weeks";
    }

    // Recommend package
    if (basePrice <= 15000) {
      recommendedPackage = "Pre-Seed Package";
    } else if (basePrice <= 30000) {
      recommendedPackage = "Seed Growth Package";
    } else {
      recommendedPackage = "Series A Ready Package";
    }

    setEstimate({
      basePrice: Math.round(basePrice),
      equityPercentage,
      totalInvestment: Math.round(basePrice),
      timeline,
      recommendedPackage,
    });
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const getROIProjection = () => {
    const fundingBoost = estimate.basePrice * 0.15; // 15% valuation increase
    const customerAcquisitionImprovement = estimate.basePrice * 0.08; // 8% CAC improvement
    return Math.round(fundingBoost + customerAcquisitionImprovement);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge
          variant="outline"
          className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
        >
          Interactive Tool
        </Badge>
        <h2 className="text-display-md font-bold text-white mb-6">
          Brand Investment Calculator
        </h2>
        <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
          Get an instant estimate for your startup's brand investment. Customize
          based on your stage, needs, and timeline.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <Card className="bg-dark-900/50 border-dark-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center space-x-2">
              <Calculator className="w-6 h-6 text-secondary-400" />
              <span>Customize Your Package</span>
            </CardTitle>
            <CardDescription className="text-gray-300">
              Answer a few questions to get your personalized estimate.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Funding Stage */}
            <div>
              <Label className="text-white mb-3 block">Funding Stage</Label>
              <Select
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, fundingStage: value }))
                }
              >
                <SelectTrigger className="bg-dark-800 border-dark-600 text-white">
                  <SelectValue placeholder="Select your current stage" />
                </SelectTrigger>
                <SelectContent className="bg-dark-800 border-dark-600">
                  <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                  <SelectItem value="seed">Seed</SelectItem>
                  <SelectItem value="series-a-prep">Pre-Series A</SelectItem>
                  <SelectItem value="series-a">Series A</SelectItem>
                  <SelectItem value="series-b+">Series B+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Team Size */}
            <div>
              <Label className="text-white mb-3 block">
                Team Size: {formData.teamSize[0]} people
              </Label>
              <Slider
                value={formData.teamSize}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, teamSize: value }))
                }
                max={200}
                min={1}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>1</span>
                <span>50</span>
                <span>100</span>
                <span>200+</span>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <Label className="text-white mb-3 block">Project Timeline</Label>
              <Select
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, timeline: value }))
                }
              >
                <SelectTrigger className="bg-dark-800 border-dark-600 text-white">
                  <SelectValue placeholder="How soon do you need this?" />
                </SelectTrigger>
                <SelectContent className="bg-dark-800 border-dark-600">
                  <SelectItem value="rush">ASAP (Rush delivery)</SelectItem>
                  <SelectItem value="standard">Standard timeline</SelectItem>
                  <SelectItem value="flexible">
                    Flexible (Best price)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Services */}
            <div>
              <Label className="text-white mb-3 block">Services Needed</Label>
              <div className="grid grid-cols-1 gap-3">
                {serviceOptions.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center space-x-3 p-3 bg-dark-800 rounded-lg"
                  >
                    <Checkbox
                      id={service.id}
                      checked={formData.services.includes(service.id)}
                      onCheckedChange={() => handleServiceToggle(service.id)}
                      className="border-dark-600"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor={service.id}
                        className="text-white text-sm cursor-pointer"
                      >
                        {service.name}
                      </Label>
                    </div>
                    <span className="text-secondary-400 text-sm">
                      ${service.basePrice.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complexity */}
            <div>
              <Label className="text-white mb-3 block">
                Project Complexity
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, complexity: value }))
                }
              >
                <SelectTrigger className="bg-dark-800 border-dark-600 text-white">
                  <SelectValue placeholder="How complex is your brand?" />
                </SelectTrigger>
                <SelectContent className="bg-dark-800 border-dark-600">
                  <SelectItem value="simple">
                    Simple (Single market, clear positioning)
                  </SelectItem>
                  <SelectItem value="moderate">
                    Moderate (Multiple products, some complexity)
                  </SelectItem>
                  <SelectItem value="complex">
                    Complex (Multiple markets, regulatory)
                  </SelectItem>
                  <SelectItem value="enterprise">
                    Enterprise (Global, highly regulated)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Equity Option */}
            <div className="flex items-center space-x-3 p-4 bg-dark-800 rounded-lg">
              <Checkbox
                id="equity"
                checked={formData.equity}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    equity: checked as boolean,
                  }))
                }
                className="border-dark-600"
              />
              <div className="flex-1">
                <Label htmlFor="equity" className="text-white cursor-pointer">
                  Include equity participation for reduced cash investment
                </Label>
                <p className="text-sm text-gray-400">
                  Save 20-30% on cash costs with equity alignment
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="bg-dark-900/50 border-dark-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center space-x-2">
              <DollarSign className="w-6 h-6 text-secondary-400" />
              <span>Your Investment Estimate</span>
            </CardTitle>
            <CardDescription className="text-gray-300">
              Based on your selections, here's your customized package.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Estimate */}
            <div className="text-center p-6 bg-primary-900/20 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">
                ${estimate.totalInvestment.toLocaleString()}
              </div>
              {formData.equity && (
                <div className="text-secondary-400 font-semibold">
                  + {estimate.equityPercentage}% equity
                </div>
              )}
              <div className="text-gray-300 text-sm mt-2">
                {estimate.recommendedPackage}
              </div>
            </div>

            {/* Package Details */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-dark-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-secondary-400" />
                  <span className="text-white">Timeline</span>
                </div>
                <span className="text-secondary-400">{estimate.timeline}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-dark-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-secondary-400" />
                  <span className="text-white">Services Included</span>
                </div>
                <span className="text-secondary-400">
                  {formData.services.length} services
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-dark-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-secondary-400" />
                  <span className="text-white">Projected ROI</span>
                </div>
                <span className="text-green-400">
                  +${getROIProjection().toLocaleString()}
                </span>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">What's Included:</h4>
              <ul className="space-y-2">
                {formData.services.map((serviceId) => {
                  const service = serviceOptions.find(
                    (s) => s.id === serviceId,
                  );
                  return service ? (
                    <li key={serviceId} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">
                        {service.name}
                      </span>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>

            {/* Equity Benefits */}
            {formData.equity && (
              <div className="p-4 bg-secondary-900/20 border border-secondary-500/30 rounded-lg">
                <h4 className="text-secondary-400 font-semibold mb-2 flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Equity Partnership Benefits</span>
                </h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• 20-30% reduced cash investment</li>
                  <li>• Ongoing brand advisory support</li>
                  <li>• Success-aligned partnership</li>
                  <li>• Priority support during growth</li>
                </ul>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Custom Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-dark-600 text-gray-300 hover:bg-dark-800"
              >
                <Link to="/services">View Detailed Packages</Link>
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 text-center">
              *Estimate based on selected options. Final pricing determined
              during consultation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PricingCalculator;
