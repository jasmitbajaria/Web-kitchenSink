import React from "react";
import { Box, Typography } from "@mui/material";

export interface ActionCardProps {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  icon: Icon,
  label,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 160,
        padding: 2.5,
        // borderRadius: "16px",
        backgroundColor: "#EEF3FB",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        cursor: onClick ? "pointer" : "default",
        transition: "all 0.25s ease",
        "&:hover": onClick
          ? {
              backgroundColor: "#E6ECF7",
              transform: "translateY(-2px)",
            }
          : {},
      }}
    >
      <Box
        sx={{
          width: 72,
          height: 72,
          borderRadius: "16px",
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 6px 16px rgba(0,0,0,0.08)",
        }}
      >
        <Icon sx={{ fontSize: 34, color: "#1D4ED8" }} />
      </Box>

      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: 500,
          color: "#1F2937",
          textAlign: "center",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default ActionCard;
