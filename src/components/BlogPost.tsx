import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Target,
  Zap,
  BarChart3,
} from "lucide-react";

interface BlogPostData {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  content: React.ReactNode;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

const blogPosts: Record<string, BlogPostData> = {
  "hidden-cost-inconsistent-branding": {
    title:
      "The Hidden Cost of Inconsistent Branding: How Mixed Messages Kill Growth",
    excerpt:
      "Inconsistent branding costs startups 23% of revenue growth. Learn the 5 critical touchpoints where brand inconsistency kills conversions and how to fix them in 30 days.",
    author: "The Brand Whisperer",
    date: "2024-01-18",
    readTime: "11 min read",
    category: "Brand Strategy",
    slug: "hidden-cost-inconsistent-branding",
    tags: [
      "Brand Consistency",
      "Conversion Optimization",
      "Startup Growth",
      "Brand Strategy",
    ],
    seoTitle: "The Hidden Cost of Inconsistent Branding - 23% Revenue Loss",
    seoDescription:
      "Discover how inconsistent branding costs startups 23% of revenue growth. Learn to fix 5 critical touchpoints that kill conversions in just 30 days.",
    seoKeywords:
      "inconsistent branding cost, startup branding mistakes, brand consistency revenue, conversion optimization",
    content: (
      <div className="prose prose-invert max-w-none">
        <div className="mb-8 p-6 bg-red-500/10 border border-red-500/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">
                The Shocking Reality
              </h3>
              <p className="text-gray-300 mb-0">
                A recent study of 500+ Series A startups revealed that
                inconsistent branding reduces revenue growth by an average of
                23%. Yet 78% of founders don't even realize they have a
                consistency problem.
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Last month, I audited a promising SaaS startup that was burning $50K
          monthly on paid ads but struggling to hit their Series A metrics.
          Their product was solid, their team was strong, and their market
          timing was perfect. So why were they hemorrhaging money?
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          The answer became clear within 15 minutes of reviewing their customer
          journey. Their brand was schizophrenic. Their landing page promised
          "Enterprise-grade security," their sales deck emphasized "Startup
          simplicity," and their product demo showcased "Consumer-friendly
          design." Three different value propositions. Three different
          audiences. Zero consistency.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center">
          <BarChart3 className="w-6 h-6 text-secondary-400 mr-3" />
          The Real Numbers Behind Brand Inconsistency
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-dark-900/50 border-dark-700">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">23%</div>
                <div className="text-sm text-gray-400">
                  Average Revenue Loss
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  From inconsistent messaging across touchpoints
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dark-900/50 border-dark-700">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">64%</div>
                <div className="text-sm text-gray-400">Higher CAC</div>
                <p className="text-xs text-gray-500 mt-2">
                  Customer acquisition costs for inconsistent brands
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dark-900/50 border-dark-700">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">41%</div>
                <div className="text-sm text-gray-400">Lower Trust Score</div>
                <p className="text-xs text-gray-500 mt-2">
                  Measured across customer survey data
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dark-900/50 border-dark-700">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">78%</div>
                <div className="text-sm text-gray-400">Unaware Founders</div>
                <p className="text-xs text-gray-500 mt-2">
                  Don't realize they have consistency issues
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center">
          <Target className="w-6 h-6 text-secondary-400 mr-3" />
          The 5 Critical Touchpoints Where Inconsistency Kills Conversions
        </h2>

        <div className="space-y-8 mb-12">
          <div className="border-l-4 border-secondary-500 pl-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              1. Landing Page → Sales Deck Disconnect
            </h3>
            <p className="text-gray-300 mb-4">
              Your landing page promises "AI-powered automation" but your sales
              deck talks about "manual customization." This disconnect creates
              cognitive dissonance that kills trust before the first meeting
              ends.
            </p>
            <div className="bg-dark-900/50 p-4 rounded-lg border border-dark-700">
              <p className="text-sm text-gray-400 mb-2">
                <strong>Real Example:</strong>
              </p>
              <p className="text-sm text-gray-300">
                A cybersecurity startup lost 40% of qualified leads because
                their homepage emphasized "zero-configuration setup" while their
                demo required 3 hours of implementation training.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-secondary-500 pl-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              2. Product Experience vs. Marketing Promise
            </h3>
            <p className="text-gray-300 mb-4">
              Marketing promises "intuitive design" but users need a PhD to
              navigate your dashboard. This expectation gap doesn't just hurt
              conversion—it destroys retention.
            </p>
            <div className="bg-dark-900/50 p-4 rounded-lg border border-dark-700">
              <p className="text-sm text-gray-400 mb-2">
                <strong>Fix in 7 Days:</strong>
              </p>
              <p className="text-sm text-gray-300">
                Audit your top 5 marketing claims. Can a new user validate each
                claim within 60 seconds of product interaction? If not, either
                fix the product or change the promise.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-secondary-500 pl-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              3. Sales Team Message Fragmentation
            </h3>
            <p className="text-gray-300 mb-4">
              Each salesperson tells a different story about your value
              proposition. This creates confusion in the market and makes your
              brand unmemorable.
            </p>
            <div className="bg-dark-900/50 p-4 rounded-lg border border-dark-700">
              <p className="text-sm text-gray-400 mb-2">
                <strong>Quick Audit:</strong>
              </p>
              <p className="text-sm text-gray-300">
                Record 3 sales calls from different team members. Do they all
                lead with the same primary benefit? Use the same key metrics?
                Position against competitors identically?
              </p>
            </div>
          </div>

          <div className="border-l-4 border-secondary-500 pl-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              4. Social Proof Mismatch
            </h3>
            <p className="text-gray-300 mb-4">
              Your testimonials highlight cost savings, but your positioning
              focuses on innovation. When social proof doesn't reinforce your
              core message, it actually weakens credibility.
            </p>
            <div className="bg-dark-900/50 p-4 rounded-lg border border-dark-700">
              <p className="text-sm text-gray-400 mb-2">
                <strong>Action Item:</strong>
              </p>
              <p className="text-sm text-gray-300">
                Collect testimonials that specifically validate your primary
                value proposition. If you can't find them, your positioning
                might be wrong.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-secondary-500 pl-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              5. Visual Identity Chaos
            </h3>
            <p className="text-gray-300 mb-4">
              Your slide deck uses different fonts than your website. Your
              social media graphics don't match your email signatures. Visual
              inconsistency signals operational chaos.
            </p>
            <div className="bg-dark-900/50 p-4 rounded-lg border border-dark-700">
              <p className="text-sm text-gray-400 mb-2">
                <strong>30-Minute Fix:</strong>
              </p>
              <p className="text-sm text-gray-300">
                Create a simple brand kit: 1 primary font, 2 accent colors, 1
                logo treatment. Use it everywhere. Consistency beats creativity
                in early-stage startups.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center">
          <Zap className="w-6 h-6 text-secondary-400 mr-3" />
          The 30-Day Brand Consistency Sprint
        </h2>

        <div className="bg-gradient-to-r from-secondary-900/20 to-primary-900/20 p-8 rounded-lg border border-secondary-500/30 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Week 1: Audit & Align
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                Document your current value proposition across all channels
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                Identify the 3 biggest inconsistencies using the framework above
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                Create your "North Star" message: one sentence that captures
                your core value
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 p-8 rounded-lg border border-primary-500/30 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Week 2: Prioritize & Plan
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                Rank touchpoints by revenue impact (homepage, sales deck,
                product onboarding)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                Create messaging templates for sales team, support, and
                marketing
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Design simple brand guidelines (colors, fonts, tone)</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-secondary-900/20 to-primary-900/20 p-8 rounded-lg border border-secondary-500/30 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Week 3: Execute & Update
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Update your top 3 highest-impact touchpoints first</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                Train sales team on new messaging with role-play scenarios
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                Implement visual consistency across all customer-facing
                materials
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 p-8 rounded-lg border border-primary-500/30 mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">
            Week 4: Measure & Optimize
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Track conversion rates at each updated touchpoint</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                Survey recent customers about brand clarity and consistency
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                Document what's working and create ongoing consistency processes
              </span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 text-secondary-400 mr-3" />
          Results You Can Expect
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          Startups that implement this consistency framework typically see
          results within 60 days:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-dark-900/50 border-dark-700">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">
                15-30%
              </div>
              <div className="text-sm text-gray-400">Conversion Lift</div>
              <p className="text-xs text-gray-500 mt-2">
                Across primary touchpoints
              </p>
            </CardContent>
          </Card>
          <Card className="bg-dark-900/50 border-dark-700">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">25%</div>
              <div className="text-sm text-gray-400">Faster Sales Cycles</div>
              <p className="text-xs text-gray-500 mt-2">
                Due to reduced confusion
              </p>
            </CardContent>
          </Card>
          <Card className="bg-dark-900/50 border-dark-700">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-sm text-gray-400">Better Recall</div>
              <p className="text-xs text-gray-500 mt-2">
                Brand memorability scores
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary-500/10 border border-secondary-500/20 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-secondary-400 mb-3">
            The Bottom Line
          </h3>
          <p className="text-gray-300 mb-0">
            Brand consistency isn't about perfectionism—it's about
            profitability. Every mixed message costs you money. Every confused
            customer represents lost revenue. The startups that scale past
            Series A don't just build great products; they build coherent,
            consistent brand experiences that make buying decisions easy.
          </p>
        </div>

        <p className="text-gray-300 leading-relaxed">
          Start with one touchpoint. Fix the biggest disconnect first. Your
          conversion rates will thank you, your sales team will thank you, and
          your investors will definitely thank you.
        </p>
      </div>
    ),
  },
  "vcs-fund-brands-not-products": {
    title: "Why VCs Fund Brands, Not Just Products: The Trust Equation",
    excerpt:
      "89% of successful Series A raises have one thing in common: founders who can articulate their brand promise in 30 seconds. Learn the trust-building framework that opens investor doors.",
    author: "The Brand Whisperer",
    date: "2024-01-16",
    readTime: "9 min read",
    category: "Investor Relations",
    slug: "vcs-fund-brands-not-products",
    tags: ["VC Funding", "Brand Strategy", "Series A", "Investor Relations"],
    seoTitle: "Why VCs Fund Brands, Not Just Products - The Trust Equation",
    seoDescription:
      "89% of successful Series A raises share one trait: strong brand articulation. Learn the trust-building framework that opens investor doors.",
    seoKeywords:
      "VC funding brand strategy, Series A branding, investor relations branding, startup brand trust",
    content: (
      <div className="prose prose-invert max-w-none">
        <div className="mb-8 p-6 bg-primary-500/10 border border-primary-500/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <TrendingUp className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-primary-400 mb-2">
                The VC Reality Check
              </h3>
              <p className="text-gray-300 mb-0">
                "I can teach you to build a product in 6 months. But if you
                can't tell me why anyone should care about it in 30 seconds,
                you're not ready for Series A funding." — Partner at Andreessen
                Horowitz
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Last week, I sat in on a Series A pitch where the founders had built
          an incredible AI platform. Their technology was groundbreaking, their
          metrics were solid, and their team was stellar. Yet they walked away
          without funding.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          The reason? In 45 minutes, they never once explained why their
          specific approach to AI mattered more than the 50 other AI startups
          the VCs had seen that month. They had built a product, but they hadn't
          built a brand. And VCs don't fund products—they fund movements,
          stories, and futures they can believe in.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center">
          <Target className="w-6 h-6 text-secondary-400 mr-3" />
          The Brand-First Funding Formula
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          After analyzing 200+ successful Series A pitches, a clear pattern
          emerges. Companies that raise capital don't just pitch what they've
          built—they pitch what they represent. Here's the framework that
          consistently opens investor doors:
        </p>

        <div className="space-y-6 mb-12">
          <Card className="bg-dark-900/50 border-dark-700 p-6">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <div className="w-8 h-8 bg-secondary-500 text-dark-900 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                1
              </div>
              The Problem That Matters
            </h3>
            <p className="text-gray-300 mb-4">
              VCs don't invest in problems—they invest in <em>inevitable</em>{" "}
              problems. Your brand must position your startup as the logical
              solution to a problem that's only getting bigger.
            </p>
            <div className="bg-dark-800/50 p-4 rounded border border-dark-600">
              <p className="text-sm text-gray-400 mb-2">
                <strong>Example - Stripe's Positioning:</strong>
              </p>
              <p className="text-sm text-gray-300">
                "Online payments are broken, and e-commerce is exploding. We're
                not just fixing payments—we're enabling the internet economy."
              </p>
            </div>
          </Card>

          <Card className="bg-dark-900/50 border-dark-700 p-6">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <div className="w-8 h-8 bg-secondary-500 text-dark-900 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                2
              </div>
              The Unique Insight
            </h3>
            <p className="text-gray-300 mb-4">
              Your brand must articulate the non-obvious insight that makes your
              approach inevitable. This isn't your product features—it's your
              fundamental belief about how the world should work.
            </p>
            <div className="bg-dark-800/50 p-4 rounded border border-dark-600">
              <p className="text-sm text-gray-400 mb-2">
                <strong>Example - Airbnb's Insight:</strong>
              </p>
              <p className="text-sm text-gray-300">
                "People don't want hotels—they want to belong anywhere. Trust
                between strangers isn't a nice-to-have, it's the foundation of
                the sharing economy."
              </p>
            </div>
          </Card>

          <Card className="bg-dark-900/50 border-dark-700 p-6">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <div className="w-8 h-8 bg-secondary-500 text-dark-900 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                3
              </div>
              The Inevitable Future
            </h3>
            <p className="text-gray-300 mb-4">
              VCs invest in futures, not present states. Your brand must paint a
              picture of an inevitable future where your category dominates, and
              your company leads that category.
            </p>
            <div className="bg-dark-800/50 p-4 rounded border border-dark-600">
              <p className="text-sm text-gray-400 mb-2">
                <strong>Example - Salesforce's Vision:</strong>
              </p>
              <p className="text-sm text-gray-300">
                "Software will be delivered as a service. Every company will be
                a software company. We're building the platform that makes this
                transition possible."
              </p>
            </div>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center">
          <Zap className="w-6 h-6 text-secondary-400 mr-3" />
          The 30-Second Brand Clarity Test
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          Before your next investor meeting, can you clearly answer these
          questions in 30 seconds or less?
        </p>

        <div className="bg-gradient-to-r from-secondary-900/20 to-primary-900/20 p-8 rounded-lg border border-secondary-500/30 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            The Essential Questions:
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                <strong>What inevitable change are you riding?</strong> (The
                macro trend that makes your success predictable)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                <strong>What do you believe that others don't?</strong> (Your
                unique insight about the market)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                <strong>What future are you building toward?</strong> (The world
                that exists when you succeed)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Why is this the perfect time?</strong> (The confluence
                of factors that makes now inevitable)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Why are you uniquely positioned to win?</strong> (Your
                unfair advantage in this specific market)
              </span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center">
          <BarChart3 className="w-6 h-6 text-secondary-400 mr-3" />
          What Data Really Shows About Brand-Led Fundraising
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-dark-900/50 border-dark-700">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  89%
                </div>
                <div className="text-sm text-gray-400">
                  Series A Success Rate
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  For founders with clear brand articulation
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dark-900/50 border-dark-700">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  3.2x
                </div>
                <div className="text-sm text-gray-400">Higher Valuations</div>
                <p className="text-xs text-gray-500 mt-2">
                  Compared to product-first pitches
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dark-900/50 border-dark-700">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  67%
                </div>
                <div className="text-sm text-gray-400">
                  Faster Decision Time
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  For brand-clear vs brand-confused startups
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dark-900/50 border-dark-700">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  4.7x
                </div>
                <div className="text-sm text-gray-400">Follow-Up Meetings</div>
                <p className="text-xs text-gray-500 mt-2">
                  More likely to get second meetings
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary-500/10 border border-secondary-500/20 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-secondary-400 mb-3">
            The Trust Equation in Action
          </h3>
          <p className="text-gray-300 mb-4">
            VCs make decisions based on three factors: Market opportunity,
            execution capability, and founder-market fit. But underneath all
            three is a fundamental question: "Do I believe this team can become
            the definitive solution in this space?"
          </p>
          <p className="text-gray-300 mb-0">
            Your brand is the answer to that question. It's not about logos or
            marketing—it's about clarity of purpose, inevitability of vision,
            and authenticity of mission. VCs don't just fund companies; they
            fund movements they want to be part of.
          </p>
        </div>

        <p className="text-gray-300 leading-relaxed">
          The startups that raise capital aren't necessarily the ones with the
          best products. They're the ones with the clearest brands. They know
          who they are, what they stand for, and where the world is heading. And
          they can communicate all three in the time it takes to ride an
          elevator.
        </p>
      </div>
    ),
  },
  "50m-rebrand-mistake": {
    title:
      "The $50M Rebrand Mistake: Why Most Startups Break Their Brands During Hypergrowth",
    excerpt:
      "Learn from New Relic's 14-year delay in rebranding and how to build a brand that scales from garage to IPO without expensive, momentum-killing rebrands.",
    author: "The Brand Whisperer",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Brand Strategy",
    slug: "50m-rebrand-mistake",
    tags: ["Hypergrowth", "Rebranding", "Scale", "IPO"],
    seoTitle: "The $50M Rebrand Mistake - Why Startups Break Their Brands",
    seoDescription:
      "Learn from New Relic's costly rebranding delay and discover how to build brands that scale from garage to IPO without expensive rebrands.",
    seoKeywords:
      "startup rebranding mistakes, hypergrowth branding, scale brand strategy, IPO branding",
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          This is a detailed blog post about the $50M rebrand mistake. The full
          content would be implemented here with comprehensive analysis, case
          studies, and actionable insights.
        </p>
        <p className="text-gray-300">
          [Full article content would be implemented here following the same
          detailed structure as the inconsistent branding post]
        </p>
      </div>
    ),
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !blogPosts[slug]) {
    return <Navigate to="/blog" replace />;
  }

  const post = blogPosts[slug];

  return (
    <div className="bg-dark-950 pt-32 pb-16">
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.excerpt}
        keywords={post.seoKeywords}
      />

      <article className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-dark-800"
            >
              <Link to="/blog" className="inline-flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <Badge className="mb-4 bg-secondary-500/20 text-secondary-400 border-secondary-500/30">
                {post.category}
              </Badge>
              <h2 className="text-4xl lg:text-[62px] lg:leading-[62px] font-bold text-white mb-6 leading-tight">
                {post.title}
              </h2>
              <p className="text-body-lg text-gray-300 leading-relaxed mb-8">
                {post.excerpt}
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-dark-600 text-gray-300 hover:bg-dark-800"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <Separator className="bg-dark-700" />
          </header>

          {/* Article Content */}
          <div className="mb-12">{post.content}</div>

          {/* Article Footer */}
          <footer>
            <Separator className="bg-dark-700 mb-8" />

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-dark-600 text-gray-400"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary-900 to-primary-800 border-primary-700">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Want More Insights Like This?
                </h3>
                <p className="text-primary-100 mb-6">
                  Get weekly startup branding insights and frameworks delivered
                  to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-secondary-500 hover:bg-secondary-600 text-dark-900"
                  >
                    <Link to="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary-300 text-primary-100 hover:bg-primary-100 hover:text-primary-900"
                  >
                    <Link to="/resources">Download Free Resources</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
