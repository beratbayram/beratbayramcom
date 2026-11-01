import { mockMatchMedia } from "@/test/utils";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BrPdfDownloadButton from "./BrPdfDownloadButton";

const DEFAULT_URL =
  "https://drive.google.com/file/d/1BT1g3Xc1c2V-vuZLVmRmFa1qUG4iXojP/view";

// MUI's theme.breakpoints.down("sm")
const isMobileQuery = (query: string) => query.includes("max-width:599.95px");

function getButton() {
  return screen.getByRole("link", { name: "Download PDF resume" });
}

describe("BrPdfDownloadButton", () => {
  describe("on desktop", () => {
    it("opens the resume in a new tab", () => {
      render(<BrPdfDownloadButton />);

      const button = getButton();
      expect(button).toHaveAttribute("href", DEFAULT_URL);
      expect(button).toHaveAttribute("target", "_blank");
      expect(button).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("shows a label and icon", () => {
      render(<BrPdfDownloadButton />);

      expect(getButton()).toHaveTextContent("Download PDF");
      expect(screen.getByTestId("PictureAsPdfIcon")).toBeInTheDocument();
    });

    it("uses custom children as the label", () => {
      render(<BrPdfDownloadButton>Resume</BrPdfDownloadButton>);

      expect(getButton()).toHaveTextContent("Resume");
      expect(getButton()).not.toHaveTextContent("Download PDF");
    });

    it("links to a custom url", () => {
      render(<BrPdfDownloadButton url="https://example.com/cv.pdf" />);

      expect(getButton()).toHaveAttribute("href", "https://example.com/cv.pdf");
    });

    it("is a medium contained button by default", () => {
      render(<BrPdfDownloadButton />);

      expect(getButton()).toHaveClass(
        "MuiButton-contained",
        "MuiButton-sizeMedium",
      );
    });

    it("applies variant, size and class name", () => {
      render(
        <BrPdfDownloadButton variant="outlined" size="large" className="m-2" />,
      );

      expect(getButton()).toHaveClass(
        "MuiButton-outlined",
        "MuiButton-sizeLarge",
        "m-2",
      );
    });
  });

  describe("on mobile", () => {
    it("collapses to an icon link", async () => {
      mockMatchMedia(isMobileQuery);
      render(<BrPdfDownloadButton />);

      const button = await screen.findByRole("link", {
        name: "Download PDF resume",
      });
      expect(button).toHaveClass("MuiIconButton-root");
      expect(button).not.toHaveTextContent("Download PDF");
      expect(button).toHaveAttribute("href", DEFAULT_URL);
      expect(button).toHaveAttribute("target", "_blank");
    });

    it("uses the primary colour for the contained variant", async () => {
      mockMatchMedia(isMobileQuery);
      render(<BrPdfDownloadButton className="m-2" />);

      const button = await screen.findByRole("link");
      expect(button).toHaveClass("MuiIconButton-colorPrimary", "m-2");
    });

    it("uses the default colour for other variants", async () => {
      mockMatchMedia(isMobileQuery);
      render(<BrPdfDownloadButton variant="outlined" />);

      const button = await screen.findByRole("link");
      expect(button).toHaveClass("MuiIconButton-root");
      expect(button).not.toHaveClass("MuiIconButton-colorPrimary");
    });
  });

  it("stays a full button when only wider queries match", () => {
    mockMatchMedia((query) => !isMobileQuery(query));
    render(<BrPdfDownloadButton />);

    expect(getButton()).toHaveClass("MuiButton-root");
  });
});
