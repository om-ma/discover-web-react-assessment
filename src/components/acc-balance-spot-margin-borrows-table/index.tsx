import { Box, Typography } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DWRTooltip from "../../primitives/tooltip";
import { Empty } from "../../primitives/empty";
import DateRangeIcon from "@mui/icons-material/DateRange";

const rows: GridRowsProp = [];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Time", width: 160 },
  {
    field: "col2",
    headerName: "Currency",
    headerAlign: "left",
    align: "left",
    width: 160,
  },
  {
    field: "col3",
    headerName: "Borrow Size",
    headerAlign: "left",
    align: "left",
    width: 160,
  },
  {
    field: "col4",
    headerName: "Borrow Cost",
    headerAlign: "left",
    align: "left",
    width: 160,
  },
  {
    field: "col5",
    headerName: "Cost in USD",
    headerAlign: "left",
    align: "left",
    width: 160,
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
        Spot Margin Borrows
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

export default function AccBalanceSpotMarginBorrowTable() {
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
