import type { Meta, StoryObj } from "@storybook/react";
import ActionCard from "../components/ActionCards/ActionCard";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";

const meta: Meta<typeof ActionCard> = {
  title: "Components/ActionCard",
  component: ActionCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    onClick: {
      action: "card clicked",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActionCard>;

export const CreateAccount: Story = {
  args: {
    label: "Create Account",
    icon: PersonAddIcon, // ✅ TS-safe
  },
};

export const Login: Story = {
  args: {
    label: "Login",
    icon: LoginIcon,
  },
};

export const Settings: Story = {
  args: {
    label: "Settings",
    icon: SettingsIcon,
  },
};
