import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "The Brand Whisperer - Building Brands That Scale from Startup to Unicorn",
  description = "Expert brand strategy and visual identity for hypergrowth startups. We build scalable brands that grow with your business from pre-seed to IPO without expensive rebrands.",
  keywords = "startup branding, brand strategy, hypergrowth branding, Series A branding, startup visual identity, scalable brand systems, startup brand consultant",
  image = "/og-image.jpg",
  url = "https://brandwhisperer.com",
  type = "website",
  schema,
}) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Brand Whisperer",
    description:
      "Building brands that scale from startup to unicorn without breaking",
    url: "https://brandwhisperer.com",
    logo: "https://brandwhisperer.com/logo.png",
    foundingDate: "1995",
    founder: {
      "@type": "Person",
      name: "The Brand Whisperer",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boston",
      addressRegion: "MA",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@brandwhisperer.com",
    },
    sameAs: [
      "https://linkedin.com/company/brandwhisperer",
      "https://twitter.com/brandwhisperer",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Startup Brand Strategy & Visual Identity",
        description: "Comprehensive branding services for hypergrowth startups",
      },
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="The Brand Whisperer" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="The Brand Whisperer" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@brandwhisperer" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#4F46E5" />
      <meta name="msapplication-TileColor" content="#4F46E5" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
