import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import AppSearchField from "../components/SearchFeilds/AppSearchField";

const meta: Meta<typeof AppSearchField> = {
  title: "Components/AppSearchField",
  component: AppSearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppSearchField>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div style={{ width: 300 }}>
        <AppSearchField {...args} value={value} onChange={setValue} />
      </div>
    );
  },
  args: {
    placeholder: "Search...",
  },
};

export const WithValue: Story = {
  render: (args) => {
    const [value, setValue] = useState("John");
    return (
      <div style={{ width: 300 }}>
        <AppSearchField {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};
