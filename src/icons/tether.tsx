import Box from "@mui/material/Box";
import React from "react";

export const Tether = ({ width = "2rem" }: { width?: string }) => {
  return (
    <Box
      component="img"
      sx={{
        width: width,
      }}
      src="/usd_tether.png"
    />
  );
};
