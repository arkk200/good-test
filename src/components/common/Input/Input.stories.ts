import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

export default {
  component: Input,
  title: "Input",
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  args: {
    label: "라벨",
    placeholder: "Title123",
    backgroundColor: "main",
    width: 100,
  },
};
