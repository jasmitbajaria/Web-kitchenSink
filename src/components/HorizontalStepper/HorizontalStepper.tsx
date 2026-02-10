import * as React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Typography,
  styled,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const CustomConnector = styled(StepConnector)(() => ({
  "& .MuiStepConnector-line": {
    borderColor: "#1565c0",
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

const StepIconRoot = styled("div")<{
  ownerState: { active?: boolean; completed?: boolean };
}>(({ ownerState }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: ownerState.completed ? "#1565c0" : "#fff",
  border: ownerState.active
    ? "2px solid #1565c0"
    : ownerState.completed
    ? "none"
    : "2px solid #cfc7ea",
  color: ownerState.completed ? "#fff" : "#1565c0",
  fontSize: 16,
  fontWeight: 600,
  transition: "all 0.2s ease",
}));

const CustomStepIcon = (props: any) => {
  const { active, completed, icon } = props;
  return (
    <StepIconRoot ownerState={{ active, completed }}>
      {completed ? <CheckIcon fontSize="small" /> : icon}
    </StepIconRoot>
  );
};

export interface HorizontalStepperProps {
  steps: string[];
  activeStep?: number;
  title?: string;
  clickable?: boolean;
  onStepClick?: (step: number) => void;
}

const HorizontalStepper: React.FC<HorizontalStepperProps> = ({
  steps,
  activeStep = 0,
  title = "Horizontal Stepper",
  clickable = true,
  onStepClick,
}) => {
  const [currentStep, setCurrentStep] = React.useState(activeStep);

  React.useEffect(() => {
    setCurrentStep(activeStep);
  }, [activeStep]);

  const handleStepClick = (index: number) => {
    if (!clickable) return;
    setCurrentStep(index);
    onStepClick?.(index);
  };

  return (
    <Box
      sx={{
        width: 650,
        p: 4,
        bgcolor: "#fff",
        borderRadius: 6,
        boxShadow: "0px 6px 16px rgba(0,0,0,0.1)",
      }}
    >
      <Typography fontSize={28} fontWeight={700} mb={4}>
        {title}
      </Typography>

      <Stepper
        alternativeLabel
        activeStep={currentStep}
        connector={<CustomConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={index < currentStep}>
            <StepLabel
              StepIconComponent={CustomStepIcon}
              onClick={() => handleStepClick(index)}
              sx={{
                cursor: clickable ? "pointer" : "default",
                "&:hover .MuiTypography-root": {
                  color: clickable ? "#1565c0" : undefined,
                },
              }}
            >
              <Typography
                fontSize={16}
                fontWeight={index === currentStep ? 600 : 400}
                color={index === currentStep ? "#1565c0" : "#444"}
              >
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default HorizontalStepper;
