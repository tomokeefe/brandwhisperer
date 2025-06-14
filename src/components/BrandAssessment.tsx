import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Target,
  Palette,
  MessageSquare,
  Users,
  TrendingUp,
  Award,
  Zap,
  AlertCircle,
  Download,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
  id: string;
  category: string;
  question: string;
  description?: string;
  options: {
    value: number;
    label: string;
    description: string;
  }[];
}

interface AssessmentResult {
  overallScore: number;
  categoryScores: Record<string, number>;
  recommendations: string[];
  packageRecommendation: string;
  priority: "low" | "medium" | "high" | "critical";
}

const BrandAssessment: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const questions: Question[] = [
    {
      id: "brand-clarity",
      category: "Strategy",
      question: "How clearly defined is your brand strategy?",
      description: "Your brand's mission, vision, and core values",
      options: [
        {
          value: 1,
          label: "Unclear",
          description: "We haven't defined our brand strategy yet",
        },
        {
          value: 2,
          label: "Basic",
          description: "We have some ideas but nothing documented",
        },
        {
          value: 3,
          label: "Defined",
          description: "We have a basic brand strategy documented",
        },
        {
          value: 4,
          label: "Clear",
          description: "We have a comprehensive brand strategy",
        },
        {
          value: 5,
          label: "Exceptional",
          description:
            "Our brand strategy is detailed and drives all decisions",
        },
      ],
    },
    {
      id: "target-audience",
      category: "Strategy",
      question: "How well do you understand your target audience?",
      description:
        "Customer personas, pain points, and decision-making process",
      options: [
        {
          value: 1,
          label: "Unclear",
          description: "We're not sure who our ideal customer is",
        },
        {
          value: 2,
          label: "General",
          description: "We have a broad idea of our audience",
        },
        {
          value: 3,
          label: "Defined",
          description: "We've identified our primary customer segments",
        },
        {
          value: 4,
          label: "Detailed",
          description: "We have detailed customer personas",
        },
        {
          value: 5,
          label: "Data-driven",
          description: "Our personas are based on extensive research and data",
        },
      ],
    },
    {
      id: "competitive-positioning",
      category: "Strategy",
      question: "How differentiated is your brand from competitors?",
      description: "Your unique value proposition and market positioning",
      options: [
        {
          value: 1,
          label: "Similar",
          description: "We're not clearly different from competitors",
        },
        {
          value: 2,
          label: "Slightly different",
          description: "We have some differences but they're not clear",
        },
        {
          value: 3,
          label: "Differentiated",
          description: "We have clear points of differentiation",
        },
        {
          value: 4,
          label: "Unique",
          description: "Our positioning is distinctly different",
        },
        {
          value: 5,
          label: "Category-defining",
          description:
            "We're creating a new category or redefining an existing one",
        },
      ],
    },
    {
      id: "visual-consistency",
      category: "Visual Identity",
      question:
        "How consistent is your visual identity across all touchpoints?",
      description: "Logo, colors, typography, imagery style",
      options: [
        {
          value: 1,
          label: "Inconsistent",
          description: "Our visual identity varies significantly",
        },
        {
          value: 2,
          label: "Somewhat consistent",
          description: "We use the same logo but other elements vary",
        },
        {
          value: 3,
          label: "Mostly consistent",
          description: "We have guidelines but they're not always followed",
        },
        {
          value: 4,
          label: "Consistent",
          description:
            "Our visual identity is consistent across most touchpoints",
        },
        {
          value: 5,
          label: "Exceptional",
          description:
            "Perfect consistency with comprehensive brand guidelines",
        },
      ],
    },
    {
      id: "design-quality",
      category: "Visual Identity",
      question: "How would you rate the quality of your visual design?",
      description: "Professional appearance, modern aesthetics, scalability",
      options: [
        { value: 1, label: "Basic", description: "DIY or very basic design" },
        {
          value: 2,
          label: "Adequate",
          description: "Functional but not particularly polished",
        },
        { value: 3, label: "Good", description: "Professional-looking design" },
        {
          value: 4,
          label: "Excellent",
          description: "High-quality, modern design",
        },
        {
          value: 5,
          label: "Outstanding",
          description: "Award-worthy, exceptional design that stands out",
        },
      ],
    },
    {
      id: "message-clarity",
      category: "Messaging",
      question: "How clear and compelling is your brand messaging?",
      description: "Value proposition, key messages, tone of voice",
      options: [
        {
          value: 1,
          label: "Confusing",
          description: "Our messaging is unclear or confusing",
        },
        {
          value: 2,
          label: "Basic",
          description: "We have basic messaging but it's not compelling",
        },
        {
          value: 3,
          label: "Clear",
          description: "Our messaging is clear and understandable",
        },
        {
          value: 4,
          label: "Compelling",
          description: "Our messaging is clear and persuasive",
        },
        {
          value: 5,
          label: "Exceptional",
          description:
            "Our messaging is crystal clear, compelling, and memorable",
        },
      ],
    },
    {
      id: "message-consistency",
      category: "Messaging",
      question: "How consistent is your messaging across all channels?",
      description: "Website, sales materials, social media, presentations",
      options: [
        {
          value: 1,
          label: "Inconsistent",
          description: "Our messaging varies significantly across channels",
        },
        {
          value: 2,
          label: "Somewhat consistent",
          description: "Similar messaging but not standardized",
        },
        {
          value: 3,
          label: "Mostly consistent",
          description: "Generally consistent with minor variations",
        },
        {
          value: 4,
          label: "Consistent",
          description: "Consistent messaging across all channels",
        },
        {
          value: 5,
          label: "Exceptional",
          description:
            "Perfect consistency with a comprehensive messaging framework",
        },
      ],
    },
    {
      id: "brand-recognition",
      category: "Market Presence",
      question: "How well do your target customers recognize your brand?",
      description: "Brand awareness and recall in your target market",
      options: [
        {
          value: 1,
          label: "Unknown",
          description: "Very few people recognize our brand",
        },
        {
          value: 2,
          label: "Limited",
          description: "Some recognition within our immediate network",
        },
        {
          value: 3,
          label: "Growing",
          description: "Increasing recognition in our target market",
        },
        {
          value: 4,
          label: "Strong",
          description: "Good recognition among our target audience",
        },
        {
          value: 5,
          label: "Exceptional",
          description: "High brand recognition and recall in our market",
        },
      ],
    },
    {
      id: "digital-presence",
      category: "Market Presence",
      question: "How strong is your digital brand presence?",
      description: "Website, social media, online reputation",
      options: [
        {
          value: 1,
          label: "Minimal",
          description: "Basic website and minimal online presence",
        },
        {
          value: 2,
          label: "Basic",
          description: "Website and some social media activity",
        },
        {
          value: 3,
          label: "Good",
          description: "Professional website and active social presence",
        },
        {
          value: 4,
          label: "Strong",
          description: "Comprehensive digital presence across platforms",
        },
        {
          value: 5,
          label: "Exceptional",
          description: "Outstanding digital presence that drives engagement",
        },
      ],
    },
    {
      id: "investor-readiness",
      category: "Investment Appeal",
      question: "How investor-ready does your brand appear?",
      description:
        "Professional presentation materials, credibility, scalability perception",
      options: [
        {
          value: 1,
          label: "Not ready",
          description: "Our brand doesn't convey investment readiness",
        },
        {
          value: 2,
          label: "Basic",
          description: "Adequate but not impressive to investors",
        },
        {
          value: 3,
          label: "Good",
          description: "Professional enough for investor meetings",
        },
        {
          value: 4,
          label: "Strong",
          description: "Impressive brand that builds investor confidence",
        },
        {
          value: 5,
          label: "Exceptional",
          description: "Investment-grade brand that attracts funding",
        },
      ],
    },
  ];

  const totalSteps = questions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const calculateResult = () => {
    const categoryScores: Record<string, number> = {};
    const categoryQuestions: Record<string, number> = {};

    // Calculate category scores
    questions.forEach((question) => {
      const answer = answers[question.id] || 0;
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = 0;
        categoryQuestions[question.category] = 0;
      }
      categoryScores[question.category] += answer;
      categoryQuestions[question.category]++;
    });

    // Calculate averages
    Object.keys(categoryScores).forEach((category) => {
      categoryScores[category] =
        (categoryScores[category] / categoryQuestions[category]) * 20; // Convert to percentage
    });

    const overallScore =
      Object.values(categoryScores).reduce((sum, score) => sum + score, 0) /
      Object.keys(categoryScores).length;

    // Generate recommendations
    const recommendations: string[] = [];
    let packageRecommendation = "Pre-Seed Foundation";
    let priority: "low" | "medium" | "high" | "critical" = "low";

    if (overallScore < 40) {
      priority = "critical";
      packageRecommendation = "Rapid Brand Sprint";
      recommendations.push("Your brand foundation needs immediate attention");
      recommendations.push(
        "Focus on clarifying your brand strategy and basic visual identity",
      );
      recommendations.push(
        "Develop consistent messaging across all touchpoints",
      );
    } else if (overallScore < 60) {
      priority = "high";
      packageRecommendation = "Pre-Seed Foundation";
      recommendations.push("Strengthen your brand foundation for growth");
      recommendations.push(
        "Improve visual consistency and professional appearance",
      );
      recommendations.push("Develop clearer competitive positioning");
    } else if (overallScore < 80) {
      priority = "medium";
      packageRecommendation = "Seed Growth System";
      recommendations.push("Scale your brand for rapid growth");
      recommendations.push("Enhance market presence and recognition");
      recommendations.push("Prepare for investor presentations");
    } else {
      priority = "low";
      packageRecommendation = "Series A Ready";
      recommendations.push("Optimize for investment-grade presentation");
      recommendations.push("Fine-tune for market leadership position");
      recommendations.push("Consider brand advisory for ongoing optimization");
    }

    setResult({
      overallScore,
      categoryScores,
      recommendations,
      packageRecommendation,
      priority,
    });
    setIsComplete(true);
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
    setResult(null);
  };

  const currentQuestion = questions[currentStep];
  const hasAnswered =
    currentQuestion && answers[currentQuestion.id] !== undefined;

  if (isComplete && result) {
    return (
      <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8 px-4 sm:px-6 lg:px-8">
        {/* Results Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-sm font-medium px-4 py-2 rounded-full border border-green-500/20 mb-4 lg:mb-6">
            <CheckCircle className="w-4 h-4" />
            Assessment Complete
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Your Brand Assessment Results
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Based on your responses, here's how your brand measures up and what
            we recommend next.
          </p>
        </div>

        {/* Overall Score */}
        <Card className="bg-dark-800/50 border-dark-700">
          <CardContent className="p-6 lg:p-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                {Math.round(result.overallScore)}
              </div>
              <div className="text-lg lg:text-xl text-gray-300 mb-4">
                Overall Brand Score
              </div>
              <div className="flex justify-center mb-6">
                <Badge
                  className={cn(
                    "text-sm lg:text-lg px-3 lg:px-4 py-2",
                    result.priority === "critical" &&
                      "bg-red-500/20 text-red-400 border-red-500/20",
                    result.priority === "high" &&
                      "bg-orange-500/20 text-orange-400 border-orange-500/20",
                    result.priority === "medium" &&
                      "bg-yellow-500/20 text-yellow-400 border-yellow-500/20",
                    result.priority === "low" &&
                      "bg-green-500/20 text-green-400 border-green-500/20",
                  )}
                >
                  {result.priority === "critical" &&
                    "Needs Immediate Attention"}
                  {result.priority === "high" && "High Priority"}
                  {result.priority === "medium" && "Medium Priority"}
                  {result.priority === "low" && "Optimization Opportunity"}
                </Badge>
              </div>
              <Progress value={result.overallScore} className="h-3 mb-4" />
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {Object.entries(result.categoryScores).map(([category, score]) => {
            const icons = {
              Strategy: Target,
              "Visual Identity": Palette,
              Messaging: MessageSquare,
              "Market Presence": Users,
              "Investment Appeal": TrendingUp,
            };
            const Icon = icons[category as keyof typeof icons] || Award;

            return (
              <Card key={category} className="bg-dark-800/50 border-dark-700">
                <CardContent className="p-6 text-center">
                  <Icon className="w-8 h-8 text-secondary-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {Math.round(score)}
                  </div>
                  <div className="text-sm text-gray-400 mb-3">{category}</div>
                  <Progress value={score} className="h-2" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recommendations */}
        <Card className="bg-dark-800/50 border-dark-700">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-secondary-400" />
              Recommended Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {result.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-secondary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-secondary-400">
                    {index + 1}
                  </span>
                </div>
                <p className="text-gray-300">{recommendation}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Package Recommendation */}
        <Card className="bg-gradient-to-r from-secondary-600/10 to-secondary-500/10 border-secondary-500/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Recommended Package: {result.packageRecommendation}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Based on your assessment, this package will address your most
              critical brand needs and help you achieve your growth goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 text-lg font-semibold group"
                onClick={() => (window.location.href = "/contact")}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-secondary-500/30 text-secondary-400 hover:bg-secondary-500/10 px-8 py-3 text-lg font-semibold"
                onClick={() => (window.location.href = "/services")}
              >
                View All Packages
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              onClick={resetAssessment}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retake Assessment
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Results
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
              onClick={() => (window.location.href = "/contact")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Button>
          </div>
          <p className="text-sm text-gray-400">
            Want to discuss these results? Schedule a free 30-minute
            consultation with our brand strategists.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8 px-4 sm:px-6 lg:px-8">
      {/* Progress Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-secondary-600/10 text-secondary-400 text-sm font-medium px-4 py-2 rounded-full border border-secondary-500/20 mb-4 lg:mb-6">
          <Target className="w-4 h-4" />
          Brand Assessment
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Evaluate Your Brand's Growth Readiness
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 px-4">
          Answer {totalSteps} questions to get personalized recommendations for
          your brand's next steps.
        </p>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-400">
            <span>
              Question {currentStep + 1} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-3 lg:h-2" />
        </div>
      </div>

      {/* Question Card */}
      <Card className="bg-dark-800/50 border-dark-700">
        <CardHeader className="pb-4 lg:pb-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant="outline"
              className="text-secondary-400 border-secondary-500/30 text-xs lg:text-sm"
            >
              {currentQuestion.category}
            </Badge>
          </div>
          <CardTitle className="text-xl sm:text-2xl text-white leading-tight">
            {currentQuestion.question}
          </CardTitle>
          {currentQuestion.description && (
            <p className="text-sm lg:text-base text-gray-400 mt-2">
              {currentQuestion.description}
            </p>
          )}
        </CardHeader>
        <CardContent className="space-y-3 lg:space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              className={cn(
                "w-full p-4 lg:p-5 rounded-lg border text-left transition-all duration-200 hover:border-secondary-500/50 min-h-[48px] lg:min-h-[56px]",
                answers[currentQuestion.id] === option.value
                  ? "border-secondary-500 bg-secondary-500/10"
                  : "border-dark-600 bg-dark-800/30 hover:bg-dark-700/50",
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5",
                    answers[currentQuestion.id] === option.value
                      ? "border-secondary-500 bg-secondary-500"
                      : "border-gray-500",
                  )}
                >
                  {answers[currentQuestion.id] === option.value && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white mb-1 text-sm lg:text-base">
                    {option.label}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-400">
                    {option.description}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="border-gray-600 text-gray-300 disabled:opacity-50 min-h-[48px] px-6"
          size="lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        <Button
          onClick={handleNext}
          disabled={!hasAnswered}
          className="bg-secondary-600 hover:bg-secondary-700 text-white disabled:opacity-50 group min-h-[48px] px-6"
          size="lg"
        >
          {currentStep === totalSteps - 1 ? "View Results" : "Next Question"}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>

      {/* Help Text */}
      {!hasAnswered && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 bg-dark-800/30 px-4 py-3 rounded-lg border border-dark-700">
            <AlertCircle className="w-4 h-4" />
            Please select an option to continue
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandAssessment;
