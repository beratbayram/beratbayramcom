import type { Metadata } from "next";
import { getKeywords } from "./SEO_KEYWORDS";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://beratbayram.com";

export const METADATA: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Berat BAYRAM - Front-End Engineer & UI Library Architect",
    template: "%s | Berat BAYRAM",
  },
  description:
    "Experienced Front-End Engineer specializing in React, Next.js, TypeScript, and Lit. Built scalable UI libraries, led Micro Front-End Architecture at TÜBİTAK, and mentored development teams. Expert in modern web technologies and cross-team leadership.",
  keywords: getKeywords.core(),
  authors: [
    {
      name: "Berat BAYRAM",
      url: siteUrl,
    },
  ],
  creator: "Berat BAYRAM",
  publisher: "Berat BAYRAM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Berat BAYRAM Portfolio",
    title: "Berat BAYRAM - Front-End Engineer & UI Library Architect",
    description:
      "Experienced Front-End Engineer specializing in React, Next.js, TypeScript, and Lit. Built scalable UI libraries, led Micro Front-End Architecture at TÜBİTAK, and mentored development teams.",
    images: [
      {
        url: "/og-image.png", // We'll create this
        width: 1200,
        height: 630,
        alt: "Berat BAYRAM - Front-End Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berat BAYRAM - Front-End Engineer & UI Library Architect",
    description:
      "Experienced Front-End Engineer specializing in React, Next.js, TypeScript, and Lit. Built scalable UI libraries and led Micro Front-End Architecture.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
};

/**
 
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
 */
