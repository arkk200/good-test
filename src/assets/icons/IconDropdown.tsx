import { SVGAttributes } from "react";

interface PropTypes extends SVGAttributes<HTMLOrSVGElement> {
  isOpen: boolean;
}

const IconDropdown = ({ isOpen }: PropTypes) => {
  return isOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M13 9.34375L19.5 15.8437L18.3354 17.0083L13 11.6458L7.66458 16.9812L6.5 15.8167L13 9.34375Z"
        fill="black"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M13 16.6563L6.5 10.1563L7.66458 8.99167L13 14.3542L18.3354 9.01875L19.5 10.1833L13 16.6563Z"
        fill="black"
      />
    </svg>
  );
};

export default IconDropdown;
