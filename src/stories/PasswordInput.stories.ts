import type { Meta, StoryObj } from "@storybook/react-vite";
import PasswordInput from "../components/PasswordInput/PasswordInput";

const meta = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  args: {
    label: "Password",
    placeholder: "Enter your password",
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: "Must be at least 8 characters",
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    helperText: "Password is too weak",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
