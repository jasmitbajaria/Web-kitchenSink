import { Box, Typography, Stack, Divider } from "@mui/material";
import AppButton from "../components/Buttons/AppButton";
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
          <AppButton label="Contained" />
          <AppButton label="Outlined" variant="outlined" />
          <AppButton label="Text" variant="text" />
        </Stack>

        <Divider sx={{ my: 4, opacity: 1 }} />

        {/* Sizes */}
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" mb={4}>      
          <AppButton label="Small" size="small" />
          <AppButton label="Medium" size="medium" />
          <AppButton label="Large" size="large" />
        </Stack>

        <Divider sx={{ my: 4, opacity: 1 }} />

        {/* With Icons */}
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          Icons and Loading
        </Typography>
        <Stack direction="row" spacing={2} mb={4}>
          <AppButton label="Add" startIcon={<AddIcon />} />
          <AppButton label="Delete" variant="outlined" startIcon={<DeleteIcon />} />
          <AppButton label="Send" endIcon={<SendIcon />} />
          <AppButton label="Download" startIcon={<DownloadIcon />} variant="primary" />
          <AppButton label="Save" startIcon={<SaveIcon />} variant="text" />
          <AppButton label="Loading" loading />
        </Stack>

        <Divider sx={{ my: 4, opacity: 1 }} />


        {/* States */}
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          States
        </Typography>
        <Stack direction="row" spacing={2}>
          <AppButton label="Normal" />
          <AppButton label="Disabled" disabled />
        </Stack>

        <Divider sx={{ my: 4, opacity: 1 }} />

        {/* Bootstrap Variants */}
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          Bootstrap Variants
        </Typography>

        <Stack direction="row" spacing={2} mb={4}>
          <AppButton label="Primary" library="bootstrap" variant="primary" />
          <AppButton label="Secondary" library="bootstrap" variant="secondary" />
          <AppButton label="Success" library="bootstrap" variant="success" />
          <AppButton label="Danger" library="bootstrap" variant="danger" />
          <AppButton label="Warning" library="bootstrap" variant="warning" />
          <AppButton label="Info" library="bootstrap" variant="info" />
        </Stack>

        <Divider sx={{ my: 4, opacity: 1 }} />

        {/* Bootstrap with Icons */}
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          Bootstrap with Icons
        </Typography>
        <Stack direction="row" spacing={2} mb={4}>
          <AppButton 
            label="Add" 
            library="bootstrap" 
            startIcon={<AddIcon />} 
            variant="primary" 
          />
          <AppButton 
            label="Delete" 
            library="bootstrap" 
            startIcon={<DeleteIcon />} 
            variant="danger" 
          />
          <AppButton 
            label="Send" 
            library="bootstrap" 
            endIcon={<SendIcon />} 
            variant="success" 
          />
        </Stack>

        <Divider sx={{ my: 4, opacity: 1 }} />

        {/* Bootstrap Loading */}
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          Bootstrap Loading
        </Typography>
        <Stack direction="row" spacing={2} mb={4}>
          <AppButton 
            label="Loading" 
            library="bootstrap" 
            loading 
            variant="primary" 
          />
          <AppButton 
            label="Processing" 
            library="bootstrap" 
            loading 
            variant="success" 
          />
          <AppButton 
            label="Submitting" 
            library="bootstrap" 
            loading 
            variant="secondary" 
          />
        </Stack>
      </Box>
    </>
  );
};

export default ButtonShowcase;