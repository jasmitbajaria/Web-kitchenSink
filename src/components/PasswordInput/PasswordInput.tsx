import React, { useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export interface PasswordInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label = "Password",
  value,
  placeholder = "Enter password",
  disabled = false,
  error = false,
  helperText,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      variant="outlined"              // IMPORTANT
      fullWidth
      type={showPassword ? "text" : "password"}
      label={label}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      helperText={helperText}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleToggle}
              edge="end"
              disabled={disabled}
              aria-label="toggle password visibility"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
