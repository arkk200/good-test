import { Color, color } from "@/styles/color.style";
import { FontWeight, font, fontWeight } from "@/styles/font.style";
import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import styled, { css } from "styled-components";

interface PropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width: CSSProperties["width"];
  backgroundColor: Color;
  color: Color;
  size?: "LARGE" | "MEDIUM" | "SMALL";
  weight?: FontWeight;
  childrenAlign?: CSSProperties["justifyContent"];
  padding?: CSSProperties["padding"];
}

const Button = ({
  children,
  width,
  color: colorName,
  backgroundColor: backgroundColorName,
  size = "MEDIUM",
  weight = "bold",
  childrenAlign = "center",
  padding,
}: PropTypes) => {
  return (
    <StyledButton
      style={{
        width,
        color: color[colorName],
        backgroundColor: color[backgroundColorName],
        justifyContent: childrenAlign,
        padding,
      }}
      size={size}
      weight={weight}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  size: PropTypes["size"];
  weight: FontWeight;
}>`
  border-radius: 6px;
  border: 2px solid ${color.black};
  box-shadow: 3px 3px 0px 0px ${color.black};
  display: flex;
  align-items: center;

  ${({ size }) =>
    size === "LARGE"
      ? css`
          ${font.p1}
          height: 42px;
        `
      : size === "MEDIUM"
      ? css`
          ${font.p2}
          height: 38px;
        `
      : size === "SMALL"
      ? css`
          ${font.p3}
          height: 34px;
        `
      : null}

  ${(props) => fontWeight[props.weight]}
`;
