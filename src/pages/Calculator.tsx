import React from "react";
import SEO from "@/components/SEO";
import EnhancedROICalculator from "@/components/EnhancedROICalculator";
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
      icon: TrendingUp,
      title: "Detailed ROI Analysis",
      description:
        "Comprehensive 3-year projections across multiple business impact areas.",
    },
    {
      icon: DollarSign,
      title: "Business Impact Metrics",
      description:
        "Calculate funding readiness, customer acquisition, and pricing power improvements.",
    },
    {
      icon: CheckCircle,
      title: "Risk Assessment",
      description:
        "Confidence scoring and risk-adjusted returns for informed decision making.",
    },
    {
      icon: Clock,
      title: "Break-Even Analysis",
      description:
        "See exactly when your brand investment will start paying for itself.",
    },
  ];

  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="Brand ROI Calculator - Calculate Your Branding Investment Return"
        description="Calculate detailed ROI projections for your startup branding investment. Get comprehensive business impact analysis across funding, customer acquisition, and growth metrics."
        keywords="brand ROI calculator, branding investment return, startup brand ROI, brand impact calculator, branding business value"
      />

      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <EnhancedROICalculator />
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
              Data-Driven ROI Insights
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
              ROI Methodology Explained
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: "How are ROI projections calculated?",
                answer:
                  "Our ROI calculations are based on industry benchmarks, client data from 150+ startups, and proven impact areas like funding readiness, customer acquisition improvements, and pricing power enhancements.",
              },
              {
                question: "What does the confidence score mean?",
                answer:
                  "Confidence scores reflect the likelihood of achieving projected returns based on historical data, market conditions, and implementation factors. High confidence (80%+) indicates proven, measurable impacts.",
              },
              {
                question: "How accurate are the 3-year projections?",
                answer:
                  "Projections are based on actual client outcomes and conservative industry benchmarks. While individual results vary, our methodology has proven accurate within 15-20% for similar startups.",
              },
              {
                question: "Can I customize the impact areas?",
                answer:
                  "Yes, select the focus areas most relevant to your business goals. The calculator adjusts projections based on your specific priorities like funding readiness or customer acquisition.",
              },
            ]}
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