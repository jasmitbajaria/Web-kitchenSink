import type { Meta, StoryObj } from "@storybook/react";
import NotificationTab from "../components/NotificationTabs/NotificationTab";

const meta: Meta<typeof NotificationTab> = {
  title: "Components/NotificationTab",
  component: NotificationTab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
    },
    title: {
      control: "text",
    },
    message: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof NotificationTab>;

export const Info: Story = {
  args: {
    title: "Info Notification",
    message: "This is an info message",
    type: "info",
  },
};

export const Success: Story = {
  args: {
    title: "Success Notification",
    message: "Operation completed successfully",
    type: "success",
  },
};

export const Warning: Story = {
  args: {
    title: "Warning Notification",
    message: "Something might be wrong",
    type: "warning",
  },
};

export const Error: Story = {
  args: {
    title: "Error Notification",
    message: "Something went wrong",
    type: "error",
  },
};
