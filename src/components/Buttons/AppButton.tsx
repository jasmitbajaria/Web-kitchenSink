import React from "react";
import { Button as MUIButton, CircularProgress } from "@mui/material";

interface AppButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "text"
    | "outlined"
    | "contained";
  library?: "mui" | "bootstrap";
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  library = "mui",
  disabled = false,
  fullWidth = false,
  size = "medium",
  startIcon,
  endIcon,
  loading = false,
}) => {
  // ---------- MATERIAL UI BUTTON ----------
  if (library === "mui") {
    const isVariantType = variant === "outlined" || variant === "text" || variant === "contained";
    const muiVariant = isVariantType ? variant : "contained";

    // Custom color styles based on variant
    const getColorStyles = () => {
      if (isVariantType) return {};

      const colorMap = {
        primary: {
          backgroundColor: "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          "&:hover": {
            backgroundColor: "var(--button-primary-hover)",
          },
          "&:disabled": {
            backgroundColor: "var(--button-secondary-disable)",
            color: "var(--text-light)",
          },
        },
        secondary: {
          backgroundColor: "transparent",
          color: "var(--button-secondary-text)",
          border: "1px solid var(--button-secondary-border)",
          "&:hover": {
            backgroundColor: "var(--button-secondary-hover)",
            borderColor: "var(--button-secondary-border)",
          },
          "&:disabled": {
            borderColor: "var(--button-secondary-disable)",
            color: "var(--button-secondary-disable)",
          },
        },
        success: {
          backgroundColor: "var(--success-main)",
          color: "var(--text-light)",
          "&:hover": {
            backgroundColor: "#45a049",
          },
        },
        danger: {
          backgroundColor: "var(--error-main)",
          color: "var(--text-light)",
          "&:hover": {
            backgroundColor: "#da190b",
          },
        },
        warning: {
          backgroundColor: "var(--warning-main)",
          color: "var(--text-light)",
          "&:hover": {
            backgroundColor: "#e68900",
          },
        },
        info: {
          backgroundColor: "var(--info-main)",
          color: "var(--text-light)",
          "&:hover": {
            backgroundColor: "#0b7dda",
          },
        },
        light: {
          backgroundColor: "#f8f9fa",
          color: "#212529",
          "&:hover": {
            backgroundColor: "#e2e6ea",
          },
        },
        dark: {
          backgroundColor: "#343a40",
          color: "var(--text-light)",
          "&:hover": {
            backgroundColor: "#23272b",
          },
        },
      };

      return colorMap[variant] || colorMap.primary;
    };

    return (
      <MUIButton
        variant={muiVariant}
        onClick={onClick}
        disabled={disabled || loading}
        fullWidth={fullWidth}
        size={size}
        startIcon={loading ? <CircularProgress size={16} color="inherit" /> : startIcon}
        endIcon={endIcon}
        sx={{
          textTransform: "none",
          borderRadius: "8px",
          fontWeight: 500,
          ...getColorStyles(),
        }}
      >
        {label}
      </MUIButton>
    );
  }

  // ---------- BOOTSTRAP BUTTON ----------
  // const bootstrapClass = `btn btn-${variant} ${
  //   size === "small" ? "btn-sm" : size === "large" ? "btn-lg" : ""
  // } ${fullWidth ? "w-100" : ""} ${loading ? "disabled" : ""}`;

  // return (
  //   <button
  //     className={bootstrapClass}
  //     onClick={onClick}
  //     disabled={disabled || loading}
  //     type="button"
  //   >
  //     {loading && (
  //       <span 
  //         className="spinner-border spinner-border-sm me-2" 
  //         role="status" 
  //         aria-hidden="true"
  //       />
  //     )}
  //     {!loading && startIcon && <span className="me-1">{startIcon}</span>}
  //     {label}
  //     {endIcon && <span className="ms-1">{endIcon}</span>}
  //   </button>
  // );
};

export default AppButton;