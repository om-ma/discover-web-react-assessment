import { matchRoutes, useLocation, Link } from "react-router-dom";
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Typography from "@mui/material/Typography";

import routes, {
  auth,
  confirmEmail,
  krollPortal,
  kyc,
  customerClaimForm,
  TRoute,
  wallet,
} from "../../routes";
import { VerifiedTick } from "../../icons/verified-tick";
import { NotStartedRing } from "../../icons/not-started-ring";
import { LockedLock } from "../../icons/locked-lock";

const stepNumber: { [key: string]: number } = {
  authentication: 1,
  "confirm-email": 2,
  kyc: 3,
  wallet: 4,
  "kroll-portal": 5,
  "customer-claim-form": 6,
};

const stepIcon: { [key: string]: any } = {
  [auth]: VerifiedTick,
  [confirmEmail]: VerifiedTick,
  [kyc]: VerifiedTick,
  [wallet]: NotStartedRing,
  [krollPortal]: VerifiedTick,
  [customerClaimForm]: LockedLock,
};
const stepColor: { [key: string]: string } = {
  authentication: "#0be68b",
  "confirm-email": "#0be68b",
  kyc: "#0be68b",
  wallet: "#46e9ff",
  "kroll-portal": "#0be68b",
  "customer-claim-form": "#878a9b",
};

const stepTitle: { [key: string]: string } = {
  authentication: "Initiate Account Owner Authentication",
  "confirm-email": "Verify Identity of the Original\nFTX Account Owner",
  kyc: "KYC",
  wallet: "Review Account Balances",
  "kroll-portal": "Submission of Electronic\nProof of Claim",
  "customer-claim-form": "Standby for the next steps",
};

const stepDesc: { [key: string]: string } = {
  authentication:
    "The process of verifying the identity of the person who owns the account. This is often done to ensure security and prevent unauthorized access to the account.",
  "confirm-email":
    "To ensure the accuracy of your email address on record, please initiate the verification process by requesting a confirmation email. Upon receipt, kindly click on the enclosed link to complete the verification.",
  kyc: "Complete the Know Your Customer (KYC) process to verify the identity of the original FTX account owner. This step ensures that the account is compliant with regulations and helps to verify your identity.",
  wallet:
    "View your FTX account -- you can view your balances as of the Petition Date (unless otherwise noted), and historical activity.",
  "kroll-portal":
    "You will be directed to the Kroll Restructuring Administration platform to confirm your balances as of the Petition Date, and, if necessary, submit an electronic proof of claim. Customers of FTX Japan and Liquid Global who have withdrawn, or otherwise received, cash, cryptocurrency, digital asset or other assets post-petition (post November 11, 2022), need not file a proof of claim for such cash, cryptocurrency, digital asset or other assets. Customers of FTX EU for client cash held in segregated client fiat accounts with certain third party financial institutions maintained by FTX EU for which such customer has withdrawn, or otherwise received, cash, cryptocurrency, digital assets or other assets post petition also need not file a proof of claim for such cash, cryptocurrency, digital assets or other assets.",
};

/* The `StepLink` function is a React component that renders a step link based on the provided `item`
prop. It uses the `useLocation` hook from the `react-router-dom` library to get the current
location, and the `matchRoutes` function to match the current location with the defined routes. */
export default function StepLink({ item }: { item: TRoute }) {
  const location = useLocation();
  const matchedDataList = matchRoutes(routes, location);
  const routeKey = !!matchedDataList ? matchedDataList[0].route.key : null;
  const isMatched: boolean = item.key === routeKey;
  const isFirstStep = item.key === auth;
  const isLastStep = item.key === customerClaimForm;
  const StepIcon: any = stepIcon[item.key];

  const heroComp = (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gridTemplateRows: "auto 1fr auto",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        backgroundColor: isMatched ? "#2B2E3B" : "",
        padding: 2,
        paddingY: "16px",
        borderRadius: isFirstStep ? "15px" : "none",
        borderBottomLeftRadius: isLastStep ? "15px" : "0px",
        borderBottomRightRadius: isLastStep ? "15px" : "0px",
        ":hover":
          !isLastStep && !isFirstStep
            ? {
                // backgroundColor: "#1a1a1a",
              }
            : {},
        // transition: "background-color 0.2s ease-out",
        gap: 0.5,
      }}
    >
      <Box
        sx={{
          gridRowStart: 1,
          gridRowEnd: 3,
          gridColumnStart: 1,
          gridColumnEnd: 2,
          p: 1,
        }}
      >
        <StepIcon />
      </Box>
      <Box
        sx={{
          gridRowStart: 1,
          gridRowEnd: 2,
          gridColumnStart: 2,
        }}
      >
        <Typography
          variant="body2"
          color={stepColor[item.key]}
          sx={{
            fontWeight: "400",
            textTransform: "uppercase",
            lineHeight: "1.5",
            fontSize: "12px",
            marginLeft: "-3px",
          }}
        >
          Step {stepNumber[item.key]}
        </Typography>
      </Box>
      <Box
        sx={{
          gridRowStart: 2,
          gridRowEnd: 3,
          gridColumnStart: 2,
        }}
      >
        <Typography
          variant="subtitle2"
          color="#fff"
          sx={{
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: "600",
            lineHeight: "1.5",
            marginLeft: "-3px",
            whiteSpace: "pre-line",
            letterSpacing: "0.02em",
          }}
        >
          {stepTitle[item.key]}
        </Typography>
      </Box>
      <Box
        sx={{
          gridRowStart: 3,
          gridRowEnd: 4,
          gridColumnStart: 1,
          gridColumnEnd: 4,
        }}
      >
        {isMatched ? (
          <Box sx={{ my: 1, mx: 1 }}>
            <Typography
              variant="subtitle2"
              color="#a9a9a9"
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "1.5",
                color: "rgb(135, 138, 155)",
                marginLeft: "0px",
                marginTop: "-7px",
                whiteSpace: "pre-line",
              }}
            >
              {stepDesc[item.key]}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <Box
        sx={{
          gridRowStart: 2,
          gridRowEnd: 3,
          gridColumnStart: 3,
          display: !isLastStep && !isFirstStep ? "" : "none",
        }}
      >
        <Typography variant="subtitle2" color="#fff">
          <KeyboardArrowRightIcon sx={{ marginLeft: "-29px" }} />
        </Typography>
      </Box>
    </Box>
  );

  if (isFirstStep || isLastStep) {
    return <>{heroComp}</>;
  }

  return (
    <Link to={item.path} style={{ textDecoration: "none" }}>
      {heroComp}
    </Link>
  );
}
