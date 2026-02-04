import React, { useState } from "react";
import { Box, Typography, Avatar, Modal } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export interface MediaCardProps {
  thumbnail: string;
  title: string;
  channelName: string;
  channelLogo?: string;
  videoId: string;
  onClick?: () => void;
}

const MediaCard: React.FC<MediaCardProps> = ({
  thumbnail,
  title,
  channelName,
  channelLogo,
  videoId,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <Box
        sx={{
          padding: "30px",
          borderRadius: "20px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
          width: 304,
        }}
      >
       
        <Box
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
            cursor: "pointer",
            transition: "all 0.25s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0px 10px 28px rgba(0,0,0,0.12)",
            },
          }}
        >
          {/* TOP CHANNEL BAR */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 12px",
              backgroundColor: "#000",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar src={channelLogo} sx={{ width: 35, height: 35 }} />

              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#fff",
                  fontWeight: 500,
                  maxWidth: 160,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {channelName}
              </Typography>
            </Box>

            <MoreVertIcon sx={{ color: "#fff" }} />
          </Box>

          {/* VIDEO THUMBNAIL */}
          <Box
            sx={{
              position: "relative",
              height: 300,
              backgroundImage: `url(${thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
           
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.25)",
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  backgroundColor: "#FF0000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 0,
                    height: 0,
                    borderTop: "9px solid transparent",
                    borderBottom: "9px solid transparent",
                    borderLeft: "16px solid #fff",
                    marginLeft: "4px",
                  }}
                />
              </Box>
            </Box>
          </Box>

          
          <Box sx={{ padding: "14px 12px" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                color: "#1F2937",
                lineHeight: 1.4,
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </Box>

      
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 900,
            bgcolor: "#000",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </Box>
      </Modal>
    </>
  );
};

export default MediaCard;
