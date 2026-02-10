import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  children?: { label: string }[];
}

export interface SideNavBarProps {
  items: SidebarItem[];
}

const SideNavBar: React.FC<SideNavBarProps> = ({
  items,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#2b80d9", // your screenshot color
        color: "#f1f5ff",
        p: 2,
        height: "100vh",
      }}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <Box key={index}>
            {/* Parent Item */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              py={1.5}
              px={1}
              sx={{
                cursor: "pointer",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.05)",
                },
              }}
              onClick={() => item.children && handleToggle(index)}
            >
              <Box display="flex" alignItems="center" gap={1.5}>
                {item.icon}
                <Typography fontWeight={500}>
                  {item.label}
                </Typography>
              </Box>

              {item.children && (
                <IconButton size="small">
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: isOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "0.2s",
                      color: "#f1f5ff"
                    }}
                  />
                </IconButton>
              )}
            </Box>

            {/* Sub Items */}
            {item.children && (
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
  );
};

export default SideNavBar;

