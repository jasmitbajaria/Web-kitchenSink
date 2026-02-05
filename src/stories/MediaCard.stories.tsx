import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MediaCard from "../components/MediaCards/MediaCard";

const meta: Meta<typeof MediaCard> = {
  title: "Components/MediaCard",
  component: MediaCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    thumbnail: {
      control: "text",
    },
    onClick: {
      action: "media card clicked",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MediaCard>;

export const Default: Story = {
  args: {
    title: "For Desktop: Mantra RD Device Installation",
    channelName: "PayPoint",
    channelLogo:
      "https://yt3.googleusercontent.com/L4_MWdqRfZpj0smXGv8llDqTIxI8-kAKjhyF4CkjrhlMb1_oZaX9kHTyTnh1QFvTlM4fncSrlTA=s160-c-k-c0x00ffffff-no-rj",
    videoId: "JwMhW5pbIY0",
    // thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    thumbnail:
      "https://yt3.googleusercontent.com/L4_MWdqRfZpj0smXGv8llDqTIxI8-kAKjhyF4CkjrhlMb1_oZaX9kHTyTnh1QFvTlM4fncSrlTA=s160-c-k-c0x00ffffff-no-rj",
  },
};
