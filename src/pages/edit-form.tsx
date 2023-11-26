import { Box, Button, Chip } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const EditForm = () => {
  return (
    <Box>
      <Box display={"flex"} gap={"20px"}>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Link to={""}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                width: "100%",
                minWidth: "20rem",
                display: "inline-flex",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              Ftx Details
              <Chip
                label="Completed"
                sx={{ color: "white", backgroundColor: "green" }}
              />
            </Button>
          </Link>
          <Link to={"schedule-claim"}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                width: "100%",
                minWidth: "20rem",
                display: "inline-flex",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              Schedule Claim Info
              <Chip
                label="Completed"
                sx={{ color: "white", backgroundColor: "green" }}
              />
            </Button>
          </Link>
          <Link to={"submission-info"}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                width: "100%",
                minWidth: "20rem",
                display: "inline-flex",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              Submisson Info
              <Chip
                label="Completed"
                sx={{ color: "white", backgroundColor: "green" }}
              />
            </Button>
          </Link>
        </Box>
        <Box width={"100%"}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
