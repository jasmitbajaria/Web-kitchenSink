
import React from "react";
import {
  Checkbox as MUICheckbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  size?: "small" | "medium";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
  helperText?: string;
  error?: boolean;
  required?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  indeterminate = false,
  size = "medium",
  color = "primary",
  helperText,
  error = false,
  required = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  const checkboxElement = (
    <MUICheckbox
      checked={checked}
      onChange={handleChange}
      disabled={disabled}
      indeterminate={indeterminate}
      size={size}
      color={color}
      required={required}
      sx={{
        "&.MuiCheckbox-root": {
          color: error ? "var(--error-main)" : undefined,
        },
      }}
    />
  );

  if (!label && !helperText) {
    return checkboxElement;
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={checkboxElement}
        label={label}
        sx={{
          "& .MuiFormControlLabel-label": {
            color: error ? "var(--error-main)" : "var(--text-primary)",
            fontSize: size === "small" ? "0.875rem" : "1rem",
          },
        }}
      />
      {helperText && (
        <FormHelperText error={error} sx={{ marginLeft: "32px" }}>
          {helperText}
        </FormHelperText>
      )}
    </FormGroup>
  );
};

export default Checkbox; 