import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation({ delay: 200 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ delay: 400 });
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({ delay: 600 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ delay: 800 });
  const { ref: socialRef, isVisible: socialVisible } = useScrollAnimation({ delay: 1000 });

  const stats = [
    { icon: TrendingUp, value: "87%", label: "Series A funding success" },
    { icon: Users, value: "150+", label: "Startups branded" },
    { icon: Award, value: "30+", label: "Years experience" },
  ];

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://www.dropbox.com/scl/fi/5i278ec6wq7202cvcsve5/27669-365224683_small.mp4?rlkey=741jbjzxk3t64e0xo5bjk2a6q&dl=1"
          type="video/mp4"
        />
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-dark-950/60 z-5"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 z-10"></div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl z-15"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl z-15"></div>

      <div className="w-full relative z-20 pt-32 lg:pt-40 pb-24 lg:pb-32 px-6">
        <div className="w-full flex justify-center items-center">
          {/* Main Content */}
          <div className="w-full max-w-6xl">
            <div className="text-center px-4">
              {/* Badge */}
              <div
                ref={badgeRef}
                className={`transition-all duration-1000 ${
                  badgeVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <Badge
                  variant="outline"
                  className="mb-4 lg:mb-6 px-3 lg:px-4 py-2 text-xs lg:text-sm border-secondary-500/30 text-secondary-400 bg-secondary-500/10 hover:bg-secondary-500/20 hover:border-secondary-400/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Hypergrowth Brand Solutions
                </Badge>
              </div>

              {/* Main Headline */}
              <div
                ref={titleRef}
                className={`transition-all duration-1000 delay-200 ${
                  titleVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 lg:mb-6 text-white">
                  Grow Your Startup Seamlessly from Pre-Seed to{" "}
                  <span className="text-secondary-400 hover:text-secondary-300 transition-colors duration-300">Unicorn</span>
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed">
                We partner with ambitious founders to build adaptable brands
                that attract investors, customers, and top talent—streamlining
                your growth while saving time and costs. With over 30 years of
                proven success, we've increased funding outcomes by up to 40%.
                Say goodbye to outdated identities; your brand evolves with you.
                Ready to scale smarter?
              </p>

              {/* CTA Buttons */}
              <div
                ref={ctaRef}
                className={`transition-all duration-1000 delay-600 ${
                  ctaVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-secondary-500/40 hover:-translate-y-1 min-h-[48px] group"
                  >
                    <Link
                      to="/assessment"
                      className="inline-flex items-center justify-center space-x-2"
                    >
                      <span>Free Brand Assessment</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-600 text-white hover:bg-white hover:text-dark-900 px-6 lg:px-8 py-3 lg:py-4 rounded transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-secondary-400 min-h-[48px] group"
                  >
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center space-x-2"
                    >
                      <span>View Services</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Social Proof */}
              <div
                ref={socialRef}
                className={`transition-all duration-1000 delay-800 ${
                  socialVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="text-xs lg:text-sm text-gray-400 text-center">
                  <p className="mb-2">
                    Trusted by hypergrowth startups and backed by
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <span className="font-medium hover:text-secondary-400 transition-colors duration-300 cursor-pointer">New Relic</span>
                    <span className="hidden lg:inline">•</span>
                    <span className="font-medium hover:text-secondary-400 transition-colors duration-300 cursor-pointer">Idealab</span>
                    <span className="hidden lg:inline">•</span>
                    <span className="font-medium hover:text-secondary-400 transition-colors duration-300 cursor-pointer">150+ Portfolio Companies</span>
                  </div>
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
