import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Chip, FormLabel, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  ArrowDropDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  Search,
} from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";
import { InputField } from "../components/input-field";
import CustomerClaimTable from "../components/customer-claim-table";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "white",
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "black",
    fontSize: "12px",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: "white",
      },
    },
  },
}));

export const FormTable: React.FC = () => {
  const [showOptions, setShowOptions] = useState<boolean | undefined>(
    undefined
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const optionShowHandler = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };
  return (
    <Box color={"black"}>
      <Box display={"flex"} gap={"10px"} alignItems={"center"}>
        <Box>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            sx={{
              backgroundColor: "#2589ce",
              padding: "10px 16px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "12px",
              color: "white",
              ":hover": {
                backgroundColor: "white",
                color: "black",
                boxShadow: "0px 0px 5px lightblue",
              },
            }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Selected{" "}
            <Chip
              label={0}
              sx={{
                color: "#fff",
                width: "20px",
                height: "22px",
                display: "flex",
                paddingRight: "7px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#8f8f8f",
                borderRadius: "100%",
                ml: 0.5,
              }}
            />
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
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ fontSize: "12px" }}
            >
              Select All
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ fontSize: "12px" }}
            >
              Deselect All
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ fontSize: "12px" }}
            >
              Select explicity saved only
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ fontSize: "12px" }}
            >
              Select autosaved only
            </MenuItem>
          </StyledMenu>
        </Box>
        <InputField inputWidth="30rem" placeholder="Search..." />
        <Button
          sx={{
            backgroundColor: "#2589ce",
            padding: "10px 30px",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "14px",
            color: "white",
            ":hover": {
              backgroundColor: "white",
              color: "black",
              boxShadow: "0px 0px 5px lightblue",
            },
          }}
        >
          <Search sx={{ mr: 0.5 }} />
          Search
        </Button>
        <Button
          onClick={optionShowHandler}
          sx={{
            backgroundColor: "#2589ce",
            padding: "10px 30px",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "14px",
            color: "white",
            ":hover": {
              backgroundColor: "white",
              color: "black",
              boxShadow: "0px 0px 5px lightblue",
            },
          }}
        >
          <ArrowDropDown sx={{ mr: 0.5 }} />
          Show Options
        </Button>
        <Box display={"flex"} alignItems={"center"} gap={"20px"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            color={"gray"}
          >
            <KeyboardDoubleArrowLeft />
            <KeyboardArrowLeft />
          </Box>
          <Typography fontSize={"12px"}>1 to 2 of 2</Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            color={"gray"}
          >
            <KeyboardArrowRight />
            <KeyboardDoubleArrowRight />
          </Box>
        </Box>
      </Box>
      <Box>
        {showOptions && (
          <Box
            display={"grid"}
            gridTemplateColumns={"auto auto auto auto auto"}
            gap={"15px"}
            width={"100%"}
            margin={"0 auto"}
            marginTop={"30px"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                FTX Email
              </FormLabel>
              <InputField />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                FTX AccountID
              </FormLabel>
              <InputField />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                Scheduled ID
              </FormLabel>
              <InputField />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                Schedule
              </FormLabel>
              <InputField />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                Non-Scheduled, Disputed Status
              </FormLabel>
              <InputField />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                Creditor Name
              </FormLabel>
              <InputField />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                Email Address
              </FormLabel>
              <InputField />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                DOCUMENT ID
              </FormLabel>
              <InputField />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                CONFIRMATION ID
              </FormLabel>
              <InputField />
            </Box>
          </Box>
        )}
      </Box>
      <Box sx={{ width: "100%" }} marginTop={"30px"}>
        <CustomerClaimTable />
      </Box>
      <Box display={"flex"} justifyContent={"center"} marginTop={"20px"}>
        <Button
          sx={{
            backgroundColor: "#2589ce",
            padding: "10px 16px",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "12px",
            color: "white",
            ":hover": {
              backgroundColor: "white",
              color: "black",
              boxShadow: "0px 0px 5px lightblue",
            },
          }}
        >
          File a Claim or Accept Schedule
        </Button>
      </Box>
    </Box>
  );
};
