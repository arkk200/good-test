import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
}

const Button = ({ children }: PropTypes) => {
  return <button>{children}</button>;
};

export default Button;
