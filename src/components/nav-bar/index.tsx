import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import ProfileMenu from "../profile-menu";
import TranslationMenu from "../translation-menu";

/* The code is defining a functional component called `NavBar`. This component returns a JSX structure
that represents a navigation bar. The navigation bar is styled using Material-UI components such as
`AppBar`, `Toolbar`, `Avatar`, and `Typography`. It also includes two custom components
`TranslationMenu` and `ProfileMenu`. The `NavBar` component is exported as the default export of the
module, which means it can be imported and used in other parts of the codebase. */
export default function NavBar() {
  return (
    <AppBar sx={{ position: "relative" }}>
      <Toolbar
        sx={{
          backgroundColor: "#0B0E16",
          borderBottom: 1,
          borderBottomColor: "#373535",
          paddingY: "16px",
          marginLeft: "-10px",
          marginTop: "-5px",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 32,
            width: 106,
            paddingX: "8px",
          }}
          alt="FTX"
          src="/download.png"
        />
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            marginTop: "5px",
          }}
        >
          <Typography
            variant="body2"
            component="span"
            sx={{ px: "12px", py: "6px", fontSize: "0.875rem", fontWeight: "500", lineHeight: "1.43" }}
          >
            Privacy
          </Typography>
          <Typography
            variant="body2"
            component="span"
            sx={{ px: "12px", py: "6px", fontSize: "0.875rem", fontWeight: "500", lineHeight: "1.43" }}
          >
            FAQ
          </Typography>
          <Typography
            variant="body2"
            component="span"
            sx={{ px: "12px", py: "6px", fontSize: "0.875rem", fontWeight: "500", lineHeight: "1.43" }}
          >
            Support
          </Typography>
          <TranslationMenu />
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
