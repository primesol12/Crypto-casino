import { type Casino } from "./CasinoCard";

interface StructuredDataProps {
  casinos: Casino[];
}

export function StructuredData({ casinos }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Smart Betting Guide",
    "description": "Best crypto casinos in 2025. Expert reviews of top Bitcoin gambling sites with instant payouts, anonymous betting, and exclusive crypto bonuses.",
    "url": "https://smartbettingguide.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://smartbettingguide.com?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Smart Betting Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smartbettingguide.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Best Crypto Casinos 2025",
      "description": "Top rated cryptocurrency gambling sites",
      "numberOfItems": casinos.length,
      "itemListElement": casinos.map((casino, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Organization",
          "name": casino.name,
          "description": casino.bonus,
          "url": `https://smartbettingguide.com/casino/${casino.name.toLowerCase().replace(/\s+/g, '-')}`,
          "logo": casino.logo,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": casino.countryCode
          },
          "aggregateRating": casino.rating !== "New" && casino.rating !== "Top" ? {
            "@type": "AggregateRating",
            "ratingValue": casino.rating,
            "bestRating": "10",
            "worstRating": "1",
            "ratingCount": "1"
          } : undefined
        }
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
