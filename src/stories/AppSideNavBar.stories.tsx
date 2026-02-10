import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import PercentIcon from "@mui/icons-material/Percent";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SideNavBar from "../components/SideNavBar/SideNavBar";

const meta: Meta<typeof SideNavBar> = {
  title: "Components/SideNavBar",
  component: SideNavBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SideNavBar>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Dashboard",
        icon: <DashboardIcon />,
      },
      {
        label: "Customers",
        icon: <PeopleIcon />,
        children: [
          { label: "All Customers" },
          { label: "Add Customer" },
        ],
      },
      {
        label: "Vendors",
        icon: <StoreIcon />,
        children: [
          { label: "All Vendors" },
          { label: "Add Vendor" },
        ],
      },
      {
        label: "Accounting",
        icon: <PercentIcon />,
        children: [
          { label: "Invoices" },
          { label: "Payments" },
        ],
      },
      {
        label: "Settings",
        icon: <SettingsIcon />,
      },
      {
        label: "Reporting",
        icon: <PeopleIcon />,
      },
      {
        label: "Notifications",
        icon: <NotificationsIcon />,
      },
      {
        label: "Profile",
        icon: <PersonIcon />,
      },
    ],
  },
};

