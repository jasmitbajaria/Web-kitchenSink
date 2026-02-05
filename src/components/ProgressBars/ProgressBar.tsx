import React from "react";
import { Box, Typography, Button } from "@mui/material";

const PRIMARY = "#00ade7";
const INACTIVE = "#D0CDD6";

const ProgressBar: React.FC<ProgressBarProps> = ({
  steps,
  activeStep,
  variant = "steps",
  onNext,
  onPrevious,
}) => {
  const progressPercent = (activeStep / steps.length) * 100;

  return (
    <Box
      width="520px"
      bgcolor="#FFF"
      borderRadius="24px"
      p={4}
      boxShadow="0px 4px 20px rgba(0,0,0,0.08)"
      textAlign="center"
    >
      {/* TITLE */}
<Typography fontSize="28px" fontWeight={700} mb={4}>
  {variant === "steps"
    ? "Multi-Step Form Progress"
    : "Step Progress Bar"}
</Typography>


      {/* ================= VARIANT: BAR ================= */}
      {variant === "bar" && (
        <>
          <Box display="flex" gap={2} mb={5}>
            {steps.map((_, index) => (
              <Box
                key={index}
                flex={1}
                height="6px"
                borderRadius="999px"
                bgcolor={index < activeStep ? PRIMARY : INACTIVE}
                sx={{ transition: "0.3s" }}
              />
            ))}
          </Box>

          <Typography fontSize="22px" fontWeight={600} mb={5}>
            {steps[activeStep - 1]}
          </Typography>
        </>
      )}

      {/* ================= VARIANT: STEPS ================= */}
      {variant === "steps" && (
        <>
          <Box display="flex" justifyContent="space-between" mb={5}>
            {steps.map((label, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < activeStep;
              const isActive = stepNumber === activeStep;

              return (
                <Box
                  key={label}
                  flex={1}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  position="relative"
                >
                  {index !== 0 && (
                    <Box
                      position="absolute"
                      top="18px"
                      left="-50%"
                      width="100%"
                      height="3px"
                      bgcolor={isCompleted ? PRIMARY : INACTIVE}
                    />
                  )}

                  <Box
                    width="36px"
                    height="36px"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight={700}
                    zIndex={1}
                    sx={{
                      bgcolor:
                        isCompleted || isActive ? PRIMARY : INACTIVE,
                      color:
                        isCompleted || isActive ? "#ffffff" : "#555",
                    }}
                  >
                    {isCompleted ? "✓" : stepNumber}
                  </Box>

                  <Typography
                    mt={1}
                    fontSize="12px"
                    fontWeight={isActive ? 600 : 400}
                    color={isActive ? PRIMARY : "#777"}
                  >
                    {label}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Typography fontSize="22px" fontWeight={600} mb={5}>
            {steps[activeStep - 1]}
          </Typography>
        </>
      )}

      {/* BUTTONS */}
      <Box display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          onClick={onPrevious}
          disabled={activeStep === 1}
          sx={{
            bgcolor: PRIMARY,
            px: 5,
            py: 1.5,
            borderRadius: "999px",
            textTransform: "none",
            "&:hover": { bgcolor: "#00ade7" },
          }}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          onClick={onNext}
          disabled={activeStep === steps.length}
          sx={{
            bgcolor: PRIMARY,
            px: 5,
            py: 1.5,
            borderRadius: "999px",
            textTransform: "none",
            "&:hover": { bgcolor: "#00ade7" },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ProgressBar;
