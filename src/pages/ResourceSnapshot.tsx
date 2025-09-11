import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, TrendingUp, Shield, Search } from "lucide-react";

const GOLD = "#f4d03f";

declare global {
  interface Window { gtag?: (...args: any[]) => void; }
}

const ResourceSnapshot: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [challenge, setChallenge] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const WEBHOOK_URL = import.meta.env.VITE_LEAD_WEBHOOK_URL as string | undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !email || !company || !challenge) {
      setError("Please complete all required fields.");
      return;
    }
    setSubmitting(true);

    const payload = {
      name,
      email,
      company,
      challenge,
      offer: "free_brand_snapshot",
      ts: new Date().toISOString(),
      source: "resources_snapshot",
    };

    try {
      if (window.gtag) {
        window.gtag("event", "snapshot_form_submit", {
          event_category: "lead",
          event_label: challenge,
        });
      }
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      setSuccess(true);
    } catch (err) {
      console.error("Snapshot submit failed", err);
      setError("There was an error submitting. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-dark-950 pt-28 lg:pt-36 pb-16">
      <SEO
        title="Free Brand Snapshot | The Brand Whisperer"
        description="Get 3 key insights across Branding, Messaging, and Digital Presence in 48 hours. Upgrade to the $799 full 10-area audit when you're ready."
        keywords="free brand audit, startup brand snapshot, branding assessment"
        url="https://brandwhisperer.com/resources/snapshot"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.7)" }} />
        <div className="container-custom relative z-10 py-16 lg:py-24 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-transparent"
            style={{ color: GOLD, backgroundColor: "rgba(244,208,63,0.12)", borderColor: "rgba(244,208,63,0.3)" }}
          >
            Free Brand Snapshot
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Scale Your Startup Brand—Start with a Free Snapshot
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Unlock 3 key insights into your Branding, Messaging, and Digital Presence—then upgrade to our $799 Audit for the full 10-area breakdown.
          </p>
          <div className="mt-6">
            <a href="#start">
              <Button size="lg" className="font-semibold" style={{ backgroundColor: GOLD, color: "#111" }}>
                Get Your Free Snapshot Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-spacing bg-dark-900/40">
        <div className="container-custom">
          <h2 className="text-display-md lg:text-display-lg font-bold text-white text-center mb-10">
            Why Your Brand Needs an Audit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Avoid costly rebrands with a scalable identity." },
              { icon: Shield, title: "Boost funding readiness by up to 40% with tailored recommendations." },
              { icon: Search, title: "Outshine competitors with a 10-area deep dive." },
            ].map((item, idx) => (
              <Card key={idx} className="bg-dark-900/50 border-dark-700">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(244,208,63,0.12)", border: "1px solid rgba(244,208,63,0.35)" }}>
                    <item.icon className="w-6 h-6" style={{ color: GOLD }} />
                  </div>
                  <div className="text-white font-semibold leading-relaxed">{item.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="text-display-md lg:text-display-lg font-bold text-white text-center mb-10">
            From Free Snapshot to Full Audit
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-dark-900/50 border-dark-700">
              <CardHeader>
                <CardTitle className="text-white">Free Brand Snapshot</CardTitle>
                <CardDescription className="text-gray-300">What you'll receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5" style={{ color: GOLD }} />
                  <span>3-area analysis: Branding, Messaging, Digital Presence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5" style={{ color: GOLD }} />
                  <span>Quick wins delivered in 48 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-900/50 border-dark-700">
              <CardHeader>
                <CardTitle className="text-white">$799 Startup Brand Check</CardTitle>
                <CardDescription className="text-gray-300">Full 10-area audit</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200">
                {[
                  "Branding",
                  "Messaging",
                  "Content Strategy",
                  "Customer Experience",
                  "Conversion Optimization",
                  "Design",
                  "Usability",
                  "Digital Presence",
                  "Competitor Analysis",
                  "Consistency & Compliance",
                  "Actionable recommendations",
                ].map((item) => (
                  <div className="flex items-start gap-3" key={item}>
                    <CheckCircle className="w-5 h-5" style={{ color: GOLD }} />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-sm font-semibold text-gray-300 border-b border-dark-700">Feature</th>
                  <th className="p-4 text-sm font-semibold text-gray-300 border-b border-dark-700">Free Snapshot</th>
                  <th className="p-4 text-sm font-semibold text-gray-300 border-b border-dark-700">$799 Audit</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {[
                  { feature: "Branding", snap: "✓", audit: "✓" },
                  { feature: "Messaging", snap: "✓", audit: "✓" },
                  { feature: "Content Strategy", snap: "✗", audit: "✓" },
                  { feature: "Customer Experience", snap: "✗", audit: "✓" },
                  { feature: "Conversion Optimization", snap: "✗", audit: "✓" },
                  { feature: "Design", snap: "✗", audit: "✓" },
                  { feature: "Usability", snap: "✗", audit: "✓" },
                  { feature: "Digital Presence", snap: "✓", audit: "✓" },
                  { feature: "Competitor Analysis", snap: "✗", audit: "✓" },
                  { feature: "Consistency & Compliance", snap: "✗", audit: "✓" },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-dark-800">
                    <td className="p-4 text-gray-200">{row.feature}</td>
                    <td className="p-4" style={{ color: row.snap === "✓" ? GOLD : "#9ca3af" }}>{row.snap}</td>
                    <td className="p-4" style={{ color: row.audit === "✓" ? GOLD : "#9ca3af" }}>{row.audit}</td>
                  </tr>
                ))}
                <tr className="border-b border-dark-800">
                  <td className="p-4 text-gray-200">Recommendations</td>
                  <td className="p-4 text-gray-300">Basic</td>
                  <td className="p-4 text-gray-300">Detailed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <h2 className="text-display-md lg:text-display-lg font-bold text-white text-center mb-6">
            Trusted by Startups Like Yours
          </h2>
          <div className="max-w-3xl mx-auto text-center text-gray-300 space-y-4 mb-8">
            <p>Backed by 150+ portfolio companies.</p>
            <p>"The Snapshot gave us clarity in days—worth every second. Upgraded to the audit next!" – Jane Doe, Founder, TechStartupX.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["New Relic","Idealab","StartupOne","AlphaLabs","BetaWorks"].map((logo) => (
              <span key={logo} className="px-4 py-2 rounded-full text-sm border" style={{ borderColor: "rgba(244,208,63,0.35)", color: GOLD }}>
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="start" className="section-spacing bg-dark-900/60">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-md lg:text-display-lg font-bold text-white text-center mb-8">
              Ready to Scale? Start Here
            </h2>
            <Card className="bg-dark-900/50 border-dark-700">
              <CardContent className="p-6 lg:p-8">
                {success ? (
                  <div className="text-center text-white space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-2" style={{ backgroundColor: "rgba(244,208,63,0.12)", border: "1px solid rgba(244,208,63,0.35)" }}>
                      <CheckCircle className="w-6 h-6" style={{ color: GOLD }} />
                    </div>
                    <div className="text-2xl font-bold">Submitted!</div>
                    <p className="text-gray-300">No credit card required. We’ll follow up with your snapshot and $799 audit details.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 rounded text-sm" style={{ background: "#7F1D1D", color: "#FCA5A5" }}>{error}</div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white mb-2 block">Name *</Label>
                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required className="bg-dark-800 border-dark-600 text-white h-12" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white mb-2 block">Email *</Label>
                        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required className="bg-dark-800 border-dark-600 text-white h-12" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-white mb-2 block">Company Name *</Label>
                      <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" required className="bg-dark-800 border-dark-600 text-white h-12" />
                    </div>
                    <div>
                      <Label className="text-white mb-2 block">Biggest Brand Challenge *</Label>
                      <Select onValueChange={(v) => setChallenge(v)}>
                        <SelectTrigger className="bg-dark-800 border-dark-600 text-white h-12">
                          <SelectValue placeholder="Select one" />
                        </SelectTrigger>
                        <SelectContent className="bg-dark-800 border-dark-600 text-white">
                          {["Branding","Funding","Growth","Other"].map((opt) => (
                            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" disabled={submitting} className="w-full font-semibold text-base min-h-[48px]" style={{ backgroundColor: GOLD, color: "#111" }}>
                      {submitting ? "Submitting..." : "Submit for Free Snapshot"}
                    </Button>
                    <p className="text-xs text-gray-400 text-center">No credit card required. We’ll follow up with your snapshot and $799 audit details.</p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceSnapshot;
