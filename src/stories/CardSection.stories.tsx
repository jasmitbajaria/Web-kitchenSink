import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Button } from "@mui/material";
import CardSection from "../components/CardSection/CardSection";

const meta: Meta<typeof CardSection> = {
  title: "Components/CardSection",
  component: CardSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardSection>;

export const Basic: Story = {
  args: {
    title: "Simple Card",
    subtitle: "Secondary text",
    description: "This is a simple card without image or actions.",
  },
};

export const MediaCard: Story = {
  args: {
    image: "https://via.placeholder.com/320x160",
    title: "Card title",
    subtitle: "Secondary text",
    description:
      "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    footerActions: (
      <>
        <Button size="small">ACTION 1</Button>
        <Button size="small">ACTION 2</Button>
      </>
    ),
  },
};

export const CustomContent: Story = {
  args: {
    title: "Custom Content",
    children: <div>Anything can go here</div>,
  },
};
