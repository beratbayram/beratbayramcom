import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ExperienceItem from "./ExperienceItem";

describe("ExperienceItem", () => {
  it("renders the title and period", () => {
    render(<ExperienceItem title="Frontend Developer" period="2022 - Now" />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Frontend Developer" }),
    ).toBeInTheDocument();
    expect(screen.getByText("2022 - Now").tagName).toBe("STRONG");
  });

  it("joins company and location", () => {
    render(
      <ExperienceItem
        title="Developer"
        company="TUBITAK BILGEM YTE"
        location="Ankara"
        period="2022"
      />,
    );

    expect(screen.getByText("TUBITAK BILGEM YTE | Ankara")).toBeInTheDocument();
  });

  it("shows the company alone when there is no location", () => {
    render(
      <ExperienceItem title="Developer" company="Perwatch" period="2021" />,
    );

    expect(screen.getByText("Perwatch").textContent).toBe("Perwatch");
  });

  it("skips the company line when there is no company", () => {
    const { container } = render(
      <ExperienceItem title="Developer" location="Ankara" period="2021" />,
    );

    expect(screen.queryByText(/Ankara/)).not.toBeInTheDocument();
    expect(container.querySelectorAll("p")).toHaveLength(1);
  });

  it.each([
    ["https://x.com/dscankarauni", "x.com/dscankarauni"],
    ["http://bit.ly/mldays", "bit.ly/mldays"],
    ["https://youtu.be/MK3g7f6A-P8?t=9958", "youtu.be/MK3g7f6A-P8?t=9958"],
  ])("links %s and hides the protocol", (url, label) => {
    render(<ExperienceItem title="Designer" period="2020" url={url} />);

    const link = screen.getByRole("link", { name: label });
    expect(link).toHaveAttribute("href", url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders no link without a url", () => {
    render(<ExperienceItem title="Designer" period="2020" />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("lists every description item in order", () => {
    const description = ["Built UI libraries", "Designed MFE", "Mentored"];
    render(
      <ExperienceItem title="Dev" period="2022" description={description} />,
    );

    const items = screen.getAllByRole("listitem");
    expect(items.map((item) => item.textContent)).toEqual(description);
    expect(screen.getByRole("list")).toHaveClass("space-y-2");
  });

  it("drops the list spacing for a single item", () => {
    render(
      <ExperienceItem
        title="Dev"
        period="2022"
        description={["Refactored a legacy library"]}
      />,
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.getByRole("list")).not.toHaveClass("space-y-2");
  });

  it.each([
    ["omitted", undefined],
    ["empty", []],
  ])("renders no list when the description is %s", (_, description) => {
    render(
      <ExperienceItem title="Dev" period="2022" description={description} />,
    );

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});
