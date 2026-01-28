import { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CardActionArea,
  // Divider,
  Stack,
  // Paper,
  // IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  SmartButton as ButtonIcon,
  Input as InputIcon,
  TableChart as TableIcon,
  ModelTraining as ModalIcon,
  Lock as LockIcon,
  // ContentCopy as CopyIcon,
} from "@mui/icons-material";



const componentCards = [
  {
    title: "Buttons",
    path: "/buttons",
    icon: <ButtonIcon sx={{ fontSize: 40, color: "#667eea" }} />,
    description: "Explore various button styles and interactions",
  },
  {
    title: "Inputs",
    path: "/inputs",
    icon: <InputIcon sx={{ fontSize: 40, color: "#06b6d4" }} />,
    description: "Text inputs, checkboxes, and select components",
  },
  {
    title: "Authentication",
    path: "/authentication",
    icon: <LockIcon sx={{ fontSize: 40, color: "#469b35" }} />,
    description: "Authentication components - Login card, verify-OTP, etc",
  },
  {
    title: "Data Table",
    path: "/datatable",
    icon: <TableIcon sx={{ fontSize: 40, color: "#f59e0b" }} />,
    description: "Advanced data tables with sorting and filtering",
  },
  {
    title: "Modals",
    path: "/modals",
    icon: <ModalIcon sx={{ fontSize: 40, color: "#ef4444" }} />,
    description: "Dialog boxes and modal windows",
  },
];

function Home() {
  const navigate = useNavigate();
  // const [copied, setCopied] = useState<boolean>(false);

  // const installCommand =
  //   "npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom";

  // const handleCopy = (): void => {
  //   navigator.clipboard.writeText(installCommand);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          background: `
            radial-gradient(
              circle at top center,
              rgba(203, 227, 255, 0.53),
              transparent 50%
            ),
            linear-gradient(
              180deg,
              #ffffff 0%,
              #e5e8f3 100%
            )
          `,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          {/* Hero Section */}
          <Box
            sx={{
              textAlign: "center",
              py: 6,
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 300,
                mb: 2,
                color: "#1a1a1a",
                letterSpacing: "-0.02em",
              }}
            >
              Components
             </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                fontWeight: 400,
                color: "#6b7280",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              A comprehensive collection of reusable React components
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Typography
                variant="caption"
                sx={{ color: "#9ca3af", fontWeight: 500 }}
              >
                React 19
              </Typography>
              <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                •
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#9ca3af", fontWeight: 500 }}
              >
                Material UI 7
              </Typography>
              <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                •
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#9ca3af", fontWeight: 500 }}
              >
                Vite
              </Typography>
            </Stack>
          </Box>

          {/* Installation Section */}
          {/* <Paper
            elevation={2}
            sx={{
              p: 3,
              mb: 3,
              maxWidth: "75%",
              mx: "auto",
              backgroundColor: "#ffffff00",
              color: "#1a1a1a",
              borderRadius: "12px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 500, color: "#1a1a1a" }}
            >
              Quick Start - Installation
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#7a7a7a52",
                p: 1,
                borderRadius: "8px",
                fontFamily: "monospace",
                fontSize: "0.9rem",
              }}
            >
              <code style={{ flex: 1, color: "#444444" }}>
                {installCommand}
              </code>
              <IconButton
                onClick={handleCopy}
                sx={{
                  color: copied ? "#10b981" : "#444444",
                  ml: 2,
                }}
                size="small"
              >
                <CopyIcon fontSize="small" />
              </IconButton>
            </Box>
            {copied && (
              <Typography
                variant="caption"
                sx={{ color: "#10b981", mt: 1, display: "block" }}
              >
                ✓ Copied to clipboard!
              </Typography>
            )}
          </Paper>

          <Divider sx={{ mb: 5, opacity: 0.1 }} /> */}

          {/* Component Categories Grid */}
          <Grid container spacing={3}>
            {componentCards.map((card) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={card.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    cursor: "pointer",
                    borderRadius: "20px",
                    border: "1px solid #f1f1f1",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#e5e7eb",
                      boxShadow: "0 15px 15px rgba(84, 138, 238, 0.6)",
                    },
                  }}
                >
                  <CardActionArea
                    sx={{ height: "100%" }}
                    onClick={() => navigate(card.path)}
                  >
                    <CardContent
                      sx={{
                        textAlign: "center",
                        py: 5,
                        px: 3,
                      }}
                    >
                      <Box sx={{ mb: 2 }}>{card.icon}</Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 500,
                          color: "#1a1a1a",
                          mb: 1.5,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6b7280",
                          lineHeight: 1.6,
                        }}
                      >
                        {card.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Footer Section */}
          <Box
            sx={{
              textAlign: "center",
              mt: 12,
              py: 4,
            }}
          >
            <Typography variant="body2" sx={{ color: "#9ca3af" }}>
              Built for faster Development
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;