import type { Meta, StoryObj } from '@storybook/react';
import AppButton from '../components/Buttons/AppButton';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import React from 'react';

const meta: Meta<typeof AppButton> = {
  title: 'Components/AppButton',
  component: AppButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'text', 'outlined', 'contained'],
    },
    library: {
      control: 'select',
      options: ['mui', 'bootstrap'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppButton>;

// Default story
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    library: 'mui',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    library: 'mui',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    variant: 'success',
    library: 'mui',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
    library: 'mui',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    variant: 'warning',
    library: 'mui',
  },
};

export const Info: Story = {
  args: {
    label: 'Info Button',
    variant: "success",
    library: 'mui',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: 'outlined',
    library: 'mui',
  },
};

export const Text: Story = {
  args: {
    label: 'Text Button',
    variant: 'text',
    library: 'mui',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
    library: 'mui',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
    library: 'mui',
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'Add Button',
    startIcon: React.createElement(AddIcon),
    library: 'mui',
  },
};

// export const WithEndIcon: Story = {
//   args: {
//     label: 'Delete Button',
//     endIcon: DeleteIcon,
//     library: 'mui',
//   },
// };

export const Loading: Story = {
  args: {
    label: 'Loading',
    loading: true,
    library: 'mui',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
    library: 'mui',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    fullWidth: true,
    library: 'mui',
  },
  parameters: {
    layout: 'padded',
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