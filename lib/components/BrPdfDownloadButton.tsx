"use client";

import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Link from "next/link";

interface BrPdfDownloadButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  url?: string;
}

export default function BrPdfDownloadButton({
  className = "",
  children,
  variant = "contained",
  size = "medium",
  url = "https://drive.google.com/file/d/1BT1g3Xc1c2V-vuZLVmRmFa1qUG4iXojP/view",
}: BrPdfDownloadButtonProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return (
      <IconButton
        component={Link}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label="Download PDF resume"
        color={variant === "contained" ? "primary" : "default"}
      >
        <PictureAsPdfIcon />
      </IconButton>
    );
  }

  return (
    <Button
      component={Link}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      startIcon={<PictureAsPdfIcon />}
      className={className}
      aria-label="Download PDF resume"
    >
      {children ?? "Download PDF"}
    </Button>
  );
}
