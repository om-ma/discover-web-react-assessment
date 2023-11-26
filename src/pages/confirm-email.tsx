import { Box, Typography } from "@mui/material";

/**
 * The ConfirmEmail component renders a box with a heading and a body text indicating the email
 * confirmation status.
 * @returns The code is returning a React component called "ConfirmEmail". This component renders a Box
 * component with some styling properties and child components. The child components include a
 * Typography component with the variant "h6" and text "Verify your email - Required at Every Login",
 * and another Typography component with the variant "body1" and text "Email Confirmation Status:
 * Complete".
 */
export const ConfirmEmail = () => {
  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        gap: 2,
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "800px"
      }}
    >
      <Typography variant="h5" component="h5" fontWeight="bold" sx={{}}>
        Verify your email - Required at Every Login
      </Typography>
      <Typography variant="subtitle2">
        <strong>Email Confirmation Status:</strong> Complete
      </Typography>
    </Box>
  );
};
