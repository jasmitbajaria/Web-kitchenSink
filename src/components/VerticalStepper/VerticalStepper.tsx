import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  StepContent,
  Button,
  Typography,
  Paper,
  styled,
} from "@mui/material";

const CustomConnector = styled(StepConnector)(() => ({
  //   "& .MuiStepConnector-line": {
  //     borderLeftWidth: 2,
  //     borderColor: "#d1cfe2",
  //     borderStyle: "dashed",
  //     minHeight: 36,
  //   },
}));

const StepIconRoot = styled("div")<{
  ownerState: { active?: boolean; completed?: boolean };
}>(({ ownerState }) => ({
  width: 18,
  height: 18,
  borderRadius: "50%",
  backgroundColor: ownerState.completed
    ? "#1565c0"
    : ownerState.active
      ? "#ffffff"
      : "#d3d3d3",
  border: ownerState.active ? "4px solid #1565c0" : "none",
}));

const CustomStepIcon = (props: any) => {
  const { active, completed } = props;
  return <StepIconRoot ownerState={{ active, completed }} />;
};

const steps = [
  {
    label: "Business Details",
    description:
      "Enter and verify your business information before proceeding.",
  },
  {
    label: "Author Verification",
    description: "Verify the authorized person associated with the business.",
  },
  {
    label: "PAN Verification",
    description: "Validate PAN details as per government records.",
  },
  {
    label: "Document upload",
    description: "Upload all required business documents.",
  },
  {
    label: "Reference admin verification",
    description: "Admin reviews and verifies the submitted details.",
  },
  {
    label: "Bank Verification",
    description: "Verify bank account details to complete onboarding.",
  },
];

const VerticalStepper: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        width: 440,
        bgcolor: "#fff",
        p: 3,
        borderRadius: 4,
        boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <Typography fontSize={28} fontWeight={700} mb={3}>
        Vertical Stepper
      </Typography>

      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        connector={<CustomConnector />}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={CustomStepIcon}
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>

            <StepContent>
              <Typography sx={{ mb: 2 }}>{step.description}</Typography>

              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? "Finish" : "Continue"}
                </Button>

                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed — you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default VerticalStepper;
