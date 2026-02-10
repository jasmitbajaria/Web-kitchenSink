import type { Meta, StoryObj } from "@storybook/react-vite";
import TextArea from "../components/TextArea/TextArea";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  args: {
    label: "Description",
    placeholder: "Enter text here...",
    rows: 4,
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: "Maximum 200 characters",
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    helperText: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
