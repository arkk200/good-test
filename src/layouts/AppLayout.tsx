import { color } from "@/styles/color.style";
import { ReactNode } from "react";
import { styled } from "styled-components";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return <StyledAppLayout>{children}</StyledAppLayout>;
};

export default AppLayout;

const StyledAppLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding: 46px 0;
  box-sizing: border-box;
  background-color: ${color.main};
`;
