import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { KYCExpandCollapse } from "../components/kyc-expand-collapse";
import DWRButton from "../primitives/button";
import { Loader } from "../primitives/loader";

/* The code defines a React functional component called `Kyc`. This component renders a form for the
Know Your Customer (KYC) process. */
export const Kyc = () => {
  let timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * The function `loadVerifiedPage` sets a loading state, waits for 2 seconds, opens a new window with a
   * specific URL, and then sets the loading state to false.
   */
  const loadVerifiedPage = () => {
    setIsLoading(true);
    timeoutRef.current = setTimeout(() => {
      window.open(
        `${window.location.origin}/idensic-verification-123456`,
        "_blank"
      );
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
      <Typography variant="h5" component="h5" fontWeight="bold">
        KYC Process
      </Typography>
      <Typography variant="body2" fontWeight="bold">
        KYC Status: Verified
      </Typography>

      <KYCExpandCollapse />

      <Typography variant="body2" color="#a9a9a9">
        For purposes of validating identities and ensuring compliance, users are
        requested to follow the Know Your Customer (KYC) procedure. Please note
        that this procedure will be conducted through our third party partner,
        Sumsub. (Sumsub for retail, BitGo for institutional)
      </Typography>
      <Typography variant="body2" color="#a9a9a9">
        Before starting your KYC, we strongly recommend that you read the
        instructions below and as well as the support articles in "
        <a
          href="https://support.ftx.com/hc/en-us"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#a9a9a9" }}
        >
          Verification
        </a>
        ".
      </Typography>
      <Typography variant="body2" color="#a9a9a9">
        Although part of this KYC process is automated (i.e. instant approval),
        due to the extremely high volume of customer claims, any KYC subject to
        manual review may take more than 30 business days. Therefore, regardless
        of the KYC status, please proceed to Step 4 and Step 5 to view account
        balance and file a claim upon completion of your KYC documents upload.
      </Typography>
      <Typography
        variant="body2"
        color="#a9a9a9"
        fontWeight="bold"
        sx={{ textDecoration: "underline" }}
      >
        Note that you should begin your KYC process by the Customer Bar Date of
        September 29, 2023, 4 PM United States Eastern Time ("Bar Date").
      </Typography>
      <Typography variant="body2" color="#a9a9a9">
        The FTX Customer Claims Portal and the Kroll Portal will remain
        accessible after the Bar Date to amend or file a claim. Absent order
        from the U.S. Bankruptcy Court for the District of Delaware, any claims
        filed after the Bar Date will be considered late filed and may be
        disputed. KYC will also remain open for customers to complete and upload
        the requested documentation
      </Typography>

      <DWRButton isLoading={isLoading} clickFn={loadVerifiedPage}>
        {isLoading ? (
          <Loader />
        ) : (
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ textTransform: "capitalize" }}
            color="#fff"
          >
            Begin KYC process
          </Typography>
        )}
      </DWRButton>
    </Box>
  );
};
