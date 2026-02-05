import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Box } from "@mui/material";

import Drawer from "../components/Drawer/Drawer";
import InputField from "../components/InputFields/InputField";
import Button from "../components/Buttons/Button";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DrawerWithButton = (args: React.ComponentProps<typeof Drawer>) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ padding: 4 }}>
      <Button
        label="Open Drawer"
        variant="contained"
        onClick={() => setOpen(true)}
      ></Button>
      <Drawer {...args} open={open} onClose={() => setOpen(false)}>
        {args.children}
      </Drawer>
    </Box>
  );
};

export const RightDrawer: Story = {
  render: (args) => <DrawerWithButton {...args} />,
  args: {
    title: "User Form",
    anchor: "right",
    width: 400,
    children: (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <InputField label="Name" placeholder="Enter your name" />
        <Button label="Submit" variant="contained" />
      </Box>
    ),
  },
};

export const LeftDrawer: Story = {
  render: (args) => <DrawerWithButton {...args} />,
  args: {
    title: "Admin form",
    anchor: "left",
    width: 350,
    children: (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <InputField label="Name" placeholder="Enter your name" />
        <Button label="Submit" variant="contained" />
      </Box>
    ),
  },
};

export const TopDrawer: Story = {
  render: (args) => <DrawerWithButton {...args} />,
  args: {
    title: "Notification Settings",
    anchor: "top",
    width: 300,
    children: (
      <>
        <Box
          sx={{
            display: "flex",

            gap: 2,
          }}
        >
          <InputField
            label="Email Notifications"
            placeholder="Email preferences"
          />
          <InputField label="SMS Notifications" placeholder="SMS preferences" />
        </Box>
      </>
    ),
  },
};

export const BottomDrawer: Story = {
  render: (args) => <DrawerWithButton {...args} />,
  args: {
    title: "Quick Actions",
    anchor: "bottom",
    width: 250,
    children: (
      <Box
        sx={{
          display: "flex",

          gap: 2,
        }}
      >
        <InputField
          label="Quick Note"
          placeholder="Add a note"
          multiline
          rows={2}
        />
        <Button label="Submit" variant="contained" size="small" />
      </Box>
    ),
  },
};

export const WideDrawer: Story = {
  render: (args) => <DrawerWithButton {...args} />,
  args: {
    title: "Detailed Form",
    anchor: "right",
    width: 600,
    children: (
      <>
        <h4>This is Wide Drawer with custom width</h4>
      </>
    ),
  },
};
