import React, { useState, useEffect, useRef } from "react";
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
  title = "Trusted by 150+ Growing Brands",
  subtitle = "From pre-seed startups to Series A companies, we've helped brands across industries build trust, clarity, and momentum.",
  ctaTitle = "Ready to Join These Success Stories?",
  ctaDescription = "Let's build a brand that investors and customers can't ignore. Start with a free brand assessment.",
  ctaButtonText = "Get Your Free Assessment",
  onCtaClick,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Track mouse position for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const gridElement = gridRef.current;
    if (gridElement) {
      gridElement.addEventListener('mousemove', handleMouseMove);
      return () => gridElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Intersection observer for reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Get category-based color for hover effects
  const getCategoryColor = (category?: string) => {
    const colorMap: Record<string, string> = {
      'AI': 'from-purple-500/20 to-purple-600/10',
      'FinTech': 'from-green-500/20 to-green-600/10',
      'SaaS': 'from-blue-500/20 to-blue-600/10',
      'Design': 'from-pink-500/20 to-pink-600/10',
      'E-commerce': 'from-orange-500/20 to-orange-600/10',
      'HealthTech': 'from-teal-500/20 to-teal-600/10',
      'EdTech': 'from-indigo-500/20 to-indigo-600/10',
      'Crypto': 'from-yellow-500/20 to-yellow-600/10',
    };
    return colorMap[category || ''] || 'from-secondary-500/20 to-secondary-600/10';
  };
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
          <h2 className="text-display-lg font-bold mb-4 text-white">{title}</h2>
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
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 lg:gap-6 mb-16 lg:mb-20 relative"
        >
          {allLogos.map((logo, index) => {
            const isHovered = hoveredLogo === logo.id;
            const categoryColor = getCategoryColor(logo.category);

            return (
              <div
                key={logo.id}
                className={`group relative aspect-square bg-dark-800/50 rounded-xl border border-dark-700/50
                  hover:border-secondary-500/40 transition-all duration-500 hover:bg-dark-800/80
                  flex items-center justify-center p-4 cursor-pointer overflow-hidden
                  hover:scale-110 hover:-translate-y-2 hover:rotate-1
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}
                  hover:shadow-2xl hover:shadow-secondary-500/20`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: isHovered ? 'perspective(1000px) rotateY(10deg) rotateX(5deg)' : undefined,
                }}
                onMouseEnter={() => setHoveredLogo(logo.id)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary-500/0 via-secondary-500/50 to-secondary-500/0
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-border-flow" />

                {/* Floating Animation */}
                <div className={`w-full h-full flex items-center justify-center transition-all duration-700
                  ${isHovered ? 'transform scale-110' : ''}`}>

                  {logo.url ? (
                    <img
                      src={logo.url}
                      alt={`${logo.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0
                        transition-all duration-500 opacity-70 group-hover:opacity-100
                        group-hover:drop-shadow-lg group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-400 group-hover:text-gray-200
                        transition-all duration-300 leading-tight group-hover:scale-105">
                        {logo.name}
                      </div>
                      {logo.category && (
                        <div className="text-xs text-gray-500 group-hover:text-secondary-400
                          transition-all duration-300 mt-1 group-hover:font-medium">
                          {logo.category}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Dynamic Category-Based Glow */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br opacity-0
                  group-hover:opacity-100 transition-all duration-500 ${categoryColor}`} />

                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-xl bg-secondary-500/10 opacity-0
                  group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent
                  via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]
                  transition-transform duration-1000 ease-out" />

                {/* Magnetic Effect Indicator */}
                {isHovered && (
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-secondary-500/20
                    to-transparent animate-spin-slow opacity-50" />
                )}
              </div>
            );
          })}

          {/* Background Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-secondary-500/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${4 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
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
