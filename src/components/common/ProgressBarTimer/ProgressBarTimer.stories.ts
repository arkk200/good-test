import type { Meta, StoryObj } from "@storybook/react";
import ProgressBarTimer from "./ProgressBarTimer";

export default {
  component: ProgressBarTimer,
  title: "ProgressBarTimer",
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBarTimer>;

export const Default: StoryObj<typeof ProgressBarTimer> = {
  args: {
    time: 10,
  },
};
