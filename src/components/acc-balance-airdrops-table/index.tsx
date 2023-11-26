import { Box, Typography } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useEffect, useRef, useState } from "react";
import DWRTooltip from "../../primitives/tooltip";
import { Loader } from "../../primitives/loader";
import { Empty } from "../../primitives/empty";

const rows: GridRowsProp = [];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Time", width: 150 },
  {
    field: "col2",
    headerName: "Coin",
    width: 150,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col3",
    headerName: "Side",
    width: 150,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col4",
    headerName: "Notes",
    width: 230,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col5",
    headerName: "Status",
    width: 150,
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
        Airdrops
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

export default function AccBalanceP2pTransferTable() {
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
        sx={{ border: "none", borderBottom: 1, borderBottomColor: "#aaaaaa6f" }}
      />
    </Box>
  );
}
