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
    width: 100,
  },
};

export const GoogleLogin: StoryObj<typeof Button> = {
  args: {
    children: (
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_3_72)">
            <path
              d="M8.16321 6.54547V9.64368H12.5565C12.3636 10.64 11.7847 11.4837 10.9164 12.051L13.5658 14.0656C15.1094 12.6692 15.9999 10.6183 15.9999 8.18192C15.9999 7.61466 15.948 7.06915 15.8515 6.54556L8.16321 6.54547Z"
              fill="#4285F4"
            />
            <path
              d="M3.58834 9.52274L2.99081 9.97099L0.875732 11.5855C2.21896 14.1964 4.97202 16.0001 8.16311 16.0001C10.3671 16.0001 12.215 15.2874 13.5657 14.0656L10.9163 12.051C10.1891 12.531 9.2614 12.8219 8.16311 12.8219C6.04066 12.8219 4.23736 11.4183 3.59167 9.52735L3.58834 9.52274Z"
              fill="#34A853"
            />
            <path
              d="M0.875759 4.41458C0.3192 5.49091 0.00012207 6.70548 0.00012207 8.00001C0.00012207 9.29454 0.3192 10.5091 0.875759 11.5854C0.875759 11.5927 3.59196 9.51997 3.59196 9.51997C3.4287 9.03997 3.33219 8.53091 3.33219 7.99992C3.33219 7.46894 3.4287 6.95988 3.59196 6.47988L0.875759 4.41458Z"
              fill="#FBBC05"
            />
            <path
              d="M8.16328 3.18547C9.36553 3.18547 10.4342 3.59273 11.2876 4.3782L13.6252 2.08731C12.2078 0.792781 10.3674 0 8.16328 0C4.97219 0 2.21896 1.79637 0.875732 4.41458L3.59185 6.48004C4.23746 4.5891 6.04083 3.18547 8.16328 3.18547Z"
              fill="#EA4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_72">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div>Google</div>
      </div>
    ),
    color: "black",
    backgroundColor: "secondary",
    width: 200,
    padding: "0 14px",
    size: "LARGE",
    childrenAlign: "flex-start",
  },
};
