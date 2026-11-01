import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NotFound from "./not-found";

describe("NotFound", () => {
  it("explains the page does not exist", () => {
    render(<NotFound />);

    expect(
      screen.getByRole("heading", { level: 1, name: "404" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Page Not Found" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Oops! The page you're looking for doesn't exist."),
    ).toBeInTheDocument();
  });

  it.each([
    ["Go Home", "/", "HomeIcon"],
    ["View Projects", "/projects", "WorkIcon"],
  ])("offers a %s link to %s", (name, href, icon) => {
    render(<NotFound />);

    const link = screen.getByRole("link", { name });
    expect(link).toHaveAttribute("href", href);
    expect(link).toContainElement(screen.getByTestId(icon));
  });

  it("makes going home the primary action", () => {
    render(<NotFound />);

    expect(screen.getByRole("link", { name: "Go Home" })).toHaveClass(
      "MuiButton-contained",
    );
    expect(screen.getByRole("link", { name: "View Projects" })).toHaveClass(
      "MuiButton-outlined",
    );
  });

  it("offers a way to report the error", () => {
    render(<NotFound />);

    expect(screen.getByRole("link", { name: "contact me" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/berat-bayram/",
    );
  });
});
