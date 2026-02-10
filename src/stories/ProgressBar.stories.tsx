import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import ProgressBar from "../components/ProgressBars/ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],   
  parameters: {
    layout: "centered", 
  },
};


export default meta;
type Story = StoryObj<typeof ProgressBar>;

// export const Default: Story = {
//   args: {
//     steps: ["Step 1", "Step 2", "Step 3"],
//     activeStep: 1,
//     variant: "bar",
//   },
// };

export const StepProgressBar: Story = {
  render: () => {
    const [step, setStep] = useState(1);
    const steps = ["Step 1", "Step 2", "Step 3"];

    return (
      <ProgressBar
        steps={steps}
        activeStep={step}
        variant="bar"
        onNext={() => setStep((s) => Math.min(s + 1, steps.length))}
        onPrevious={() => setStep((s) => Math.max(s - 1, 1))}
      />
    );
  },
};

export const MultiStepProgress: Story = {
  render: () => {
    const [step, setStep] = useState(1);
    const steps = ["Account", "Upload", "Confirm"];

    return (
      <ProgressBar
        steps={steps}
        activeStep={step}
        variant="steps"
        onNext={() => setStep((s) => Math.min(s + 1, steps.length))}
        onPrevious={() => setStep((s) => Math.max(s - 1, 1))}
      />
    );
  },
};
