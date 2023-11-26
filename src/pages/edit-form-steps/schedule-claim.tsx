import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Button, FormLabel, List, Radio, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { InputField } from "../../components/input-field";

export const ScheduleClaim = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      alignItems={"center"}
    >
      <Box width={"100%"}>
        <Typography variant="h5">Schedule Claim Info</Typography>
        <Box>
          <Typography fontSize={"13px"} align="center" fontWeight={"bold"}>
            You have been redirected from FTX website, Please check your
            scheduled information below.
          </Typography>
          <Typography
            marginTop={"20px"}
            fontSize={"13px"}
            align="center"
            fontWeight={"bold"}
          >
            If you do not agree with any of 1 ,The Ammount or quanitity of flat
            coins or NFT, 2, The FTX Exhange against whom the Customet Claim is
            asserted: or 3, The type or nature of the Customer Claim set forth
            below, assert the quantity of flat or coins you held as of the date
            the case was filed in the rightmost column of the below charts.
          </Typography>
          <Typography
            marginTop={"20px"}
            fontSize={"13px"}
            align="center"
            fontWeight={"bold"}
          >
            You will also have an oppurtunity to add any NFT's not listed, Only
            Complete this section where you DISAGREE the component of your
            Scheduled Customer Claim, You will also have an oppurtunity to
            assert a Customer Claim arising out of or related to any other
            investment or trading activity.
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          gap={"10px"}
          marginTop={"40px"}
        >
          <FormLabel>Schedule</FormLabel>
          <InputField inputWidth="20rem" currentValue="F-19" />
        </Box>
        <Box>
          <Typography marginTop={"5px"} color={"gray"}>
            Debtor FTX Trading LTd, has ...
          </Typography>
          <Typography marginTop={"40px"} fontWeight={"bold"} fontSize={"13px"}>
            Provider information About the Customer Claim as of the date...
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"3px"}
            marginTop={"30px"}
            fontSize={"13px"}
          >
            <Box>
              <Radio /> FTX Trading LTD (d/b/a "FTX") ( Case No 22-11060)
            </Box>
            <Box>
              <Radio /> FTX EU Ltd (f/k/a K-DNA Financial Services Ltd d/b/a
              "FTX EU") (Case No 22-11166)
            </Box>
            <Box>
              <Radio /> FTX Japan K K (aka "FTX Japan") ( Case No 22-11102)
            </Box>
            <Box>
              <Radio /> Quoine Pte Ltd (d/b/a Liquid Global) ( Case No 22-11161)
            </Box>
            <Box>
              <Radio /> West Realm Shires Services Inc (d/b/a "FTX US") ( Case
              No 22-11071)
            </Box>
          </Box>
          <Typography marginTop={"20px"} fontWeight={"bold"} fontSize={"13px"}>
            List the quanity of each typr of cryptocurrency("Crypto") or flat
            curency("Flat") held in your account(s) as od November 11, 2022,
            List any Non-Fungible Tokens ( NFT's) held in your account(s) along
            with the unique identification code.
          </Typography>
          <List sx={{ fontSize: "13px" }}>
            <li>
              •&nbsp; Note that the "USD Rate" is the ratio of the Local
              Currency to US Dollars
            </li>
            <li>
              •&nbsp; If your Crypto or Flat were part of the peer-to-peer (P2P)
              margin lending program, please populate the Quantity column
            </li>
          </List>
        </Box>
        <Box marginTop={"40px"}>
          <Typography fontWeight={"bold"} fontSize={"16px"}>
            Fiat
          </Typography>
          <Typography fontSize={"14px"}>Asserted Quantity Fiat</Typography>

          <Box
            display={"grid"}
            gridTemplateColumns={"auto auto auto"}
            gap={"15px"}
            marginTop={"40px"}
          >
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <FormLabel sx={{ fontSize: "13px" }}>
                Flat(Ticker/ Abbreviation)
              </FormLabel>
              <InputField inputWidth="20rem" />
            </Box>
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <FormLabel sx={{ fontSize: "13px" }}>
                Total Scheduled Quantity or Flat(Local Currency)
              </FormLabel>
              <InputField inputWidth="20rem" />
            </Box>
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <FormLabel sx={{ fontSize: "13px" }}>
                If you dont agree, Please provider the Asserted Quantity of Fiat
                here
              </FormLabel>
              <InputField inputWidth="20rem" />
            </Box>
          </Box>
          <Box display={"flex"} marginTop={"20px"} gap={"15px"}>
            <Box display={"flex"} gap={"20px"}>
              <Box marginTop={"20px"}>
                <Typography fontWeight={"bold"} fontSize={"13px"}>
                  Do you agree with the Scheduled Quantity ?
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"3px"}
                  marginTop={"30px"}
                  fontSize={"13px"}
                >
                  <Box>
                    <Radio /> Yes
                  </Box>
                  <Box>
                    <Radio /> No
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} gap={"20px"}>
              <Box marginTop={"20px"}>
                <Typography fontWeight={"bold"} fontSize={"13px"}>
                  Do you want to add any other fiat not previously listed ?
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"3px"}
                  marginTop={"30px"}
                  fontSize={"13px"}
                >
                  <Box>
                    <Radio /> Yes
                  </Box>
                  <Box>
                    <Radio /> No
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box marginTop={"50px"}>
          <Typography fontWeight={"bold"} fontSize={"16px"}>
            Loaned Fiat
          </Typography>
          <Typography fontSize={"14px"}>Loaned Quantity Fiat</Typography>

          <Box
            display={"grid"}
            gridTemplateColumns={"auto auto auto"}
            gap={"15px"}
            marginTop={"40px"}
          >
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <FormLabel sx={{ fontSize: "13px" }}>
                Flat(Ticker/ Abbreviation)
              </FormLabel>
              <InputField inputWidth="20rem" />
            </Box>
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <FormLabel sx={{ fontSize: "13px" }}>
                Total Scheduled Quantity or Flat(Local Currency)
              </FormLabel>
              <InputField inputWidth="20rem" />
            </Box>
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <FormLabel sx={{ fontSize: "13px" }}>
                If you dont agree, Please provider the Loaned Quantity of Fiat
                here
              </FormLabel>
              <InputField inputWidth="20rem" />
            </Box>
          </Box>
          <Box display={"flex"} marginTop={"20px"} gap={"15px"}>
            <Box display={"flex"} gap={"20px"}>
              <Box marginTop={"20px"}>
                <Typography fontWeight={"bold"} fontSize={"13px"}>
                  Do you agree with the Scheduled Loaned Quantity ?
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"3px"}
                  marginTop={"30px"}
                  fontSize={"13px"}
                >
                  <Box>
                    <Radio /> Yes
                  </Box>
                  <Box>
                    <Radio /> No
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} gap={"20px"}>
              <Box marginTop={"20px"}>
                <Typography fontWeight={"bold"} fontSize={"13px"}>
                  Do you want to add any other fiat not previously listed ?
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"3px"}
                  marginTop={"30px"}
                  fontSize={"13px"}
                >
                  <Box>
                    <Radio /> Yes
                  </Box>
                  <Box>
                    <Radio /> No
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box marginTop={"50px"}>
          <Typography fontWeight={"bold"} fontSize={"16px"}>
            Asserted Crypto
          </Typography>
          <Typography fontSize={"14px"}>
            Asserted Quantity of Crypto Tokens
          </Typography>
          <table style={{ marginTop: "40px", width: "100%", fontSize: "13px" }}>
            <thead>
              <th style={{ textAlign: "left" }}>
                Crypto (Ticker / Abbreviation)
              </th>
              <th style={{ textAlign: "left" }}>
                Scheduled Quantity of Crypto
              </th>
              <th style={{ textAlign: "left" }}>
                Do you agree with the Scheduled Quantity?
              </th>
              <th style={{ textAlign: "left" }}>
                If you do not agree, Please provide the Asserted Quantity of
                Crypto here
              </th>
            </thead>
            <tbody>
              <tr>
                <td style={{ minWidth: "15rem" }}>
                  {" "}
                  <InputField inputWidth="100%" currentValue="TRX" />
                </td>
                <td style={{ minWidth: "15rem" }}>
                  {" "}
                  <InputField inputWidth="100%" currentValue="1.000000000" />
                </td>
                <td style={{ minWidth: "18rem" }}>
                  {" "}
                  <Box display={"flex"} gap={"3px"} fontSize={"13px"}>
                    <Box>
                      <Radio /> Yes
                    </Box>
                    <Box>
                      <Radio /> No
                    </Box>
                  </Box>
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: "15px", minWidth: "15rem" }}>
                  {" "}
                  <InputField inputWidth="100%" currentValue="USDT" />
                </td>
                <td style={{ paddingTop: "15px", minWidth: "15rem" }}>
                  {" "}
                  <InputField inputWidth="100%" currentValue="0.000000890" />
                </td>
                <td style={{ paddingTop: "15px", minWidth: "18rem" }}>
                  {" "}
                  <Box display={"flex"} gap={"3px"} fontSize={"13px"}>
                    <Box>
                      <Radio /> Yes
                    </Box>
                    <Box>
                      <Radio /> No
                    </Box>
                  </Box>
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: "15px", minWidth: "15rem" }}>
                  {" "}
                  <InputField inputWidth="100%" currentValue="BTC" />
                </td>
                <td style={{ paddingTop: "15px", minWidth: "15rem" }}>
                  {" "}
                  <InputField inputWidth="100%" currentValue="0.4366789678" />
                </td>
                <td style={{ paddingTop: "15px", minWidth: "18rem" }}>
                  {" "}
                  <Box display={"flex"} gap={"3px"} fontSize={"13px"}>
                    <Box>
                      <Radio /> Yes
                    </Box>
                    <Box>
                      <Radio /> No
                    </Box>
                  </Box>
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: "15px", minWidth: "15rem" }}>
                  {" "}
                  <InputField inputWidth="100%" currentValue="BNB" />
                </td>
                <td style={{ paddingTop: "15px", minWidth: "15rem" }}>
                  {" "}
                  <InputField inputWidth="100%" currentValue="1.083456789098" />
                </td>
                <td style={{ paddingTop: "15px", minWidth: "18rem" }}>
                  {" "}
                  <Box display={"flex"} gap={"3px"} fontSize={"13px"}>
                    <Box>
                      <Radio /> Yes
                    </Box>
                    <Box>
                      <Radio /> No
                    </Box>
                  </Box>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Box marginTop={"40px"}>
          <Typography fontWeight={"bold"} fontSize={"16px"}>
            Loaned Crypto
          </Typography>
          <Typography fontSize={"14px"}>Loaned Quantity of Crypto</Typography>

          <Box
            display={"grid"}
            gridTemplateColumns={"auto auto auto"}
            gap={"15px"}
            marginTop={"40px"}
          >
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <FormLabel sx={{ fontSize: "13px" }}>
                Crypto(Ticker/ Abbreviation)
              </FormLabel>
              <InputField inputWidth="20rem" />
            </Box>
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <FormLabel sx={{ fontSize: "13px" }}>
                Loaned Quantity of Crypto
              </FormLabel>
              <InputField inputWidth="20rem" />
            </Box>
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <FormLabel sx={{ fontSize: "13px" }}>
                If you dont agree, Please provide the Loaned Quantit here
              </FormLabel>
              <InputField inputWidth="20rem" />
            </Box>
          </Box>
          <Box display={"flex"} marginTop={"20px"} gap={"15px"}>
            <Box display={"flex"} gap={"20px"}>
              <Box marginTop={"20px"}>
                <Typography fontWeight={"bold"} fontSize={"13px"}>
                  Do you agree with the Scheduled Quantity ?
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"3px"}
                  marginTop={"30px"}
                  fontSize={"13px"}
                >
                  <Box>
                    <Radio /> Yes
                  </Box>
                  <Box>
                    <Radio /> No
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} gap={"20px"}>
              <Box marginTop={"20px"}>
                <Typography fontWeight={"bold"} fontSize={"13px"}>
                  Do you want to add any other coin not previously listed ?
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"3px"}
                  marginTop={"30px"}
                  fontSize={"13px"}
                >
                  <Box>
                    <Radio /> Yes
                  </Box>
                  <Box>
                    <Radio /> No
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box marginTop={"40px"}>
          <Typography fontWeight={"bold"} fontSize={"16px"}>
            NFT's
          </Typography>
          <Typography fontSize={"14px"}>NFT's(non-Fungible tokens)</Typography>

          <Box
            display={"grid"}
            gridTemplateColumns={"auto auto auto"}
            gap={"15px"}
            marginTop={"40px"}
          >
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <FormLabel sx={{ fontSize: "13px" }}>NFT Indentifier</FormLabel>
              <InputField inputWidth="20rem" />
            </Box>
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <FormLabel sx={{ fontSize: "13px" }}>
                If you dont agree, Please provide the NFT quantity here.
              </FormLabel>
              <InputField inputWidth="20rem" />
            </Box>
          </Box>
          <Box display={"flex"} marginTop={"20px"} gap={"15px"}>
            <Box display={"flex"} gap={"20px"}>
              <Box marginTop={"20px"}>
                <Typography fontWeight={"bold"} fontSize={"13px"}>
                  Do you agree with the data in NFT identifier ?
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"3px"}
                  marginTop={"30px"}
                  fontSize={"13px"}
                >
                  <Box>
                    <Radio /> Yes
                  </Box>
                  <Box>
                    <Radio /> No
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} gap={"20px"}>
              <Box marginTop={"20px"}>
                <Typography fontWeight={"bold"} fontSize={"13px"}>
                  Do you want to add any other NFT's not previously listed ?
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"3px"}
                  marginTop={"30px"}
                  fontSize={"13px"}
                >
                  <Box>
                    <Radio /> Yes
                  </Box>
                  <Box>
                    <Radio /> No
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box marginTop={"40px"}>
          <Typography fontWeight={"bold"} fontSize={"16px"}>
            Customer Claims related to any Other Activity on the FTX Exchanges
          </Typography>
          <Box marginTop={"20px"} maxWidth={"20rem"}>
            <Typography fontWeight={"bold"} fontSize={"13px"}>
              Do you have Customer Claims related to any other Activity on the
              FTX Exchanges? Other Activity would not include quantities of
              crypto, fiat or NFT's listed in Box 7 Above
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"3px"}
              marginTop={"30px"}
              fontSize={"13px"}
            >
              <Box>
                <Radio /> Yes
              </Box>
              <Box>
                <Radio /> No
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} alignItems="center" gap={"20px"}>
        <Link to={"/customer-claim-form/edit/"} replace>
          <Button
            sx={{
              backgroundColor: "#2589ce",
              padding: "10px 30px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "14px",
              color: "white",
              ":hover": {
                backgroundColor: "white",
                color: "black",
                boxShadow: "0px 0px 5px lightblue",
              },
            }}
          >
            <ArrowLeft sx={{ mr: 0.5 }} />
            Prev
          </Button>
        </Link>
        <Link to={"/customer-claim-form/edit/submission-info"} replace>
          <Button
            sx={{
              backgroundColor: "#2589ce",
              padding: "10px 30px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "14px",
              color: "white",
              ":hover": {
                backgroundColor: "white",
                color: "black",
                boxShadow: "0px 0px 5px lightblue",
              },
            }}
          >
            <ArrowRight sx={{ mr: 0.5 }} />
            Next
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
