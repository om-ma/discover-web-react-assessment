import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const SubmitInformation = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"40px"}
    >
      <Box width={"100%"}>
        <Typography variant="h5">Submission Information</Typography>
        <Box>
          <Typography fontSize={"13px"} color={"gray"} marginTop={"15px"}>
            When you press "Accept Schdule" you will receive an eamil from
            'noreply.efiling@gmail.com'. Please add this email to your allowed
            senders list. This email will contain an identification number
            confirming receipt of your schedule acceptance ("Confirmation ID").
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} alignItems="center" gap={"20px"}>
        <Link to={"/customer-claim-form/edit/schedule-claim"} replace>
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
        </Link>
        <Link to={""} replace>
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
