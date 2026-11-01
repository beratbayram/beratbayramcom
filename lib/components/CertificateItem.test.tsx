import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CertificateItem from "./CertificateItem";

function renderItem() {
  return render(
    <ul>
      <CertificateItem
        title="Meta Front-End Developer"
        issuer="Meta"
        url="https://example.com/cert"
      />
    </ul>,
  );
}

describe("CertificateItem", () => {
  it("renders as a list item", () => {
    renderItem();

    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("links the title to the certificate in a new tab", () => {
    renderItem();

    const link = screen.getByRole("link", { name: "Meta Front-End Developer" });
    expect(link).toHaveAttribute("href", "https://example.com/cert");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link.closest("strong")).not.toBeNull();
  });

  it("shows the issuer in emphasis", () => {
    renderItem();

    const issuer = within(screen.getByRole("listitem")).getByText("Meta");
    expect(issuer.tagName).toBe("EM");
  });
});
