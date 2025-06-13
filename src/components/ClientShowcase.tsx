import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedLogos } from "@/data/clientLogos";

interface ClientShowcaseProps {
  className?: string;
}

const ClientShowcase: React.FC<ClientShowcaseProps> = ({ className = "" }) => {
  // Get exactly the 8 featured client logos for homepage display
  const featuredClients = getFeaturedLogos(8);

  return (
    <section className={`py-16 lg:py-20 ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
          >
            <Users className="w-4 h-4 mr-2" />
            Trusted by Growing Brands
          </Badge>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
            Join 150+ Successful Startups
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From iconic brands like Evite and Picasa to emerging innovators like
            Cygilant and Gentreo, we build brands that scale with ambition.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
            {featuredClients.map((client, index) => (
              <div
                key={client.id}
                className="group aspect-square bg-dark-800/30 hover:bg-dark-800/50 border border-dark-700/30 hover:border-secondary-500/20 rounded-lg transition-all duration-300 flex flex-col items-center justify-center p-3 lg:p-4"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <img
                  src={client.url}
                  alt={client.alt}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to text display if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="text-center">
                          <div class="text-sm lg:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight">
                            ${client.name}
                          </div>
                          <div class="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 mt-1">
                            ${client.category}
                          </div>
                        </div>
                      `;
                    }
                  }}
                />

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
          <Button
            asChild
            variant="outline"
            className="border-secondary-500/30 text-secondary-400 hover:bg-secondary-500/10 hover:border-secondary-500/50 px-6 py-2.5 group"
          >
            <Link to="/clients" className="inline-flex items-center space-x-2">
              <span>View All Success Stories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
