import { Color, color } from "@/styles/color.style";
import { Font, FontWeight, font, fontWeight } from "@/styles/font.style";
import { CSSProperties, ReactNode } from "react";
import { styled } from "styled-components";

interface PropTypes {
  children: ReactNode;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  type: Font;
  weight?: FontWeight;
  color?: Color;
}

const Text = ({
  children,
  width,
  height,
  type,
  weight = "bold",
  color: colorName = "black",
}: PropTypes) => {
  return (
    <StyledText
      style={{ width, height, color: color[colorName] }}
      type={type}
      weight={weight}
    >
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.p<{ type: Font; weight: FontWeight }>`
  ${(props) => font[props.type]}
  ${(props) => fontWeight[props.weight]}
  user-select: none;
`;
