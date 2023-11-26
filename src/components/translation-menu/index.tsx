import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Lang from "../../icons/lang";
import Box from "@mui/material/Box";

export default function TranslationMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          borderRadius: "10px",
          pl: 2,
          display: "flex",
          alignItems: "center",
        }}
        startIcon={<Lang />}
      >
        <Typography
          variant="body2"
          sx={{
            px: "2px",
            py: "6px",
            textTransform: "capitalize",
            color: "white",
            fontSize: "0.875rem", 
            fontWeight: "500", 
            lineHeight: "1.43"
          }}
        >
          English
        </Typography>
        {open ? (
          <ArrowDropUpIcon sx={{ color: "white" }} />
        ) : (
          <ArrowDropDownIcon sx={{ color: "white" }} />
        )}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box
          sx={{
            minWidth: 250,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {[
            "English",
            "简体中文",
            "繁體中文",
            "日本語",
            "Tiếng Việt",
            "Türkçe",
            "Deutsch",
            "Français",
            "Nederlands",
            "Русский",
            "Español",
            "Italiano",
            "Português",
            "Português Brasil",
            "Bahasa Indonesia",
            "عربی",
            "한국",
          ].map((text) => {
            return (
              <MenuItem key={text}>
                <Typography variant="body2">{text}</Typography>
              </MenuItem>
            );
          })}
        </Box>
      </Menu>
    </Box>
  );
}
