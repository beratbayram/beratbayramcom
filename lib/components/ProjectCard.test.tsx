import { makeRepo } from "@/test/utils";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "./ProjectCard";

describe("ProjectCard", () => {
  it("links the whole card to the repository in a new tab", () => {
    const repo = makeRepo({
      name: "battleground",
      html_url: "https://github.com/beratbayram/battleground",
    });
    render(<ProjectCard repo={repo} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/beratbayram/battleground",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the name and description", () => {
    render(
      <ProjectCard
        repo={makeRepo({ name: "battleground", description: "A game" })}
      />,
    );

    expect(
      screen.getByRole("heading", { level: 3, name: "battleground" }),
    ).toBeInTheDocument();
    expect(screen.getByText("A game")).toBeInTheDocument();
  });

  it("falls back when there is no description", () => {
    render(<ProjectCard repo={makeRepo({ description: null })} />);

    expect(screen.getByText("No description available.")).toBeInTheDocument();
  });

  it.each([
    ["TypeScript", "#3178c6"],
    ["JavaScript", "#f1e05a"],
    ["Python", "#3572A5"],
    ["Java", "#b07219"],
    ["C", "#555555"],
    ["CSS", "#563d7c"],
    ["HTML", "#e34c26"],
    ["Yacc", "#4B6C4B"],
    ["Shell", "#89e051"],
    ["Rust", "#6b7280"],
  ])("shows %s with its colour %s", (language, color) => {
    render(<ProjectCard repo={makeRepo({ language })} />);

    const dot = screen.getByText(language).previousElementSibling;
    expect(dot).toHaveStyle({ backgroundColor: color });
  });

  it("hides the language when GitHub reports none", () => {
    const { container } = render(
      <ProjectCard repo={makeRepo({ language: null })} />,
    );

    expect(container.querySelector(".rounded-full")).toBeNull();
  });

  it("shows star and fork counts when above zero", () => {
    render(
      <ProjectCard repo={makeRepo({ stargazers_count: 12, forks_count: 3 })} />,
    );

    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("hides star and fork counts at zero", () => {
    const { container } = render(
      <ProjectCard repo={makeRepo({ stargazers_count: 0, forks_count: 0 })} />,
    );

    expect(screen.queryByText("0")).not.toBeInTheDocument();
    expect(container.querySelector("svg")).toBeNull();
  });

  it("shows stars without forks", () => {
    const { container } = render(
      <ProjectCard repo={makeRepo({ stargazers_count: 7, forks_count: 0 })} />,
    );

    expect(screen.getByText("7")).toBeInTheDocument();
    expect(container.querySelectorAll("svg")).toHaveLength(1);
  });

  it("shows the last update date in the user's locale", () => {
    const updatedAt = "2025-03-15T12:00:00Z";
    render(<ProjectCard repo={makeRepo({ updated_at: updatedAt })} />);

    expect(
      screen.getByText(`Updated ${new Date(updatedAt).toLocaleDateString()}`),
    ).toBeInTheDocument();
  });
});
