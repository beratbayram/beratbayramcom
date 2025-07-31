import { BrWIP } from "@/lib/components/BrWIP";
import { Metadata } from "next";
import { getKeywords } from "@/lib/const/SEO_KEYWORDS";

export const metadata: Metadata = {
  title: "Contact - Get in Touch for Frontend Development Projects",
  description:
    "Connect with Berat BAYRAM for frontend development opportunities, consulting on React/TypeScript projects, UI library architecture, or mentoring. Based in Ankara, Turkey and available for remote collaboration.",
  keywords: getKeywords.page("contact"),
  openGraph: {
    title: "Contact Berat BAYRAM - Frontend Development Expert",
    description:
      "Get in touch with experienced Front-End Engineer Berat BAYRAM for development projects, consulting, or collaboration opportunities.",
    url: "https://beratbayram.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Contact</h1>
      <BrWIP
        title="Work in Progress"
        description="I'm currently building a contact form. In the meantime, feel free to reach out to me directly through my social media channels!"
      />
    </div>
  );
}
