import type { Meta, StoryObj } from '@storybook/react-vite';
import InputField from '../components/InputFields/InputField';

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "filled", "standard"],
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url", "search", "date", "time", "datetime-local"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    multiline: {
      control: "boolean",
    },
  },
  
};

export default meta;
type Story = StoryObj<typeof InputField>;

// Default story
export const Default: Story = {
  args: {
    label: "Default Input",
    placeholder: "Enter text...",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Input",
    variant: "outlined",
    placeholder: "Enter text...",
  },
};

export const Filled: Story = {
  args: {
    label: "Filled Input",
    variant: "filled",
    placeholder: "Enter text...",
  },
};

export const Standard: Story = {
  args: {
    label: "Standard Input",
    variant: "standard",
    placeholder: "Enter text...",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password...",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter email...",
  },
};

export const Number: Story = {
  args: {
    label: "Number",
    type: "number",
    placeholder: "Enter number...",
  },
};

export const Small: Story = {
  args: {
    label: "Small Input",
    size: "small",
    placeholder: "Small size...",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Input",
    size: "medium",
    placeholder: "Medium size...",
  },
};

export const Large: Story = {
  args: {
    label: "Large Input",
    size: "large",
    placeholder: "Large size...",
  },
};

export const Required: Story = {
  args: {
    label: "Required Input",
    required: true,
    placeholder: "This field is required...",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    disabled: true,
    value: "Disabled value",
  },
};

export const WithError: Story = {
  args: {
    label: "Input with Error",
    error: true,
    helperText: "This field has an error",
    placeholder: "Enter text...",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Input with Helper Text",
    helperText: "This is a helper text",
    placeholder: "Enter text...",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Input",
    fullWidth: true,
    placeholder: "Full width input...",
  },
  parameters: {
    layout: "padded",
  },
};

export const Multiline: Story = {
  args: {
    label: "Multiline Input",
    multiline: true,
    rows: 4,
    placeholder: "Enter multiple lines...",
  },
};

export const MultilineWithError: Story = {
  args: {
    label: "Multiline with Error",
    multiline: true,
    rows: 4,
    error: true,
    helperText: "This field has an error",
    placeholder: "Enter text...",
  },
};

export const Date: Story = {
  args: {
    label: "Date Input",
    type: "date",
  },
};

// export const Time: Story = {
//   args: {
//     label: "Time Input",
//     type: "time",
//   },
// };

// export const DateTime: Story = {
//   args: {
//     label: "DateTime Input",
//     type: "datetime-local",
//   },
// };

export const Search: Story = {
  args: {
    label: "Search Input",
    type: "search",
    placeholder: "Search...",
  },
};