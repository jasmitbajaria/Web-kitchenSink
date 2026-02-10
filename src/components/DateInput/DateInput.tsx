import React from "react";

export type DateInputProps = {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  min?: string;
  max?: string;
};

const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
  required,
  disabled,
  error,
  helperText,
  min,
  max,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {label && (
        <label style={{ fontSize: "13px", fontWeight: 500 }}>
          {label}
          {required && <span style={{ color: "#dc2626" }}> *</span>}
        </label>
      )}

      <input
        type="date"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        min={min}
        max={max}
        style={{
          height: "32px",
          lineHeight: "32px",
          padding: "0 8px",
          paddingRight: "36px",
          fontSize: "13px",
          borderRadius: "6px",
          border: error ? "1px solid #dc2626" : "1px solid #d1d5db",
          backgroundColor: disabled ? "#f3f4f6" : "#ffffff",
          outline: "none",
          boxSizing: "border-box",
          width: "240px"
        }}
      />

      {helperText && (
        <span style={{ fontSize: "11px", color: error ? "#dc2626" : "#6b7280" }}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default DateInput;
