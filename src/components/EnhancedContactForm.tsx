import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Send,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  Phone,
  Video,
  AlertCircle,
} from "lucide-react";

interface EnhancedContactFormProps {
  formType?: "consultation" | "general" | "download";
  resourceName?: string;
  onSubmit?: (data: any) => void;
}

const EnhancedContactForm: React.FC<EnhancedContactFormProps> = ({
  formType = "consultation",
  resourceName = "",
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    stage: "",
    fundingStage: "",
    teamSize: "",
    currentRevenue: "",
    challenge: "",
    timeline: "",
    budget: "",
    message: "",
    newsletter: true,
    urgency: "",
    preferredContact: "email",
    heardAbout: "",
    services: {
      "Brand Strategy": false,
      "Visual Identity": false,
      "Website Design": false,
      "Marketing Materials": false,
      "Investor Materials": false,
      "Brand Guidelines": false,
    },
    priority: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Prepare form data
    const services = formData.services
      ? Object.entries(formData.services)
          .filter(([_, checked]) => checked)
          .map(([service, _]) => service)
          .join(", ")
      : "None specified";

    try {
      // Primary method: Submit to Formspree
      const submitData = {
        _replyto: formData.email,
        _subject: `${formType === "consultation" ? "Consultation Request" : "Contact Form"} - ${formData.name}`,
        name: formData.name,
        email: formData.email,
        company: formData.company,
        website: formData.website,
        stage: formData.stage,
        fundingStage: formData.fundingStage,
        teamSize: formData.teamSize,
        currentRevenue: formData.currentRevenue,
        challenge: formData.challenge,
        timeline: formData.timeline,
        budget: formData.budget,
        message: formData.message,
        urgency: formData.urgency,
        preferredContact: formData.preferredContact,
        heardAbout: formData.heardAbout,
        services: services,
        priority: formData.priority,
        newsletter: formData.newsletter ? "Yes" : "No",
        formType: formType,
        resourceName: resourceName,
        submittedAt: new Date().toLocaleString(),
      };

      const response = await fetch("https://formspree.io/f/mzzgwkla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Show success message
      setIsSubmitted(true);
      if (onSubmit) {
        onSubmit(formData);
      }

      // Track successful conversion
      if (window.gtag) {
        window.gtag("event", "form_submit_success", {
          event_category: "conversion",
          event_label: formType,
          form_type: formType,
          resource_name: resourceName,
        });
      }
    } catch (error) {
      console.error("Formspree submission failed:", error);

      // Fallback method: Use mailto
      const emailSubject = `${formType === "consultation" ? "Consultation Request" : "Contact Form"} - ${formData.name}`;

      const emailBody = `
New ${formType} request from ${formData.name}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company}
- Website: ${formData.website}

Project Details:
- Stage: ${formData.stage}
- Funding Stage: ${formData.fundingStage}
- Team Size: ${formData.teamSize}
- Current Revenue: ${formData.currentRevenue}
- Challenge: ${formData.challenge}
- Timeline: ${formData.timeline}
- Budget: ${formData.budget}
- Priority: ${formData.priority}
- Urgency: ${formData.urgency}

Services Interested In: ${services}

Message:
${formData.message}

Additional Information:
- Preferred Contact: ${formData.preferredContact}
- How they heard about us: ${formData.heardAbout}
- Newsletter subscription: ${formData.newsletter ? "Yes" : "No"}

Submitted at: ${new Date().toLocaleString()}
      `.trim();

      try {
        // Create mailto link as fallback
        const mailtoLink = `mailto:hello@brandwhisperer.io?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;

        setIsSubmitted(true);
        if (onSubmit) {
          onSubmit(formData);
        }

        // Track fallback success
        if (window.gtag) {
          window.gtag("event", "form_submit_fallback", {
            event_category: "conversion",
            event_label: formType,
          });
        }
      } catch (fallbackError) {
        console.error("Both Formspree and mailto failed:", fallbackError);
        setError(
          "There was an error submitting your form. Please copy the information below and email us directly at hello@brandwhisperer.io",
        );

        // Track error
        if (window.gtag) {
          window.gtag("event", "form_submit_error", {
            event_category: "error",
            event_label: formType,
          });
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (isSubmitted) {
    return (
      <Card className="bg-dark-900/50 border-dark-700">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            {formType === "consultation"
              ? "Consultation Requested!"
              : formType === "download"
                ? "Download Ready!"
                : "Message Sent!"}
          </h3>
          <p className="text-gray-300 mb-6">
            {formType === "consultation"
              ? "Your consultation request has been submitted successfully! We'll send you a calendar link within 24 hours to schedule your free strategy session."
              : formType === "download"
                ? `Your request for ${resourceName} has been received! Check your email for the download link.`
                : "Your message has been sent successfully! We'll get back to you within 24 hours."}
          </p>
          <div className="space-y-4">
            <Badge className="bg-secondary-500/20 text-secondary-400 border-secondary-500/30">
              Response within 24 hours
            </Badge>
            {formType === "consultation" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-dark-800 rounded-lg">
                  <Clock className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">
                    Free 30-min consultation
                  </div>
                </div>
                <div className="p-4 bg-dark-800 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">
                    Brand assessment included
                  </div>
                </div>
                <div className="p-4 bg-dark-800 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Custom proposal</div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-dark-900/50 border-dark-700">
      <CardHeader className="p-6 lg:p-8">
        <CardTitle className="text-xl lg:text-2xl text-white">
          {formType === "consultation"
            ? "Schedule Free Consultation"
            : formType === "download"
              ? `Download ${resourceName}`
              : "Get In Touch"}
        </CardTitle>
        <CardDescription className="text-sm lg:text-base text-gray-300">
          {formType === "consultation"
            ? "Tell us about your startup and we'll provide a custom brand strategy consultation."
            : formType === "download"
              ? "Enter your details to access this free resource immediately."
              : "Let's discuss how we can help build your scalable brand."}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 lg:p-8">
        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <div className="w-full">
                <h4 className="text-red-400 font-semibold mb-1">
                  Submission Error
                </h4>
                <p className="text-red-300 text-sm mb-3">{error}</p>
                <div className="bg-red-950/50 p-3 rounded border border-red-500/20 mb-3">
                  <p className="text-red-300 text-xs mb-2 font-semibold">
                    Your form data (copy this):
                  </p>
                  <pre className="text-red-200 text-xs whitespace-pre-wrap break-words">
                    {`Subject: ${formType === "consultation" ? "Consultation Request" : "Contact Form"} - ${formData.name}

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
${formData.website ? `Website: ${formData.website}` : ""}
${formData.challenge ? `Challenge: ${formData.challenge}` : ""}
${formData.message ? `Message: ${formData.message}` : ""}`}
                  </pre>
                </div>
                <a
                  href="mailto:hello@brandwhisperer.io"
                  className="text-red-400 hover:text-red-300 underline text-sm"
                >
                  Email us directly at hello@brandwhisperer.io
                </a>
              </div>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <Label
                htmlFor="name"
                className="text-white text-sm lg:text-base mb-2 block"
              >
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-dark-800 border-dark-600 text-white h-12 lg:h-11"
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="text-white text-sm lg:text-base mb-2 block"
              >
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-dark-800 border-dark-600 text-white h-12 lg:h-11"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <Label
                htmlFor="company"
                className="text-white text-sm lg:text-base mb-2 block"
              >
                Company Name *
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                className="bg-dark-800 border-dark-600 text-white h-12 lg:h-11"
                placeholder="Your startup name"
              />
            </div>
            <div>
              <Label
                htmlFor="website"
                className="text-white text-sm lg:text-base mb-2 block"
              >
                Website
              </Label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                className="bg-dark-800 border-dark-600 text-white h-12 lg:h-11"
                placeholder="https://yourcompany.com"
              />
            </div>
          </div>

          {/* Startup Details */}
          {formType === "consultation" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fundingStage" className="text-white">
                    Funding Stage *
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("fundingStage", value)
                    }
                  >
                    <SelectTrigger className="bg-dark-800 border-dark-600 text-white">
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-800 border-dark-600">
                      <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                      <SelectItem value="seed">Seed</SelectItem>
                      <SelectItem value="series-a-prep">
                        Pre-Series A
                      </SelectItem>
                      <SelectItem value="series-a">Series A</SelectItem>
                      <SelectItem value="series-b+">Series B+</SelectItem>
                      <SelectItem value="bootstrapped">Bootstrapped</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="teamSize" className="text-white">
                    Team Size
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("teamSize", value)
                    }
                  >
                    <SelectTrigger className="bg-dark-800 border-dark-600 text-white">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-800 border-dark-600">
                      <SelectItem value="1-5">1-5 people</SelectItem>
                      <SelectItem value="6-15">6-15 people</SelectItem>
                      <SelectItem value="16-50">16-50 people</SelectItem>
                      <SelectItem value="51-100">51-100 people</SelectItem>
                      <SelectItem value="100+">100+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentRevenue" className="text-white">
                    Annual Revenue
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("currentRevenue", value)
                    }
                  >
                    <SelectTrigger className="bg-dark-800 border-dark-600 text-white">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-800 border-dark-600">
                      <SelectItem value="0-100k">$0 - $100K</SelectItem>
                      <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                      <SelectItem value="5m+">$5M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline" className="text-white">
                    Project Timeline
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("timeline", value)
                    }
                  >
                    <SelectTrigger className="bg-dark-800 border-dark-600 text-white">
                      <SelectValue placeholder="When do you need this?" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-800 border-dark-600">
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          )}

          {/* Primary Challenge */}
          <div>
            <Label htmlFor="challenge" className="text-white">
              Primary Brand Challenge *
            </Label>
            <Select
              onValueChange={(value) => handleSelectChange("challenge", value)}
            >
              <SelectTrigger className="bg-dark-800 border-dark-600 text-white">
                <SelectValue placeholder="What's your biggest challenge?" />
              </SelectTrigger>
              <SelectContent className="bg-dark-800 border-dark-600">
                <SelectItem value="no-brand">
                  No brand strategy/identity
                </SelectItem>
                <SelectItem value="outgrown-brand">
                  Outgrown current brand
                </SelectItem>
                <SelectItem value="inconsistent">
                  Inconsistent brand application
                </SelectItem>
                <SelectItem value="not-scalable">
                  Brand isn't scalable
                </SelectItem>
                <SelectItem value="investor-ready">
                  Need investor-grade brand
                </SelectItem>
                <SelectItem value="pivot">Business model pivot</SelectItem>
                <SelectItem value="team-growth">
                  Scaling team and processes
                </SelectItem>
                <SelectItem value="competitive">
                  Standing out from competitors
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Budget and Contact Preferences */}
          {formType === "consultation" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget" className="text-white">
                    Budget Range
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("budget", value)
                    }
                  >
                    <SelectTrigger className="bg-dark-800 border-dark-600 text-white">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-800 border-dark-600">
                      <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                      <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                      <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                      <SelectItem value="100k+">$100K+</SelectItem>
                      <SelectItem value="unsure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="preferredContact" className="text-white">
                    Preferred Contact Method
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("preferredContact", value)
                    }
                  >
                    <SelectTrigger className="bg-dark-800 border-dark-600 text-white">
                      <SelectValue placeholder="How should we contact you?" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-800 border-dark-600">
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone call</SelectItem>
                      <SelectItem value="video">Video call</SelectItem>
                      <SelectItem value="calendar">
                        Send calendar link
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          )}

          {/* Message */}
          <div>
            <Label
              htmlFor="message"
              className="text-white text-sm lg:text-base mb-2 block"
            >
              Tell us about your startup
              {formType !== "download" && " *"}
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              required={formType !== "download"}
              value={formData.message}
              onChange={handleChange}
              className="bg-dark-800 border-dark-600 text-white min-h-[120px]"
              placeholder="Brief description of your startup, current challenges, and what you're hoping to achieve..."
            />
          </div>

          {/* How did you hear about us */}
          <div>
            <Label htmlFor="heardAbout" className="text-white">
              How did you hear about us?
            </Label>
            <Select
              onValueChange={(value) => handleSelectChange("heardAbout", value)}
            >
              <SelectTrigger className="bg-dark-800 border-dark-600 text-white">
                <SelectValue placeholder="Select source" />
              </SelectTrigger>
              <SelectContent className="bg-dark-800 border-dark-600">
                <SelectItem value="google">Google search</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="referral">Referral</SelectItem>
                <SelectItem value="blog">Blog/Content</SelectItem>
                <SelectItem value="event">Event/Conference</SelectItem>
                <SelectItem value="vc">VC/Investor</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Newsletter Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, newsletter: checked as boolean })
              }
              className="border-dark-600"
            />
            <Label htmlFor="newsletter" className="text-gray-300 text-sm">
              Subscribe to our weekly startup branding insights (2,500+
              founders)
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold min-h-[48px] lg:min-h-[44px] text-base lg:text-lg"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-dark-900 border-t-transparent rounded-full animate-spin"></div>
                <span>
                  {formType === "consultation"
                    ? "Scheduling..."
                    : formType === "download"
                      ? "Preparing Download..."
                      : "Sending..."}
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                {formType === "consultation" ? (
                  <Calendar className="w-5 h-5" />
                ) : formType === "download" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                <span>
                  {formType === "consultation"
                    ? "Schedule Free Consultation"
                    : formType === "download"
                      ? "Download Now"
                      : "Send Message"}
                </span>
              </div>
            )}
          </Button>

          <p className="text-xs lg:text-sm text-gray-400 text-center px-4">
            {formType === "consultation"
              ? "Free 30-minute consultation • No obligation • Response within 24 hours"
              : "We'll respond within 24 hours • All information is confidential"}
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default EnhancedContactForm;
