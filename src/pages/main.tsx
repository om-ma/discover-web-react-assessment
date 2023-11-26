import { Box, Grid } from "@mui/material";

import { Outlet } from "react-router-dom";
import NavBar from "../components/nav-bar";
import StepLinks from "../components/step-links";

export const Main = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "325px 850px",
            gap: 3,
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: "15px",
          }}
        >
          <Box
            sx={{
              minWidth: "200px",
              borderRadius: "15px",
              backgroundColor: "#1D1F2B",
              width: "280px",
              marginLeft: "50px",
            }}
          >
            <StepLinks />
          </Box>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};
