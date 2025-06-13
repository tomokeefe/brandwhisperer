import React from "react";
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
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Download,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title:
      "The $50M Rebrand Mistake: Why Most Startups Break Their Brands During Hypergrowth",
    excerpt:
      "Learn from New Relic's 14-year delay in rebranding and how to build a brand that scales from garage to IPO without expensive, momentum-killing rebrands.",
    author: "The Brand Whisperer",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Brand Strategy",
    featured: true,
    slug: "50m-rebrand-mistake",
  };

  const blogPosts = [
    {
      title: "From Garage to IPO: Brand Evolution Frameworks for Hypergrowth",
      excerpt:
        "A comprehensive guide to building brand architectures that accommodate business evolution, new products, and market expansion without breaking.",
      author: "The Brand Whisperer",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Scale Framework",
      slug: "garage-to-ipo-brand-evolution",
    },
    {
      title:
        "What VCs Really Think About Your Brand: Investor Perspective Insights",
      excerpt:
        "80% of investment decisions are emotional. Learn how your brand either opens doors or closes them before you even speak.",
      author: "The Brand Whisperer",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Investor Relations",
      slug: "what-vcs-think-about-your-brand",
    },
    {
      title: "The 90-Day Brand Sprint for Pre-Series A Startups",
      excerpt:
        "Our proven methodology for building investment-grade brands in 90 days or less. Includes templates and frameworks.",
      author: "The Brand Whisperer",
      date: "2024-01-08",
      readTime: "15 min read",
      category: "Implementation",
      slug: "90-day-brand-sprint",
    },
    {
      title:
        "Pivot-Proof Positioning: Change Direction Without Changing Identity",
      excerpt:
        "How to build flexible brand architectures that bend without breaking when your business model evolves.",
      author: "The Brand Whisperer",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Pivot Strategy",
      slug: "pivot-proof-positioning",
    },
    {
      title: "Visual Systems That Scale: From 10 to 10,000 Customers",
      excerpt:
        "Design principles and frameworks for creating brand systems that work at any scale without breaking down.",
      author: "The Brand Whisperer",
      date: "2024-01-03",
      readTime: "14 min read",
      category: "Visual Design",
      slug: "visual-systems-that-scale",
    },
    {
      title: "Brand vs Logo: Why Most Startups Get This Wrong",
      excerpt:
        "Brands are promises kept at scale, not logos. Learn the fundamental difference that makes or breaks hypergrowth companies.",
      author: "The Brand Whisperer",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "Brand Basics",
      slug: "brand-vs-logo",
    },
  ];

  const categories = [
    "All Posts",
    "Brand Strategy",
    "Scale Framework",
    "Investor Relations",
    "Implementation",
    "Pivot Strategy",
    "Visual Design",
    "Brand Basics",
  ];

  const resources = [
    {
      title: "Startup Brand Readiness Assessment",
      description:
        "Evaluate if your brand is ready for hypergrowth with our comprehensive 50-point checklist.",
      type: "PDF Checklist",
      icon: Download,
    },
    {
      title: "The SCALE Framework Guide",
      description:
        "Our complete methodology for building brands that scale from startup to unicorn.",
      type: "Strategy Guide",
      icon: BookOpen,
    },
    {
      title: "Series A Brand Preparation Toolkit",
      description:
        "Everything you need to create an investment-grade brand that impresses VCs.",
      type: "Resource Kit",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title="Startup Branding Insights & Resources - The Brand Whisperer Blog"
        description="Expert insights on building scalable brands for hypergrowth startups. Get frameworks, case studies, and resources for startup brand strategy."
        keywords="startup branding blog, brand strategy insights, hypergrowth branding resources, startup brand case studies"
      />

      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Insights & Resources
            </Badge>
            <h1 className="text-display-lg lg:text-display-xl font-bold mb-8 text-white">
              Startup Branding Insights
            </h1>
            <p className="text-body-lg text-gray-300 leading-relaxed mb-8">
              Expert insights, frameworks, and case studies on building brands
              that scale. Learn from 30+ years of experience and 150+ startup
              projects.
            </p>

            {/* Newsletter Signup */}
            <Card className="bg-dark-900/50 border-dark-700 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Get Weekly Startup Branding Insights
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Join 2,500+ founders getting actionable brand strategy tips
                  every Tuesday.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-dark-800 border-dark-600 text-white flex-1"
                  />
                  <Button className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold">
                    Subscribe Free
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-bold text-white mb-4">
              Featured Article
            </h2>
          </div>

          <Card className="bg-dark-900/50 border-dark-700 max-w-5xl mx-auto card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-900/20 to-secondary-900/20 lg:rounded-l-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-20 h-20 text-secondary-400 mx-auto mb-4" />
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                    Featured Story
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-secondary-500/20 text-secondary-400 border-secondary-500/30">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-secondary-500 hover:bg-secondary-600 text-dark-900"
                >
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center space-x-2"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-bold text-white mb-8">
              Latest Articles
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All Posts" ? "default" : "outline"}
                  size="sm"
                  className={
                    category === "All Posts"
                      ? "bg-secondary-500 text-dark-900"
                      : "border-dark-600 text-gray-300 hover:bg-dark-800"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 card-hover"
              >
                <CardHeader>
                  <Badge
                    variant="outline"
                    className="mb-2 w-fit border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
                  >
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl text-white leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-dark-600 text-gray-300 hover:bg-dark-800"
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center justify-center space-x-2"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-spacing bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-secondary-500/30 text-secondary-400 bg-secondary-500/10"
            >
              Free Resources
            </Badge>
            <h2 className="text-display-sm font-bold text-white mb-8">
              Download Our Startup Brand Resources
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Get our proven frameworks, checklists, and guides used by 150+
              successful startups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="bg-dark-900/50 border-dark-700 card-hover"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="mb-2 bg-secondary-500/20 text-secondary-400 border-secondary-500/30">
                    {resource.type}
                  </Badge>
                  <CardTitle className="text-xl text-white">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900"
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Free</span>
                    </Link>
                  </Button>
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
                Ready to Build a Brand That Scales?
              </h2>
              <p className="text-body-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                Stop reading about brand strategy and start implementing it.
                Schedule a free consultation to discuss your startup's brand
                needs.
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
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
