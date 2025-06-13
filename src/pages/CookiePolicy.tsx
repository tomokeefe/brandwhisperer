import React from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, BarChart3, Target, Shield } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="Cookie Policy - The Brand Whisperer"
        description="Learn about how The Brand Whisperer uses cookies and similar technologies to improve your website experience."
        keywords="cookie policy, website cookies, tracking, privacy, brand whisperer"
      />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Cookie Information
            </Badge>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-body-lg text-gray-300 mb-4">
              This policy explains how we use cookies and similar technologies
              on our website to enhance your experience.
            </p>
          </div>

          {/* Cookie Summary */}
          <Card className="bg-primary-900/20 border-primary-500/30 mb-12">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <Cookie className="w-5 h-5 mr-2 text-primary-400" />
                What Are Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-300">
              <p>
                Cookies are small text files stored on your device when you
                visit our website. They help us:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve your browsing experience</li>
                <li>Provide personalized content and features</li>
              </ul>
            </CardContent>
          </Card>

          {/* Types of Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8">
              Types of Cookies We Use
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Essential Cookies */}
              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-400" />
                    Essential Cookies
                  </CardTitle>
                  <Badge className="w-fit bg-green-500/20 text-green-400 border-green-500/30">
                    Always Active
                  </Badge>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    These cookies are necessary for the website to function
                    properly.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Session management</li>
                    <li>• Security features</li>
                    <li>• Form functionality</li>
                    <li>• Basic navigation</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Analytics Cookies */}
              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                    Analytics Cookies
                  </CardTitle>
                  <Badge className="w-fit bg-blue-500/20 text-blue-400 border-blue-500/30">
                    Optional
                  </Badge>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    Help us understand how visitors interact with our website.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Google Analytics</li>
                    <li>• Page views and traffic</li>
                    <li>• User behavior patterns</li>
                    <li>• Performance metrics</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Marketing Cookies */}
              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-400" />
                    Marketing Cookies
                  </CardTitle>
                  <Badge className="w-fit bg-purple-500/20 text-purple-400 border-purple-500/30">
                    Optional
                  </Badge>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    Used to track visitors and provide personalized ads.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Facebook Pixel</li>
                    <li>• Conversion tracking</li>
                    <li>• Retargeting campaigns</li>
                    <li>• Ad performance</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Functional Cookies */}
              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-orange-400" />
                    Functional Cookies
                  </CardTitle>
                  <Badge className="w-fit bg-orange-500/20 text-orange-400 border-orange-500/30">
                    Optional
                  </Badge>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    Enable enhanced functionality and personalization.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• User preferences</li>
                    <li>• Language settings</li>
                    <li>• Chatbot functionality</li>
                    <li>• Form auto-completion</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-dark-700 mb-12" />

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Third-Party Services
            </h2>

            <Card className="bg-dark-900/50 border-dark-700">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-6">
                  We use the following third-party services that may set their
                  own cookies:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-white font-semibold">
                      Google Analytics
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Website traffic and user behavior analysis
                    </p>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 text-sm"
                    >
                      Google Privacy Policy →
                    </a>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-white font-semibold">Facebook Pixel</h3>
                    <p className="text-gray-400 text-sm">
                      Conversion tracking and advertising optimization
                    </p>
                    <a
                      href="https://www.facebook.com/privacy/explanation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 text-sm"
                    >
                      Facebook Privacy Policy →
                    </a>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-white font-semibold">Hotjar</h3>
                    <p className="text-gray-400 text-sm">
                      User experience analysis and feedback
                    </p>
                    <a
                      href="https://www.hotjar.com/legal/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 text-sm"
                    >
                      Hotjar Privacy Policy →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="bg-dark-700 mb-12" />

          {/* Managing Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Managing Your Cookie Preferences
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Browser Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    You can control cookies through your browser settings:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies</li>
                    <li>• Delete existing cookies</li>
                    <li>• Get notified before cookies are set</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Opt-Out Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    Use these tools to opt out of tracking:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      •{" "}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        className="text-primary-400 hover:text-primary-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Analytics Opt-out
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://www.facebook.com/ads/preferences/"
                        className="text-primary-400 hover:text-primary-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook Ad Preferences
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://www.hotjar.com/legal/compliance/opt-out/"
                        className="text-primary-400 hover:text-primary-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Hotjar Opt-out
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Cookie Consent */}
            <Card className="bg-secondary-900/20 border-secondary-500/30">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Update Your Cookie Preferences
                  </h3>
                  <p className="text-gray-300 text-sm mb-6">
                    You can change your cookie settings at any time by clicking
                    the button below.
                  </p>
                  <Button
                    onClick={() => {
                      // This would trigger the cookie consent modal
                      console.log("Cookie preferences modal would open here");
                    }}
                    className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Cookie Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="bg-dark-700 mb-12" />

          {/* Impact of Disabling Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Impact of Disabling Cookies
            </h2>

            <Card className="bg-dark-900/50 border-dark-700">
              <CardContent className="pt-6">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
                  <p className="text-yellow-400 font-semibold mb-2">
                    Important Note:
                  </p>
                  <p className="text-yellow-200 text-sm">
                    Disabling certain cookies may affect your experience on our
                    website.
                  </p>
                </div>

                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Essential Cookies Disabled:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Forms may not function properly</li>
                      <li>Security features may be compromised</li>
                      <li>User sessions may not persist</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Analytics Cookies Disabled:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>We can't improve the website based on usage data</li>
                      <li>Performance issues may go unnoticed</li>
                      <li>Popular content identification becomes difficult</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Marketing Cookies Disabled:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Ads may be less relevant to your interests</li>
                      <li>Conversion tracking becomes limited</li>
                      <li>Retargeting campaigns won't function</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact and Updates */}
          <section>
            <Card className="bg-primary-900/20 border-primary-500/30">
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Questions About Cookies?
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Contact us at{" "}
                  <a
                    href="mailto:privacy@brandwhisperer.com"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    privacy@brandwhisperer.com
                  </a>{" "}
                  if you have any questions about our use of cookies.
                </p>
                <p className="text-gray-400 text-xs">
                  This Cookie Policy may be updated from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
