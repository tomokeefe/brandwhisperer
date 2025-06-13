import React from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Mail, Phone, MapPin, Calendar } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="Privacy Policy - The Brand Whisperer"
        description="Our privacy policy explains how The Brand Whisperer collects, uses, and protects your personal information when using our services."
        keywords="privacy policy, data protection, personal information, brand whisperer"
      />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Legal Document
            </Badge>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-body-lg text-gray-300 mb-4">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Quick Summary */}
          <Card className="bg-primary-900/20 border-primary-500/30 mb-12">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary-400" />
                Privacy at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-300">
              <p>
                • We collect only the information necessary to provide our
                services
              </p>
              <p>• We never sell your personal information to third parties</p>
              <p>• You can request deletion of your data at any time</p>
              <p>
                • We use industry-standard security measures to protect your
                data
              </p>
              <p>• We're transparent about how we use analytics and cookies</p>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                1. Information We Collect
              </h2>

              <Card className="bg-dark-900/50 border-dark-700 mb-6">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Information You Provide
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p>When you interact with our services, we may collect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Contact Information:</strong> Name, email address,
                      phone number
                    </li>
                    <li>
                      <strong>Company Information:</strong> Company name,
                      industry, funding stage
                    </li>
                    <li>
                      <strong>Communication Data:</strong> Messages,
                      consultation requests, feedback
                    </li>
                    <li>
                      <strong>Project Information:</strong> Brand requirements,
                      project scope, preferences
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Information We Collect Automatically
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p>When you visit our website, we automatically collect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Usage Data:</strong> Pages viewed, time spent,
                      click patterns
                    </li>
                    <li>
                      <strong>Device Information:</strong> Browser type,
                      operating system, device type
                    </li>
                    <li>
                      <strong>Location Data:</strong> General location based on
                      IP address
                    </li>
                    <li>
                      <strong>Analytics Data:</strong> Performance metrics, user
                      behavior patterns
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Separator className="bg-dark-700" />

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                2. How We Use Your Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      Service Delivery
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Provide branding consultations</li>
                      <li>• Deliver requested resources</li>
                      <li>• Respond to inquiries</li>
                      <li>• Process service requests</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      Communication
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Send newsletter updates</li>
                      <li>• Share relevant resources</li>
                      <li>• Provide customer support</li>
                      <li>• Send service notifications</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      Improvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Analyze website performance</li>
                      <li>• Improve user experience</li>
                      <li>• Develop new features</li>
                      <li>• Optimize our services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      Legal Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Comply with legal obligations</li>
                      <li>• Protect our rights</li>
                      <li>��� Prevent fraud</li>
                      <li>• Ensure security</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="bg-dark-700" />

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                3. Information Sharing
              </h2>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardContent className="pt-6 text-gray-300 space-y-4">
                  <p className="text-lg font-semibold text-white">
                    We do not sell your personal information.
                  </p>
                  <p>
                    We may share your information only in these circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Service Providers:</strong> Trusted partners who
                      help deliver our services
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law
                      or to protect rights
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In case of merger,
                      acquisition, or sale
                    </li>
                    <li>
                      <strong>With Your Consent:</strong> When you explicitly
                      agree to sharing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Separator className="bg-dark-700" />

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                4. Data Security
              </h2>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardContent className="pt-6 text-gray-300 space-y-4">
                  <p>
                    We implement appropriate security measures to protect your
                    information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information</li>
                    <li>Secure hosting and infrastructure</li>
                    <li>Regular backup and recovery procedures</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Separator className="bg-dark-700" />

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                5. Your Rights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      Access & Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Request a copy of your data</li>
                      <li>• Update incorrect information</li>
                      <li>• Delete your account and data</li>
                      <li>• Opt out of communications</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      Data Portability
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Export your data</li>
                      <li>• Transfer to another service</li>
                      <li>• Receive data in common formats</li>
                      <li>• Request data corrections</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="bg-dark-700" />

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                6. Contact Us
              </h2>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardContent className="pt-6">
                  <p className="text-gray-300 mb-6">
                    If you have questions about this Privacy Policy or want to
                    exercise your rights, contact us:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-5 h-5 text-primary-400" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-sm">privacy@brandwhisperer.io</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-gray-300">
                      <Phone className="w-5 h-5 text-primary-400" />
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-sm">+1 (617) 792-3378</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-primary-400" />
                      <div>
                        <div className="font-semibold">Address</div>
                        <div className="text-sm">Boston, MA</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Updates */}
            <section>
              <Card className="bg-secondary-900/20 border-secondary-500/30">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Policy Updates
                  </h3>
                  <p className="text-gray-300 text-sm">
                    We may update this Privacy Policy from time to time. We'll
                    notify you of any significant changes via email or through
                    our website. Your continued use of our services after
                    changes become effective constitutes acceptance of the
                    updated policy.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
