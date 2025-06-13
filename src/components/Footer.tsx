import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate newsletter signup
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");

      // Track newsletter signup
      if (window.gtag) {
        window.gtag("event", "newsletter_signup", {
          event_category: "engagement",
          event_label: "footer_newsletter",
        });
      }
    }, 1000);
  };

  const footerLinks = {
    Services: [
      { name: "Pre-Seed Package", path: "/services#pre-seed" },
      { name: "Seed Growth Package", path: "/services#seed-growth" },
      { name: "Series A Ready", path: "/services#series-a" },
      { name: "Brand Advisory", path: "/services#advisory" },
      { name: "Pricing Calculator", path: "/calculator" },
    ],
    Resources: [
      { name: "Blog", path: "/blog" },
      { name: "Free Resources", path: "/resources" },
      { name: "Brand Assessment", path: "/resources#assessment" },
      { name: "SCALE Framework", path: "/resources#framework" },
      { name: "ROI Calculator", path: "/resources#calculator" },
    ],
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Our Process", path: "/about#process" },
      { name: "Case Studies", path: "/about#cases" },
      { name: "Contact", path: "/contact" },
      { name: "Careers", path: "/contact" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "Data Processing", path: "/data" },
    ],
  };

  return (
    <footer className="bg-white text-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-20 lg:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 border-primary-300 text-primary-100 bg-primary-100/10"
            >
              Weekly Insights
            </Badge>
            <h2 className="text-display-md lg:text-display-lg mb-6">
              Join 2,500+ Founders Getting Startup Brand Insights
            </h2>
            <p className="text-body-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Get actionable brand strategy tips, case studies, and frameworks
              delivered to your inbox every Tuesday. No spam, just value.
            </p>

            {isSubscribed ? (
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-6 max-w-md mx-auto">
                <div className="text-green-400 mb-2">✓ You're subscribed!</div>
                <p className="text-green-100 text-sm">
                  Welcome to the community. Check your email for a confirmation
                  and your first resource.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-900/50 border-primary-500 text-white placeholder:text-primary-200 flex-1"
                  required
                />
                <Button
                  type="submit"
                  className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold px-8"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe Free
                </Button>
              </form>
            )}

            <p className="text-primary-200 text-sm mt-4">
              Join founders from Y Combinator, Techstars, and 500 Startups
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative">
        <div className="container-custom py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-4">
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
                  <a
                    href="mailto:hello@brandwhisperer.com"
                    className="hover:text-primary-600 transition-colors"
                  >
                    hello@brandwhisperer.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-dark-600">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <a
                    href="tel:+15551234567"
                    className="hover:text-primary-600 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-dark-600">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex space-x-4">
                <a
                  href="https://linkedin.com/company/brandwhisperer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-100 rounded-lg flex items-center justify-center text-dark-600 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/brandwhisperer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-100 rounded-lg flex items-center justify-center text-dark-600 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
                            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-dark-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  87%
                </div>
                <div className="text-sm text-dark-600">
                  Series A funding success
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  150+
                </div>
                <div className="text-sm text-dark-600">Startups branded</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  $2B+
                </div>
                <div className="text-sm text-dark-600">
                  Funding raised by clients
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-dark-200">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-dark-600 text-sm">
                © {currentYear} The Brand Whisperer. All rights reserved.
                Building brands that scale since 1995.
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
                <Link
                  to="/sitemap"
                  className="text-dark-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Sitemap
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
