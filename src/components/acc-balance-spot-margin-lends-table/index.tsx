import { Box, Typography } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DWRTooltip from "../../primitives/tooltip";
import { Empty } from "../../primitives/empty";
import DateRangeIcon from "@mui/icons-material/DateRange";

const rows: GridRowsProp = [];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Time", width: 150 },
  {
    field: "col2",
    headerName: "Currency",
    headerAlign: "left",
    align: "left",
    width: 150,
  },
  {
    field: "col3",
    headerName: "Size",
    headerAlign: "left",
    align: "left",
    width: 150,
  },
  {
    field: "col4",
    headerName: "Proceeds",
    headerAlign: "left",
    align: "left",
    width: 150,
  },
  {
    field: "col5",
    headerName: "Proceeds in USD",
    headerAlign: "left",
    align: "left",
    width: 150,
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
        Spot Margin Lends
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

export default function AccBalanceSpotMarginLendTable() {
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
