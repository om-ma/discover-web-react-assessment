import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Link, Typography } from "@mui/material";
import { NotStartedRing } from "../../icons/not-started-ring";
import { Unverified } from "../../icons/unverified";
import { VerifiedTick } from "../../icons/verified-tick";
import { AttentionRing } from "../../icons/attention-ring";

/* The `rows` constant is an array of objects that define the data for each row in a table. Each object
represents a row in the table and contains the following properties: */
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
    desc: <>Please click the link to begin the claims process.</>,
  },
  {
    id: "claims_submitted",
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
        <Typography variant="body2">Claim(s) Submitted</Typography>
      </Box>
    ),
    desc: (
      <>
        Customers who have submitted a proof of claim via the Kroll portal.
        Customers who filed proofs of claim without logging in through the FTX
        portal will not see the status reflected herein. Please visit{" "}
        <Link href="https://restructuring.ra.kroll.com/ftx/">
          https://restructuring.ra.kroll.com/ftx/
        </Link>{" "}
        for additional information regarding your filed proof of claim.
      </>
    ),
  },
  {
    id: "agreed_scheduled_claims",
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
        <VerifiedTick width="2rem" />
        <Typography variant="body2">Agreed Scheduled Claim(s)</Typography>
      </Box>
    ),
    desc: (
      <>
        Customers who have agreed with the amounts or quantities set forth on
        the Debtors' Schedules as amended on June 27, 2023 via the Kroll portal
        and the schedule is not noted as contingent, disputed, and/or
        unliquidated.
      </>
    ),
  },
  {
    id: "needs_attention",
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
        <AttentionRing width="1.5rem" />
        <Typography variant="body2">Needs Attention</Typography>
      </Box>
    ),
    desc: (
      <Box
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography variant="body2">
          A notice the week of July 31 was emailed to customers who held claims
          reported on the FTX Debtor Amended Schedules as contingent,
          unliquidated, and/or disputed. These customers were previously able to
          agree to their scheduled claim in the Kroll claims platform in error.
          At the time the customer agreed to its respective scheduled claim, the
          Kroll claims platform did not provide these customers with this
          information that their claims were reported as contingent,
          unliquidated and/or disputed. That functionality on the platform is
          now operating to inform all customers if their scheduled claim is
          listed as contingent, unliquidated and/or disputed.
        </Typography>
        <Typography variant="body2">
          Customers with claims scheduled as contingent, unliquidated and/or
          disputed{" "}
          <strong>
            must file a proof of claim by{" "}
            <u>September 29, 2023, at 4:00 p.m., Eastern Time</u>.
          </strong>
        </Typography>
        <Typography variant="body2">
          The FTX Customer Claims Portal and the Kroll Portal will remain
          accessible after the Bar Date to amend or file a claim. Absent order
          from the U.S. Bankruptcy Court for the District of Delaware, any
          claims filed after the bar date may be disputed. KYC will also remain
          open for customers to complete and upload the requested documentation.
        </Typography>
      </Box>
    ),
  },
];

/* The `export default` statement is used to export the `ClaimLegendsTable` function as the default
export of the module. This means that when another module imports this module, it can import the
`ClaimLegendsTable` function using any name of its choice. */
export default function ClaimLegendsTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650, backgroundColor: "#1D1F2B" }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="body2" fontWeight="bold">
                Claim Status
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
              <TableCell
                component="th"
                scope="row"
                sx={{ verticalAlign: "top" }}
              >
                {row.elem}
              </TableCell>
              <TableCell>{row.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
