import React, { useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type NotificationType = "info" | "success" | "warning" | "error";

interface NotificationTabProps {
  title?: string;
  message?: string;
  type?: NotificationType;
  autoShow?: boolean; 
}

const toastColors: Record<NotificationType, string> = {
  info: "#3498db",
  success: "#2ecc71",
  warning: "#f1c40f",
  error: "#e74c3c",
};

const NotificationTab: React.FC<NotificationTabProps> = ({
  title = "Notification",
  message = "Lorem ipsum dolor",
  type = "info",
  autoShow = false,
}) => {
  const showToast = () => {
    toast(message, {
      position: "top-right",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: toastColors[type],
        color: type === "warning" ? "#000" : "#fff",
        borderRadius: "6px",
        padding: "14px 16px",
        fontWeight: 500,
      },
    //   progressStyle: {
    //     background:
    //       type === "warning" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.7)",
    //   },
    });
  };

  useEffect(() => {
    if (autoShow) {
      showToast();
    }
  }, [autoShow, type, message]);

  return (
    <Box width="320px">
      {/* <Typography fontWeight={600} mb={1}>
        {title}
      </Typography> */}

      <Stack spacing={1}>
        {!autoShow && (
          <Button
            onClick={showToast}
            sx={{
              width: "70%",
              height: 44,
              backgroundColor: "#F5F7FA",
              color: "#1F2937",
              border: "1px solid #e5e9eb",
              borderRadius: "5px",
              fontSize: "15px",
              fontWeight: 500,
              textTransform: "none",
              boxShadow: "none",

              "&:hover": {
                backgroundColor: "#EEF2F7",
                borderColor: "#D1D5DB",
                boxShadow: "none",
              },

              "&:active": {
                backgroundColor: "#E5E7EB",
              },

              "&:disabled": {
                backgroundColor: "#F9FAFB",
                color: "#9CA3AF",
                borderColor: "#E5E7EB",
              },
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} Notification
          </Button>
        )}
      </Stack>

      <ToastContainer />
    </Box>
  );
};

export default NotificationTab;
