import React from "react";
import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "Pre-Seed Package", path: "/services#pre-seed" },
      { name: "Seed Growth Package", path: "/services#seed-growth" },
      { name: "Series A Ready", path: "/services#series-a" },
      { name: "Brand Advisory", path: "/services#advisory" },
    ],
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Our Process", path: "/about#process" },
      { name: "Case Studies", path: "/about#cases" },
      { name: "Contact", path: "/contact" },
    ],
    Resources: [
      { name: "SCALE Framework", path: "/about#scale" },
      { name: "Brand Strategy", path: "/services" },
      { name: "Startup Insights", path: "/about" },
      { name: "Investment Grade", path: "/services" },
    ],
  };

  return (
    <footer className="bg-white text-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-md lg:text-display-lg mb-6">
              Ready to build a brand that scales?
            </h2>
            <p className="text-body-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful startups who've built brands that
              grow with their business. Let's start the conversation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/25"
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2"
              >
                <span>Start Your Brand Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative">
        <div className="container-custom py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg opacity-20 blur"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark-900">
                    The Brand Whisperer
                  </div>
                  <div className="text-sm text-dark-600">
                    Building brands that scale
                  </div>
                </div>
              </Link>

              <p className="text-dark-600 mb-8 max-w-md leading-relaxed">
                We build brands for the company you're becoming, not just the
                company you are. With 30+ years of experience and 150+ startup
                projects, we prevent the expensive rebrands that break momentum
                during hypergrowth.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-dark-600">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span>hello@brandwhisperer.com</span>
                </div>
                <div className="flex items-center space-x-3 text-dark-600">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-dark-600">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-dark-900 mb-4">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link
                            to={link.path}
                            className="text-dark-600 hover:text-primary-600 transition-colors duration-200 inline-flex items-center group"
                          >
                            <span>{link.name}</span>
                            <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-dark-200">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-dark-600 text-sm">
                © {currentYear} The Brand Whisperer. All rights reserved.
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <Link
                  to="/privacy"
                  className="text-dark-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
