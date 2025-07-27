"use client";

import { Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

interface BrPrintButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
}

export default function BrPrintButton({
  className = "",
  children,
  variant = "contained",
  size = "medium",
}: BrPrintButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      onClick={handlePrint}
      variant={variant}
      size={size}
      startIcon={<PrintIcon />}
      className={`print:hidden ${className}`}
      aria-label="Print this page"
      sx={{
        "@media print": {
          display: "none",
        },
      }}
    >
      {children || "Print"}
    </Button>
  );
}
