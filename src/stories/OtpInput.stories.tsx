import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import OtpInput from "../components/OTPInput/OtpInput";

const meta: Meta<typeof OtpInput> = {
  title: "Components/OtpInput",
  component: OtpInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof OtpInput>;

export const Default: Story = {
  render: (args) => {
    const [otp, setOtp] = useState("");
    return <OtpInput {...args} value={otp} onChange={setOtp} />;
  },
  args: {
    length: 6,
  },
};

export const FourDigit: Story = {
  render: (args) => {
    const [otp, setOtp] = useState("");
    return <OtpInput {...args} value={otp} onChange={setOtp} />;
  },
  args: {
    length: 4,
  },
};
