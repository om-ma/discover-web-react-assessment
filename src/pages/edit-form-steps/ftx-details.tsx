import { Box, Button, FormLabel, Typography } from "@mui/material";
import { InputField } from "../../components/input-field";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const FtxDetails = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
      width={"100%"}
    >
      <Box width={"100%"}>
        <Typography variant="h5">FTX Details</Typography>
        <Box
          display={"grid"}
          gridTemplateColumns={"auto auto auto auto"}
          gap={"15px"}
          marginTop={"20px"}
          width={"100%"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <FormLabel>Ftx Email</FormLabel>
            <InputField
              currentValue="discoverweb2023@gmail.com"
              inputWidth="100%"
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <FormLabel>Ftx AccountID</FormLabel>
            <InputField currentValue="34567890765" inputWidth="100%" />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <FormLabel>Scheduled Id</FormLabel>
            <InputField currentValue="456890098778789" inputWidth="100%" />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <FormLabel>Ftx Debtor</FormLabel>
            <InputField inputWidth="100%" />
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} alignItems="center" gap={"20px"}>
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
          <ArrowLeft sx={{ mr: 0.5 }} />
          Prev
        </Button>
        <Link to={"schedule-claim"}>
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
            <ArrowRight sx={{ mr: 0.5 }} />
            Next
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
