import React from "react";
import SEO from "@/components/SEO";
import PricingCalculator from "@/components/PricingCalculator";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, DollarSign, Clock, CheckCircle } from "lucide-react";

const Calculator = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description:
        "No hidden costs or surprise fees. Get accurate estimates upfront.",
    },
    {
      icon: Clock,
      title: "Custom Timeline",
      description:
        "Choose delivery speed that matches your funding timeline and needs.",
    },
    {
      icon: TrendingUp,
      title: "ROI Projections",
      description:
        "See projected returns on your brand investment including valuation boost.",
    },
    {
      icon: CheckCircle,
      title: "Package Recommendations",
      description:
        "Get personalized package suggestions based on your startup stage.",
    },
  ];

  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="Brand Investment Calculator - Calculate Your Startup Brand Cost"
        description="Get instant pricing estimates for your startup brand project. Interactive calculator with custom packages, equity options, and ROI projections."
        keywords="startup brand cost calculator, brand investment calculator, startup branding pricing, brand cost estimator"
      />

      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <PricingCalculator />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Why Use Our Calculator
            </Badge>
            <h2 className="text-display-md font-bold text-white mb-8">
              Accurate Estimates, No Surprises
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 text-center card-hover"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-bold text-white mb-8">
              Pricing Questions Answered
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: "Why do prices vary by funding stage?",
                answer:
                  "Later-stage companies typically need more sophisticated brand systems and have higher complexity requirements. Our pricing reflects the level of strategic depth and implementation needed.",
              },
              {
                question: "How does equity participation work?",
                answer:
                  "We offer 20-30% discounts on cash fees in exchange for small equity stakes (0.1-0.25%). This aligns our success with yours and enables ongoing partnership throughout your growth.",
              },
              {
                question: "What's included in rush delivery?",
                answer:
                  "Rush delivery (4-6 weeks) includes dedicated resources, priority scheduling, and compressed timeline. Quality remains the same, but requires premium pricing for expedited service.",
              },
              {
                question: "Can I change my package after starting?",
                answer:
                  "Yes, we build flexibility into our packages. You can add services or upgrade packages as your needs evolve. Our modular approach accommodates changing requirements.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
