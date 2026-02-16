import React from "react";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectInputProps = {
  label?: string;
  value?: string;
  options: SelectOption[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
};

const Dropdown: React.FC<SelectInputProps> = ({
  label,
  value,
  options,
  onChange,
  required,
  disabled,
  error,
  helperText,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {label && (
        <label style={{ fontSize: "13px", fontWeight: 500 }}>
          {label}
          {required && <span style={{ color: "#dc2626" }}> *</span>}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{
          height: "32px",
          lineHeight: "32px",
          padding: "0 8px",
          fontSize: "13px",
          borderRadius: "6px",
          border: error ? "1px solid #dc2626" : "1px solid #d1d5db",
          backgroundColor: disabled ? "#f3f4f6" : "#ffffff",
          outline: "none",
          boxSizing: "border-box",
          cursor: disabled ? "not-allowed" : "pointer",
          width: "240px"
        }}
      >
        <option value="">Select option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {helperText && (
        <span style={{ fontSize: "11px", color: error ? "#dc2626" : "#6b7280" }}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Dropdown;
