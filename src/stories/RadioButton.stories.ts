import type { Meta, StoryObj } from "@storybook/react-vite";

import RadioButton from "../components/RadioButton/RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    value: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    row: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "warning", "info"],
    },
    helperText: {
      control: "text",
    },
  },
  args: {
    onChange: ()=>{},
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

// Default story
export const Default: Story = {
  args: {
    label: "Select an option",
  },
};

export const Selected: Story = {
  args: {
    label: "Selected Option",
    value: "option2",
  },
};

export const Row: Story = {
  args: {
    label: "Horizontal Layout",
    row: true,
  },
};

export const Column: Story = {
  args: {
    label: "Vertical Layout",
    row: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Radio Group",
    disabled: true,
    value: "option1",
  },
};

export const DisabledOption: Story = {
  args: {
    label: "With Disabled Option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2 (Disabled)", disabled: true },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export const Small: Story = {
  args: {
    label: "Small Size",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Size",
    size: "medium",
  },
};

export const Primary: Story = {
  args: {
    label: "Primary Color",
    color: "primary",
    value: "option1",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Color",
    color: "secondary",
    value: "option1",
  },
};

export const Success: Story = {
  args: {
    label: "Success Color",
    color: "success",
    value: "option1",
  },
};

export const Error: Story = {
  args: {
    label: "Error Color",
    color: "error",
    value: "option1",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Color",
    color: "warning",
    value: "option1",
  },
};

export const Info: Story = {
  args: {
    label: "Info Color",
    color: "info",
    value: "option1",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "With Helper Text",
    helperText: "Please select one option",
  },
};

export const WithErrorState: Story = {
  args: {
    label: "Error State",
    error: true,
    helperText: "This field is required",
  },
};

export const Required: Story = {
  args: {
    label: "Required Field",
    required: true,
    helperText: "This field is required",
  },
};

export const WithoutLabel: Story = {
  args: {
    value: "option1",
  },
};