import React, { useState, useEffect } from "react";
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
import { Progress } from "@/components/ui/progress";
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Users,
  Target,
  Zap,
  Award,
  BarChart3,
  ArrowRight,
  Info,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ROIProjection {
  category: string;
  yearOneImpact: number;
  yearTwoImpact: number;
  yearThreeImpact: number;
  description: string;
  confidence: "high" | "medium" | "low";
}

interface BusinessMetrics {
  currentRevenue: number;
  targetRevenue: number;
  customerAcquisitionCost: number;
  customerLifetimeValue: number;
  conversionRate: number;
  brandAwareness: number;
  employeeCount: number;
  marketingSpend: number;
}

const EnhancedROICalculator = () => {
  const [activeTab, setActiveTab] = useState<"investment" | "roi">(
    "investment",
  );
  const [businessMetrics, setBusinessMetrics] = useState<BusinessMetrics>({
    currentRevenue: 1000000,
    targetRevenue: 5000000,
    customerAcquisitionCost: 150,
    customerLifetimeValue: 800,
    conversionRate: 2.5,
    brandAwareness: 15,
    employeeCount: 25,
    marketingSpend: 200000,
  });

  const [investmentDetails, setInvestmentDetails] = useState({
    fundingStage: "",
    investmentAmount: [25000],
    timeline: "",
    focusAreas: [] as string[],
    includeEquity: false,
    priorityMetric: "",
  });

  const [roiProjections, setROIProjections] = useState<ROIProjection[]>([]);
  const [totalROI, setTotalROI] = useState({
    threeYearReturn: 0,
    breakEvenMonths: 0,
    confidenceScore: 0,
    riskAdjustedReturn: 0,
  });

  const focusAreaOptions = [
    {
      id: "funding-readiness",
      name: "Funding & Investment Readiness",
      baseImpact: 0.25,
      description: "Improve valuation and investor confidence",
    },
    {
      id: "customer-acquisition",
      name: "Customer Acquisition & Conversion",
      baseImpact: 0.18,
      description: "Reduce CAC and improve conversion rates",
    },
    {
      id: "pricing-premium",
      name: "Premium Pricing Power",
      baseImpact: 0.15,
      description: "Command higher prices through brand strength",
    },
    {
      id: "talent-acquisition",
      name: "Talent Acquisition & Retention",
      baseImpact: 0.12,
      description: "Attract better talent and reduce turnover",
    },
    {
      id: "partnerships",
      name: "Strategic Partnerships",
      baseImpact: 0.1,
      description: "Enable better partnership opportunities",
    },
    {
      id: "market-expansion",
      name: "Market Expansion",
      baseImpact: 0.2,
      description: "Enter new markets more effectively",
    },
  ];

  const calculateROI = () => {
    const investment = investmentDetails.investmentAmount[0];
    const projections: ROIProjection[] = [];

    // Funding & Valuation Impact
    if (investmentDetails.focusAreas.includes("funding-readiness")) {
      const valuationBoost = Math.min(
        businessMetrics.currentRevenue * 0.3,
        investment * 8,
      );
      projections.push({
        category: "Valuation Increase",
        yearOneImpact: valuationBoost * 0.4,
        yearTwoImpact: valuationBoost * 0.7,
        yearThreeImpact: valuationBoost,
        description:
          "Improved brand credibility increases company valuation in funding rounds",
        confidence: "high",
      });
    }

    // Customer Acquisition Optimization
    if (investmentDetails.focusAreas.includes("customer-acquisition")) {
      const cacReduction = businessMetrics.customerAcquisitionCost * 0.25 * 12; // 25% CAC reduction
      const conversionImprovement = (businessMetrics.currentRevenue * 0.15) / 3; // 15% conversion improvement
      projections.push({
        category: "Customer Acquisition",
        yearOneImpact: (cacReduction + conversionImprovement) * 0.5,
        yearTwoImpact: cacReduction + conversionImprovement,
        yearThreeImpact: (cacReduction + conversionImprovement) * 1.5,
        description:
          "Better brand recognition reduces customer acquisition costs and improves conversion",
        confidence: "high",
      });
    }

    // Premium Pricing Power
    if (investmentDetails.focusAreas.includes("pricing-premium")) {
      const pricingPower = businessMetrics.currentRevenue * 0.08; // 8% pricing increase
      projections.push({
        category: "Premium Pricing",
        yearOneImpact: pricingPower * 0.3,
        yearTwoImpact: pricingPower * 0.7,
        yearThreeImpact: pricingPower,
        description:
          "Strong brand enables premium pricing and reduces price sensitivity",
        confidence: "medium",
      });
    }

    // Talent & HR Benefits
    if (investmentDetails.focusAreas.includes("talent-acquisition")) {
      const recruitmentSavings = businessMetrics.employeeCount * 5000; // $5k per employee saved
      const productivityGains = businessMetrics.currentRevenue * 0.05; // 5% productivity increase
      projections.push({
        category: "Talent & Productivity",
        yearOneImpact: recruitmentSavings * 0.5,
        yearTwoImpact: recruitmentSavings + productivityGains * 0.5,
        yearThreeImpact: recruitmentSavings + productivityGains,
        description:
          "Better employer brand reduces recruitment costs and improves employee productivity",
        confidence: "medium",
      });
    }

    // Partnership & Business Development
    if (investmentDetails.focusAreas.includes("partnerships")) {
      const partnershipValue = Math.min(
        businessMetrics.currentRevenue * 0.12,
        500000,
      );
      projections.push({
        category: "Strategic Partnerships",
        yearOneImpact: partnershipValue * 0.2,
        yearTwoImpact: partnershipValue * 0.6,
        yearThreeImpact: partnershipValue,
        description:
          "Professional brand opens doors to strategic partnerships and enterprise deals",
        confidence: "medium",
      });
    }

    // Market Expansion
    if (investmentDetails.focusAreas.includes("market-expansion")) {
      const expansionValue = businessMetrics.targetRevenue * 0.15;
      projections.push({
        category: "Market Expansion",
        yearOneImpact: expansionValue * 0.1,
        yearTwoImpact: expansionValue * 0.4,
        yearThreeImpact: expansionValue * 0.8,
        description:
          "Scalable brand system reduces costs and risks of entering new markets",
        confidence: "low",
      });
    }

    // Marketing Efficiency
    const marketingEfficiency = businessMetrics.marketingSpend * 0.2; // 20% efficiency gain
    projections.push({
      category: "Marketing Efficiency",
      yearOneImpact: marketingEfficiency * 0.5,
      yearTwoImpact: marketingEfficiency,
      yearThreeImpact: marketingEfficiency * 1.2,
      description:
        "Consistent brand messaging and assets improve marketing ROI and reduce costs",
      confidence: "high",
    });

    setROIProjections(projections);

    // Calculate totals
    const totalYearThree = projections.reduce(
      (sum, proj) => sum + proj.yearThreeImpact,
      0,
    );
    const threeYearReturn = ((totalYearThree - investment) / investment) * 100;

    // Calculate confidence score
    const confidenceWeights = { high: 1, medium: 0.7, low: 0.4 };
    const weightedConfidence =
      projections.reduce(
        (sum, proj) => sum + confidenceWeights[proj.confidence],
        0,
      ) / projections.length;

    // Calculate break-even point
    const monthlyReturn = totalYearThree / 36;
    const breakEvenMonths = Math.ceil(investment / monthlyReturn);

    // Risk-adjusted return
    const riskAdjustedReturn = threeYearReturn * weightedConfidence;

    setTotalROI({
      threeYearReturn,
      breakEvenMonths: Math.min(breakEvenMonths, 36),
      confidenceScore: weightedConfidence * 100,
      riskAdjustedReturn,
    });
  };

  useEffect(() => {
    calculateROI();
  }, [investmentDetails, businessMetrics]);

  const handleFocusAreaToggle = (areaId: string) => {
    setInvestmentDetails((prev) => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(areaId)
        ? prev.focusAreas.filter((id) => id !== areaId)
        : [...prev.focusAreas, areaId],
    }));
  };

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case "high":
        return "text-green-400";
      case "medium":
        return "text-yellow-400";
      case "low":
        return "text-orange-400";
      default:
        return "text-gray-400";
    }
  };

  const getROIColor = (roi: number) => {
    if (roi >= 300) return "text-green-400";
    if (roi >= 200) return "text-yellow-400";
    if (roi >= 100) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 lg:mb-12">
        <Badge
          variant="outline"
          className="mb-4 lg:mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
        >
          Advanced ROI Calculator
        </Badge>
        <h2 className="text-2xl sm:text-3xl lg:text-display-md font-bold text-white mb-4 lg:mb-6">
          Brand Investment ROI Calculator
        </h2>
        <p className="text-base sm:text-lg lg:text-body-lg text-gray-300 max-w-4xl mx-auto px-4">
          Calculate the detailed return on investment for your brand initiative.
          Get comprehensive projections across multiple business impact areas.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6 lg:mb-8">
        <div className="bg-dark-800/50 p-1 rounded-lg border border-dark-700 w-full max-w-md lg:w-auto">
          <button
            onClick={() => setActiveTab("investment")}
            className={cn(
              "w-1/2 lg:w-auto lg:px-6 py-3 rounded-md font-medium transition-all duration-200 text-sm lg:text-base",
              activeTab === "investment"
                ? "bg-secondary-600 text-white"
                : "text-gray-400 hover:text-white",
            )}
          >
            Investment Details
          </button>
          <button
            onClick={() => setActiveTab("roi")}
            className={cn(
              "w-1/2 lg:w-auto lg:px-6 py-3 rounded-md font-medium transition-all duration-200 text-sm lg:text-base",
              activeTab === "roi"
                ? "bg-secondary-600 text-white"
                : "text-gray-400 hover:text-white",
            )}
          >
            ROI Projections
          </button>
        </div>
      </div>

      {activeTab === "investment" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Business Metrics */}
          <Card className="bg-dark-800/50 border-dark-700">
            <CardHeader className="pb-4 lg:pb-6">
              <CardTitle className="text-lg lg:text-xl text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-secondary-400" />
                Current Business Metrics
              </CardTitle>
              <CardDescription className="text-sm lg:text-base">
                Enter your current business metrics for accurate ROI
                calculations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 lg:space-y-8">
              <div>
                <Label className="text-white mb-3 block text-sm lg:text-base">
                  Annual Revenue: $
                  {businessMetrics.currentRevenue.toLocaleString()}
                </Label>
                <div className="px-2">
                  <Slider
                    value={[businessMetrics.currentRevenue]}
                    onValueChange={([value]) =>
                      setBusinessMetrics((prev) => ({
                        ...prev,
                        currentRevenue: value,
                      }))
                    }
                    max={50000000}
                    min={100000}
                    step={100000}
                    className="w-full h-6 lg:h-8"
                  />
                </div>
                <div className="flex justify-between text-xs lg:text-sm text-gray-400 mt-2 px-2">
                  <span>$100K</span>
                  <span>$10M</span>
                  <span>$50M</span>
                </div>
              </div>

              <div>
                <Label className="text-white mb-3 block">
                  Revenue Goal (3 years): $
                  {businessMetrics.targetRevenue.toLocaleString()}
                </Label>
                <Slider
                  value={[businessMetrics.targetRevenue]}
                  onValueChange={([value]) =>
                    setBusinessMetrics((prev) => ({
                      ...prev,
                      targetRevenue: value,
                    }))
                  }
                  max={200000000}
                  min={businessMetrics.currentRevenue}
                  step={500000}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <Label className="text-white mb-3 block text-sm lg:text-base">
                    Customer CAC: ${businessMetrics.customerAcquisitionCost}
                  </Label>
                  <div className="px-2">
                    <Slider
                      value={[businessMetrics.customerAcquisitionCost]}
                      onValueChange={([value]) =>
                        setBusinessMetrics((prev) => ({
                          ...prev,
                          customerAcquisitionCost: value,
                        }))
                      }
                      max={1000}
                      min={10}
                      step={10}
                      className="w-full h-6 lg:h-8"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-white mb-3 block text-sm lg:text-base">
                    Customer LTV: ${businessMetrics.customerLifetimeValue}
                  </Label>
                  <div className="px-2">
                    <Slider
                      value={[businessMetrics.customerLifetimeValue]}
                      onValueChange={([value]) =>
                        setBusinessMetrics((prev) => ({
                          ...prev,
                          customerLifetimeValue: value,
                        }))
                      }
                      max={10000}
                      min={100}
                      step={50}
                      className="w-full h-6 lg:h-8"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <Label className="text-white mb-3 block text-sm lg:text-base">
                    Conversion Rate: {businessMetrics.conversionRate}%
                  </Label>
                  <div className="px-2">
                    <Slider
                      value={[businessMetrics.conversionRate]}
                      onValueChange={([value]) =>
                        setBusinessMetrics((prev) => ({
                          ...prev,
                          conversionRate: value,
                        }))
                      }
                      max={20}
                      min={0.1}
                      step={0.1}
                      className="w-full h-6 lg:h-8"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-white mb-3 block text-sm lg:text-base">
                    Brand Awareness: {businessMetrics.brandAwareness}%
                  </Label>
                  <div className="px-2">
                    <Slider
                      value={[businessMetrics.brandAwareness]}
                      onValueChange={([value]) =>
                        setBusinessMetrics((prev) => ({
                          ...prev,
                          brandAwareness: value,
                        }))
                      }
                      max={100}
                      min={1}
                      step={1}
                      className="w-full h-6 lg:h-8"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-white mb-3 block">
                  Annual Marketing Spend: $
                  {businessMetrics.marketingSpend.toLocaleString()}
                </Label>
                <Slider
                  value={[businessMetrics.marketingSpend]}
                  onValueChange={([value]) =>
                    setBusinessMetrics((prev) => ({
                      ...prev,
                      marketingSpend: value,
                    }))
                  }
                  max={2000000}
                  min={10000}
                  step={10000}
                />
              </div>
            </CardContent>
          </Card>

          {/* Investment Configuration */}
          <Card className="bg-dark-800/50 border-dark-700">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-secondary-400" />
                Investment Configuration
              </CardTitle>
              <CardDescription>
                Configure your brand investment parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-white mb-3 block">
                  Investment Amount: $
                  {investmentDetails.investmentAmount[0].toLocaleString()}
                </Label>
                <Slider
                  value={investmentDetails.investmentAmount}
                  onValueChange={(value) =>
                    setInvestmentDetails((prev) => ({
                      ...prev,
                      investmentAmount: value,
                    }))
                  }
                  max={200000}
                  min={5000}
                  step={5000}
                  className="w-full"
                />
              </div>

              <div>
                <Label className="text-white mb-3 block">Funding Stage</Label>
                <Select
                  onValueChange={(value) =>
                    setInvestmentDetails((prev) => ({
                      ...prev,
                      fundingStage: value,
                    }))
                  }
                >
                  <SelectTrigger className="bg-dark-700 border-dark-600 text-white">
                    <SelectValue placeholder="Select your funding stage" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-700 border-dark-600">
                    <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                    <SelectItem value="seed">Seed</SelectItem>
                    <SelectItem value="series-a-prep">Pre-Series A</SelectItem>
                    <SelectItem value="series-a">Series A</SelectItem>
                    <SelectItem value="series-b+">Series B+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-white mb-3 block">
                  Primary Focus Areas
                </Label>
                <div className="space-y-3">
                  {focusAreaOptions.map((area) => (
                    <div
                      key={area.id}
                      className="flex items-start gap-3 p-3 bg-dark-700/50 rounded-lg border border-dark-600"
                    >
                      <Checkbox
                        id={area.id}
                        checked={investmentDetails.focusAreas.includes(area.id)}
                        onCheckedChange={() => handleFocusAreaToggle(area.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <Label
                          htmlFor={area.id}
                          className="text-white font-medium cursor-pointer"
                        >
                          {area.name}
                        </Label>
                        <p className="text-sm text-gray-400 mt-1">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary-600/10 rounded-lg border border-secondary-500/20">
                <Checkbox
                  id="equity-option"
                  checked={investmentDetails.includeEquity}
                  onCheckedChange={(checked) =>
                    setInvestmentDetails((prev) => ({
                      ...prev,
                      includeEquity: checked as boolean,
                    }))
                  }
                />
                <div>
                  <Label
                    htmlFor="equity-option"
                    className="text-white font-medium cursor-pointer"
                  >
                    Include Equity Partnership
                  </Label>
                  <p className="text-sm text-gray-400">
                    Reduce cash investment by 20-30% with small equity stake
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "roi" && (
        <div className="space-y-8">
          {/* ROI Summary */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <Card className="bg-dark-800/50 border-dark-700 text-center">
              <CardContent className="p-4 lg:p-6">
                <div
                  className={cn(
                    "text-2xl lg:text-3xl font-bold mb-1 lg:mb-2",
                    getROIColor(totalROI.threeYearReturn),
                  )}
                >
                  {totalROI.threeYearReturn.toFixed(0)}%
                </div>
                <div className="text-xs lg:text-sm text-gray-400">
                  3-Year ROI
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-800/50 border-dark-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  {totalROI.breakEvenMonths}
                </div>
                <div className="text-sm text-gray-400">
                  Months to Break-Even
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-800/50 border-dark-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary-400 mb-2">
                  {totalROI.confidenceScore.toFixed(0)}%
                </div>
                <div className="text-sm text-gray-400">Confidence Score</div>
              </CardContent>
            </Card>

            <Card className="bg-dark-800/50 border-dark-700 text-center">
              <CardContent className="p-6">
                <div
                  className={cn(
                    "text-3xl font-bold mb-2",
                    getROIColor(totalROI.riskAdjustedReturn),
                  )}
                >
                  {totalROI.riskAdjustedReturn.toFixed(0)}%
                </div>
                <div className="text-sm text-gray-400">Risk-Adjusted ROI</div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Projections */}
          <Card className="bg-dark-800/50 border-dark-700">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary-400" />
                Detailed ROI Breakdown
              </CardTitle>
              <CardDescription>
                Year-by-year impact projections by category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {roiProjections.map((projection, index) => (
                  <div
                    key={index}
                    className="p-4 bg-dark-700/50 rounded-lg border border-dark-600"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {projection.category}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {projection.description}
                        </p>
                      </div>
                      <Badge
                        className={cn(
                          "ml-4",
                          projection.confidence === "high" &&
                            "bg-green-500/20 text-green-400 border-green-500/20",
                          projection.confidence === "medium" &&
                            "bg-yellow-500/20 text-yellow-400 border-yellow-500/20",
                          projection.confidence === "low" &&
                            "bg-orange-500/20 text-orange-400 border-orange-500/20",
                        )}
                      >
                        {projection.confidence} confidence
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">
                          ${projection.yearOneImpact.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-400">Year 1</div>
                        <Progress
                          value={
                            (projection.yearOneImpact /
                              projection.yearThreeImpact) *
                            100
                          }
                          className="h-2 mt-2"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">
                          ${projection.yearTwoImpact.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-400">Year 2</div>
                        <Progress
                          value={
                            (projection.yearTwoImpact /
                              projection.yearThreeImpact) *
                            100
                          }
                          className="h-2 mt-2"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-secondary-400">
                          ${projection.yearThreeImpact.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-400">Year 3</div>
                        <Progress value={100} className="h-2 mt-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Items & Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-dark-800/50 border-dark-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Success Factors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">
                        Consistent Implementation
                      </div>
                      <div className="text-sm text-gray-400">
                        Ensure brand guidelines are followed across all
                        touchpoints
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">
                        Team Alignment
                      </div>
                      <div className="text-sm text-gray-400">
                        Train your team on brand positioning and messaging
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">
                        Measurement & Tracking
                      </div>
                      <div className="text-sm text-gray-400">
                        Monitor brand metrics and adjust strategy based on data
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-dark-800/50 border-dark-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                  Risk Factors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">
                        Market Conditions
                      </div>
                      <div className="text-sm text-gray-400">
                        Economic downturns may impact customer behavior and
                        pricing power
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">
                        Competitive Response
                      </div>
                      <div className="text-sm text-gray-400">
                        Competitors may strengthen their brand positioning in
                        response
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">
                        Execution Quality
                      </div>
                      <div className="text-sm text-gray-400">
                        Poor implementation can significantly reduce expected
                        returns
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-secondary-600/10 to-secondary-500/10 border-secondary-500/20">
            <CardContent className="p-6 lg:p-8 text-center">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                Ready to Achieve These Results?
              </h3>
              <p className="text-sm lg:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
                Start your brand transformation today and unlock the growth
                potential shown in these projections.
              </p>
              <div className="flex flex-col gap-3 lg:gap-4 lg:flex-row lg:justify-center">
                <Button
                  size="lg"
                  className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 lg:px-8 py-3 text-base lg:text-lg font-semibold group min-h-[48px]"
                >
                  Get Custom Proposal
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary-500/30 text-secondary-400 hover:bg-secondary-500/10 px-6 lg:px-8 py-3 text-base lg:text-lg font-semibold min-h-[48px]"
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default EnhancedROICalculator;
