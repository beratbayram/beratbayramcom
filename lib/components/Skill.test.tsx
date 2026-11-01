import Groups from "@mui/icons-material/Groups";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Skill from "./Skill";

describe("Skill", () => {
  it("renders the skill name", () => {
    render(<Skill name="Leadership" />);

    expect(screen.getByText("Leadership")).toBeInTheDocument();
  });

  it("links to the skill site in a new tab when given an href", () => {
    render(<Skill name="React.js" href="https://react.dev/" />);

    const link = screen.getByRole("link", { name: /React\.js/ });
    expect(link).toHaveAttribute("href", "https://react.dev/");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("is not a link without an href", () => {
    render(<Skill name="Leadership" />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders the icon with the given alt text and class", () => {
    render(
      <Skill
        name="Next.js"
        icon="/next.svg"
        iconAlt="Next.js Logo"
        iconClassName="dark:invert"
      />,
    );

    const img = screen.getByRole("img", { name: "Next.js Logo" });
    expect(img).toHaveClass("size-12", "dark:invert");
    expect(img).toHaveAttribute("width", "48");
    expect(img).toHaveAttribute("height", "48");
  });

  it("derives the icon alt text from the name", () => {
    render(<Skill name="TypeScript" icon="/ts.svg" />);

    expect(
      screen.getByRole("img", { name: "TypeScript Logo" }),
    ).toBeInTheDocument();
  });

  it("adds no extra icon class when none is given", () => {
    render(<Skill name="TypeScript" icon="/ts.svg" />);

    expect([...screen.getByRole("img").classList]).toEqual(["size-12"]);
  });

  it("renders a MUI icon instead of an image", () => {
    render(<Skill name="Community Management" muiIcon={<Groups />} />);

    expect(screen.getByTestId("GroupsIcon")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
