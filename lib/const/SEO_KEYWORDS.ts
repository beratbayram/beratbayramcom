// Centralized keyword management for SEO
export const SEO_KEYWORDS = {
  // Core identity keywords
  name: "Berat BAYRAM",

  // Primary role keywords
  primary: [
    "Front-End Engineer",
    "UI Library Architect",
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
  ],

  // Technical skills
  technical: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Lit Framework",
    "Web Components",
    "Micro Frontend",
    "CSS",
    "SASS",
    "Tailwind CSS",
  ],

  // Professional context
  professional: [
    "TÜBİTAK",
    "Software Engineer",
    "Frontend Developer",
    "Team Lead",
    "Mentor",
    "UI Libraries",
    "Frontend Architecture",
  ],

  // Location & context
  location: ["Ankara", "Turkey", "Turkish developer"],

  // Content types
  content: ["Portfolio", "Projects", "Blog", "Development insights"],

  // Page-specific keyword combinations
  pages: {
    home: [
      "Berat BAYRAM",
      "Front-End Engineer",
      "UI Library Architect",
      "React Developer",
      "Next.js Expert",
      "TypeScript Developer",
      "Portfolio",
    ],

    about: [
      "Berat BAYRAM about",
      "Front-End Engineer experience",
      "TÜBİTAK developer",
      "UI library architect",
      "React developer experience",
      "TypeScript expert",
      "team mentor",
      "frontend leadership",
      "web components developer",
      "micro frontend architecture",
    ],

    projects: [
      "Berat BAYRAM projects",
      "React UI library",
      "Web Components portfolio",
      "Lit framework projects",
      "Micro Frontend projects",
      "Next.js applications",
      "TypeScript projects",
      "frontend architecture",
      "TÜBİTAK projects",
      "open source contributions",
    ],

    blog: [
      "Berat BAYRAM blog",
      "frontend development blog",
      "React tutorials",
      "TypeScript tips",
      "UI library development",
      "Micro Frontend blog",
      "Next.js articles",
      "Web Components tutorials",
      "Lit framework guide",
      "frontend architecture",
      "development best practices",
    ],
  },
};

// Helper functions to get keyword combinations
export const getKeywords = {
  // Get all core keywords (most important for main metadata)
  core: () => [
    SEO_KEYWORDS.name,
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.technical.slice(0, 6), // Top 6 technical skills
    ...SEO_KEYWORDS.professional.slice(0, 4), // Top 4 professional terms
    ...SEO_KEYWORDS.location,
    "Portfolio",
  ],

  // Get page-specific keywords
  page: (pageName: keyof typeof SEO_KEYWORDS.pages) =>
    SEO_KEYWORDS.pages[pageName] || SEO_KEYWORDS.pages.home,

  // Get keywords for specific contexts
  technical: () => SEO_KEYWORDS.technical,
  professional: () => SEO_KEYWORDS.professional,
  location: () => SEO_KEYWORDS.location,
};
