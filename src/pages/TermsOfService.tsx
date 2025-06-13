import React from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Calendar, Scale, Shield, Users } from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="Terms of Service - The Brand Whisperer"
        description="Terms of Service for The Brand Whisperer consulting services. Learn about our service terms, policies, and user responsibilities."
        keywords="terms of service, user agreement, consulting terms, brand whisperer"
      />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Legal Agreement
            </Badge>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-body-lg text-gray-300 mb-4">
              These terms govern your use of our services. Please read them
              carefully before engaging with The Brand Whisperer.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Key Points */}
          <Card className="bg-primary-900/20 border-primary-500/30 mb-12">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary-400" />
                Key Terms Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-300">
              <p>
                • These terms form a binding agreement between you and The Brand
                Whisperer
              </p>
              <p>
                • By using our services, you agree to these terms and our
                privacy policy
              </p>
              <p>
                • We provide branding consultation services for startups and
                growing companies
              </p>
              <p>
                • Payment terms, deliverables, and timelines are specified in
                individual service agreements
              </p>
              <p>
                • Either party may terminate services with appropriate notice as
                outlined below
              </p>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                1. Service Description
              </h2>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardContent className="pt-6 text-gray-300 space-y-4">
                  <p>
                    The Brand Whisperer provides strategic branding consultation
                    services including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Brand strategy development and positioning</li>
                    <li>Visual identity design and guidelines</li>
                    <li>Brand messaging and voice development</li>
                    <li>Market research and competitive analysis</li>
                    <li>Brand implementation and rollout planning</li>
                    <li>Ongoing brand advisory and support</li>
                  </ul>
                  <p>
                    Specific deliverables, timelines, and pricing are detailed
                    in individual service agreements.
                  </p>
                </CardContent>
              </Card>
            </section>

            <Separator className="bg-dark-700" />

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                2. Your Responsibilities
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-center">
                      <Users className="w-5 h-5 mr-2 text-secondary-400" />
                      Cooperation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Provide accurate information</li>
                      <li>• Respond to requests timely</li>
                      <li>• Participate in scheduled meetings</li>
                      <li>• Review deliverables promptly</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-secondary-400" />
                      Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Use services lawfully</li>
                      <li>• Respect intellectual property</li>
                      <li>• Maintain confidentiality</li>
                      <li>• Pay fees on time</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="bg-dark-700" />

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                3. Payment Terms
              </h2>

              <Card className="bg-dark-900/50 border-dark-700 mb-6">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Fees and Billing
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Project Fees:</strong> Specified in individual
                      service agreements
                    </li>
                    <li>
                      <strong>Payment Schedule:</strong> Typically 50% upfront,
                      50% upon completion
                    </li>
                    <li>
                      <strong>Equity Components:</strong> As agreed in equity
                      participation packages
                    </li>
                    <li>
                      <strong>Late Fees:</strong> 1.5% per month on overdue
                      amounts
                    </li>
                    <li>
                      <strong>Expenses:</strong> Pre-approved expenses billed
                      separately
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Refund Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p>
                    Refunds are handled case-by-case based on project stage and
                    work completed:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Unused portions of prepaid fees may be refunded upon
                      termination
                    </li>
                    <li>Completed work and deliverables are non-refundable</li>
                    <li>
                      Equity components are typically non-refundable once vested
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Separator className="bg-dark-700" />

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                4. Intellectual Property
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      Your Rights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Own final brand deliverables</li>
                      <li>• Full usage rights upon payment</li>
                      <li>• Trademark and copyright ownership</li>
                      <li>• Right to modify and extend</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      Our Rights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Retain methodology and processes</li>
                      <li>• Use as portfolio examples</li>
                      <li>• Keep preliminary work</li>
                      <li>• Protect proprietary frameworks</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="bg-dark-700" />

            {/* Confidentiality */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                5. Confidentiality
              </h2>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardContent className="pt-6 text-gray-300 space-y-4">
                  <p>
                    We maintain strict confidentiality regarding your business
                    information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All client information is treated as confidential</li>
                    <li>
                      Non-disclosure agreements signed for sensitive projects
                    </li>
                    <li>Team members bound by confidentiality obligations</li>
                    <li>
                      Information shared only with explicit client consent
                    </li>
                    <li>Secure storage and handling of all client materials</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Separator className="bg-dark-700" />

            {/* Limitations and Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                6. Limitations and Disclaimers
              </h2>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardContent className="pt-6 text-gray-300 space-y-4">
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <p className="text-yellow-400 font-semibold mb-2">
                      Important Notice:
                    </p>
                    <p className="text-yellow-200 text-sm">
                      While we strive for excellent results, branding outcomes
                      depend on many factors including market conditions,
                      execution, and business performance.
                    </p>
                  </div>
                  <p>Our liability is limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The amount of fees paid for the specific service</li>
                    <li>Direct damages only (no consequential damages)</li>
                    <li>Claims made within one year of service completion</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Separator className="bg-dark-700" />

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                7. Termination
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">By You</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• 30 days written notice</li>
                      <li>• Payment for completed work</li>
                      <li>• Return of confidential materials</li>
                      <li>• No refund of equity components</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">By Us</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Material breach of terms</li>
                      <li>• Non-payment after 30 days</li>
                      <li>• Failure to cooperate</li>
                      <li>• Illegal or unethical conduct</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="bg-dark-700" />

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                8. Governing Law
              </h2>

              <Card className="bg-dark-900/50 border-dark-700">
                <CardContent className="pt-6 text-gray-300 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Scale className="w-5 h-5 text-primary-400 mt-1" />
                    <div>
                      <p className="mb-4">
                        These terms are governed by California state law and
                        federal law of the United States. Any disputes will be
                        resolved through:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Good faith negotiation between the parties</li>
                        <li>Mediation if negotiation fails</li>
                        <li>Binding arbitration in San Francisco County</li>
                        <li>
                          Federal or state courts in California as last resort
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact Information */}
            <section>
              <Card className="bg-secondary-900/20 border-secondary-500/30">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Questions About These Terms?
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Contact us at{" "}
                    <a
                      href="mailto:legal@brandwhisperer.io"
                      className="text-secondary-400 hover:text-secondary-300"
                    >
                      legal@brandwhisperer.io
                    </a>{" "}
                    or call{" "}
                    <a
                      href="tel:+16177923378"
                      className="text-secondary-400 hover:text-secondary-300"
                    >
                      +1 (617) 792-3378
                    </a>
                  </p>
                  <p className="text-gray-400 text-xs">
                    These terms may be updated from time to time. Continued use
                    of our services constitutes acceptance of any changes.
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

export default TermsOfService;
