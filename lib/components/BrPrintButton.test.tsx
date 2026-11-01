import { mockMatchMedia } from "@/test/utils";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi, type Mock } from "vitest";
import BrPrintButton from "./BrPrintButton";

const isMobileQuery = (query: string) => query.includes("max-width:599.95px");

function getButton() {
  return screen.getByRole("button", { name: "Print this page" });
}

describe("BrPrintButton", () => {
  let print: Mock<() => void>;

  beforeEach(() => {
    print = vi.fn();
    vi.spyOn(window, "print").mockImplementation(print);
  });

  describe("on desktop", () => {
    it("prints the page when clicked", async () => {
      render(<BrPrintButton />);

      await userEvent.click(getButton());

      expect(print).toHaveBeenCalledOnce();
    });

    it("shows a label and icon", () => {
      render(<BrPrintButton />);

      expect(getButton()).toHaveTextContent("Print");
      expect(screen.getByTestId("PrintIcon")).toBeInTheDocument();
    });

    it("uses custom children as the label", () => {
      render(<BrPrintButton>Print resume</BrPrintButton>);

      expect(getButton()).toHaveTextContent("Print resume");
    });

    it("is a medium contained button by default", () => {
      render(<BrPrintButton />);

      expect(getButton()).toHaveClass(
        "MuiButton-contained",
        "MuiButton-sizeMedium",
      );
    });

    it("applies variant, size and class name", () => {
      render(<BrPrintButton variant="text" size="small" className="m-2" />);

      expect(getButton()).toHaveClass(
        "MuiButton-text",
        "MuiButton-sizeSmall",
        "m-2",
      );
    });

    it("does not print until clicked", () => {
      render(<BrPrintButton />);

      expect(print).not.toHaveBeenCalled();
    });
  });

  describe("on mobile", () => {
    it("collapses to an icon button that prints", async () => {
      mockMatchMedia(isMobileQuery);
      render(<BrPrintButton />);

      const button = await screen.findByRole("button", {
        name: "Print this page",
      });
      expect(button).toHaveClass("MuiIconButton-root");
      expect(button).not.toHaveTextContent("Print");

      await userEvent.click(button);
      expect(print).toHaveBeenCalledOnce();
    });

    it("uses the primary colour for the contained variant", async () => {
      mockMatchMedia(isMobileQuery);
      render(<BrPrintButton className="m-2" />);

      const button = await screen.findByRole("button");
      expect(button).toHaveClass("MuiIconButton-colorPrimary", "m-2");
    });

    it("uses the default colour for other variants", async () => {
      mockMatchMedia(isMobileQuery);
      render(<BrPrintButton variant="outlined" />);

      const button = await screen.findByRole("button");
      expect(button).not.toHaveClass("MuiIconButton-colorPrimary");
    });
  });
});
