import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import HorizontalStepper from "../components/HorizontalStepper/HorizontalStepper";

const STEPS = ["Permissions", "SMS", "Select SIM"];

const meta: Meta<typeof HorizontalStepper> = {
  title: "Components/HorizontalStepper",
  component: HorizontalStepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    steps: {
      control: "object",
    },
    activeStep: {
      control: {
        type: "number",
        min: 0,
        max: STEPS.length - 1,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HorizontalStepper>;

export const StepOne: Story = {
  args: {
    steps: STEPS,
    activeStep: 0,
  },
};

export const StepTwo: Story = {
  args: {
    steps: STEPS,
    activeStep: 1,
  },
};

export const StepThree: Story = {
  args: {
    steps: STEPS,
    activeStep: 2,
  },
};

export const Playground: Story = {
  args: {
    steps: STEPS,
    activeStep: 1,
  },
};
