import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Download,
  CheckCircle,
  FileText,
  BookOpen,
  Calculator,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  Video,
  Calendar,
  Star,
} from "lucide-react";

const Resources = () => {
  const [email, setEmail] = useState("");
  const [selectedResource, setSelectedResource] = useState("");

  const handleDownload = (resourceName: string) => {
    setSelectedResource(resourceName);
    // In a real app, this would trigger the download and email capture
    console.log(`Downloading ${resourceName} for ${email}`);
  };

  const leadMagnets = [
    {
      title: "Startup Brand Readiness Assessment",
      description:
        "Evaluate if your brand is ready for hypergrowth with our comprehensive 50-point checklist used by Series A startups.",
      type: "PDF Checklist",
      pages: "12 pages",
      downloadCount: "2,847",
      icon: CheckCircle,
      features: [
        "50-point brand evaluation framework",
        "Scoring system with recommendations",
        "Common mistakes to avoid",
        "Series A preparation guide",
        "Implementation timeline",
      ],
      category: "assessment",
    },
    {
      title: "The SCALE Framework Guide",
      description:
        "Our complete methodology for building brands that scale from startup to unicorn. Includes templates and worksheets.",
      type: "Strategy Guide",
      pages: "28 pages",
      downloadCount: "1,923",
      icon: BookOpen,
      features: [
        "5-phase implementation framework",
        "Strategic worksheets and templates",
        "Case study examples",
        "Timeline and milestone tracking",
        "Team collaboration tools",
      ],
      category: "framework",
    },
    {
      title: "Series A Brand Preparation Toolkit",
      description:
        "Everything you need to create an investment-grade brand that impresses VCs and supports fundraising.",
      type: "Resource Kit",
      pages: "35 pages",
      downloadCount: "1,456",
      icon: Lightbulb,
      features: [
        "Investor presentation templates",
        "Brand guidelines template",
        "Pitch deck brand integration",
        "VC feedback framework",
        "Post-funding brand evolution",
      ],
      category: "investor",
    },
    {
      title: "Brand ROI Calculator",
      description:
        "Calculate the financial impact of strategic branding on your startup's valuation and customer acquisition.",
      type: "Excel Tool",
      pages: "Interactive",
      downloadCount: "987",
      icon: Calculator,
      features: [
        "Valuation impact calculator",
        "Customer acquisition cost analysis",
        "Brand equity measurement",
        "ROI projections",
        "Benchmark comparisons",
      ],
      category: "tools",
    },
    {
      title: "Pivot-Proof Brand Architecture",
      description:
        "Build flexible brand systems that adapt to business model changes without requiring expensive rebrands.",
      type: "Workshop Guide",
      pages: "22 pages",
      downloadCount: "745",
      icon: Target,
      features: [
        "Flexible positioning framework",
        "Modular visual system design",
        "Messaging hierarchy templates",
        "Pivot case studies",
        "Implementation workshop",
      ],
      category: "framework",
    },
    {
      title: "Hypergrowth Brand Scaling Playbook",
      description:
        "Step-by-step guide for maintaining brand consistency while scaling from 10 to 1,000+ employees.",
      type: "Playbook",
      pages: "31 pages",
      downloadCount: "612",
      icon: TrendingUp,
      features: [
        "Team structure guidelines",
        "Brand governance framework",
        "Quality control processes",
        "Scaling milestone checklists",
        "Global expansion considerations",
      ],
      category: "scaling",
    },
  ];

  const webinars = [
    {
      title: "Building Brands That Don't Break During Hypergrowth",
      description:
        "Live workshop covering our proven methodology for scalable brand systems.",
      date: "Feb 15, 2024",
      duration: "60 minutes",
      attendees: "347",
      type: "Live Webinar",
      icon: Video,
    },
    {
      title: "What VCs Really Want to See in Your Brand",
      description:
        "Insider perspective on how investors evaluate startup brands during due diligence.",
      date: "Feb 28, 2024",
      duration: "45 minutes",
      attendees: "289",
      type: "Expert Panel",
      icon: Users,
    },
    {
      title: "The 90-Day Brand Sprint Workshop",
      description:
        "Hands-on session building your Series A-ready brand in 90 days.",
      date: "Mar 12, 2024",
      duration: "90 minutes",
      attendees: "156",
      type: "Workshop",
      icon: Calendar,
    },
  ];

  const testimonials = [
    {
      quote:
        "The Brand Readiness Assessment revealed gaps we didn't even know existed. Fixed them and raised our Series A 3 months later.",
      author: "Sarah Chen",
      title: "CEO, TechFlow",
      company: "Recently raised $15M",
    },
    {
      quote:
        "The SCALE Framework saved us from a $200K rebrand during our pivot. Our brand adapted perfectly to our new direction.",
      author: "Marcus Rodriguez",
      title: "Founder, DataSync",
      company: "3 successful pivots",
    },
  ];

  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="Free Startup Branding Resources & Tools - The Brand Whisperer"
        description="Download free startup branding resources, frameworks, and tools used by 150+ successful startups. Brand assessments, strategy guides, and ROI calculators."
        keywords="startup branding resources, brand strategy tools, brand assessment, startup brand checklist, brand ROI calculator"
      />

      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Free Resources
            </Badge>
            <h1 className="text-display-lg lg:text-display-xl font-bold mb-8 text-white">
              Startup Brand Resources & Tools
            </h1>
            <p className="text-body-lg text-gray-300 leading-relaxed mb-8">
              Download the same frameworks, assessments, and tools we use with
              our clients. Proven by 150+ startups and $2B+ in funding raised.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4 text-secondary-400" />
                <span>7,000+ downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-secondary-400" />
                <span>4.9/5 average rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-secondary-400" />
                <span>Always free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="section-spacing">
        <div className="container-custom">
          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-dark-900 border-dark-700">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-secondary-500 data-[state=active]:text-dark-900"
              >
                All Resources
              </TabsTrigger>
              <TabsTrigger
                value="assessment"
                className="data-[state=active]:bg-secondary-500 data-[state=active]:text-dark-900"
              >
                Assessments
              </TabsTrigger>
              <TabsTrigger
                value="framework"
                className="data-[state=active]:bg-secondary-500 data-[state=active]:text-dark-900"
              >
                Frameworks
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="data-[state=active]:bg-secondary-500 data-[state=active]:text-dark-900"
              >
                Tools
              </TabsTrigger>
              <TabsTrigger
                value="webinars"
                className="data-[state=active]:bg-secondary-500 data-[state=active]:text-dark-900"
              >
                Webinars
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {leadMagnets.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    resource={resource}
                    onDownload={handleDownload}
                    email={email}
                    setEmail={setEmail}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="assessment" className="mt-8" id="assessment">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {leadMagnets
                  .filter((r) => r.category === "assessment")
                  .map((resource, index) => (
                    <ResourceCard
                      key={index}
                      resource={resource}
                      onDownload={handleDownload}
                      email={email}
                      setEmail={setEmail}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="framework" className="mt-8" id="framework">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {leadMagnets
                  .filter((r) => r.category === "framework")
                  .map((resource, index) => (
                    <ResourceCard
                      key={index}
                      resource={resource}
                      onDownload={handleDownload}
                      email={email}
                      setEmail={setEmail}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-8" id="calculator">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {leadMagnets
                  .filter(
                    (r) => r.category === "tools" || r.category === "scaling",
                  )
                  .map((resource, index) => (
                    <ResourceCard
                      key={index}
                      resource={resource}
                      onDownload={handleDownload}
                      email={email}
                      setEmail={setEmail}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="webinars" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {webinars.map((webinar, index) => (
                  <Card
                    key={index}
                    className="bg-dark-900/50 border-dark-700 card-hover"
                  >
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4">
                        <webinar.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="mb-2 w-fit bg-secondary-500/20 text-secondary-400 border-secondary-500/30">
                        {webinar.type}
                      </Badge>
                      <CardTitle className="text-xl text-white">
                        {webinar.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {webinar.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-400 mb-4">
                        <div className="flex items-center justify-between">
                          <span>Date:</span>
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Duration:</span>
                          <span>{webinar.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Attendees:</span>
                          <span>{webinar.attendees}</span>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900"
                      >
                        <Link to="/contact">Register Free</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display-sm font-bold text-white mb-8">
              What Founders Say About Our Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-dark-900/50 border-dark-700">
                <CardContent className="p-8">
                  <blockquote className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.title}
                      </div>
                      <div className="text-sm text-secondary-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <Card className="bg-gradient-to-br from-primary-900 to-primary-800 border-primary-700 text-center">
            <CardContent className="p-12">
              <h2 className="text-display-sm font-bold text-white mb-6">
                Need More Than Resources?
              </h2>
              <p className="text-body-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                Ready to work directly with us? Schedule a free consultation to
                discuss how we can build a scalable brand for your startup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-500 hover:bg-secondary-600 text-dark-900"
                >
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-300 text-primary-100 hover:bg-primary-100 hover:text-primary-900"
                >
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

const ResourceCard = ({ resource, onDownload, email, setEmail }) => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleDownloadClick = () => {
    if (!email) {
      setShowEmailForm(true);
      return;
    }
    onDownload(resource.title);
  };

  return (
    <Card className="bg-dark-900/50 border-dark-700 card-hover">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
            <resource.icon className="w-8 h-8 text-white" />
          </div>
          <Badge className="bg-secondary-500/20 text-secondary-400 border-secondary-500/30">
            {resource.type}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white leading-tight">
          {resource.title}
        </CardTitle>
        <CardDescription className="text-gray-300 leading-relaxed">
          {resource.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <span>{resource.pages}</span>
          <span>{resource.downloadCount} downloads</span>
        </div>

        <div className="space-y-2 mb-6">
          <h4 className="text-white font-semibold text-sm">What's included:</h4>
          <ul className="space-y-1">
            {resource.features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 text-sm text-gray-300"
              >
                <CheckCircle className="w-3 h-3 text-secondary-500 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {showEmailForm && !email ? (
          <div className="space-y-3">
            <Label htmlFor="email" className="text-white text-sm">
              Enter your email to download:
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-dark-800 border-dark-600 text-white"
            />
            <Button
              onClick={handleDownloadClick}
              className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Free
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleDownloadClick}
            className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Free
          </Button>
        )}

        <p className="text-xs text-gray-500 text-center mt-3">
          No spam, unsubscribe anytime
        </p>
      </CardContent>
    </Card>
  );
};

export default Resources;
