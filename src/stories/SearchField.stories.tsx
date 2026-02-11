import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import SearchField from "../components/SearchFeilds/SearchField";

const meta: Meta<typeof SearchField> = {
  title: "Components/SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div style={{ width: 300 }}>
        <SearchField {...args} value={value} onChange={setValue} />
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
        <SearchField {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};
