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
    <section className="relative flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"></div>

      <div className="w-full relative z-10 pt-24 lg:pt-32 pb-16 lg:pb-24 px-6">
        <div className="w-full flex justify-center items-center">
          {/* Main Content */}
          <div className="w-full max-w-6xl">
            <div className="text-center px-4">
              {/* Badge */}
              <Badge
                variant="outline"
                className="mb-4 lg:mb-6 px-3 lg:px-4 py-2 text-xs lg:text-sm border-secondary-500/30 text-secondary-400 bg-secondary-500/10 hover:bg-secondary-500/20 transition-colors duration-200"
              >
                Hypergrowth Brand Solutions
              </Badge>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 lg:mb-6 text-white">
                Grow Your Startup Brand Seamlessly from Pre-Seed to{" "}
                <span className="text-secondary-400">Unicorn</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed">
                We partner with ambitious founders to build adaptable brands that
                attract investors, customers, and top talent—streamlining your growth
                while saving time and costs. With over 30 years of proven success,
                we've increased funding outcomes by up to 40%. Say goodbye to outdated
                identities; your brand evolves with you. Ready to scale smarter?
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/25 min-h-[48px]"
                >
                  <Link
                    to="/assessment"
                    className="inline-flex items-center justify-center space-x-2"
                  >
                    <span>Free Brand Assessment</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-600 text-white hover:bg-white hover:text-dark-900 px-6 lg:px-8 py-3 lg:py-4 rounded transition-all duration-200 hover:scale-105 min-h-[48px]"
                >
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center"
                  >
                    View Services
                  </Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="text-xs lg:text-sm text-gray-400 text-center">
                <p className="mb-2">
                  Trusted by hypergrowth startups and backed by
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-6 opacity-70">
                  <span className="font-medium">New Relic</span>
                  <span className="hidden lg:inline">•</span>
                  <span className="font-medium">Idealab</span>
                  <span className="hidden lg:inline">•</span>
                  <span className="font-medium">150+ Portfolio Companies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
