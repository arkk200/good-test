import { color } from "@/styles/color.style";
import { font } from "@/styles/font.style";
import { Inter } from "next/font/google";
import { styled } from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <StyledHome>
      <Tset>Tset</Tset>
    </StyledHome>
  );
}

const StyledHome = styled.div``;

const Tset = styled.p`
  ${font.D1}
  text-shadow: 3px 3px 0px ${color.quaternary};
`;
