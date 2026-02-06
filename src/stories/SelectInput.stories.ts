import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectInput from "../components/SelectInput/SelectInput";

const options = [
  { label: "Mumbai", value: "mumbai" },
  { label: "Delhi", value: "delhi" },
  { label: "Bangalore", value: "bangalore" },
];

const meta: Meta<typeof SelectInput> = {
  title: "Components/SelectInput",
  component: SelectInput,
};

export default meta;
type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {
  render: () => {
    const [city, setCity] = useState("");

    return React.createElement(SelectInput, {
      label: "City",
      value: city,
      options,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
        setCity(e.target.value),
    });
  },
};

export const Error: Story = {
  args: {
    label: "Select City",
    options,
    error: true,
    helperText: "Please select a city",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Dropdown",
    options,
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: "Required Dropdown",
    options,
    required: true,
  },
};
