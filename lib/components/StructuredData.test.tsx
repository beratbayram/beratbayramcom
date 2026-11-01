import { SEO_KEYWORDS } from "@/lib/const/SEO_KEYWORDS";
import { SOCIALS } from "@/lib/const/SOCIALS";
import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { StructuredData } from "./StructuredData";

function getScript(container: HTMLElement) {
  const script = container.querySelector('script[type="application/ld+json"]');
  if (!script) throw new Error("JSON-LD script not found");
  return script;
}

function renderData() {
  const { container } = render(<StructuredData />);
  return JSON.parse(getScript(container).innerHTML);
}

describe("StructuredData", () => {
  afterEach(() => {
    vi.doUnmock("@/lib/const/SEO_KEYWORDS");
    vi.resetModules();
  });

  it("renders a JSON-LD script", () => {
    const { container } = render(<StructuredData />);

    expect(getScript(container)).toBeInTheDocument();
  });

  it("describes a schema.org Person", () => {
    const data = renderData();

    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@type"]).toBe("Person");
    expect(data.name).toBe("Berat BAYRAM");
    expect(data.jobTitle).toBe("Front-End Engineer");
    expect(data.url).toBe("https://beratbayram.com");
    expect(data.image).toBe("https://beratbayram.com/og-image.png");
  });

  it("uses Ankara, Turkey for the home and work address", () => {
    const data = renderData();
    const address = {
      "@type": "PostalAddress",
      addressLocality: "Ankara",
      addressCountry: "Turkey",
    };

    expect(data.address).toEqual(address);
    expect(data.worksFor).toEqual({
      "@type": "Organization",
      name: "TÜBİTAK",
      address,
    });
  });

  it("lists the university as alma mater", () => {
    expect(renderData().alumniOf).toEqual([
      { "@type": "EducationalOrganization", name: "Ankara University" },
    ]);
  });

  it("lists skills without repeating the employer", () => {
    const { knowsAbout } = renderData();

    expect(knowsAbout).toEqual([
      ...SEO_KEYWORDS.technical,
      ...SEO_KEYWORDS.professional.slice(1),
    ]);
    expect(knowsAbout).not.toContain("TÜBİTAK");
  });

  it("links the same social profiles as the header", () => {
    expect(renderData().sameAs).toEqual(Object.values(SOCIALS));
  });

  it("escapes < so the data cannot close the script tag", async () => {
    const name = "</script><script>alert(1)</script>";
    vi.resetModules();
    vi.doMock("@/lib/const/SEO_KEYWORDS", async (importOriginal) => {
      const actual =
        await importOriginal<typeof import("@/lib/const/SEO_KEYWORDS")>();
      return { ...actual, SEO_KEYWORDS: { ...actual.SEO_KEYWORDS, name } };
    });
    const { StructuredData: Escaped } = await import("./StructuredData");

    const { container } = render(<Escaped />);
    const script = getScript(container);

    expect(script.innerHTML).not.toContain("<");
    expect(script.innerHTML).toContain("\\u003c/script>");
    expect(JSON.parse(script.innerHTML).name).toBe(name);
  });
});
