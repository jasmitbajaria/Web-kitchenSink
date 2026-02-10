import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import ModalForm from "../components/ModalForm/ModalForm";

const meta: Meta<typeof ModalForm> = {
  title: "Components/ModalForm",
  component: ModalForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ModalForm>;

const ModalWrapper = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<"address" | "mobile" | "email">("address");

  const handleOpen = (selectedType: "address" | "mobile" | "email") => {
    setType(selectedType);
    setOpen(true);
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => handleOpen("address")}
        >
          Update Address
        </Button>

        <Button
          variant="contained"
          onClick={() => handleOpen("mobile")}
        >
          Update Mobile Number
        </Button>

        <Button
          variant="contained"
          onClick={() => handleOpen("email")}
        >
          Update Email ID
        </Button>
      </Stack>

      <ModalForm
        open={open}
        type={type}
        onClose={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
      />
    </>
  );
};

export const Default: Story = {
  render: () => <ModalWrapper />,
};