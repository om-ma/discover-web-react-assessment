import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Link } from "react-router-dom";

/* The code is defining a React functional component called `ProfileMenu`. This component renders a
button that opens a menu when clicked. The menu contains three menu items: "Account ID 115408177",
"Settings", and "Log out". */
export default function ProfileMenu() {
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
        sx={{ borderRadius: "10px",
        marginRight: "-6px", }}
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
            lineHeight: "1.43",
            marginRight: "-3px"
          }}
        >
          My Account
        </Typography>
        {open ? (
          <ArrowDropUpIcon sx={{ color: "white" }} />
        ) : (
          <ArrowDropDownIcon sx={{ color: "white" }} />
        )}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box
          sx={{
            maxWidth: 230,
            py: 3,
            mx: 3,
            borderBottom: 1,
            borderBottomColor: "gray",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ display: "inline" }}
            >
              Account ID
            </Typography>
            <Typography
              sx={{
                overflowWrap: "break-word",
                whiteSpace: "initial",
                display: "inline",
                pl: 1,
                color: "gray",
              }}
            >
              115408177
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ display: "inline" }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                overflowWrap: "break-word",
                whiteSpace: "initial",
                display: "inline",
                pl: 1,
                color: "gray",
              }}
            >
              abc.xyz.2023@gmail.com
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ display: "inline" }}
            >
              Platform
            </Typography>
            <Typography
              sx={{
                overflowWrap: "break-word",
                whiteSpace: "initial",
                display: "inline",
                pl: 1,
                color: "gray",
              }}
            >
              FTX_COM
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            py: 3,
            px: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Link to="#">
            <Typography
              variant="body2"
              sx={{ textTransform: "capitalize" }}
              color="white"
              fontWeight="bold"
            >
              Settings
            </Typography>
          </Link>
          <Link to="#">
            <Typography
              variant="body2"
              sx={{ textTransform: "capitalize" }}
              color="red"
              fontWeight="bold"
            >
              Log out
            </Typography>
          </Link>
        </Box>
      </Menu>
    </Box>
  );
}
