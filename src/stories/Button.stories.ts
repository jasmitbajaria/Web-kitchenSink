import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../components/Buttons/Button";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "outlined", "contained"],
    },
    colorVariant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default story
export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    label: "Text Button",
    variant: "text",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    colorVariant: "secondary",
  },
};

export const Success: Story = {
  args: {
    label: "Success Button",
    colorVariant: "success",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Button",
    colorVariant: "danger",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Button",
    colorVariant: "warning",
  },
};

export const Info: Story = {
  args: {
    label: "Info Button",
    colorVariant: "success",
  },
};

export const Small: Story = {
  args: {
    label: "Small Button",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Large Button",
    size: "large",
  },
};

export const WithStartIcon: Story = {
  args: {
    label: "Add Button",
    startIcon: React.createElement(AddIcon),
  },
};

export const WithEndIcon: Story = {
  args: {
    label: "Delete Button",
    endIcon: React.createElement(DeleteIcon),
  },
};

export const Loading: Story = {
  args: {
    label: "Loading",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Button",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

// Bootstrap variants
// export const BootstrapPrimary: Story = {
//   args: {
//     label: 'Bootstrap Primary',
//     variant: 'primary',
//     library: 'bootstrap',
//   },
// };

// export const BootstrapSecondary: Story = {
//   args: {
//     label: 'Bootstrap Secondary',
//     variant: 'secondary',
//     library: 'bootstrap',
//   },
// };

// export const BootstrapSuccess: Story = {
//   args: {
//     label: 'Bootstrap Success',
//     variant: 'success',
//     library: 'bootstrap',
//   },
// };
