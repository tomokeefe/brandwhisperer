import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Briefcase,
  Users,
  Mail,
  BookOpen,
  Download,
  Calculator,
  FileText,
  Shield,
  Cookie,
  Database,
  ExternalLink,
} from "lucide-react";

const Sitemap = () => {
  const sitePages = {
    "Main Pages": [
      {
        name: "Home",
        path: "/",
        icon: Home,
        description: "Welcome page with overview of services",
      },
      {
        name: "Services",
        path: "/services",
        icon: Briefcase,
        description: "Brand consulting packages and pricing",
      },
      {
        name: "About",
        path: "/about",
        icon: Users,
        description: "Our story, team, and experience",
      },
      {
        name: "Contact",
        path: "/contact",
        icon: Mail,
        description: "Get in touch and schedule consultations",
      },
    ],
    Resources: [
      {
        name: "Blog",
        path: "/blog",
        icon: BookOpen,
        description: "Startup branding insights and case studies",
      },
      {
        name: "Free Resources",
        path: "/resources",
        icon: Download,
        description: "Download frameworks, assessments, and guides",
      },
      {
        name: "Pricing Calculator",
        path: "/calculator",
        icon: Calculator,
        description: "Interactive pricing tool for services",
      },
    ],
    "Blog Posts": [
      {
        name: "The Hidden Cost of Inconsistent Branding",
        path: "/blog/hidden-cost-inconsistent-branding",
        icon: BookOpen,
        description: "How mixed messages kill growth and conversion",
      },
      {
        name: "Why VCs Fund Brands, Not Just Products",
        path: "/blog/vcs-fund-brands-not-products",
        icon: BookOpen,
        description: "The trust equation that opens investor doors",
      },
      {
        name: "The $50M Rebrand Mistake",
        path: "/blog/50m-rebrand-mistake",
        icon: BookOpen,
        description: "Why startups break their brands during hypergrowth",
      },
    ],
    "Legal & Privacy": [
      {
        name: "Privacy Policy",
        path: "/privacy",
        icon: Shield,
        description: "How we collect, use, and protect your information",
      },
      {
        name: "Terms of Service",
        path: "/terms",
        icon: FileText,
        description: "Terms governing our services and website",
      },
      {
        name: "Cookie Policy",
        path: "/cookies",
        icon: Cookie,
        description: "Information about cookies and tracking technologies",
      },
      {
        name: "Data Processing",
        path: "/data",
        icon: Database,
        description: "GDPR compliance and data protection measures",
      },
      {
        name: "Sitemap",
        path: "/sitemap",
        icon: FileText,
        description: "Complete list of all website pages",
      },
    ],
  };

  const externalResources = [
    {
      name: "LinkedIn Company Page",
      url: "https://linkedin.com/company/brandwhisperer",
      description: "Follow us for industry insights and updates",
    },
    {
      name: "Twitter Profile",
      url: "https://twitter.com/brandwhisperer",
      description: "Quick tips and thought leadership content",
    },
    {
      name: "YouTube Channel",
      url: "https://youtube.com/@brandwhisperer",
      description: "Video content and case study deep dives",
    },
    {
      name: "GitHub Repository",
      url: "https://github.com/brandwhisperer",
      description: "Open source tools and resources",
    },
  ];

  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="Sitemap - The Brand Whisperer"
        description="Complete sitemap of The Brand Whisperer website including all pages, resources, and content areas."
        keywords="sitemap, website navigation, pages list, brand whisperer site structure"
      />

      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Site Navigation
            </Badge>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Website Sitemap
            </h1>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Explore all pages and resources available on The Brand Whisperer
              website. Find exactly what you're looking for with our complete
              site structure.
            </p>
          </div>

          {/* Main Site Pages */}
          <div className="space-y-12">
            {Object.entries(sitePages).map(([section, pages]) => (
              <section key={section}>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-secondary-400" />
                  {section}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pages.map((page) => {
                    const IconComponent = page.icon;
                    return (
                      <Card
                        key={page.path}
                        className="bg-dark-900/50 border-dark-700 card-hover"
                      >
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-white flex items-center">
                            <IconComponent className="w-5 h-5 mr-3 text-primary-400" />
                            {page.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {page.description}
                          </p>
                          <Link
                            to={page.path}
                            className="text-secondary-400 hover:text-secondary-300 text-sm font-medium inline-flex items-center group transition-colors"
                          >
                            Visit Page
                            <span className="ml-1 group-hover:ml-2 transition-all duration-200">
                              →
                            </span>
                          </Link>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>
            ))}

            {/* External Resources */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <ExternalLink className="w-6 h-6 mr-3 text-secondary-400" />
                External Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {externalResources.map((resource, index) => (
                  <Card
                    key={index}
                    className="bg-dark-900/50 border-dark-700 card-hover"
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {resource.name}
                          </h3>
                          <p className="text-gray-300 text-sm mb-4">
                            {resource.description}
                          </p>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-400 hover:text-secondary-300 text-sm font-medium inline-flex items-center group transition-colors"
                          >
                            Visit External Site
                            <ExternalLink className="w-3 h-3 ml-1 group-hover:ml-2 transition-all duration-200" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Quick Stats */}
            <section>
              <Card className="bg-primary-900/20 border-primary-500/30">
                <CardContent className="pt-8 text-center">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Website Statistics
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-primary-400 mb-2">
                        {Object.values(sitePages).flat().length}
                      </div>
                      <div className="text-gray-300 text-sm">Total Pages</div>
                    </div>

                    <div>
                      <div className="text-3xl font-bold text-secondary-400 mb-2">
                        {sitePages["Blog Posts"].length}
                      </div>
                      <div className="text-gray-300 text-sm">Blog Articles</div>
                    </div>

                    <div>
                      <div className="text-3xl font-bold text-green-400 mb-2">
                        {sitePages["Resources"].length}
                      </div>
                      <div className="text-gray-300 text-sm">
                        Resource Pages
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        {externalResources.length}
                      </div>
                      <div className="text-gray-300 text-sm">
                        External Links
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Search Help */}
            <section>
              <Card className="bg-dark-900/50 border-dark-700">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Can't Find What You're Looking For?
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Mail className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                      <h3 className="font-semibold text-white mb-2">
                        Contact Us
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        Send us a message and we'll help you find what you need.
                      </p>
                      <Link
                        to="/contact"
                        className="text-secondary-400 hover:text-secondary-300 text-sm font-medium"
                      >
                        Get in Touch →
                      </Link>
                    </div>

                    <div className="text-center">
                      <BookOpen className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                      <h3 className="font-semibold text-white mb-2">
                        Browse Blog
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        Explore our insights and case studies for more
                        information.
                      </p>
                      <Link
                        to="/blog"
                        className="text-secondary-400 hover:text-secondary-300 text-sm font-medium"
                      >
                        Read Articles →
                      </Link>
                    </div>

                    <div className="text-center">
                      <Download className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                      <h3 className="font-semibold text-white mb-2">
                        Free Resources
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        Download our frameworks, guides, and assessment tools.
                      </p>
                      <Link
                        to="/resources"
                        className="text-secondary-400 hover:text-secondary-300 text-sm font-medium"
                      >
                        View Resources →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
