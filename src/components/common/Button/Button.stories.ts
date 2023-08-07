import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export const Default: StoryObj = {
  args: {
    children: "asdf",
  },
};
