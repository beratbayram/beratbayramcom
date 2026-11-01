import auLogo from "@/lib/assets/au.webp";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EducationItem from "./EducationItem";

const BASE_PROPS = {
  institution: "Ankara University",
  degree: "Bachelor's degree Computer Engineering",
  period: "Aug 2017 - Jun 2022",
};

describe("EducationItem", () => {
  it("renders the institution, degree and period", () => {
    render(<EducationItem {...BASE_PROPS} />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Ankara University" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Bachelor's degree Computer Engineering"),
    ).toBeInTheDocument();
    expect(screen.getByText("Aug 2017 - Jun 2022").tagName).toBe("STRONG");
  });

  it("shows the GPA when given", () => {
    render(<EducationItem {...BASE_PROPS} gpa={3.69} />);

    const gpa = screen.getByText("GPA:").closest("p");
    expect(gpa).toHaveTextContent("GPA: 3.69");
  });

  it("omits the GPA line when not given", () => {
    render(<EducationItem {...BASE_PROPS} />);

    expect(screen.queryByText("GPA:")).not.toBeInTheDocument();
  });

  it("renders the logo with the given alt text", () => {
    render(
      <EducationItem
        {...BASE_PROPS}
        logoSrc={auLogo}
        logoAlt="Ankara University Logo"
      />,
    );

    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      "Ankara University Logo",
    );
  });

  it("falls back to an alt text based on the institution", () => {
    render(<EducationItem {...BASE_PROPS} logoSrc={auLogo} />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      "Ankara University logo",
    );
  });

  it("renders no image without a logo", () => {
    render(<EducationItem {...BASE_PROPS} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
