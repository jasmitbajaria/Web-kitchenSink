import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import AppOtpInput from "../components/OTPInput/AppOtpInput";

const meta: Meta<typeof AppOtpInput> = {
  title: "Components/AppOtpInput",
  component: AppOtpInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppOtpInput>;

export const Default: Story = {
  render: (args) => {
    const [otp, setOtp] = useState("");
    return <AppOtpInput {...args} value={otp} onChange={setOtp} />;
  },
  args: {
    length: 6,
  },
};

export const FourDigit: Story = {
  render: (args) => {
    const [otp, setOtp] = useState("");
    return <AppOtpInput {...args} value={otp} onChange={setOtp} />;
  },
  args: {
    length: 4,
  },
};
