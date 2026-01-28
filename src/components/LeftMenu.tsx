import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Divider,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  SmartButton as ButtonIcon,
  Input as InputIcon,
  TableChart as TableIcon,
  ModelTraining as ModalIcon,
  Navigation as NavigationIcon,
  Home as HomeIcon,
  Lock as LockIcon,
} from "@mui/icons-material";
import logo from "../Images/logo1.png";

/* ----------------------------------
 Menu Config
-----------------------------------*/
const menuItems = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon sx={{ fontSize: 24, color: "#10b981" }} />,
  },
  {
    title: "Buttons",
    path: "/buttons",
    icon: <ButtonIcon sx={{ fontSize: 24, color: "#667eea" }} />,
  },
  {
    title: "Inputs",
    path: "/inputs",
    icon: <InputIcon sx={{ fontSize: 24, color: "#06b6d4" }} />,
  },
  {
    title: "Data Table",
    path: "/datatable",
    icon: <TableIcon sx={{ fontSize: 24, color: "#f59e0b" }} />,
  },
  {
    title: "Modals",
    path: "/modals",
    icon: <ModalIcon sx={{ fontSize: 24, color: "#ef4444" }} />,
  },
  {
    title: "Authentication",
    path: "/authentication",
    icon: <LockIcon sx={{ fontSize: 24, color: "#469b35" }} />,
  },
  {
    title: "Navigation",
    path: "/navigation",
    icon: <NavigationIcon sx={{ fontSize: 24, color: "#8b5cf6" }} />,
  },
];

/* ----------------------------------
 Component
-----------------------------------*/
interface LeftMenuProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  const toggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (path: string): void => {
    navigate(path);
  };

  return (
    <>
      {/* Left Sidebar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: sidebarOpen ? 280 : 80,
          backgroundColor: "#fff",
          borderRight: "1px solid #f1f1f1",
          zIndex: 1250,
          transition: "width 0.3s ease-in-out",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* Header with Toggle Button */}
        <Box
          sx={{
            p: sidebarOpen ? 3 : 2,
            pt: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: sidebarOpen ? "space-between" : "center",
            minHeight: 100,
          }}
        >
          {sidebarOpen && (
            <Box>
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "50px",
                  maxWidth: "150px",
                  objectFit: "contain",
                }}
              />
              <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                Navigate through components
              </Typography>
            </Box>
          )}
          <IconButton
            onClick={toggleSidebar}
            sx={{
              "&:hover": {
                backgroundColor: "#f9fafb",
              },
            }}
          >
            {sidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>

        <Divider sx={{ opacity: 0.1 }} />

        <List sx={{ px: sidebarOpen ? 2 : 1, py: 2 }}>
          {menuItems.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ mb: 1 }}>
              <Tooltip title={!sidebarOpen ? item.title : ""} placement="right">
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    borderRadius: "8px",
                    py: 1.5,
                    justifyContent: sidebarOpen ? "flex-start" : "center",
                    "&:hover": {
                      backgroundColor: "#f9fafb",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: sidebarOpen ? 40 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {sidebarOpen && (
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "#1a1a1a",
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default LeftMenu;
