import { getKeywords } from "@/lib/const/SEO_KEYWORDS";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage, { metadata } from "./page";

function getSection(name: string) {
  return screen
    .getByRole("heading", { level: 2, name })
    .closest("section") as HTMLElement;
}

describe("AboutPage", () => {
  it("exports page metadata", () => {
    expect(metadata.title).toBe("About Me - Experience, Skills & Background");
    expect(metadata.keywords).toEqual(getKeywords.page("about"));
    expect(metadata.openGraph?.url).toBe("https://beratbayram.com/about");
  });

  it("shows a screen title and a print title", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "About Me" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Berat BAYRAM" }),
    ).toHaveClass("print:block");
  });

  it("offers PDF download and print, hidden when printing", () => {
    render(<AboutPage />);

    const download = screen.getByRole("link", { name: "Download PDF resume" });
    const print = screen.getByRole("button", { name: "Print this page" });
    expect(download.closest(".print\\:hidden")).not.toBeNull();
    expect(print.closest(".print\\:hidden")).not.toBeNull();
  });

  it("renders the sections in order", () => {
    render(<AboutPage />);

    expect(
      screen
        .getAllByRole("heading", { level: 2 })
        .map((heading) => heading.textContent),
    ).toEqual([
      "Work Experience",
      "Volunteer Experience",
      "Core Skills",
      "Education",
      "Languages",
      "Certificates",
    ]);
  });

  it("lists work experience newest first", () => {
    render(<AboutPage />);

    const roles = within(getSection("Work Experience"))
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);
    expect(roles).toEqual([
      "Frontend Web Developer",
      "Part-Time Front-End Web Developer",
      "Internship & Part-Time Software Support Engineer",
      "Front-end Web Development Intern",
    ]);
  });

  it("links volunteer work to its sources", () => {
    render(<AboutPage />);

    const links = within(getSection("Volunteer Experience")).getAllByRole(
      "link",
    );
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "https://instagram.com/au_yazgit/",
      "https://x.com/dscankarauni",
      "https://youtu.be/MK3g7f6A-P8?t=9958",
      "https://bit.ly/mldays",
    ]);
  });

  it("links every hard skill to its site and shows soft skills as cards", () => {
    render(<AboutPage />);

    const skills = getSection("Core Skills");
    expect(within(skills).getAllByRole("link")).toHaveLength(8);
    for (const name of [
      "Community Management",
      "Leadership",
      "Public Speaking",
    ]) {
      expect(within(skills).getByText(name).closest("a")).toBeNull();
    }
  });

  it("lists both universities with the GPA", () => {
    render(<AboutPage />);

    const education = getSection("Education");
    expect(
      within(education)
        .getAllByRole("heading", { level: 3 })
        .map((heading) => heading.textContent),
    ).toEqual(["Ankara University", "University of Eastern Finland"]);
    expect(within(education).getAllByText("GPA:")).toHaveLength(1);
    expect(within(education).getAllByRole("img")).toHaveLength(2);
  });

  it("lists the spoken languages", () => {
    render(<AboutPage />);

    const items = within(getSection("Languages")).getAllByRole("listitem");
    expect(items.map((item) => item.textContent)).toEqual([
      "English: Professional Working Proficiency",
      "Turkish: Native Proficiency",
    ]);
  });

  it("links five certificates", () => {
    render(<AboutPage />);

    const items = within(getSection("Certificates")).getAllByRole("listitem");
    expect(items).toHaveLength(5);
    for (const item of items) {
      expect(within(item).getByRole("link")).toHaveAttribute(
        "href",
        expect.stringMatching(/^https:\/\//),
      );
    }
  });

  it("opens every new-tab link without leaking the opener", () => {
    render(<AboutPage />);

    const newTabLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("target") === "_blank");
    expect(newTabLinks.length).toBeGreaterThan(0);
    for (const link of newTabLinks) {
      expect(link.getAttribute("rel")).toContain("noopener");
    }
  });
});
