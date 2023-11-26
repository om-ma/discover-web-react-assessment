import { Box, Typography } from "@mui/material";
import { ClaimExpandCollapse } from "../components/claim-expand-collapse";
import { useEffect, useRef, useState } from "react";
import DWRButton from "../primitives/button";
import { Loader } from "../primitives/loader";

/* The `SubmissionClaimProof` component is a React functional component that renders a form for filing
a proof of claim. */
export const SubmissionClaimProof = () => {
  let timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * The function `fileProofOfClaim` sets the `isLoading` state to true, waits for 2 seconds, and then
   * sets the `isLoading` state to false.
   */
  const fileProofOfClaim = () => {
    setIsLoading(true);
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const t = timeoutRef.current;
    return () => {
      clearTimeout(t!);
    };
  }, []);

  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        gap: 3,
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "800px"
      }}
    >
      <Typography variant="h6" component="h6" fontWeight="bold">
        File Proof of Claim
      </Typography>

      <Typography variant="body2" fontWeight="bold" sx={{ py: 2 }}>
        FTX Trading Ltd. Claim Status: Agreed Scheduled Claims (2)
      </Typography>

      <ClaimExpandCollapse />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body2" color="#a9a9a9">
          By clicking the button below, you will be directed to the Kroll
          Restructuring Administration platform to confirm your balances as of
          the Petition Date, and, if necessary, submit an electronic proof of
          claim.
        </Typography>
        <Typography variant="body2" color="#a9a9a9">
          Customers of FTX Japan and Liquid Global who have withdrawn, or
          otherwise received, cash, cryptocurrency, digital asset or other
          assets post-petition (post November 11, 2022), need not file a proof
          of claim for such cash, cryptocurrency, digital asset or other assets.
          Customers of FTX EU for client cash held in segregated client fiat
          accounts with certain third-party financial institutions maintained by
          FTX EU for which such customer has withdrawn, or otherwise received,
          cash, cryptocurrency, digital assets or other assets post-petition
          also need not file a proof of claim for such cash, cryptocurrency,
          digital asset or other assets.
        </Typography>
      </Box>

      <DWRButton isLoading={isLoading} clickFn={fileProofOfClaim}>
        {isLoading ? (
          <Loader />
        ) : (
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ textTransform: "capitalize" }}
            color="#fff"
          >
            File Proof of Claim
          </Typography>
        )}
      </DWRButton>
    </Box>
  );
};
