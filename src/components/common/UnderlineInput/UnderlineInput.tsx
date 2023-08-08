import { color } from "@/styles/color.style";
import { font } from "@/styles/font.style";
import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {}

const UnderlineInput = ({ placeholder, width }: PropTypes) => {
  return <Input style={{ width }} placeholder={placeholder} />;
};

export default UnderlineInput;

const Input = styled.input`
  ${font.H3Light}
  height: 38px;
  color: ${color.black};
  border-bottom: 2px solid #000;

  &::placeholder {
    color: ${color.gray500};
  }
`;
