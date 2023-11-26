import { Tooltip } from "@mui/material";

export default function DWRTooltip({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) {
  return (
    <Tooltip title={title} placement="bottom" sx={{ borderRadius: "50px" }}>
      {children}
    </Tooltip>
  );
}
