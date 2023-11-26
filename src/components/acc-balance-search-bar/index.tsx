import { useRef, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export default function AccBalanceSearchBar() {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <OutlinedInput
        inputRef={inputRef}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#000" }} />
          </InputAdornment>
        }
        placeholder="Search"
      />
    </FormControl>
  );
}
