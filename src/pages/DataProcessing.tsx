import React from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Database, Shield, Users, Globe, Lock, FileText } from "lucide-react";

const DataProcessing = () => {
  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="Data Processing Agreement - The Brand Whisperer"
        description="Information about how The Brand Whisperer processes and protects your data in compliance with GDPR and privacy regulations."
        keywords="data processing, GDPR compliance, data protection, privacy, brand whisperer"
      />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Data Protection
            </Badge>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Data Processing Agreement
            </h1>
            <p className="text-body-lg text-gray-300 mb-4">
              Understanding how we process, store, and protect your data in
              compliance with international privacy regulations.
            </p>
          </div>

          {/* GDPR Compliance */}
          <Card className="bg-primary-900/20 border-primary-500/30 mb-12">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary-400" />
                GDPR & Privacy Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-300">
              <p>
                The Brand Whisperer is committed to protecting your personal
                data in accordance with:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>General Data Protection Regulation (GDPR)</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>California Privacy Rights Act (CPRA)</li>
                <li>Other applicable data protection laws</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Controller Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Data Controller Information
            </h2>

            <Card className="bg-dark-900/50 border-dark-700">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-semibold mb-4">
                      Controller Details
                    </h3>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <div>
                        <strong>Entity:</strong> The Brand Whisperer LLC
                      </div>
                      <div>
                        <strong>Address:</strong> San Francisco, CA, USA
                      </div>
                      <div>
                        <strong>Email:</strong> privacy@brandwhisperer.com
                      </div>
                      <div>
                        <strong>Phone:</strong> +1 (555) 123-4567
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-4">
                      Data Protection Officer
                    </h3>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <div>
                        <strong>Contact:</strong> dpo@brandwhisperer.com
                      </div>
                      <div>
                        <strong>Response Time:</strong> Within 72 hours
                      </div>
                      <div>
                        <strong>Languages:</strong> English, Spanish
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="bg-dark-700 mb-12" />

          {/* Legal Basis for Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Legal Basis for Processing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-green-400" />
                    Contractual Necessity
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    Processing necessary for contract performance:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Service delivery and consultation</li>
                    <li>• Payment processing</li>
                    <li>• Customer support</li>
                    <li>• Project management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-400" />
                    Legitimate Interest
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    Processing for legitimate business interests:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Website analytics and improvement</li>
                    <li>• Security and fraud prevention</li>
                    <li>• Business development</li>
                    <li>• Marketing optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-purple-400" />
                    Consent
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">With your explicit consent for:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Newsletter subscriptions</li>
                    <li>• Marketing communications</li>
                    <li>• Non-essential cookies</li>
                    <li>• Third-party integrations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-orange-400" />
                    Legal Obligation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">Compliance with legal requirements:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Tax and accounting records</li>
                    <li>• Legal proceedings</li>
                    <li>• Regulatory compliance</li>
                    <li>• Law enforcement requests</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-dark-700 mb-12" />

          {/* Data Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Categories of Personal Data
            </h2>

            <Card className="bg-dark-900/50 border-dark-700">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-primary-400" />
                      Identity Data
                    </h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Full name</li>
                      <li>• Job title</li>
                      <li>• Company name</li>
                      <li>• Professional profile</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-primary-400" />
                      Contact Data
                    </h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Email address</li>
                      <li>• Phone number</li>
                      <li>• Mailing address</li>
                      <li>• Social media profiles</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-primary-400" />
                      Technical Data
                    </h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• IP address</li>
                      <li>• Browser type</li>
                      <li>• Device information</li>
                      <li>• Usage analytics</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-primary-400" />
                      Business Data
                    </h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Project requirements</li>
                      <li>• Business goals</li>
                      <li>• Industry information</li>
                      <li>• Funding stage</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-primary-400" />
                      Communication Data
                    </h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Email exchanges</li>
                      <li>• Meeting recordings</li>
                      <li>• Chat transcripts</li>
                      <li>• Feedback forms</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-primary-400" />
                      Financial Data
                    </h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Payment information</li>
                      <li>• Billing address</li>
                      <li>• Transaction history</li>
                      <li>• Invoice details</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="bg-dark-700 mb-12" />

          {/* Data Security Measures */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Security Measures
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-green-400" />
                    Technical Safeguards
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="space-y-2 text-sm">
                    <li>• End-to-end encryption (AES-256)</li>
                    <li>• Secure data transmission (TLS 1.3)</li>
                    <li>• Regular security audits</li>
                    <li>• Automated vulnerability scanning</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Access logging and monitoring</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-400" />
                    Organizational Measures
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="space-y-2 text-sm">
                    <li>• Data protection training</li>
                    <li>• Privacy by design principles</li>
                    <li>• Regular policy updates</li>
                    <li>• Incident response procedures</li>
                    <li>• Vendor security assessments</li>
                    <li>• Data minimization practices</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-dark-700 mb-12" />

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Data Retention Periods
            </h2>

            <Card className="bg-dark-900/50 border-dark-700">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-white font-semibold mb-3">
                        Client Data
                      </h3>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Active projects: Duration + 7 years</li>
                        <li>• Financial records: 7 years</li>
                        <li>• Communication history: 3 years</li>
                        <li>• Marketing data: Until consent withdrawn</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-3">
                        Website Data
                      </h3>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Analytics data: 26 months</li>
                        <li>• Session data: 24 hours</li>
                        <li>• Newsletter: Until unsubscribed</li>
                        <li>• Contact forms: 2 years</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <p className="text-blue-400 font-semibold mb-2">
                      Automatic Deletion:
                    </p>
                    <p className="text-blue-200 text-sm">
                      We automatically delete personal data when retention
                      periods expire, unless legal obligations require longer
                      storage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="bg-dark-700 mb-12" />

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              International Data Transfers
            </h2>

            <Card className="bg-dark-900/50 border-dark-700">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-6">
                  We may transfer your data to countries outside your region,
                  including:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-semibold mb-3">
                      Adequacy Decisions
                    </h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• United Kingdom</li>
                      <li>• Switzerland</li>
                      <li>• Japan</li>
                      <li>• South Korea</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3">
                      Safeguards Used
                    </h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Standard Contractual Clauses</li>
                      <li>• Binding Corporate Rules</li>
                      <li>• Certification schemes</li>
                      <li>• Approved codes of conduct</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="bg-dark-700 mb-12" />

          {/* Data Subject Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Your Data Protection Rights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-sm text-white">
                    Right of Access
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm">
                  Request a copy of your personal data and information about how
                  we process it.
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-sm text-white">
                    Right to Rectification
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm">
                  Request correction of inaccurate or incomplete personal data.
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-sm text-white">
                    Right to Erasure
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm">
                  Request deletion of your personal data in certain
                  circumstances.
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-sm text-white">
                    Right to Restrict Processing
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm">
                  Request limitation of processing in specific situations.
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-sm text-white">
                    Right to Data Portability
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm">
                  Receive your data in a structured, machine-readable format.
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-sm text-white">
                    Right to Object
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm">
                  Object to processing based on legitimate interests or direct
                  marketing.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <Card className="bg-secondary-900/20 border-secondary-500/30">
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Exercise Your Rights
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  To exercise any of these rights, contact our Data Protection
                  Officer at{" "}
                  <a
                    href="mailto:dpo@brandwhisperer.com"
                    className="text-secondary-400 hover:text-secondary-300"
                  >
                    dpo@brandwhisperer.com
                  </a>
                </p>
                <p className="text-gray-400 text-xs">
                  We will respond to your request within 30 days. If you're not
                  satisfied with our response, you have the right to lodge a
                  complaint with your local data protection authority.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataProcessing;
