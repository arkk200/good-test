import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

export default {
  component: Text,
  title: "Text",
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export const Default: StoryObj<typeof Text> = {
  args: {
    children: "Title123",
  },
};
