import { CSSProperties } from "react";
import { css, styled } from "styled-components";

interface PropTypes {
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  gap?: CSSProperties["gap"];
}

export const Row = styled.div<PropTypes>`
  display: flex;
  ${({ alignItems, justifyContent, gap }) =>
    css({
      alignItems,
      justifyContent,
      gap,
    })}
`;

export const Column = styled.div<PropTypes>`
  display: flex;
  flex-direction: column;
  ${({ alignItems, justifyContent, gap }) =>
    css({
      alignItems,
      justifyContent,
      gap,
    })}
`;
