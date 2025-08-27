import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Palette
const GOLD = "#FFD700";
const SAPPHIRE = "#0F52BA";
const CORAL = "#FF6F61";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const serviceOptions = [
  "Brand Clarity Session",
  "Brand Scalability Audit",
  "AI Design Sprint",
  "Startup Branding Package",
  "UI/UX Overhaul",
  "AI/Vibe Coding Prototype",
  "Other",
];

const ContactLeadForm: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const WEBHOOK_URL = import.meta.env.VITE_LEAD_WEBHOOK_URL as string | undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !company || !service || !consent) {
      setError("Please complete all required fields and consent to continue.");
      return;
    }

    setSubmitting(true);

    const payload = {
      name,
      email,
      company,
      service_interest: service,
      message,
      consent,
      source: "contact_page",
      ts: new Date().toISOString(),
    };

    // Track GA4 event
    try {
      if (window.gtag) {
        window.gtag("event", "contact_form_submit", {
          event_category: "lead",
          event_label: service,
          value: 1,
          method: "contact_form",
        });
      }
    } catch {}

    // Optional webhook (Zapier/Mailchimp proxy)
    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
    } catch (err) {
      // Non-fatal: continue to thank-you
      console.error("Lead webhook failed", err);
    }

    setSubmitting(false);
    navigate(`/thank-you?utm_source=contact_submit`);
  };

  return (
    <div
      className="w-full mx-auto"
      style={{ maxWidth: 400, fontFamily: "Poppins, sans-serif" }}
    >
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold mb-2" style={{ color: GOLD }}>
          Get in Touch with Brand Whisperer
        </h2>
        <p className="text-sm" style={{ color: "#E5E7EB" }}>
          Fill this out, and we’ll turn your branding woes into wins—no dentist
          visit required!
        </p>
      </div>

      {error && (
        <div className="mb-4 text-sm p-3 rounded" style={{ background: "#7F1D1D", color: "#FCA5A5" }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 p-5 rounded-lg" style={{ background: "rgba(15,82,186,0.08)", border: `1px solid ${SAPPHIRE}` }}>
        <div>
          <Label htmlFor="name" className="mb-1 block" style={{ color: GOLD }}>
            Name *
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name (so we can say hi!)."
            className="h-12 bg-dark-800 border" 
            style={{ borderColor: SAPPHIRE, color: "#FFFFFF" }}
          />
        </div>

        <div>
          <Label htmlFor="email" className="mb-1 block" style={{ color: GOLD }}>
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your email (for our golden tips!)."
            className="h-12 bg-dark-800 border" 
            style={{ borderColor: SAPPHIRE, color: "#FFFFFF" }}
          />
        </div>

        <div>
          <Label htmlFor="company" className="mb-1 block" style={{ color: GOLD }}>
            Company *
          </Label>
          <Input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            placeholder="Your startup’s name (keep it snappy!)."
            className="h-12 bg-dark-800 border" 
            style={{ borderColor: SAPPHIRE, color: "#FFFFFF" }}
          />
        </div>

        <div>
          <Label className="mb-1 block" style={{ color: GOLD }}>
            Service Interest *
          </Label>
          <Select onValueChange={(v) => setService(v)}>
            <SelectTrigger className="h-12 bg-dark-800 border text-white" style={{ borderColor: SAPPHIRE }}>
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent className="bg-dark-800 border" style={{ borderColor: SAPPHIRE }}>
              {serviceOptions.map((opt) => (
                <SelectItem value={opt} key={opt} className="text-white">
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="mb-1 block" style={{ color: GOLD }}>
            Message (optional)
          </Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us your branding challenge (or just say hi!)."
            className="min-h-[120px] bg-dark-800 border text-white"
            style={{ borderColor: SAPPHIRE }}
          />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox id="consent" checked={consent} onCheckedChange={(c) => setConsent(!!c)} className="mt-1 border" style={{ borderColor: SAPPHIRE }} />
          <Label htmlFor="consent" className="text-sm text-gray-300">
            Yes, send me branding updates! (No spam, promise.) I agree to the
            processing of my information per the
            <a href="/privacy" className="underline ml-1" style={{ color: GOLD }}>privacy policy</a>.
          </Label>
        </div>

        <Button
          type="submit"
          disabled={submitting}
          className="w-full text-black font-semibold text-base min-h-[48px] hover:scale-105 transition-transform"
          style={{ background: CORAL }}
        >
          {submitting ? "Sending..." : "Let’s Chat!"}
        </Button>
      </form>

      <div className="text-center mt-3">
        <p className="text-xs" style={{ color: "#9CA3AF" }}>
          Consulting: $199–$1,499 • Custom projects: $3,000–$15,000
        </p>
      </div>
    </div>
  );
};

export default ContactLeadForm;
