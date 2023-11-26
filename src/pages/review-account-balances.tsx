import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AccBalanceMenu from "../components/acc-balance-menu";
import { Lock } from "../icons/lock";
import DWRButton from "../primitives/button";
import AccBalancePortfolioTabs from "../components/acc-balance-portfolio-tabs";
import { Loader } from "../primitives/loader";

/* The code defines a functional component called `ReviewAccountBalances`. This component renders a UI
for reviewing account balances and downloading core transactions. */
export const ReviewAccountBalances = () => {
  let timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * The function `downloadAllCoreTransactions` sets the `isLoading` state to true, waits for 2 seconds,
   * and then sets the `isLoading` state to false.
   */
  const downloadAllCoreTransactions = () => {
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
        p: 3,
        px: 4,
        display: "flex",
        gap: 2,
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "800px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "space-between",
          py: 1,
          pb: 3,
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "baseline" }}>
          <Typography variant="h6" component="h6" fontWeight="bold">
            Portfolio
          </Typography>
          <Lock width="1.15rem" />
        </Box>
        <AccBalanceMenu />
      </Box>

      <DWRButton
        isLoading={isLoading}
        clickFn={downloadAllCoreTransactions}
        variant="custom-secondary"
      >
        {isLoading ? (
          <Loader />
        ) : (
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ textTransform: "capitalize" }}
            color="#fff"
          >
            Download All Core Transactions
          </Typography>
        )}
      </DWRButton>

      <Typography variant="body2">
        Transactions will be downloaded for the user's main account or the
        currently selected subaccount. May not include additional balance
        adjustments. Please download these using the adjustments tab.
      </Typography>

      <AccBalancePortfolioTabs />
    </Box>
  );
};
