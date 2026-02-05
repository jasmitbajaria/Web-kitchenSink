import React from "react";
import { TextField } from "@mui/material";

export interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  rows = 4,
  disabled = false,
  error = false,
  helperText,
  onChange,
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      multiline
      rows={rows}
      disabled={disabled}
      error={error}
      helperText={helperText}
      fullWidth
      onChange={onChange}
    />
  );
};

export default TextArea;
