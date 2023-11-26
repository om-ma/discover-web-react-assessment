import * as React from "react";
import { useState } from "react";
import { Box, Button, Popper, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { Person } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#000",
    },
  },
});

export const CustomerClaimForm = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "white",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#004862",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: "0",
            zIndex: 500,
          }}
        >
          <Typography variant="body2" fontSize={20} fontWeight={"bold"}>
            Customer Claim Form
          </Typography>
          <Box>
            <button
              style={{ background: "none", border: "none" }}
              onClick={handleClick}
            >
              <Person sx={{ color: "white" }} />
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box
                sx={{
                  border: 1,
                  p: 2,
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 5px lightgray",
                }}
              >
                <Typography fontSize={"12px"} color={"gray"}>
                  Loged in as discoverweb2023@gmail.com
                </Typography>
                <Button
                  sx={{ mt: 2, fontSize: "12px", p: "0px", color: "black" }}
                  variant="text"
                >
                  Logout
                </Button>
              </Box>
            </Popper>
          </Box>
        </Box>
        <Box color={"black"} padding={4}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
