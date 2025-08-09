"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { BrLinks } from "./BrLinks";
import { BrTitle } from "./BrTitle";
import { BrLink } from "./BrLink";

export function BrHeaderMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-around">
        <IconButton
          size="large"
          color="inherit"
          title="open drawer"
          onClick={() => setOpen(!open)}
        >
          <KeyboardArrowDownIcon fontSize="inherit" />
        </IconButton>
        <BrLink href="/">
          <BrTitle />
        </BrLink>
      </div>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <Box role="presentation" onClick={() => setOpen(false)}>
          <BrLinks orientation="vertical" />
        </Box>
      </Drawer>
    </>
  );
}
