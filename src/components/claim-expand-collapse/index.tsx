import { useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ClaimLegendsTable from "../claim-legend-table";

/**
 * The ClaimExpandCollapse component is a toggleable section that displays a table of claim status
 * explanations when expanded.
 * @returns The `ClaimExpandCollapse` component is returning JSX elements. It returns a `Box` component
 * that contains a `Typography` component and an arrow icon (`ArrowDropUpIcon` or `ArrowDropDownIcon`)
 * based on the value of the `open` state. It also returns a `Collapse` component that conditionally
 * renders a `ClaimLegendsTable` component based on the value of the `
 */
export const ClaimExpandCollapse = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box onClick={handleClick}>
      <Box sx={{ display: "flex", cursor: "pointer" }}>
        <Typography variant="body2" fontWeight="bold">
          Claim Status Explanations
        </Typography>
        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ClaimLegendsTable />
      </Collapse>
    </Box>
  );
};
