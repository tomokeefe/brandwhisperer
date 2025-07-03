import React, { useState, useMemo } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
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
      title:
        "The Hidden Cost of Inconsistent Branding: How Mixed Messages Kill Growth",
      excerpt:
        "Inconsistent branding costs startups 23% of revenue growth. Learn the 5 critical touchpoints where brand inconsistency kills conversions and how to fix them in 30 days.",
      author: "The Brand Whisperer",
      date: "2024-01-18",
      readTime: "11 min read",
      category: "Brand Strategy",
      slug: "hidden-cost-inconsistent-branding",
    },
    {
      title: "Why VCs Fund Brands, Not Just Products: The Trust Equation",
      excerpt:
        "89% of successful Series A raises have one thing in common: founders who can articulate their brand promise in 30 seconds. Learn the trust-building framework that opens investor doors.",
      author: "The Brand Whisperer",
      date: "2024-01-16",
      readTime: "9 min read",
      category: "Investor Relations",
      slug: "vcs-fund-brands-not-products",
    },
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

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All Posts") {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-dark-950 pt-[86px]">
      <SEO
        title="Startup Branding Insights & Resources - The Brand Whisperer Blog"
        description="Expert insights on building scalable brands for hypergrowth startups. Get frameworks, case studies, and resources for startup brand strategy."
        keywords="startup branding blog, brand strategy insights, hypergrowth branding resources, startup brand case studies"
      />

      {/* Blog Posts Grid */}
      <section className="py-[25px] pb-32">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-400 mb-8">
              {selectedCategory === "All Posts"
                ? `Showing all ${filteredPosts.length} articles`
                : `Showing ${filteredPosts.length} articles in "${selectedCategory}"`}
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    category === selectedCategory ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                  className={
                    category === selectedCategory
                      ? "bg-secondary-500 text-dark-900 hover:bg-secondary-600"
                      : "border-dark-600 text-gray-300 hover:bg-dark-800 hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
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
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-400 mb-6">
                No articles match the selected category "{selectedCategory}".
              </p>
              <Button
                onClick={() => handleCategoryChange("All Posts")}
                className="bg-secondary-500 hover:bg-secondary-600 text-dark-900"
              >
                Show All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[29px] pb-32">
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
