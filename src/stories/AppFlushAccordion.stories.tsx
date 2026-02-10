import type { Meta, StoryObj } from "@storybook/react-vite";
import AppFlushAccordion from "../components/Accordion/AppFlushAccordion";
import React from "react";
import { Box } from "@mui/material";

const meta: Meta<typeof AppFlushAccordion> = {
  title: "Components/AppFlushAccordion",
  component: AppFlushAccordion,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 420 }}>
        <Story />
      </Box>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppFlushAccordion>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Accordion Item #1",
        content:
          "Placeholder content for this accordion, which is intended to demonstrate the accordion flush behavior.",
      },
      {
        title: "Accordion Item #2",
        content: "This is the second item’s accordion body.",
      },
      {
        title: "Accordion Item #3",
        content: "This is the third item’s accordion body.",
      },
    ],
    defaultOpenIndex: 0,
  },
};
