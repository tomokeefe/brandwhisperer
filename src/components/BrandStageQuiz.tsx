import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckCircle,
  Mail,
  Rocket,
  Target,
  Users,
  Palette,
  Monitor,
  Bot,
  BookOpen,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Download,
  Calendar,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizQuestion {
  id: string;
  question: string;
  category: string;
  options: {
    text: string;
    score: number;
    tip?: string;
  }[];
}

interface QuizResult {
  tier: "beginner" | "intermediate" | "advanced";
  title: string;
  description: string;
  score: number;
  maxScore: number;
  recommendations: string[];
  cta: {
    primary: string;
    secondary?: string;
  };
}

const BrandStageQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<
    "intro" | "quiz" | "email" | "results"
  >("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailConsent, setEmailConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const questions: QuizQuestion[] = [
    {
      id: "mission",
      category: "Strategy",
      question: "How clear is your startup's mission?",
      options: [
        {
          text: "Nonexistent - we're still figuring it out",
          score: 1,
          tip: "No mission? Don't worry, our Foundation Guide helps!",
        },
        { text: "Vague - we have ideas but need clarity", score: 2 },
        { text: "Clear but not documented anywhere", score: 3 },
        { text: "Crystal clear and guides everything we do", score: 4 },
      ],
    },
    {
      id: "audience",
      category: "Strategy",
      question: "Do you know your target audience?",
      options: [
        { text: "We're mostly guessing who might buy", score: 1 },
        { text: "Some idea, but no real research done", score: 2 },
        { text: "Researched and have basic personas", score: 3 },
        { text: "Deep insights with data-driven personas", score: 4 },
      ],
    },
    {
      id: "visual",
      category: "Design",
      question: "How's your visual branding?",
      options: [
        { text: "No logo or consistent style yet", score: 1 },
        { text: "Basic logo but inconsistent everywhere", score: 2 },
        { text: "Cohesive look but needs polish", score: 3 },
        { text: "Professional and scalable system", score: 4 },
      ],
    },
    {
      id: "ux",
      category: "Product",
      question: "Is your product's UX intuitive?",
      options: [
        { text: "Haven't really thought about UX", score: 1 },
        { text: "Clunky - users complain about it", score: 2 },
        { text: "Decent, but room to improve", score: 3 },
        { text: "Smooth experience that users love", score: 4 },
      ],
    },
    {
      id: "storytelling",
      category: "Marketing",
      question: "Does your brand tell a compelling story?",
      options: [
        { text: "No real story yet", score: 1 },
        { text: "Generic and forgettable", score: 2 },
        { text: "Engaging but needs more focus", score: 3 },
        { text: "Captivating story that drives loyalty", score: 4 },
      ],
    },
    {
      id: "growth",
      category: "Goals",
      question: "What's your primary branding goal?",
      options: [
        { text: "Just getting started", score: 1 },
        { text: "Attract our first customers", score: 2 },
        { text: "Secure funding rounds", score: 3 },
        { text: "Scale globally and go big", score: 4 },
      ],
    },
  ];

  const calculateResult = (): QuizResult => {
    const totalScore = Object.values(answers).reduce(
      (sum, score) => sum + score,
      0,
    );
    const maxScore = questions.length * 4;

    if (totalScore <= 12) {
      return {
        tier: "beginner",
        title: "Your Brand's Just Waking Up! 🌱",
        description:
          "No worries—every unicorn started here. You need a solid foundation to build on.",
        score: totalScore,
        maxScore,
        recommendations: [
          "Start with our Foundation Guide to nail your mission and vision",
          "Define your target audience with research and personas",
          "Create basic brand guidelines for consistency",
          "Focus on one strong value proposition",
        ],
        cta: {
          primary: "Get Free Foundation Guide",
          secondary: "Book 15-min Strategy Call",
        },
      };
    } else if (totalScore <= 20) {
      return {
        tier: "intermediate",
        title: "Solid Start—Let's Polish! ✨",
        description:
          "You're on the right track but could shine brighter with some strategic upgrades.",
        score: totalScore,
        maxScore,
        recommendations: [
          "Upgrade your visual identity with professional design",
          "Develop a comprehensive brand story and messaging",
          "Create scalable design systems for growth",
          "Optimize your user experience for conversions",
        ],
        cta: {
          primary: "View Growth Packages",
          secondary: "Download Visual Identity Guide",
        },
      };
    } else {
      return {
        tier: "advanced",
        title: "You're a Branding Rockstar! 🚀",
        description:
          "Impressive! You're ahead of 90% of startups. Time to scale with confidence.",
        score: totalScore,
        maxScore,
        recommendations: [
          "Focus on scaling your brand systems globally",
          "Prepare investor-grade brand materials",
          "Develop advanced marketing automations",
          "Consider strategic brand partnerships",
        ],
        cta: {
          primary: "Book Strategy Consultation",
          secondary: "View Premium Resources",
        },
      };
    }
  };

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentStep("email");
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !emailConsent) return;

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual email service
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const calculatedResult = calculateResult();
      setResult(calculatedResult);
      setCurrentStep("results");

      // Track completion
      if (window.gtag) {
        window.gtag("event", "quiz_complete", {
          event_category: "engagement",
          event_label: calculatedResult.tier,
          quiz_score: calculatedResult.score,
        });
      }
    } catch (error) {
      console.error("Email submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentStep("intro");
    setCurrentQuestion(0);
    setAnswers({});
    setEmail("");
    setFirstName("");
    setEmailConsent(false);
    setResult(null);
  };

  const progress =
    currentStep === "quiz"
      ? ((currentQuestion + 1) / questions.length) * 100
      : 0;

  // Intro Screen
  if (currentStep === "intro") {
    return (
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-secondary-600/10 text-secondary-400 text-sm font-medium px-4 py-2 rounded-full border border-secondary-500/20">
            <Target className="w-4 h-4" />
            Brand Stage Assessment
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What's Your Brand's Growth Stage?
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take our 2-minute quiz to see if your startup's brand is ready to
            charm investors—or needs a strategic glow-up first!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <Card className="bg-dark-800/50 border-dark-700 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Quick & Easy
              </h3>
              <p className="text-gray-400 text-sm">
                6 strategic questions, 2 minutes max
              </p>
            </CardContent>
          </Card>

          <Card className="bg-dark-800/50 border-dark-700 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Personalized Results
              </h3>
              <p className="text-gray-400 text-sm">
                Custom recommendations for your stage
              </p>
            </CardContent>
          </Card>

          <Card className="bg-dark-800/50 border-dark-700 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Free Resources
              </h3>
              <p className="text-gray-400 text-sm">
                Get actionable guides based on results
              </p>
            </CardContent>
          </Card>
        </div>

        <Button
          onClick={() => setCurrentStep("quiz")}
          size="lg"
          className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold px-8 py-4 text-lg"
        >
          Start Quiz
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <p className="text-sm text-gray-400">
          No spam, just actionable brand insights • Used by 2,500+ founders
        </p>
      </div>
    );
  }

  // Quiz Questions
  if (currentStep === "quiz") {
    const question = questions[currentQuestion];

    return (
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Progress */}
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-400">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <Card className="bg-dark-800/50 border-dark-700">
          <CardHeader>
            <Badge
              variant="outline"
              className="w-fit text-secondary-400 border-secondary-500/30"
            >
              {question.category}
            </Badge>
            <CardTitle className="text-2xl text-white leading-tight">
              {question.question}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(question.id, option.score)}
                className="w-full p-4 text-left bg-dark-700/50 hover:bg-dark-600/50 border border-dark-600 hover:border-secondary-500/50 rounded-lg transition-all duration-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary-400 opacity-0 hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium mb-1">
                      {option.text}
                    </div>
                    {option.tip && (
                      <div className="text-xs text-secondary-400">
                        {option.tip}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="border-dark-600 text-gray-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index <= currentQuestion ? "bg-secondary-400" : "bg-dark-600",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Email Capture
  if (currentStep === "email") {
    return (
      <div className="max-w-lg mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-secondary-400/10 border border-secondary-400/20 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8 text-secondary-400" />
          </div>

          <h2 className="text-3xl font-bold text-white">
            Get Your Results + Free Brand Guide
          </h2>

          <p className="text-gray-300">
            Enter your email to see your personalized results and get a free PDF
            summary with actionable next steps!
          </p>
        </div>

        <Card className="bg-dark-800/50 border-dark-700">
          <CardContent className="p-6">
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <Label htmlFor="firstName" className="text-white">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-dark-700 border-dark-600 text-white"
                  placeholder="Your first name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark-700 border-dark-600 text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={emailConsent}
                  onCheckedChange={(checked) =>
                    setEmailConsent(checked as boolean)
                  }
                  className="mt-1"
                  required
                />
                <Label
                  htmlFor="consent"
                  className="text-sm text-gray-300 leading-relaxed"
                >
                  Send me free branding insights and tips (no spam, unsubscribe
                  anytime)
                </Label>
              </div>

              <Button
                type="submit"
                disabled={!email || !firstName || !emailConsent || isSubmitting}
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-dark-900 border-t-transparent rounded-full animate-spin" />
                    <span>Getting Results...</span>
                  </div>
                ) : (
                  "Show My Results"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-xs text-gray-400">
          Don't worry—we hate spam too. Just actionable branding insights from
          founders who've been there.
        </p>
      </div>
    );
  }

  // Results
  if (currentStep === "results" && result) {
    const tierColors = {
      beginner: "from-green-500 to-emerald-500",
      intermediate: "from-yellow-500 to-orange-500",
      advanced: "from-purple-500 to-pink-500",
    };

    const tierIcons = {
      beginner: Sparkles,
      intermediate: TrendingUp,
      advanced: Rocket,
    };

    const TierIcon = tierIcons[result.tier];

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Results Header */}
        <div className="text-center space-y-6">
          <div
            className={cn(
              "w-20 h-20 rounded-full flex items-center justify-center mx-auto",
              tierColors[result.tier],
            )}
          >
            <TierIcon className="w-10 h-10 text-white" />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              {result.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {result.description}
            </p>
          </div>

          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {result.score}
              </div>
              <div className="text-sm text-gray-400">Your Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400">
                {Math.round((result.score / result.maxScore) * 100)}%
              </div>
              <div className="text-sm text-gray-400">Brand Readiness</div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <Card className="bg-dark-800/50 border-dark-700">
          <CardHeader>
            <CardTitle className="text-white">
              Your Personalized Action Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-dark-700/50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{rec}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold"
          >
            {result.cta.primary}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {result.cta.secondary && (
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-white hover:text-dark-900"
            >
              {result.cta.secondary}
            </Button>
          )}
        </div>

        {/* Reset */}
        <div className="text-center">
          <button
            onClick={resetQuiz}
            className="text-sm text-gray-400 hover:text-white underline"
          >
            Take the quiz again
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default BrandStageQuiz;
