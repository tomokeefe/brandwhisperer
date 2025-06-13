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
      name: "Stripe",
      category: "FinTech",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fb2f640d849fa4bea8d55af6f4631a558?format=webp&width=800",
    },
    {
      id: 2,
      name: "Figma",
      category: "Design",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F16ca4f0e969545c5972c42c9a36837fd?format=webp&width=800",
    },
    {
      id: 3,
      name: "Notion",
      category: "Productivity",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F1e297280f57a44c8a045bf0ad629fd47?format=webp&width=800",
    },
    {
      id: 4,
      name: "Slack",
      category: "Communication",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F132bf55f6ddf465eaf112a36616b56a9?format=webp&width=800",
    },
    {
      id: 5,
      name: "Shopify",
      category: "E-commerce",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fd8534d79af0a4b40947e7a63b5af7476?format=webp&width=800",
    },
    {
      id: 6,
      name: "Dropbox",
      category: "Cloud Storage",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fad9332dfbe3845a6b2a111e08fb99143?format=webp&width=800",
    },
    {
      id: 7,
      name: "Airbnb",
      category: "Travel",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fa0ba80f010d744d49ce112baea2b35ea?format=webp&width=800",
    },
    {
      id: 8,
      name: "GitHub",
      category: "Developer Tools",
      url: "https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fcdb094fd61d04fba9dbc60e98c85d6d6?format=webp&width=800",
    },
  ];

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
            From pre-seed to Series A, founders trust us to build brands that
            scale with their vision.
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
                <div className="text-center">
                  <div className="text-sm lg:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight">
                    {client.name}
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 mt-1">
                    {client.category}
                  </div>
                </div>

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
