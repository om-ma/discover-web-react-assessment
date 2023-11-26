import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AccBalanceFtxAppEarnTable from "../acc-balance-ftx-app-earn-table";
import AccBalanceSpotMarginLendTable from "../acc-balance-spot-margin-lends-table";
import AccBalanceSpotMarginBorrowTable from "../acc-balance-spot-margin-borrows-table";
import AccBalanceSpotFundingPaymentTable from "../acc-balance-spot-funding-payment-table";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabList = [
  "FTX App Earn",
  "Spot Margin Lends",
  "Spot Margin Borrows",
  "Funding Payments",
];

/**
 * The CustomTabPanel component is a React component that renders a tab panel based on the provided
 * props.
 * @param {TabPanelProps} props - The `props` parameter is an object that contains the properties
 * passed to the `CustomTabPanel` component. These properties include `children`, `value`, `index`, and
 * any other additional properties that may be passed.
 * @returns a JSX element.
 */
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

/* The `export default function ClaimOtherTabs()` is a React functional component that represents a
tabbed interface. */
export default function AccBalanceOtherTabs() {
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
        <AccBalanceFtxAppEarnTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AccBalanceSpotMarginLendTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AccBalanceSpotMarginBorrowTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <AccBalanceSpotFundingPaymentTable />
      </CustomTabPanel>
    </Box>
  );
}
