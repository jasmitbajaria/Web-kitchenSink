import { Box, Typography, Stack, Divider } from "@mui/material";
import Button from "../components/Buttons/Button";
import { 
  Add as AddIcon, 
  Delete as DeleteIcon, 
  Send as SendIcon,
  Download as DownloadIcon,
  Save as SaveIcon
} from "@mui/icons-material";

const ButtonShowcase: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          p: 12,
          minHeight: "100vh",
          background: `
            radial-gradient(
              circle at left center,
              rgba(213, 229, 247, 0.53),
              transparent 50%
            ),
            linear-gradient(
              180deg,
              #ffffff 0%,
              #e5e8f3 100%
            )
          `,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Buttons
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4}>
          Different button variants, sizes, and states.
        </Typography>

        {/* Material UI Variants */}
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          Variants
        </Typography>

        <Stack direction="row" spacing={2} mb={4}>
          <Button label="Contained" />
          <Button label="Outlined" variant="outlined" />
          <Button label="Text" variant="text" />
        </Stack>

        <Divider sx={{ my: 4, opacity: 1 }} />

        {/* Sizes */}
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" mb={4}>      
          <Button label="Small" size="small" />
          <Button label="Medium" size="medium" />
          <Button label="Large" size="large" />
        </Stack>

        <Divider sx={{ my: 4, opacity: 1 }} />

        {/* With Icons */}
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          Icons and Loading
        </Typography>
        <Stack direction="row" spacing={2} mb={4}>
          <Button label="Add" startIcon={<AddIcon />} />
          <Button label="Delete" variant="outlined" startIcon={<DeleteIcon />} />
          <Button label="Send" endIcon={<SendIcon />} />
          <Button label="Download" startIcon={<DownloadIcon />} variant="contained" />
          <Button label="Save" startIcon={<SaveIcon />} variant="text" />
          <Button label="Loading" loading />
        </Stack>

        <Divider sx={{ my: 4, opacity: 1 }} />


        {/* States */}
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          States
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button label="Normal" />
          <Button label="Disabled" disabled />
        </Stack>

        {/* <Divider sx={{ my: 4, opacity: 1 }} /> */}

        {/* Bootstrap Variants */}
        {/* <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          Bootstrap Variants
        </Typography>

        <Stack direction="row" spacing={2} mb={4}>
          <Button label="Primary" library="bootstrap" variant="primary" />
          <Button label="Secondary" library="bootstrap" variant="secondary" />
          <Button label="Success" library="bootstrap" variant="success" />
          <Button label="Danger" library="bootstrap" variant="danger" />
          <Button label="Warning" library="bootstrap" variant="warning" />
          <Button label="Info" library="bootstrap" variant="info" />
        </Stack> */}

        {/* <Divider sx={{ my: 4, opacity: 1 }} /> */}

        {/* Bootstrap with Icons */}
        {/* <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          Bootstrap with Icons
        </Typography>
        <Stack direction="row" spacing={2} mb={4}>
          <Button 
            label="Add" 
            library="bootstrap" 
            startIcon={<AddIcon />} 
            variant="primary" 
          />
          <Button 
            label="Delete" 
            library="bootstrap" 
            startIcon={<DeleteIcon />} 
            variant="danger" 
          />
          <Button 
            label="Send" 
            library="bootstrap" 
            endIcon={<SendIcon />} 
            variant="success" 
          />
        </Stack> */}

        {/* <Divider sx={{ my: 4, opacity: 1 }} /> */}

        {/* Bootstrap Loading */}
        {/* <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          Bootstrap Loading
        </Typography>
        <Stack direction="row" spacing={2} mb={4}>
          <Button 
            label="Loading" 
            library="bootstrap" 
            loading 
            variant="primary" 
          />
          <Button 
            label="Processing" 
            library="bootstrap" 
            loading 
            variant="success" 
          />
          <Button 
            label="Submitting" 
            library="bootstrap" 
            loading 
            variant="secondary" 
          />
        </Stack> */}
      </Box>
    </>
  );
};

export default ButtonShowcase;