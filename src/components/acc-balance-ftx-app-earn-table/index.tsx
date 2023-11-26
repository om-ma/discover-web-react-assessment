import { Box, Typography } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useEffect, useRef, useState } from "react";
import { Loader } from "../../primitives/loader";
import DWRTooltip from "../../primitives/tooltip";

const rows: GridRowsProp = [
  {
    id: 1,
    col1: "11/10/2022, 8:30:00 AM",
    col2: "BTC",
    col3: "0.00000399 BTC",
    col4: "0.06479076 USD",
  },
  {
    id: 2,
    col1: "11/10/2022, 8:30:00 AM",
    col2: "BNB",
    col3: "0.00000994 BNB",
    col4: "0.00275289 USD",
  },
  {
    id: 3,
    col1: "11/10/2022, 7:30:00 AM",
    col2: "BTC",
    col3: "0.00000399 BTC",
    col4: "0.06393424 USD",
  },
  {
    id: 4,
    col1: "11/10/2022, 7:30:00 AM",
    col2: "BNB",
    col3: "0.00000994 BNB",
    col4: "0.00272194 USD",
  },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Time", width: 250 },
  {
    field: "col2",
    headerName: "Currency",
    width: 160,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col3",
    headerName: "Size",
    width: 160,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col4",
    headerName: "Size (USD)",
    width: 160,
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
        FTX App Earn
      </Typography>
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
    </Box>
  );
}

/* The `export default function ClaimFtxAppEarnTable()` is a React functional component that exports a
table component for claiming FTX App Earn. */
export default function AccBalanceFtxAppEarnTable() {
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
        slots={{
          toolbar: QuickSearchToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        sx={{ border: "none" }}
        rowHeight={35}
      />
    </Box>
  );
}
