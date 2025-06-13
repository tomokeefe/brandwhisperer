import React, { useState } from "react";
import SEO from "@/components/SEO";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  Calendar,
  Users,
  Target,
  Zap,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    stage: "",
    challenge: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // In a real app, you'd send this to your backend
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const consultationProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      duration: "30 minutes",
      description:
        "Free discovery call to understand your business, challenges, and growth trajectory.",
      icon: Users,
    },
    {
      step: "2",
      title: "Brand Assessment",
      duration: "1 week",
      description:
        "We analyze your current brand positioning and identify scalability opportunities.",
      icon: Target,
    },
    {
      step: "3",
      title: "Strategy Proposal",
      duration: "3-5 days",
      description:
        "Custom proposal with recommended package, timeline, and investment details.",
      icon: Zap,
    },
    {
      step: "4",
      title: "Project Kickoff",
      duration: "1 week",
      description:
        "Contract signed, equity documentation, and project timeline finalization.",
      icon: CheckCircle,
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@brandwhisperer.io",
      link: "mailto:hello@brandwhisperer.io",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (617) 792-3378",
      link: "tel:+16177923378",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Boston, MA",
      link: null,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      link: null,
    },
  ];

  const faqs = [
    {
      question: "How quickly can we start?",
      answer:
        "After our initial consultation and proposal acceptance, we typically begin within 1-2 weeks. Rush projects can be accommodated for additional fees.",
    },
    {
      question: "Why do you require equity participation?",
      answer:
        "Equity aligns our success with yours and allows us to offer startup-friendly pricing. We're invested in your long-term success, not just project completion.",
    },
    {
      question: "What if our business model changes?",
      answer:
        "Our brands are built to be pivot-proof. We create flexible architectures that adapt to business model changes without requiring complete rebrands.",
    },
    {
      question: "Do you work with international startups?",
      answer:
        "Yes, we work with startups globally. All communication is in English, and we're experienced with international market considerations.",
    },
  ];

  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="Contact The Brand Whisperer - Free Startup Brand Consultation"
        description="Schedule a free brand consultation for your startup. Expert brand strategy and visual identity services. Contact The Brand Whisperer today."
        keywords="startup brand consultation, contact brand whisperer, startup branding contact, free brand consultation"
      />
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Let's Talk
            </Badge>
            <h1 className="text-display-lg lg:text-display-xl font-bold mb-8 text-white">
              Ready to Build a Brand That Scales?
            </h1>
            <p className="text-body-lg text-gray-300 leading-relaxed mb-8">
              Schedule a free consultation to discuss your startup's unique
              needs. We'll explore your growth trajectory, brand challenges, and
              find the perfect package for your stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-dark-900"
              >
                <a href="#contact-form">Start the Conversation</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-white hover:text-dark-900"
              >
                <a href="mailto:hello@brandwhisperer.com">Email Us Directly</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 text-center card-hover"
              >
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {info.label}
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-secondary-400 hover:text-secondary-300 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-gray-300">{info.value}</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section id="schedule" className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div id="contact-form">
              <EnhancedContactForm formType="consultation" />
            </div>

            {/* Consultation Process */}
            <div>
              <div className="mb-8">
                <h2 className="text-display-sm font-bold text-white mb-4">
                  What Happens Next?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Our consultation process is designed to understand your unique
                  needs and create a custom solution for your startup's growth
                  stage.
                </p>
              </div>

              <div className="space-y-6">
                {consultationProcess.map((step, index) => (
                  <Card key={index} className="bg-dark-900/50 border-dark-700">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-white">
                              {step.title}
                            </h3>
                            <Badge
                              variant="outline"
                              className="border-secondary-500/30 text-secondary-400 bg-secondary-500/10 text-xs"
                            >
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick CTA */}
              <Card className="mt-8 bg-gradient-to-br from-primary-900/50 to-secondary-900/50 border-primary-700/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Need to move faster?
                  </h3>
                  <p className="text-primary-100 text-sm mb-4">
                    Schedule a direct call with our team for immediate
                    consultation.
                  </p>
                  <Button
                    asChild
                    className="bg-secondary-500 hover:bg-secondary-600 text-dark-900"
                  >
                    <a href="tel:+15551234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="careers" className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Frequently Asked Questions
            </Badge>
            <h2 className="text-display-md lg:text-display-lg font-bold mb-8 text-white">
              Common Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-dark-900/50 border-dark-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
