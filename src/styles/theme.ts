import { createTheme, responsiveFontSizes, Theme } from "@mui/material";
import { DARK_MODE_THEME } from "./constants";

/**
 * The function `getAppTheme` returns a theme object based on the specified mode and applies responsive
 * font sizes.
 * @param mode - The `mode` parameter is of type `typeof DARK_MODE_THEME`. It is used to determine the
 * color mode of the theme.
 * @returns a theme object.
 */
export const getAppTheme = (mode: typeof DARK_MODE_THEME): Theme => {
  let theme = createTheme({
    palette: {
      mode,
    },
    typography: {
      allVariants: {
        fontFamily: `Inter, Roboto, "Noto Sans SC Sliced", Helvetica, Arial, sans-serif`,
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};
