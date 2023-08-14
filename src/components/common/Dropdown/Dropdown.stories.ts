import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  component: Dropdown,
  title: "Dropdown",
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    label: "라벨123",
    placeholder: "년도",
    name: "year",
    width: 100,
    list: ["2001", "2002", "2003", "2004"],
    onChange: (name, value) => {},
    value: "",
  },
};
