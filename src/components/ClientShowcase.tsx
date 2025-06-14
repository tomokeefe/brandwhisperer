import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface ClientShowcaseProps {
  className?: string;
}

const ClientShowcase: React.FC<ClientShowcaseProps> = ({ className = "" }) => {
  // Featured client logos for homepage display
  const featuredClients = [
    {
      id: 1,
      name: "TechFlow",
      category: "SaaS",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F03ff9a8154564bfeb98a20e0630f1ca0?format=webp&width=800",
    },
    {
      id: 2,
      name: "FinanceFirst",
      category: "FinTech",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F8c8fbd39e7c5418c9462cb7e53cca736?format=webp&width=800",
    },
    {
      id: 3,
      name: "HealthHub",
      category: "HealthTech",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F2265891c24ab49fd8a5f53fc250c9b06?format=webp&width=800",
    },
    {
      id: 4,
      name: "EduNext",
      category: "EdTech",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F349e319bbffd4004bdc2a1d02f37e08c?format=webp&width=800",
    },
    {
      id: 5,
      name: "RetailPro",
      category: "E-commerce",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Ffd97dfd4a4e144798eda3e8a2a8a6151?format=webp&width=800",
    },
    {
      id: 6,
      name: "DataSync",
      category: "Analytics",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F0df00c05fd6a4dff8814330a26e018db?format=webp&width=800",
    },
    {
      id: 7,
      name: "GrowthLabs",
      category: "Marketing",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Ffa2359149c8b4b24b9dd24ba433fa1a7?format=webp&width=800",
    },
    {
      id: 8,
      name: "CloudVault",
      category: "Infrastructure",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fb25cf95ccff149c8895530406bd4c322?format=webp&width=800",
    },
  ];

  return (
    <section className={`py-12 lg:py-16 xl:py-20 ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <Badge
            variant="outline"
            className="mb-4 lg:mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10 text-xs lg:text-sm"
          >
            <Users className="w-4 h-4 mr-2" />
            Trusted by Growing Brands
          </Badge>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 text-white px-4">
            Join 150+ Successful Startups
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            From pre-seed to Series A, founders trust us to build brands that
            scale with their vision.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-6 lg:mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-4 xl:gap-6">
            {featuredClients.map((client, index) => (
              <div
                key={client.id}
                className="group aspect-square bg-dark-800/30 hover:bg-dark-800/50 border border-dark-700/30 hover:border-secondary-500/20 rounded-lg transition-all duration-300 flex flex-col items-center justify-center p-2 sm:p-3 lg:p-4 touch-feedback"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {client.url ? (
                  <img
                    src={client.url}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-sm lg:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight">
                      {client.name}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 mt-1">
                      {client.category}
                    </div>
                  </div>
                )}

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-secondary-500/0 to-secondary-600/0 group-hover:from-secondary-500/5 group-hover:to-secondary-600/5 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Success Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8 text-sm lg:text-base">
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
            <span>150+ Brands Served</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
            <span>$2.5B+ Capital Raised</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
            <span>98% Funding Success</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Button
              asChild
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-2.5 group"
            >
              <Link
                to="/assessment"
                className="inline-flex items-center space-x-2"
              >
                <span>Free Brand Assessment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-secondary-500/30 text-secondary-400 hover:bg-secondary-500/10 hover:border-secondary-500/50 px-6 py-2.5 group"
            >
              <Link
                to="/calculator"
                className="inline-flex items-center space-x-2"
              >
                <span>Calculate ROI</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <Button
              asChild
              variant="ghost"
              className="text-gray-400 hover:text-white px-4 py-2 text-sm"
            >
              <Link to="/clients">
                <span>View Success Stories</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
