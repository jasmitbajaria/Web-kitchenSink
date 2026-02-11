import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Divider,
  Tooltip,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  children?: { label: string }[];
}

export interface SideNavBarProps {
  items: SidebarItem[];
  logoSrc?: string;
  companyName?: string;
}

const SideNavBar: React.FC<SideNavBarProps> = ({
  items,
  logoSrc,
  companyName,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = (index: number) => {
    if (!isCollapsed) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
    setOpenIndex(null); // Close all dropdowns when collapsing
  };

  return (
    <Box
      sx={{
        width: isCollapsed ? 80 : 280,
        bgcolor: "#fff", 
        color: "#080808",
        height: "100vh",
        transition: "width 0.2s ease-in-out",
        overflow: "hidden",
        position: "relative",
        borderRight: "1px solid #f1f1f1",
      }}
    >
      {/* Header with Logo and Toggle Button */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: isCollapsed ? "center" : "space-between",
          minHeight: 70,
        }}
      >
        {!isCollapsed && (logoSrc || companyName) && (
          <Box>
            {logoSrc && (
              <img
                src={logoSrc}
                alt="Company Logo"
                style={{
                  height: 50,
                  maxWidth: 150,
                  objectFit: "contain",
                  cursor: "pointer",
                }}
              />
            )}
            {companyName && (
              <Typography fontWeight={600} fontSize={18}>
                {companyName}
              </Typography>
            )}
          </Box>
        )}
        <IconButton
          onClick={handleCollapseToggle}
          sx={{
            "&:hover": {
              backgroundColor: "#f9fafb",
            },
          }}
        >
          {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>

      <Divider sx={{ opacity: 0.5 }} />

      {/* Menu Items */}
      <Box sx={{ px: isCollapsed ? 1 : 2, py: 2 }}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <Box key={index} sx={{ mb: 1 }}>
              {/* Parent Item */}
              <Tooltip title={isCollapsed ? item.label : ""} placement="right">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={isCollapsed ? "center" : "space-between"}
                  py={1.5}
                  px={isCollapsed ? 0 : 1}
                  sx={{
                    cursor: "pointer",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#f9fafb",
                    },
                  }}
                  onClick={() => item.children && handleToggle(index)}
                >
                  <Box 
                    display="flex" 
                    alignItems="center" 
                    gap={1.5}
                    justifyContent={isCollapsed ? "center" : "flex-start"}
                    width="100%"
                  >
                    <Box sx={{ display: "flex", minWidth: isCollapsed ? "auto" : 40, justifyContent: "center" }}>
                      {item.icon}
                    </Box>
                    {!isCollapsed && (
                      <Typography fontWeight={500} fontSize="0.95rem" color="#1a1a1a">
                        {item.label}
                      </Typography>
                    )}
                  </Box>

                  {!isCollapsed && item.children && (
                    <IconButton size="small">
                      <KeyboardArrowDownIcon
                        sx={{
                          transform: isOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "0.2s",
                          color: "#000000"
                        }}
                      />
                    </IconButton>
                  )}
                </Box>
              </Tooltip>

              {/* Sub Items */}
              {!isCollapsed && item.children && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <Box pl={4} py={0.5}>
                    {item.children.map((child, i) => (
                      <Typography
                        key={i}
                        py={0.8}
                        fontSize={14}
                        sx={{
                          cursor: "pointer",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {child.label}
                      </Typography>
                    ))}
                  </Box>
                </Collapse>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SideNavBar;