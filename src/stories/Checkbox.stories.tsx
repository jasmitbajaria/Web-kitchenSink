import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Checkbox from "../components/Checkbox/Checkbox";
import type { ComponentProps } from "react";

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
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Wrapper component with state
const CheckboxWithState = (args: ComponentProps<typeof Checkbox>) => {
  const [checked, setChecked] = useState(args.checked || false);
  
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(newChecked) => {
        setChecked(newChecked);
        args.onChange?.(newChecked);
      }}
    />
  );
};

// Default story
export const Default: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Default Checkbox",
  },
};

export const Checked: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Checked Checkbox",
    checked: true,
  },
};

export const Unchecked: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Unchecked Checkbox",
    checked: false,
  },
};

export const Indeterminate: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Indeterminate Checkbox",
    indeterminate: true,
  },
};

export const Disabled: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Disabled Checkbox",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Disabled Checked",
    checked: true,
    disabled: true,
  },
};

export const Small: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Small Checkbox",
    size: "small",
  },
};

export const Medium: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Medium Checkbox",
    size: "medium",
  },
};

export const Primary: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Primary Color",
    checked: true,
    color: "primary",
  },
};

export const Secondary: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Secondary Color",
    checked: true,
    color: "secondary",
  },
};

export const Success: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Success Color",
    checked: true,
    color: "success",
  },
};

export const Error: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Error Color",
    checked: true,
    color: "error",
  },
};

export const Warning: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Warning Color",
    checked: true,
    color: "warning",
  },
};

export const Info: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Info Color",
    checked: true,
    color: "info",
  },
};

export const WithHelperText: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "With Helper Text",
    helperText: "This is a helper text",
  },
};

export const WithErrorState: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Error State",
    error: true,
    helperText: "This field is required",
  },
};

export const Required: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: "Required Field",
    required: true,
    helperText: "This field is required",
  },
};

export const WithoutLabel: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    checked: true,
  },
};