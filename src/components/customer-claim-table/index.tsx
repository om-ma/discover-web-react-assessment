import * as React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";

function createData(
  created: string,
  modified: string,
  workflowStage: string,
  ftxEmail: string,
  ftxAccountId: string,
  scheduledId: string,
  scheduled: string,
  nonScheduled: string,
  creditorName: string,
  emailAddress: string,
  documentId: string,
  confirmationId: string
) {
  return {
    created,
    modified,
    workflowStage,
    ftxEmail,
    ftxAccountId,
    scheduledId,
    scheduled,
    nonScheduled,
    creditorName,
    emailAddress,
    documentId,
    confirmationId,
  };
}

const rows = [
  createData(
    "Oct 28",
    "Oct 28",
    "Scheduled",
    "discoverweb2023@gmail.com",
    "1254324322",
    "22567890456789",
    "F-19",
    "",
    "",
    "",
    "6789ad9n0nas3sn8121890ausa",
    "4567-cvbn-5678-vbnn"
  ),
  createData(
    "Oct 28",
    "Oct 28",
    "Scheduled",
    "discoverweb2023@gmail.com",
    "1254324322",
    "22567890456789",
    "F-19",
    "",
    "",
    "",
    "6789ad9n0nas3sn8121890ausa",
    "4567-cvbn-5678-vbnn"
  ),
];

export default function CustomerClaimTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <Checkbox />
            <TableCell sx={{ minWidth: "100px", p: "10px" }}>Created</TableCell>
            <TableCell sx={{ minWidth: "100px", p: "10px" }}>
              Modified
            </TableCell>
            <TableCell sx={{ minWidth: "250px", p: "10px" }}>
              Workflow Stage
            </TableCell>
            <TableCell sx={{ minWidth: "250px", p: "10px" }}>
              Ftx Email
            </TableCell>
            <TableCell sx={{ minWidth: "250px", p: "10px" }}>
              Ftx AccountId
            </TableCell>
            <TableCell sx={{ minWidth: "250px", p: "10px" }}>
              Scheculed Id
            </TableCell>
            <TableCell sx={{ minWidth: "150px", p: "10px" }}>
              Schedule
            </TableCell>
            <TableCell sx={{ minWidth: "250px", p: "10px" }}>
              Non Scheculed, Disputed Status
            </TableCell>
            <TableCell sx={{ minWidth: "250px", p: "10px" }}>
              Creditor Name
            </TableCell>
            <TableCell sx={{ minWidth: "250px", p: "10px" }}>
              Email Address
            </TableCell>
            <TableCell sx={{ minWidth: "250px", p: "10px" }}>
              Document Id
            </TableCell>
            <TableCell sx={{ minWidth: "250px", p: "10px" }}>
              Confirmation Id
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.created}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <Checkbox />
              <TableCell component="th" scope="row">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.created}
                </Link>
              </TableCell>
              <TableCell sx={{ p: "10px" }} align="left">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.modified}
                </Link>
              </TableCell>
              <TableCell sx={{ p: "10px" }} align="left">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.workflowStage}
                </Link>
              </TableCell>
              <TableCell sx={{ p: "10px" }} align="left">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.ftxEmail}
                </Link>
              </TableCell>
              <TableCell sx={{ p: "10px" }} align="left">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.ftxAccountId}
                </Link>
              </TableCell>
              <TableCell sx={{ p: "10px" }} align="left">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.scheduledId}
                </Link>
              </TableCell>
              <TableCell sx={{ p: "10px" }} align="left">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.scheduled}
                </Link>
              </TableCell>
              <TableCell sx={{ p: "10px" }} align="left">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.nonScheduled}
                </Link>
              </TableCell>
              <TableCell sx={{ p: "10px" }} align="left">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.creditorName}
                </Link>
              </TableCell>
              <TableCell sx={{ p: "10px" }} align="left">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.emailAddress}
                </Link>
              </TableCell>
              <TableCell sx={{ p: "10px" }} align="left">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.documentId}
                </Link>
              </TableCell>
              <TableCell sx={{ p: "10px" }} align="left">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="edit"
                >
                  {row.confirmationId}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
