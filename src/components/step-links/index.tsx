import Box from "@mui/material/Box/Box";
import routes, { TRoute } from "../../routes";
import StepLink from "../step-link";

export default function StepLinks() {
  return (
    <Box sx={{ py: 3 }}>
      {routes.map((item: TRoute) => {
        return <StepLink key={item.key} item={item} />;
      })}
    </Box>
  );
}
