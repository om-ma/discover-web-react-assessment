import { Button } from "@mui/material";

const colorMap: { [key: string]: string } = {
  "custom-secondary": "#464c5d",
  "custom-primary": "#008daa",
};

export default function DWRButton({
  children,
  variant = "custom-primary",
  isLoading,
  clickFn,
}: {
  children: JSX.Element;
  isLoading: boolean;
  variant?: string;
  clickFn: () => void;
}) {
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      onClick={clickFn}
      sx={{
        height: 50,
        borderRadius: "10px",
        ...(isLoading
          ? { backgroundColor: "#1c1f2a" }
          : { backgroundColor: colorMap[variant] }),
        ":hover": {
          ...(isLoading
            ? { backgroundColor: "#1c1f2a" }
            : { backgroundColor: colorMap[variant] }),
        },
      }}
    >
      {children}
    </Button>
  );
}
