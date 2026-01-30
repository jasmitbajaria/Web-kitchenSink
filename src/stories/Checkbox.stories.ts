import type { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox from "../components/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = {
    
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    indeterminate: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "info",
      ],
    },
    error: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    helperText: {
      control: "text",
    },
  },
  args: {
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Default story
export const Default: Story = {
  args: {
    label: "Default Checkbox",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Checkbox",
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: "Unchecked Checkbox",
    checked: false,
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Indeterminate Checkbox",
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked",
    checked: true,
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small Checkbox",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Checkbox",
    size: "medium",
  },
};

export const Primary: Story = {
  args: {
    label: "Primary Color",
    checked: true,
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Color",
    checked: true,
    color: "secondary",
  },
};

export const Success: Story = {
  args: {
    label: "Success Color",
    checked: true,
    color: "success",
  },
};

export const Error: Story = {
  args: {
    label: "Error Color",
    checked: true,
    color: "error",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Color",
    checked: true,
    color: "warning",
  },
};

export const Info: Story = {
  args: {
    label: "Info Color",
    checked: true,
    color: "info",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "With Helper Text",
    helperText: "This is a helper text",
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
    checked: true,
  },
};