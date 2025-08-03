import { SEO_KEYWORDS } from "@/lib/const/SEO_KEYWORDS";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SEO_KEYWORDS.name,
  jobTitle: SEO_KEYWORDS.primary[0], // "Front-End Engineer"
  description:
    "Experienced Front-End Engineer specializing in React, Next.js, TypeScript, and Lit. Built scalable UI libraries, led Micro Front-End Architecture at TÜBİTAK, and mentored development teams.",
  url: "https://beratbayram.com",
  image: "https://beratbayram.com/og-image.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: SEO_KEYWORDS.location[0], // "Ankara"
    addressCountry: SEO_KEYWORDS.location[1], // "Turkey"
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Ankara University",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: SEO_KEYWORDS.professional[0], // "TÜBİTAK"
    address: {
      "@type": "PostalAddress",
      addressLocality: SEO_KEYWORDS.location[0], // "Ankara"
      addressCountry: SEO_KEYWORDS.location[1], // "Turkey"
    },
  },
  knowsAbout: [
    ...SEO_KEYWORDS.technical,
    ...SEO_KEYWORDS.professional.slice(1), // Skip TÜBİTAK since it's in worksFor
  ],
  sameAs: [
    // Add your social media URLs here
    "https://linkedin.com/in/beratbayram",
    "https://github.com/beratbayram",
    "https://twitter.com/beratbayram",
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
