import { useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

export default function AccBalanceSearchField({
  value,
  enableSearch,
  setEnableSearch,
  handleClear,
  handleSearch,
}: any) {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [enableSearch]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 1,
      }}
    >
      <SearchIcon />
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 1 }}>
        <TextField
          value={value}
          inputRef={inputRef}
          variant="standard"
          onChange={handleSearch}
        />
        <IconButton
          aria-label="close search"
          onClick={() => {
            setEnableSearch(!enableSearch);
            handleClear();
          }}
        >
          <ClearIcon
            sx={{
              ":hover": {
                color: "red",
              },
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
