import { Box, Typography } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DWRTooltip from "../../primitives/tooltip";
import { Empty } from "../../primitives/empty";

const rows: GridRowsProp = [];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Time", width: 120 },
  {
    field: "col2",
    headerName: "Market",
    width: 110,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col3",
    headerName: "Side",
    width: 110,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col4",
    headerName: "Order Type",
    width: 110,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col5",
    headerName: "Size",
    width: 110,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col6",
    headerName: "Price",
    width: 110,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col7",
    headerName: "Total",
    width: 110,
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
        Trades
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

export default function AccBalanceFillTable() {
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
