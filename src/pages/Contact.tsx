import React, { useState } from "react";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContactLeadForm from "@/components/ContactLeadForm";
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
  CheckCircle,
  Calendar,
  Users,
  Target,
  Zap,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation({
    delay: 200,
  });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({
    delay: 400,
  });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation({
    delay: 600,
  });
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation({
    delay: 800,
  });
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://brandwhisperer.com/contact/#webpage",
    url: "https://brandwhisperer.com/contact",
    name: "Contact The Brand Whisperer",
    description:
      "Get in touch for expert startup brand strategy. Free consultation available.",
    mainEntity: {
      "@type": "Organization",
      "@id": "https://brandwhisperer.com/#organization",
      name: "The Brand Whisperer",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-617-792-3378",
        contactType: "customer service",
        email: "hello@brandwhisperer.io",
        availableLanguage: "en",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      },
    },
  };
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
    <div className="bg-dark-950 pb-16">
      <SEO
        title="Contact Brand Whisperer | Startup Branding Experts"
        description="Reach out for branding, UI/UX, and AI solutions at brandwhisperer.io/contact!"
        keywords="contact startup branding, UI/UX consultation, AI design services 2025"
      />
      {/* Hero Section with Contact Form */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div
                ref={badgeRef}
                className={`inline-flex items-center gap-2 bg-secondary-600/10 text-secondary-400 text-sm font-medium px-4 py-2 rounded-full border border-secondary-500/20 mb-6 transition-all duration-700 ${
                  badgeVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Let's Talk
              </div>
              <h1
                ref={titleRef}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 lg:mb-6 text-white transition-all duration-700 ${
                  titleVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Ready to Build a{" "}
                <span className="text-secondary-400">Brand That Scales?</span>
              </h1>
              <p
                ref={descRef}
                className={`text-body-lg text-gray-300 leading-relaxed mb-8 transition-all duration-700 ${
                  descVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Schedule a free consultation to discuss your startup's unique
                needs. We'll explore your growth trajectory, brand challenges, and
                find the perfect package for your stage.
              </p>
              <div
                ref={buttonsRef}
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${
                  buttonsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-white hover:text-dark-900 hover:scale-105 transition-all duration-300"
                >
                  <a href="mailto:hello@brandwhisperer.io">Email Us Directly</a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="flex justify-center lg:justify-end">
              <ContactLeadForm />
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section
        ref={faqRef}
        className={`section-spacing bg-dark-900/30 transition-all duration-700 ${
          faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
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
