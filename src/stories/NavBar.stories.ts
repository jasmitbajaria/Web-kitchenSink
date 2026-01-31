import type { Meta, StoryObj } from '@storybook/react-vite';
import Header from '../components/NavBar/NavBar';

const meta = {
  title: 'Components/NavBar',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    logoSrc: {
      control: 'text',
      description: 'URL or path to the logo image',
    },
    username: {
      control: 'text',
      description: 'Name of the logged-in user',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default navigation bar with default logo and username "Jasmit Patel".',
      },
    },
  },
};

export const CustomUsername: Story = {
  args: {
    username: 'John Doe',
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation bar with a custom username.',
      },
    },
  },
};

export const CustomLogoAndUsername: Story = {
  args: {
    username: 'Sarah Johnson',
    logoSrc: '/Images/logo1.png',
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation bar with custom logo and username.',
      },
    },
  },
};
