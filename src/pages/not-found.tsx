import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ textTransform: "capitalize" }}
        color="#fff"
      >
        404 - Not found
      </Typography>
    </Box>
  );
};
