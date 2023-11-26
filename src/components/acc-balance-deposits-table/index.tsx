import { Box, Typography } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useEffect, useRef, useState } from "react";
import DWRTooltip from "../../primitives/tooltip";
import { Loader } from "../../primitives/loader";
import { Empty } from "../../primitives/empty";

const rows: GridRowsProp = [
  {
    id: 1,
    col1: "11/9/2022, 3:10:46",
    col2: "TRX",
    col3: "1TRX",
    col4: "Complete",
  },
  {
    id: 2,
    col1: "10/8/2022,230.87 AM",
    col2: "BTC",
    col3: "230.87 USDT",
    col4: "Confirmed",
  },
  {
    id: 3,
    col1: "5/9/2022, 10:07:05 PM",
    col2: "BTC",
    col3: "1.045677 BTC",
    col4: "Confirmed",
  },
  {
    id: 4,
    col1: "6/17/2022,6:53:18 PM",
    col2: "BTC",
    col3: "0.0000949 BTC",
    col4: "Confirmed",
  },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Time", width: 200 },
  {
    field: "col2",
    headerName: "Coin",
    width: 190,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col3",
    headerName: "Amount",
    width: 190,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col4",
    headerName: "Status",
    width: 190,
    headerAlign: "left",
    align: "left",
  },
];

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        gap: 2,
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6" component="h6" fontWeight="bold">
        Deposits
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
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
        <DateRangeIcon />
      </Box>
    </Box>
  );
}

/* The `export default function ClaimDepositsTable()` is a React functional component that exports a
table component for displaying deposit information. */
export default function AccBalanceDepositsTable() {
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

  return (
    <Box sx={{ p: 2, py: 1 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        autoHeight
        slots={{
          toolbar: QuickSearchToolbar,
          noResultsOverlay: Empty,
          noRowsOverlay: Empty,
        }}
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
