import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import AppModal from "../components/Modal/AppModal";

const meta: Meta<typeof AppModal> = {
  title: "Components/AppModal",
  component: AppModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppModal>;

export const WithTextAndButtons: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Modal
        </Button>

        <AppModal
          open={open}
          title="Delete Confirmation"
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          confirmText="Delete"
          cancelText="Cancel"
          width={420}
        >
          Are you sure you want to delete this item? This action cannot be undone.
        </AppModal>
      </>
    );
  },
};


export const WithDataTable: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Table Modal
        </Button>

        <AppModal
          open={open}
          title="User List"
          onClose={() => setOpen(false)}
          width={650}
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {[
                { id: 1, name: "John Doe", email: "john@test.com" },
                { id: 2, name: "Jane Smith", email: "jane@test.com" },
                { id: 3, name: "Alex Brown", email: "alex@test.com" },
              ].map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AppModal>
      </>
    );
  },
};

