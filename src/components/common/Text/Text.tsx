import { Color, color } from "@/styles/color.style";
import { Font, FontWeight, font, fontWeight } from "@/styles/font.style";
import { CSSProperties, ReactNode } from "react";
import { css, styled } from "styled-components";

interface PropTypes {
  children: ReactNode;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  type: Font;
  weight?: FontWeight;
  color?: Color;
}

const Text = styled.p<PropTypes>`
  ${({ width, height, color: colorName }) =>
    css({
      width,
      height,
      color: color[colorName ?? "black"],
    })}

  ${(props) => font[props.type]}
  ${(props) => fontWeight[props.weight ?? "bold"]}
  user-select: none;
`;

export default Text;
