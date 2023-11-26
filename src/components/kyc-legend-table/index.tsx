import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography } from "@mui/material";
import { NotStartedRing } from "../../icons/not-started-ring";
import { VerifiedTick } from "../../icons/verified-tick";
import { DocRequested } from "../../icons/doc-requested";
import { Unverified } from "../../icons/unverified";

/* The `const rows` is an array of objects that represents the data for the table rows in the
KYCLegendsTable component. Each object in the array represents a row in the table and contains three
properties: */
const rows = [
  {
    id: "not_started",
    elem: (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 1,
          minWidth: "150px",
        }}
      >
        <NotStartedRing width="1.5rem" />
        <Typography variant="body2">Not Started</Typography>
      </Box>
    ),
    desc: "Please click the link to begin the KYC process.",
  },
  {
    id: "verified",
    elem: (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 1,
          minWidth: "150px",
          marginTop: "-10px",
        }}
      >
        <VerifiedTick width="1.5rem" />
        <Typography variant="body2">Verified</Typography>
      </Box>
    ),
    desc: "Your documents have been processed and completed. If any additional\ninformation is required, a member of the FTX KYC Support team will reach out.",
  },
  {
    id: "unverified",
    elem: (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 1,
          minWidth: "150px",
        }}
      >
        <Unverified width="1.5rem" />
        <Typography variant="body2">Unverified</Typography>
      </Box>
    ),
    desc: "Your application failed KYC/AML checks and your claim is currently Unverified.",
  },
  {
    id: "processing",
    elem: (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 1,
          minWidth: "150px",
        }}
      >
        <Unverified width="1.5rem" />
        <Typography variant="body2">Processing</Typography>
      </Box>
    ),
    desc: "Your application is currently under review, please check back shortly.",
  },
  {
    id: "on_hold",
    elem: (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 1,
          minWidth: "150px",
          marginTop: "-30px",
        }}
      >
        <Unverified width="1.5rem" />
        <Typography variant="body2">On Hold</Typography>
      </Box>
    ),
    desc: "Your documents have been processed and are currently on hold. If any additional information is required, a member of the FTX KYC Support team will reach out.",
  },
  {
    id: "doc_requested",
    elem: (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 1,
          minWidth: "150px",
        }}
      >
        <DocRequested width="24px" />
        <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>{"Documents\nRequested"}</Typography>
      </Box>
    ),
    desc: "Please click the link to return to the KYC platform to upload additional requested documentation.",
  },
];

/* The `export default` statement is used to export a single function, object, or primitive value from
a module. In this case, it is exporting a function named `KYCLegendsTable` as the default export of
the module. */
export default function KYCLegendsTable() {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650, backgroundColor: "#1D1F2B" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "180px" }}>
              <Typography variant="body2" fontWeight="bold">
                KYC Status
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" fontWeight="bold">
                Explanation of Status
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.elem}
              </TableCell>
              <TableCell sx={{ whiteSpace: "pre-line" }}>{row.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
