import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AccBalancesTable from "../acc-balances-table";
import { DataGridStoreProvider } from "../acc-balances-table/context";
import AccBalanceDepositTable from "../acc-balance-deposits-table";
import AccBalanceOtherTabs from "../acc-balance-other-tabs";
import AccBalanceWithdrawTable from "../acc-balance-withdraw-table";
import AccBalanceFillTable from "../acc-balance-fills-table";
import AccBalanceP2pTransferTable from "../acc-balance-p2p-table";
import AccBalanceAirDropsTable from "../acc-balance-airdrops-table";
import AccBalanceReferralTable from "../acc-balance-referral-table";
import AccBalanceAdjustmentTable from "../acc-balance-adjustment-table";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabList = [
  "Balances",
  "Deposits",
  "Withdrawals",
  "Positions",
  "Fills",
  "P2P Transfers",
  "Airdrops",
  "Referral Rebates",
  "Balance Adjustments",
  "Other",
];

/**
 * The `CustomTabPanel` function is a TypeScript React component that renders a tab panel based on the
 * provided props.
 * @param {TabPanelProps} props - The `props` parameter is an object that contains the properties
 * passed to the `CustomTabPanel` component.
 */
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <>{children}</>}
    </Box>
  );
}

/* The `export default` statement is used to export the `PortfolioTabs` function as the default export
of the module. This means that when another module imports this module, it can import the
`PortfolioTabs` function using any name of its choice. */
export default function AccBalancePortfolioTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "#1D1F2B" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabList.map((item) => (
          <Tab
            key={item}
            label={item}
            sx={{
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: 15,
            }}
          />
        ))}
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <DataGridStoreProvider>
          <AccBalancesTable />
        </DataGridStoreProvider>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AccBalanceDepositTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AccBalanceWithdrawTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <AccBalanceFillTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <AccBalanceP2pTransferTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <AccBalanceAirDropsTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <AccBalanceReferralTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        <AccBalanceAdjustmentTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
        <AccBalanceOtherTabs />
      </CustomTabPanel>
    </Box>
  );
}
