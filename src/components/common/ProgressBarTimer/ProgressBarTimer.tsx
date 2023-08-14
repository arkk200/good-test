import { color } from "@/styles/color.style";
import { keyframes, styled } from "styled-components";

interface PropTypes {
  time: number;
}

const ProgressBarTimer = ({ time }: PropTypes) => {
  return (
    <StyledProgressBarTimer>
      <ProgressBarTrack />
      <ProgressBar time={time} />
      <ProgressBarFrame />
    </StyledProgressBarTimer>
  );
};

export default ProgressBarTimer;

const StyledProgressBarTimer = styled.div`
  position: relative;
  width: 780px;
  height: 22px;

  border-radius: 26px;
  filter: drop-shadow(3px 3px 0px ${color.black});

  overflow: hidden;
`;

const ProgressBarFrame = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 780px;
  height: 22px;

  border-radius: 26px;
  border: 3px solid ${color.black};
  background-color: transparent;
  box-sizing: border-box;
`;

const ProgressBarTrack = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 780px;
  height: 22px;

  border-radius: 26px;
  background-color: ${color.tertiary};
  box-sizing: border-box;
`;

const shrinkAnimation = keyframes`
  from {
    right: 0;
  }
  to {
    right: 780px;
  }
`;

const ProgressBar = styled.div<{ time: number }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 780px;
  height: 22px;

  animation: ${shrinkAnimation} ${({ time }) => time}s forwards;

  border-radius: 26px;
  border: 3px solid ${color.black};
  background: ${color.quaternary};
  box-sizing: border-box;
`;
