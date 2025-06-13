import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, TrendingUp } from "lucide-react";

interface Logo {
  id: number;
  name: string;
  url?: string;
  category?: string;
}

interface LogoWallProps {
  logos?: Logo[];
  title?: string;
  subtitle?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

const LogoWall: React.FC<LogoWallProps> = ({
  logos = [],
  title = "Trusted by 50+ Growing Brands",
  subtitle = "From pre-seed startups to Series A companies, we've helped brands across industries build trust, clarity, and momentum.",
  ctaTitle = "Ready to Join These Success Stories?",
  ctaDescription = "Let's build a brand that investors and customers can't ignore. Start with a free brand assessment.",
  ctaButtonText = "Get Your Free Assessment",
  onCtaClick,
}) => {
  // Generate placeholder logos if not enough provided
  const generatePlaceholderLogos = (): Logo[] => {
    const placeholderCount = Math.max(0, 50 - logos.length);
    const placeholders: Logo[] = [];

    const categories = [
      "FinTech",
      "HealthTech",
      "SaaS",
      "E-commerce",
      "AI/ML",
      "Crypto",
      "EdTech",
      "PropTech",
    ];
    const companyTypes = [
      "Inc",
      "Labs",
      "Co",
      "Tech",
      "AI",
      "Pro",
      "Hub",
      "Ventures",
    ];

    for (let i = 0; i < placeholderCount; i++) {
      const category = categories[i % categories.length];
      const type = companyTypes[i % companyTypes.length];
      placeholders.push({
        id: logos.length + i + 1,
        name: `${category}${type}`,
        category: category,
      });
    }

    return placeholders;
  };

  const allLogos = [...logos, ...generatePlaceholderLogos()].slice(0, 50);

  const handleDefaultCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-dark-900/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-display-lg lg:text-display-xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 lg:mb-16 px-4">
          <div className="flex items-center gap-2 text-secondary-400">
            <Users className="w-5 h-5" />
            <span className="font-semibold">50+ Brands</span>
          </div>
          <div className="flex items-center gap-2 text-secondary-400">
            <Star className="w-5 h-5" />
            <span className="font-semibold">98% Success Rate</span>
          </div>
          <div className="flex items-center gap-2 text-secondary-400">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">$2.5B+ Raised</span>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {allLogos.map((logo, index) => (
            <div
              key={logo.id}
              className="group relative aspect-square bg-dark-800/50 rounded-lg border border-dark-700/50 hover:border-secondary-500/30 transition-all duration-300 hover:bg-dark-800/80 flex items-center justify-center p-4"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {logo.url ? (
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
              ) : (
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-tight">
                    {logo.name}
                  </div>
                  {logo.category && (
                    <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 mt-1">
                      {logo.category}
                    </div>
                  )}
                </div>
              )}

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-secondary-500/0 to-secondary-600/0 group-hover:from-secondary-500/10 group-hover:to-secondary-600/5 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-600/10 to-secondary-500/10 rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-secondary-500/5 to-transparent rounded-2xl" />

          <div className="relative bg-dark-800/80 backdrop-blur-sm border border-secondary-500/20 rounded-2xl p-8 lg:p-12 text-center">
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                {ctaTitle}
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {ctaDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 text-lg font-semibold group"
                onClick={onCtaClick || handleDefaultCtaClick}
              >
                {ctaButtonText}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full border-2 border-dark-800 flex items-center justify-center text-xs font-bold text-white"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span>Join 50+ successful founders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
