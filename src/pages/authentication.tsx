import { Box, Typography } from "@mui/material";

/**
 * The `Authentication` function returns a React component that displays the account owner
 * authentication status.
 * @returns The code is returning a component called "Authentication" which renders a Box component
 * with some styling properties. Inside the Box component, there are two Typography components. The
 * first Typography component renders a heading with the text "Account Owner Authentication" and the
 * second Typography component renders a paragraph with the text "Authentication Status: Complete".
 */
export const Authentication = () => {
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
      <Typography variant="h6" component="h6" fontWeight="bold">
        Account Owner Authentication
      </Typography>
      <Typography variant="body1">Authentication Status: Complete</Typography>
    </Box>
  );
};
