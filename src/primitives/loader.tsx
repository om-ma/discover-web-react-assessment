import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
      <CircularProgress size="25px" />
    </Box>
  );
};
