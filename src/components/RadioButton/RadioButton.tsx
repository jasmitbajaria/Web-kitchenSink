import React from "react";
import {
  Radio as MUIRadio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  FormHelperText,
} from "@mui/material";

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioButtonProps {
  label?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  row?: boolean;
  size?: "small" | "medium";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  required = false,
  error = false,
  helperText,
  row = false,
  size = "medium",
  color = "primary",
}) => {
  // Custom color styles based on color prop
  const getColorStyles = () => {
    const colorMap = {
      primary: {
        color: "var(--button-primary-bg)",
        "&.Mui-checked": {
          color: "var(--button-primary-bg)",
        },
      },
      secondary: {
        color: "var(--button-secondary-text)",
        "&.Mui-checked": {
          color: "var(--button-secondary-text)",
        },
      },
      success: {
        color: "var(--success-main)",
        "&.Mui-checked": {
          color: "var(--success-main)",
        },
      },
      error: {
        color: "var(--error-main)",
        "&.Mui-checked": {
          color: "var(--error-main)",
        },
      },
      warning: {
        color: "var(--warning-main)",
        "&.Mui-checked": {
          color: "var(--warning-main)",
        },
      },
      info: {
        color: "var(--info-main)",
        "&.Mui-checked": {
          color: "var(--info-main)",
        },
      },
    };

    return colorMap[color] || colorMap.primary;
  };

  return (
    <FormControl
      component="fieldset"
      error={error}
      required={required}
      disabled={disabled}
    >
      {label && (
        <FormLabel
          component="legend"
          sx={{
            color: error ? "var(--error-main)" : "var(--text-primary)",
            "&.Mui-focused": {
              color: error ? "var(--error-main)" : "var(--button-primary-bg)",
            },
          }}
        >
          {label}
        </FormLabel>
      )}
      <RadioGroup row={row} value={value} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <MUIRadio
                size={size}
                disabled={option.disabled || disabled}
                sx={getColorStyles()}
              />
            }
            label={option.label}
            sx={{
              "& .MuiFormControlLabel-label": {
                color: "var(--text-primary)",
                fontSize: size === "small" ? "0.875rem" : "1rem",
              },
              "& .MuiFormControlLabel-label.Mui-disabled": {
                color: "var(--text-muted)",
              },
            }}
          />
        ))}
      </RadioGroup>
      {helperText && (
        <FormHelperText
          sx={{
            color: error ? "var(--error-main)" : "var(--text-secondary)",
          }}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default RadioButton;