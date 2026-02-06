import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DateInput from "../components/DateInput/DateInput";

const meta: Meta<typeof DateInput> = {
  title: "Components/DateInput",
  component: DateInput,
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState("");

    return React.createElement(DateInput, {
      label: "Select Date",
      value: date,
      onChange: setDate,
      helperText: "You can type or select a date",
    });
  },
};

export const WithMinMax: Story = {
  args: {
    label: "Date Range",
    min: "2024-01-01",
    max: "2024-12-31",
    helperText: "Only dates in 2024 allowed",
  },
};

export const Error: Story = {
  args: {
    label: "Invalid Date",
    error: true,
    helperText: "Please select a valid date",
  },
};
