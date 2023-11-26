import { useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import KYCLegendsTable from "../kyc-legend-table";

/**
 * The KYCExpandCollapse component is a React component that renders a collapsible section with a title
 * and an arrow icon that toggles the visibility of the content.
 * @returns The KYCExpandCollapse component is returning JSX elements. It returns a Box component that
 * contains a Typography component and an ArrowDropUpIcon or ArrowDropDownIcon component based on the
 * value of the "open" state. It also returns a Collapse component that conditionally renders the
 * KYCLegendsTable component based on the value of the "open" state.
 */
export const KYCExpandCollapse = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box onClick={handleClick}>
      <Box sx={{ display: "flex", cursor: "pointer" }}>
        <Typography variant="body2" fontWeight="bold">
          KYC Status Explanations
        </Typography>
        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <KYCLegendsTable />
      </Collapse>
    </Box>
  );
};
