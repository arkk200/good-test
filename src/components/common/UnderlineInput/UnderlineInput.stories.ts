import { Meta, StoryObj } from "@storybook/react";
import UnderlineInput from "./UnderlineInput";

export default {
  component: UnderlineInput,
  title: "UnderlineInput",
  tags: ["autodocs"],
} satisfies Meta<typeof UnderlineInput>;

export const Default: StoryObj<typeof UnderlineInput> = {
  args: {
    placeholder: "asdf",
    width: 1000,
  },
};
