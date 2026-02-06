import React from "react";
import { TextField as MUITextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local";
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  error?: boolean;
  helperText?: string;
  variant?: "outlined" | "filled" | "standard";
  multiline?: boolean;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false,
  required = false,
  fullWidth = false,
  size = "small",
  error = false,
  helperText,
  variant = "outlined",
  multiline = false,
  rows = 4,
}) => {
  // ---------- MATERIAL UI INPUT ----------
 
    return (
      <MUITextField
        label={label}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        fullWidth={fullWidth}
        size={size === "large" ? "medium" : size}
        error={error}
        helperText={helperText}
        variant={variant}
        multiline={multiline}
        rows={multiline ? rows : undefined}
      />
    );
  }

  // ---------- BOOTSTRAP INPUT ----------
  // const bootstrapClass = `form-control ${
  //   size === "small" ? "form-control-sm" : size === "large" ? "form-control-lg" : ""
  // } ${error ? "is-invalid" : ""}`;

  // return (
  //   <div className={fullWidth ? "w-100" : ""}>
  //     {label && (
  //       <label className="form-label">
  //         {label}
  //         {required && <span className="text-danger"> *</span>}
  //       </label>
  //     )}
  //     {multiline ? (
  //       <textarea
  //         className={bootstrapClass}
  //         value={value}
  //         onChange={()=>{}}
  //         placeholder={placeholder}
  //         disabled={disabled}
  //         required={required}
  //         rows={rows}
  //       />
  //     ) : (
  //       <input
  //         type={type}
  //         className={bootstrapClass}
  //         value={value}
  //         onChange={onChange}
  //         placeholder={placeholder}
  //         disabled={disabled}
  //         required={required}
  //       />
  //     )}
  //     {helperText && (
  //       <div className={error ? "invalid-feedback d-block" : "form-text"}>
  //         {helperText}
  //       </div>
  //     )}
  //   </div>
  // );

export default InputField;