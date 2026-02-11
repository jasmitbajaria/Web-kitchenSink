import React from 'react';
import { Drawer as MuiDrawer, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  width?: string | number;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  title,
  anchor = 'right',
  width = 400,
  children,
}) => {
  return (
    <MuiDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          width: anchor === 'top' || anchor === 'bottom' ? 'auto' : width,
          height: anchor === 'top' || anchor === 'bottom' ? width : 'auto',
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
        role="presentation"
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          {title && (
            <Typography variant="h6" component="h2">
              {title}
            </Typography>
          )}
          <IconButton onClick={onClose} sx={{ marginLeft: 'auto' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Content - Input fields passed as children */}
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          {children}
        </Box>
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;



//*********usage Example********** */


// import Drawer from './components/Drawer/Drawer';
// import InputField from './components/InputField/InputField';

// function App() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   return (
//     <>
//       <button onClick={() => setDrawerOpen(true)}>Open Drawer</button>
      
//       <Drawer
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         title="User Form"
//         anchor="right"
//         width={450}
//       >
//         <InputField label="Name" placeholder="Enter your name" />
//         <InputField label="Email" type="email" placeholder="Enter your email" />
//         <InputField label="Phone" placeholder="Enter your phone" />
//       </Drawer>
//     </>
//   );
// }