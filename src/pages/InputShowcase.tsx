import { Box, Typography, Stack, Divider, Grid } from "@mui/material";
import { useState } from "react";
import InputField from "../components/InputFields/InputField";

const InputFieldShowcase: React.FC = () => {

  return (
    <Box
      sx={{
        p: 12,
        minHeight: "100vh",
        background: `
          radial-gradient(
            circle at left center,
            rgba(222, 234, 248, 0.53),
            transparent 50%
          ),
          linear-gradient(
            180deg,
            #ffffff 0%,
            #f0f2f7 100%
          )
        `,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Input Fields
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        Different input field types, variants, and states.
      </Typography>

      {/* Material UI Variants */}
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
        MUI Variants
      </Typography>

      <Grid container spacing={3} mb={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField label="Outlined" placeholder="Enter text" fullWidth />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField
            label="Filled"
            variant="filled"
            placeholder="Enter text"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField
            label="Standard"
            variant="standard"
            placeholder="Enter text"
            fullWidth
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, opacity: 1 }} />

      {/* Input Types */}
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
        Input Types
      </Typography>

      <Grid container spacing={3} mb={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField
            label="Text"
            type="text"
            placeholder="Enter text"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField
            label="Email"
            type="email"
            placeholder="Enter email"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField
            label="Password"
            type="password"
            placeholder="Enter password"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField label="Date" type="date" fullWidth />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, opacity: 1 }} />

      {/* Sizes */}
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
        Sizes
      </Typography>

      <Grid container spacing={3} mb={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField
            label="Small"
            size="small"
            placeholder="Small input"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField
            label="Medium"
            size="medium"
            placeholder="Medium input"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField
            label="Large"
            size="large"
            placeholder="Large input"
            fullWidth
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, opacity: 1 }} />

      {/* States */}
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
        States
      </Typography>

      <Grid container spacing={3} mb={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField label="Normal" placeholder="Normal state" fullWidth />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField
            label="Disabled"
            placeholder="Disabled state"
            disabled
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField
            label="Required"
            placeholder="Required field"
            required
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InputField
            label="Error"
            placeholder="Error state"
            error
            helperText="This field has an error"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12 , md:4}}>
          <InputField
            label="With Helper Text"
            placeholder="Enter text"
            helperText="This is a helper text"
            fullWidth
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, opacity: 1 }} />

      {/* Multiline */}
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
        Multiline (Textarea)
      </Typography>

      <Stack spacing={3} mb={4}>
        <InputField
          label="Multiline Input"
          placeholder="Enter multiple lines"
          multiline
          rows={4}
          fullWidth
        />
      </Stack>

      <Divider sx={{ my: 4, opacity: 1 }} />

      {/* Bootstrap Inputs */}
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
        Bootstrap Inputs
      </Typography>

      <Grid container spacing={3} mb={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <InputField
            label="Text Input"
            library="bootstrap"
            placeholder="Enter text"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <InputField
            label="Email Input"
            library="bootstrap"
            type="email"
            placeholder="Enter email"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <InputField
            label="Password Input"
            library="bootstrap"
            type="password"
            placeholder="Enter password"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <InputField
            label="Required Field"
            library="bootstrap"
            required
            placeholder="Required"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <InputField
            label="Error State"
            library="bootstrap"
            error
            helperText="This field has an error"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <InputField
            label="Disabled"
            library="bootstrap"
            disabled
            placeholder="Disabled"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <InputField
            label="Multiline Bootstrap"
            library="bootstrap"
            multiline
            rows={4}
            placeholder="Enter multiple lines"
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputFieldShowcase;
