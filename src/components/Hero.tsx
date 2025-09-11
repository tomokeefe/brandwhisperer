import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GOLD = "#f4d03f";

const Hero = () => {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation({
    delay: 200,
  });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({
    delay: 400,
  });
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({
    delay: 600,
  });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({
    delay: 800,
  });

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0b0b0b" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.7)" }} />

      {/* Accent glow */}
      <div className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-20" style={{ backgroundColor: GOLD }} />

      <div className="w-full relative z-10 pt-28 lg:pt-36 pb-20 lg:pb-28 px-6">
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-6xl">
            <div className="text-center px-4">
              {/* Badge */}
              <div
                ref={badgeRef}
                className={`transition-all duration-1000 ${
                  badgeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Badge
                  variant="outline"
                  className="mb-4 lg:mb-6 px-3 lg:px-4 py-2 text-xs lg:text-sm border-transparent"
                  style={{ color: GOLD, backgroundColor: "rgba(244,208,63,0.12)", borderColor: "rgba(244,208,63,0.3)" }}
                >
                  Free Brand Snapshot
                </Badge>
              </div>

              {/* Headline */}
              <div
                ref={titleRef}
                className={`transition-all duration-1000 delay-200 ${
                  titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 lg:mb-6 text-white">
                  Scale Your Startup Brand—Start with a Free Snapshot
                </h1>
              </div>

              {/* Subheadline */}
              <div
                ref={subtitleRef}
                className={`transition-all duration-1000 delay-400 ${
                  subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed">
                  Unlock 3 key insights into your Branding, Messaging, and Digital Presence—then upgrade to our $799 Audit for the full 10-area breakdown.
                </p>
              </div>

              {/* CTA */}
              <div
                ref={ctaRef}
                className={`transition-all duration-1000 delay-600 ${
                  ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div className="flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded transition-all duration-300 min-h-[48px] group"
                    style={{ backgroundColor: GOLD, color: "#111", boxShadow: "0 10px 35px rgba(244,208,63,0.25)" }}
                  >
                    <Link to="#snapshot-form" className="inline-flex items-center justify-center gap-2">
                      <span>Get Your Free Snapshot Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
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
