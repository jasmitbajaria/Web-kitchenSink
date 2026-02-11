import React from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export interface AppSearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const searchField: React.FC<AppSearchFieldProps> = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
  return (
    <TextField
      fullWidth
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: value && (
          <InputAdornment position="end">
            <IconButton size="small" onClick={() => onChange("")}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
        },
      }}
    />
  );
};

export default searchField;
