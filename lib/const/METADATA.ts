import type { Metadata } from "next";

export const METADATA: Metadata = {
  title: "Berat BAYRAM Portfolio",
  description:
    "Berat BAYRAM's personal portfolio showcasing projects and skills.",
  keywords: [
    "Berat BAYRAM",
    "portfolio",
    "web developer",
    "software engineer",
    "projects",
    "skills",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
  ],
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
  authors: [
    {
      name: "Berat BAYRAM",
    },
  ],
  creator: "Berat BAYRAM",
};

/**
 
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
 */
