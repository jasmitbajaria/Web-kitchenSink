import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import DataTable from "../components/DataTable/DataTable";

const rows = [
  {
    service: "First Login OTP charge",
    amount: 1,
    status: "Success",
  },
  {
    service: "DigiKhata - Fund Transfer",
    amount: 100,
    status: "Failed",
  },
  {
    service: "AEPS 2FA",
    amount: 1,
    status: "Success",
  },
];

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    rows,
  },
};
