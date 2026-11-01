import { METADATA } from "@/lib/const/METADATA";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import RootLayout, { metadata, viewport } from "./layout";

const fontCalls = vi.hoisted((): unknown[] => []);

// next/font only works through the Next compiler
vi.mock("next/font/google", () => ({
  Roboto: (options: unknown) => {
    fontCalls.push(options);
    return { variable: "roboto-variable", className: "roboto", style: {} };
  },
}));

vi.mock("next/navigation", async (importOriginal) => ({
  ...(await importOriginal<typeof import("next/navigation")>()),
  usePathname: () => "/",
}));

function renderLayout() {
  const html = renderToStaticMarkup(
    <RootLayout>
      <p>Page content</p>
    </RootLayout>,
  );
  // A parsed document has no window, so assertions below use plain DOM APIs
  return new DOMParser().parseFromString(html, "text/html");
}

describe("RootLayout", () => {
  it("uses the site metadata", () => {
    expect(metadata).toBe(METADATA);
  });

  it("allows zoom and extends behind the device safe areas", () => {
    expect(viewport).toMatchObject({
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
      viewportFit: "cover",
    });
  });

  it("matches the browser theme colour to the colour scheme", () => {
    expect(viewport.themeColor).toEqual([
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ]);
  });

  it("loads Roboto as a CSS variable", () => {
    expect(fontCalls).toEqual([
      {
        weight: ["300", "400", "500", "700"],
        subsets: ["latin"],
        display: "swap",
        variable: "--font-roboto",
        preload: true,
      },
    ]);
  });

  it("sets the language and font variable on <html>", () => {
    const doc = renderLayout();

    expect(doc.documentElement.getAttribute("lang")).toBe("en");
    expect(doc.documentElement.classList).toContain("roboto-variable");
  });

  it("runs the colour scheme script before any content", () => {
    const doc = renderLayout();

    const first = doc.body.firstElementChild;
    expect(first?.tagName).toBe("SCRIPT");
    expect(first?.getAttribute("type")).not.toBe("application/ld+json");
    expect(first?.textContent).toContain("localStorage");
  });

  it("includes the structured data", () => {
    const doc = renderLayout();

    const script = doc.querySelector('script[type="application/ld+json"]');
    expect(JSON.parse(script!.textContent!)["@type"]).toBe("Person");
  });

  it("puts the skip link before the header", () => {
    const doc = renderLayout();

    const skipLink = doc.querySelector("a.skip-link");
    const header = doc.querySelector("header");
    expect(skipLink?.getAttribute("href")).toBe("#main-content");
    expect(
      skipLink!.compareDocumentPosition(header!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("renders the page inside a focusable main landmark", () => {
    const doc = renderLayout();

    const main = doc.querySelector("main");
    expect(main?.id).toBe("main-content");
    expect(main?.getAttribute("tabindex")).toBe("-1");
    expect(main?.textContent).toBe("Page content");
  });

  it("renders the header above the main content", () => {
    const doc = renderLayout();

    const header = doc.querySelector("header");
    const main = doc.querySelector("main");
    expect(header?.parentElement).toBe(main?.parentElement);
    expect(header?.nextElementSibling).toBe(main);
  });

  it("does not server-render the background animation", () => {
    const doc = renderLayout();

    expect(doc.querySelector("svg title")).toBeNull();
  });
});
