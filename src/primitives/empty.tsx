import { Stack, Typography } from "@mui/material";

export const Empty = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography variant="h6" component="h6" fontWeight="bold">
        No matching records found
      </Typography>
    </Stack>
  );
};
