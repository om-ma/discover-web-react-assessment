import { Box, Typography } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DWRTooltip from "../../primitives/tooltip";
import { Empty } from "../../primitives/empty";

const rows: GridRowsProp = [
  {
    id: 1,
    col1: "11/10/2022, 8:41:07 AM",
    col2: "BNB",
    col3: "1.08819904 BNB (0.0005 BNB fee)",
    col4: "0x4464Fc38489B899e23988048cCDE470d11D5C",
  },
  {
    id: 2,
    col1: "11/10/2022, 8:35:57 AM",
    col2: "BTC",
    col3: "0.43647516 BTC",
    col4: "bc1qerc4rx9q6se66h0lwdn4174e052llye62x52h7",
  },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Time", width: 150 },
  {
    field: "col2",
    headerName: "Coin",
    width: 100,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "col3",
    headerName: "Amount",
    width: 100,
    headerAlign: "left",
    align: "right",
  },
  {
    field: "col4",
    headerName: "Destination",
    width: 350,
    headerAlign: "left",
    align: "left",
    renderCell: (params) => {
      return (
        <Typography variant="body2" color="#55adc8">
          {params.value}
        </Typography>
      );
    },
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
        Withdrawals
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

export default function AccBalanceWithdrawTable() {
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
        rowHeight={90}
      />
    </Box>
  );
}
