import React, { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export interface FlushAccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AppFlushAccordionProps {
  items: FlushAccordionItem[];
  defaultOpenIndex?: number;
}

const AppFlushAccordion: React.FC<AppFlushAccordionProps> = ({
  items,
  defaultOpenIndex = 0,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex
  );

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #dee2e6",
        borderRadius: 1,
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <Box key={index} sx={{ width: "100%" }}>
            {/* HEADER */}
            <Box
              onClick={() => toggle(index)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                height: 56,
                cursor: "pointer",
                backgroundColor: isOpen ? "#e7f1ff" : "#fff",
                borderBottom: "1px solid #dee2e6",
              }}
            >
              <Typography fontWeight={500}>
                {item.title}
              </Typography>

              <Box
                sx={{
                  width: 24,
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <KeyboardArrowDownIcon
                  sx={{
                    transform: isOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "0.2s",
                  }}
                />
              </Box>
            </Box>

            {/* CONTENT */}
            <Collapse
              in={isOpen}
              timeout={250}
              sx={{
                width: "100%",
                "& .MuiCollapse-wrapper": {
                  width: "100%",
                },
                "& .MuiCollapse-wrapperInner": {
                  width: "100%",
                },
              }}
            >
              <Box sx={{ px: 2, py: 2 }}>
                {item.content}
              </Box>
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
};

export default AppFlushAccordion;
