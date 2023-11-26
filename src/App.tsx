import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DARK_MODE_THEME } from "./styles/constants";
import { getAppTheme } from "./styles/theme";
import { Main } from "./pages/main";

import routes, { auth, customerClaimForm, TRoute } from "./routes";
import Verification from "./pages/verification";
import { NotFound } from "./pages/not-found";
import { CustomerClaimForm } from "./pages/customer-claim-form";
import { FormTable } from "./pages/form-table";
import { EditForm } from "./pages/edit-form";
import { FtxDetails } from "./pages/edit-form-steps/ftx-details";
import { SubmitInformation } from "./pages/edit-form-steps/submit-info";
import { ScheduleClaim } from "./pages/edit-form-steps/schedule-claim";

/**
 * The addRoute function takes a route object, extracts the component, and returns a Route element with
 * the component wrapped in a Box element.
 * @param {TRoute} route - The `route` parameter is of type `TRoute`.
 * @returns The function `addRoute` returns a JSX element.
 */
// const addRoute =

/**
 * The App function returns a React component that sets up the theme, routing, and layout for a web
 * application.
 * @returns The App component is returning a JSX structure that includes a ThemeProvider,
 * BrowserRouter, CssBaseline, Box, Grid, NavBar, StepLinks, and Routes components.
 */
function App() {
  const theme = getAppTheme(DARK_MODE_THEME);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "#0B0E16",
          }}
        >
          <Routes>
            <Route path="/" element={<Main />}>
              {routes.map((route: TRoute) => {
                const Component = route.component;
                const isFirstStep = route.key === auth;
                const isLastStep = route.key === customerClaimForm;
                const Comp = (
                  <Box
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "#1D1F2B",
                      p: 1,
                      mb: 10,
                      width: "800px",
                    }}
                  >
                    <Component />
                  </Box>
                );

                if (!route.key) return <></>;

                if (isFirstStep || isLastStep) {
                  return <></>;
                }

                return (
                  <Route
                    id={route.key}
                    key={route.key}
                    path={route.path}
                    element={Comp}
                  />
                );
              })}
            </Route>
            <Route
              path="/idensic-verification-123456"
              element={<Verification />}
            />
            <Route path="/customer-claim-form" element={<CustomerClaimForm />}>
              <Route path="" element={<FormTable />} />
              <Route path="edit" element={<EditForm />}>
                <Route path="" element={<FtxDetails />} />
                <Route path="schedule-claim" element={<ScheduleClaim />} />
                <Route path="submission-info" element={<SubmitInformation />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
