import React from "react";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MenuProps } from "@mui/material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import AccBalanceSearchBar from "../acc-balance-search-bar";

const StyledMenu = styled((props: MenuProps) => {
  return (
    <Menu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  );
})(({ theme, open }) => ({
  "& .MuiPaper-root": {
    borderTopRadius: open ? 0 : 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    minWidth: 400,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      backgroundColor: "#2B2E3B",
    },
  },
}));

export default function AccBalanceMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        sx={{
          width: "400px",
          height: "60px",
          bgcolor: "#2B2E3B",
          display: "flex",
          justifyContent: "space-between",
          borderRadius: 2,
          borderBottomLeftRadius: open ? 0 : 6,
          borderBottomRightRadius: open ? 0 : 6,
          transition: "border 0.2s ease-out",
          ":hover": {
            bgcolor: "#2B2E3B",
          },
        }}
      >
        <Typography
          variant="body2"
          fontWeight="bold"
          sx={{ textTransform: "capitalize" }}
          color="#fff"
        >
          Main Account
        </Typography>
        <ArrowDropDownIcon sx={{ color: "#fff" }} />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disableRipple>
          <AccBalanceSearchBar />
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ textTransform: "capitalize", py: 2 }}
              color="#fff"
            >
              Main Account
            </Typography>
            <Divider />
          </Box>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
