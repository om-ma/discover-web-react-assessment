import { Box, Checkbox, Typography } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useDataGridDispatch, useDataGridStore } from "./context";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import { Bitcoin } from "../../icons/bitcoin";
import { Tether } from "../../icons/tether";
import { Binance } from "../../icons/binance";
import { Tron } from "../../icons/tron";
import IconButton from "@mui/material/IconButton";
import AccBalanceSearchField from "../acc-balance-search-field";
import DWRTooltip from "../../primitives/tooltip";
import { SET_SEARCH_TERM, TOGGLE_HIDE_ZERO } from "./context/actionTypes";
import { Loader } from "../../primitives/loader";
import { Empty } from "../../primitives/empty";

/* The `const rows: GridRowsProp` is defining an array of objects that represent the rows of data for
the data grid. Each object in the array represents a row and has properties such as `id`, `col1`,
`col2`, and `col3`. These properties hold the values for each column in the row. In this example,
there are two rows with different values for the columns `col1`, `col2`, and `col3`. */
const rows: GridRowsProp = [
  {
    id: 1,
    col1: "USD Tether (USDT)",
    col2: 0.0,
    col3: 0.0,
  },
  { id: 2, col1: "Bitcoin (BTC)", col2: 0.43647915, col3: 0.43647915 },
  { id: 3, col1: "Binance Coin (BNC)", col2: 1.08820898, col3: 1.08820898 },
  { id: 4, col1: "Tron (TRX)", col2: 1, col3: 5 },
];

const WrapBox = ({ children }: { children: JSX.Element }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
    }}
  >
    {children}
  </Box>
);

/* The `columns` constant is an array of objects that define the columns for the data grid in the React
component. Each object represents a column and has properties such as `field`, `headerName`,
`width`, `headerAlign`, and `align`. */
const columns: GridColDef[] = [
  {
    field: "col1",
    headerName: "Coin",
    width: 220,
    renderCell: (params) => {
      if (params.value === "USD Tether (USDT)") {
        return (
          <WrapBox>
            <>
              <Tether width="2rem" /> {params.value}
            </>
          </WrapBox>
        );
      }
      if (params.value === "Bitcoin (BTC)") {
        return (
          <WrapBox>
            <>
              <Bitcoin width="2rem" /> {params.value}
            </>
          </WrapBox>
        );
      }
      if (params.value === "Binance Coin (BNC)") {
        return (
          <WrapBox>
            <>
              <Binance width="2rem" /> {params.value}
            </>
          </WrapBox>
        );
      }
      if (params.value === "Tron (TRX)") {
        return (
          <WrapBox>
            <>
              <Tron width="2rem" /> {params.value}
            </>
          </WrapBox>
        );
      }
      return <></>;
    },
  },
  {
    field: "col2",
    headerName: "All Subaccounts Balance",
    width: 200,
    headerAlign: "right",
    align: "right",
    renderCell: (params) => {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight="bold">
            {params.value}
          </Typography>
        </Box>
      );
    },
  },
  {
    field: "col3",
    headerName: "Subaccount Balance",
    width: 200,
    headerAlign: "right",
    align: "right",
  },
];

/* The `QuickSearchToolbar` function is a React component that renders a toolbar for the data grid. It
uses the `useDataGridStore` hook to access the `hidden` state from the data grid store and the
`useDataGridDispatch` hook to dispatch actions to update the state. */
function QuickSearchToolbar() {
  const { hidden, value } = useDataGridStore();
  const dispatch = useDataGridDispatch();
  const [enableSearch, setEnableSearch] = useState(false);

  const handleClear = () => {
    dispatch({
      type: SET_SEARCH_TERM,
      value: "",
    });
  };

  const handleSearch = (event: any) => {
    dispatch({
      type: SET_SEARCH_TERM,
      value: event.target.value,
    });
  };

  const searchElemProps = {
    value,
    enableSearch,
    setEnableSearch,
    handleClear,
    handleSearch,
  };

  const handleHideZero = () => {
    dispatch({
      type: TOGGLE_HIDE_ZERO,
      hidden: !hidden,
    });
  };

  return (
    <Box
      sx={{
        p: 1,
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h6"
          component="span"
          fontWeight="bold"
          sx={{
            display: !enableSearch ? "" : "none",
            transition: "opacity  0.1s ease",
          }}
        >
          Balances
        </Typography>
        <Box
          sx={{
            scale: enableSearch ? 1 : 0,
            opacity: enableSearch ? 1 : 0,
            transition: "scale  0.2s ease",
          }}
        >
          <AccBalanceSearchField {...searchElemProps} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <DWRTooltip title="Search">
          <IconButton
            aria-label="search"
            onClick={() => setEnableSearch(!enableSearch)}
          >
            <SearchIcon
              sx={{
                color: !enableSearch ? "" : "#46e9ff",
                ":hover": {
                  color: "#46e9ff",
                },
              }}
            />
          </IconButton>
        </DWRTooltip>
        <DWRTooltip title="Download CSV">
          <CloudDownloadIcon
            sx={{
              cursor: "pointer",
              ":hover": {
                color: "#46e9ff",
              },
            }}
          />
        </DWRTooltip>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Checkbox
            checked={hidden}
            onClick={handleHideZero}
            sx={{
              mb: "2px",
              "&.Mui-checked": {
                color: "#46e9ff",
              },
            }}
          />
          <Typography variant="body2" component="span">
            Hide zero balances
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

/* The `export default function ClaimBalanceTable()` is a React component that renders a data grid
table. */
export default function AccBalancesTable() {
  const { hidden, value: searchTerm } = useDataGridStore();
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

  if (isLoading) return <Loader />;

  let _rows = (rows || [])
    .filter((row) => {
      if (hidden) {
        return !!row.col3;
      }
      return true;
    })
    .filter((row) => {
      if (searchTerm) {
        return row.col1.toLowerCase().indexOf(searchTerm) > -1;
      }
      return true;
    });

  return (
    <Box sx={{ p: 2, py: 1 }}>
      <DataGrid
        rows={_rows}
        columns={columns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{
          toolbar: QuickSearchToolbar,
          noResultsOverlay: Empty,
          noRowsOverlay: Empty,
        }}
        pageSizeOptions={[10, 15, 100]}
        autoHeight
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        sx={{ border: "none", borderBottom: 1, borderBottomColor: "#aaaaaa6f" }}
      />
    </Box>
  );
}
