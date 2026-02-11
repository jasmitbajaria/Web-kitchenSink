import React from "react";
import { Button as MUIButton, CircularProgress } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?:
    | "text"
    | "outlined"
    | "contained";

  colorVariant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  // library?: "mui" | "bootstrap";
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "contained",
  colorVariant = "primary",
  // library = "mui",
  disabled = false,
  fullWidth = false,
  size = "medium",
  startIcon,
  endIcon,
  loading = false,
}) => {
  // ---------- MATERIAL UI BUTTON ----------

  // Custom color styles based on colorVariant and variant
  const getColorStyles = () => {
    const colorMap = {
      primary: {
        contained: {
          backgroundColor: "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          "&:hover": {
            backgroundColor: "var(--button-primary-hover)",
          },
        },
        outlined: {
          color: "var(--button-primary-bg)",
          borderColor: "var(--button-primary-bg)",
          "&:hover": {
            backgroundColor: "var(--button-primary-hover-light)",
            borderColor: "var(--button-primary-hover)",
          },
        },
        text: {
          color: "var(--button-primary-bg)",
          "&:hover": {
            backgroundColor: "var(--button-primary-hover-light)",
          },
        },
      },
      secondary: {
        contained: {
          backgroundColor: "var(--button-secondary-bg)",
          color: "var(--button-secondary-text)",
          border: "1px solid var(--button-secondary-border)",
          "&:hover": {
            backgroundColor: "var(--button-secondary-hover)",
            borderColor: "var(--button-secondary-border)",
          },
        },
        outlined: {
          color: "var(--button-secondary-text)",
          borderColor: "var(--button-secondary-border)",
          "&:hover": {
            backgroundColor: "var(--button-secondary-hover)",
          },
        },
        text: {
          color: "var(--button-secondary-text)",
          "&:hover": {
            backgroundColor: "var(--button-secondary-hover)",
          },
        },
      },
      success: {
        contained: {
          backgroundColor: "var(--success-main)",
          color: "var(--text-light)",
          "&:hover": {
            backgroundColor: "var(--success-hover)",
          },
        },
        outlined: {
          color: "var(--success-main)",
          borderColor: "var(--success-main)",
          "&:hover": {
            backgroundColor: "var(--success-light)",
          },
        },
        text: {
          color: "var(--success-main)",
          "&:hover": {
            backgroundColor: "var(--success-light)",
          },
        },
      },
      danger: {
        contained: {
          backgroundColor: "var(--error-main)",
          color: "var(--text-light)",
          "&:hover": {
            backgroundColor: "var(--error-hover)",
          },
        },
        outlined: {
          color: "var(--error-main)",
          borderColor: "var(--error-main)",
          "&:hover": {
            backgroundColor: "var(--error-light)",
          },
        },
        text: {
          color: "var(--error-main)",
          "&:hover": {
            backgroundColor: "var(--error-light)",
          },
        },
      },
      warning: {
        contained: {
          backgroundColor: "var(--warning-main)",
          color: "var(--text-light)",
          "&:hover": {
            backgroundColor: "var(--warning-hover)",
          },
        },
        outlined: {
          color: "var(--warning-main)",
          borderColor: "var(--warning-main)",
          "&:hover": {
            backgroundColor: "var(--warning-light)",
          },
        },
        text: {
          color: "var(--warning-main)",
          "&:hover": {
            backgroundColor: "var(--warning-light)",
          },
        },
      },
      info: {
        contained: {
          backgroundColor: "var(--info-main)",
          color: "var(--text-light)",
          "&:hover": {
            backgroundColor: "var(--info-hover)",
          },
        },
        outlined: {
          color: "var(--info-main)",
          borderColor: "var(--info-main)",
          "&:hover": {
            backgroundColor: "var(--info-light)",
          },
        },
        text: {
          color: "var(--info-main)",
          "&:hover": {
            backgroundColor: "var(--info-light)",
          },
        },
      },
      light: {
        contained: {
          backgroundColor: "var(--button-light-bg)",
          color: "var(--button-light-text)",
          "&:hover": {
            backgroundColor: "var(--button-light-hover)",
          },
        },
        outlined: {
          color: "var(--button-light-text)",
          borderColor: "var(--button-light-bg)",
          "&:hover": {
            backgroundColor: "var(--button-light-bg)",
          },
        },
        text: {
          color: "var(--button-light-text)",
          "&:hover": {
            backgroundColor: "var(--button-light-bg)",
          },
        },
      },
      dark: {
        contained: {
          backgroundColor: "var(--button-dark-bg)",
          color: "var(--button-dark-text)",
          "&:hover": {
            backgroundColor: "var(--button-dark-hover)",
          },
        },
        outlined: {
          color: "var(--button-dark-bg)",
          borderColor: "var(--button-dark-bg)",
          "&:hover": {
            backgroundColor: "rgba(52, 58, 64, 0.04)",
          },
        },
        text: {
          color: "var(--button-dark-bg)",
          "&:hover": {
            backgroundColor: "rgba(52, 58, 64, 0.04)",
          },
        },
      },
    };

    return colorMap[colorVariant]?.[variant] || colorMap.primary[variant];
  };

  return (
    <MUIButton
      variant={variant}
      onClick={onClick}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      size={size}
      startIcon={
        loading ? <CircularProgress size={16} color="inherit" /> : startIcon
      }
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
};

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


export default Button;
