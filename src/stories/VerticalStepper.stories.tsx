import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import VerticalStepper from "../components/VerticalStepper/VerticalStepper";

const meta: Meta<typeof VerticalStepper> = {
  title: "Components/VerticalStepper",
  component: VerticalStepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    activeStep: {
      control: {
        type: "number",
        min: 0,
        max: 5,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VerticalStepper>;

const StepperWrapper = (args: any) => {
  const [activeStep, setActiveStep] = useState(args.activeStep ?? 3);

  return <VerticalStepper {...args} activeStep={activeStep} />;
};

// Default
export const Default: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    activeStep: 3,
  },
};
