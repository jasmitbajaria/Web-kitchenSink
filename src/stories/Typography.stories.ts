import type { Meta, StoryObj } from "@storybook/react";
import Typography from "../components/Typography/Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"], 
  parameters: {
    docs: {
      description: {
        component:
          "Typography component used to display text using different variants and alignment options.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "body1", "body2"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
    library: {
      control: "select",
      options: ["mui", "custom"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    text: "This is Typography Component",
    variant: "body1",
    library: "mui",
    align: "right",
  },
};

export const Heading: Story = {
  args: {
    text: "Heading Example",
    variant: "h1",
    library: "mui",
    align: "center",
  },
};