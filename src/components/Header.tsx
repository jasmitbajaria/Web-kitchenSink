import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from '@mui/material';
import {
  Notifications,
  VpnKey,
  ExitToApp,
} from '@mui/icons-material';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  const handleLogout = (): void => {
    console.log('Logout clicked');
    handleMenuClose();
  };

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          backgroundColor: "#ffffff", 
          color: 'text.primary',
          borderBottom: '1px solid #f1f1f1'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
          {/* Left Section - Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 500, 
                color: '#1a1a1a',
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Kitchen Sink
            </Typography>
          </Box>

          {/* Right Section - Icons & Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

            {/* Notifications */}
            <IconButton sx={{ color: 'text.secondary' }}>
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>

            {/* Profile with Dropdown */}
            <IconButton 
              sx={{ padding: 0, ml: 1 }}
              onClick={handleAvatarClick}
            >
              <Avatar 
                sx={{ 
                  width: 36, 
                  height: 36,
                  bgcolor: '#667eea'
                }} 
              >
                U
              </Avatar>
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                elevation: 3,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                  mt: 1.5,
                  width: 200,
                  borderRadius: '12px',
                  '& .MuiMenuItem-root': {
                    fontSize: '0.875rem',
                    py: 1.2,
                    px: 2,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              {/* My Account Label */}
              <MenuItem 
                sx={{ 
                  cursor: 'default', 
                  '&:hover': { backgroundColor: 'transparent' },
                  pb: 0.5
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  My Account
                </Typography>
              </MenuItem>
              
              <Divider sx={{ my: 1 }} />

              {/* Change Password */}
              <MenuItem >
                <VpnKey sx={{ fontSize: 18, mr: 1.5, color: 'text.secondary' }} />
                <Typography variant="body2">Change Password</Typography>
              </MenuItem>

              {/* Logout */}
              <MenuItem onClick={handleLogout}>
                <ExitToApp sx={{ fontSize: 18, mr: 1.5, color: 'text.secondary' }} />
                <Typography variant="body2">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;