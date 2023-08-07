import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: "qwer",
    color: "black",
    backgroundColor: "secondary",
    width: "1000px",
  },
};
