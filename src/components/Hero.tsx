import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: TrendingUp, value: "87%", label: "Series A funding success" },
    { icon: Users, value: "150+", label: "Startups branded" },
    { icon: Award, value: "30+", label: "Years experience" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="max-w-4xl">
              {/* Badge */}
              <Badge
                variant="outline"
                className="mb-6 px-4 py-2 text-sm border-secondary-500/30 text-secondary-400 bg-secondary-500/10 hover:bg-secondary-500/20 transition-colors duration-200"
              >
                Hypergrowth Brand Solutions
              </Badge>

              {/* Main Headline */}
              <h1 className="text-display-xl lg:text-[120px] xl:text-[140px] font-bold leading-none mb-8 text-white">
                <span className="block">Building</span>
                <span className="block text-secondary-400">Brands</span>
                <span className="block">That Scale</span>
              </h1>

              {/* Subheadline */}
              <p className="text-body-lg lg:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                From startup to unicorn without breaking. We build the visual
                and strategic foundation that carries you from garage to IPO
                without expensive, momentum-killing rebrands.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/25"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2"
                  >
                    <span>Start Your Brand</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-600 text-white hover:bg-white hover:text-dark-900 px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="text-sm text-gray-400">
                <p className="mb-2">
                  Trusted by hypergrowth startups and backed by
                </p>
                <div className="flex items-center space-x-6 opacity-70">
                  <span className="font-medium">New Relic</span>
                  <span>•</span>
                  <span className="font-medium">Idealab</span>
                  <span>•</span>
                  <span className="font-medium">150+ Portfolio Companies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="lg:col-span-4">
            <div className="space-y-8">
              <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-2xl p-8">
                <h3 className="text-heading-lg text-white mb-6">
                  Our Track Record
                </h3>
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-dark-900/30 backdrop-blur-sm border border-dark-800 rounded-2xl p-6">
                <blockquote className="text-gray-300 italic mb-4">
                  "Don't wait 14 years like New Relic did — build a brand that
                  evolves with your growth."
                </blockquote>
                <cite className="text-sm text-secondary-400 font-medium">
                  The Brand Whisperer Philosophy
                </cite>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-gray-400 text-sm mb-2 text-center">
            Scroll Down
          </div>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
