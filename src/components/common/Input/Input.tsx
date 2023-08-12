import { Color, color } from "@/styles/color.style";
import { font, fontWeight } from "@/styles/font.style";
import { InputHTMLAttributes } from "react";
import { css, styled } from "styled-components";

interface PropTypes
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "LARGE" | "SMALL";
  backgroundColor: Color;
}

const Input = ({
  placeholder,
  width,
  backgroundColor: backgroundColorName,
  size = "LARGE",
}: PropTypes) => {
  return (
    <StyledInput
      placeholder={placeholder}
      style={{ width, backgroundColor: color[backgroundColorName] }}
      size={size}
    />
  );
};

export default Input;

const StyledInput = styled.input<{ size: "LARGE" | "SMALL" }>`
  display: flex;
  align-items: center;

  color: ${color.black};
  border: 2px solid #000;
  border-radius: 6px;
  box-shadow: 3px 3px 0px 0px #000;

  ${(props) =>
    props.size === "LARGE"
      ? css`
          ${font.p2}
          height: 42px;
          padding: 0 16px;
        `
      : props.size === "SMALL"
      ? css`
          ${font.p3}
          height: 34px;
          padding: 0 12px;
        `
      : null}

  ${fontWeight.light}

  &::placeholder {
    color: ${color.gray500};
  }
`;
