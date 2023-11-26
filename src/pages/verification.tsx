import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";
import { VerifiedTick2 } from "../icons/verified-tick-2";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { LoadingTime } from "../icons/loading-time";

const steps = [
  "Identity  document",
  "Proof of address",
  "Questionnaire",
  "Selfie",
];

const StepLineConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 15,
    left: "calc(-50% + 12px)",
    right: "calc(50% + 12px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#25d9f0",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#25d9f0",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 1,
    borderRadius: 1,
  },
}));

export default function Verification() {
  let timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const t = timeoutRef.current;
    return () => {
      clearTimeout(t);
    };
  }, []);

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#fff",
          color: "white",
          height: "100%",
          p: 6,
        }}
      >
        <LoadingTime />
      </Box>
    );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#fff",
          color: "#000",
          height: "100%",
          p: 3,
        }}
      >
        <Box sx={{ width: "800px" }}>
          <Stepper
            alternativeLabel
            activeStep={4}
            connector={<StepLineConnector />}
          >
            {steps.map((label) => (
              <Step key={label} active={true}>
                <StepLabel
                  StepIconComponent={() => <VerifiedTick2 width="2rem" />}
                  color="#000"
                >
                  <Typography
                    variant="body2"
                    color={"#000"}
                    sx={{ textAlign: "center" }}
                  >
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
            py: 10,
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          <VerifiedTick2 width="7rem" />
          <Typography
            variant="h6"
            color={"#000"}
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Congratulations!
          </Typography>
          <Typography variant="body2" color={"#000000a8"}>
            Your verification was successful. You have been verified.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
