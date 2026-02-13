import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../components/Dropdown/Dropdown";

const options = [
  { label: "Mumbai", value: "mumbai" },
  { label: "Delhi", value: "delhi" },
  { label: "Bangalore", value: "bangalore" },
];

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => {
    const [city, setCity] = useState("");

    return React.createElement(Dropdown, {
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
