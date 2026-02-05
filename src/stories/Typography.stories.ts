import type { Meta, StoryObj } from "@storybook/react";
import Typography from "../components/Typography/Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    text: "This is Typography Component", 
    variant: "body1",
    library: "mui",
    align: "right"
  },
};
