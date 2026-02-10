import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import TabBar from "../components/TabBars/TabBar";

const meta: Meta<typeof TabBar> = {
  title: "Components/TabBar",
  component: TabBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    centered: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: ["standard", "scrollable", "fullWidth"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabBar>;

const TabWrapper = (args: any) => {
  const [value, setValue] = useState(0);
  return <TabBar {...args} value={value} onChange={setValue} />;
};


// Default
export const Default: Story = {
  render: (args) => <TabWrapper {...args} />,
  args: {
    tabs: [
      { label: "Trianing" },
      { label: "Software" },
      { label: "About" },
    ],
  },
};


// Scrollable
export const Scrollable: Story = {
  render: (args) => <TabWrapper {...args} />,
  args: {
    variant: "scrollable",
    tabs: [
      { label: "Overview" },
      { label: "Details" },
      { label: "Reviews" },
      { label: "Comments" },
      { label: "Related" },
    ],
  },
};

// Disabled
export const Disabled: Story = {
  render: (args) => <TabWrapper {...args} />,
  args: {
    disabled: true,
   tabs: [
      { label: "Trianing" },
      { label: "Software" },
      { label: "About" },
    ],
  },
};