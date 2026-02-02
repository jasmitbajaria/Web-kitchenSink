import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import UploadField from "../components/UploadFields/UploadField";

const meta: Meta<typeof UploadField> = {
  title: "Components/UploadField",
  component: UploadField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    accept: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    helperText: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof UploadField>;

// Default upload
export const Default: Story = {
  args: {
    label: "Upload File",
    onChange: (file) => console.log(file),
    library: "mui",
  },
};

// Image upload
export const ImageUpload: Story = {
  args: {
    label: "Upload Image",
    accept: ".jpg,.png,.jpeg",
    onChange: (file) => console.log(file),
    library: "mui",
  },
};

// Multiple files
// export const MultipleFiles: Story = {
//   args: {
//     label: 'Upload Documents',
//     accept: '.pdf',
//     multiple: true,
//     onChange: (files) => console.log(files),
//     library: 'mui',
//   },
// };

// With helper text
export const WithHelperText: Story = {
  args: {
    label: "Upload Aadhaar",
    helperText: "Only PDF files allowed (max 2MB)",
    onChange: (file) => console.log(file),
    library: "mui",
  },
};

// Error state
export const ErrorState: Story = {
  args: {
    label: "Upload PAN",
    error: true,
    helperText: "Invalid file format",
    onChange: (file) => console.log(file),
    library: "mui",
  },
};

// Loading state
export const Loading: Story = {
  args: {
    label: "Uploading...",
    loading: true,
    onChange: () => {},
    library: "mui",
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    label: "Upload Disabled",
    disabled: true,
    onChange: () => {},
    library: "mui",
  },
};

// Full width
// export const FullWidth: Story = {
//   args: {
//     label: 'Full Width Upload',
//     fullWidth: true,
//     onChange: (file) => console.log(file),
//     library: 'mui',
//   },
//   parameters: {
//     layout: 'padded',
//   },
// };
