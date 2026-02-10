import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  Button,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ModalType = "address" | "mobile" | "email";

interface ModalFormProps {
  open: boolean;
  type: ModalType;
  onClose: () => void;
  onSubmit: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({
  open,
  type,
  onClose,
  onSubmit,
}) => {
  const getTitle = () => {
    switch (type) {
      case "address":
        return "Update Address";
      case "mobile":
        return "Update Mobile Number";
      case "email":
        return "Add Email ID";
      default:
        return "";
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography fontWeight={600}>{getTitle()}</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {/* ADDRESS FORM */}
        {type === "address" && (
          <Grid container spacing={2} mt={1}>
            <Grid xs={12}>
              <TextField label="Address Line 1" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Address Line 2" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Area" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Pincode" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="City / District" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="State" fullWidth />
            </Grid>
          </Grid>
        )}

        {/* MOBILE FORM */}
        {type === "mobile" && (
          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <TextField
                  label="Enter Aadhaar Card No"
                  fullWidth
                  type="password"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  sx={{ height: "56px" }}
                  variant="contained"
                >
                  Generate OTP
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* EMAIL FORM */}
        {type === "email" && (
          <Box mt={2}>
            <TextField label="Email ID" fullWidth />
            <Typography mt={2} color="text.secondary" fontSize={14}>
              (OTP Verification will be done for new email address. If the
              email address is correct, simply click on Save button)
            </Typography>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        <Button variant="contained" onClick={onSubmit}>
          {type === "email" ? "Save" : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};``

export default ModalForm;
