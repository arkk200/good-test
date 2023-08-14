import IconTimer from "@/assets/icons/IconTimer";
import Button from "@/components/common/Button/Button";
import { Column, Row } from "@/components/common/Flex/Flex";
import ProgressBarTimer from "@/components/common/ProgressBarTimer/ProgressBarTimer";
import Text from "@/components/common/Text/Text";
import useTimer from "@/hooks/useTimer";
import { color } from "@/styles/color.style";
import { font } from "@/styles/font.style";
import { useEffect } from "react";
import { styled } from "styled-components";

const Test = () => {
  const { start } = useTimer(3000, () => {
    console.log("timer end");
  });

  useEffect(() => {
    start();
  }, [start]);

  return (
    <Form>
      <Row gap={52} alignItems="center">
        <div style={{ visibility: "hidden" }}>
          <Text type="H1">1/20</Text>
        </div>
        <English>english</English>
        <Text type="H1">1/20</Text>
      </Row>
      <Row gap={14} alignItems="center">
        <IconTimer />
        <ProgressBarTimer time={3} />
        <div style={{ visibility: "hidden" }}>
          <IconTimer />
        </div>
      </Row>
      <Column gap={40}>
        <Row gap={44}>
          <Button
            color="black"
            backgroundColor="main"
            width={426}
            size="XLARGE"
          >
            영어
          </Button>
          <Button
            color="black"
            backgroundColor="main"
            width={426}
            size="XLARGE"
          >
            한국어
          </Button>
        </Row>
        <Row gap={44}>
          <Button
            color="black"
            backgroundColor="main"
            width={426}
            size="XLARGE"
          >
            한국어
          </Button>
          <Button
            color="black"
            backgroundColor="main"
            width={426}
            size="XLARGE"
          >
            한국어
          </Button>
        </Row>
      </Column>
    </Form>
  );
};

export default Test;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 78px;
  padding: 64px;

  border: 2px solid ${color.black};
  border-radius: 12px;
  background-color: ${color.secondary};
  box-shadow: 3px 3px 0px 0px ${color.black};
`;

const English = styled.p`
  ${font.H1}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 368px;
  height: 68px;

  border: 2px solid ${color.black};
  border-radius: 12px;
  background-color: ${color.main};
  box-shadow: 3px 3px 0px 0px ${color.black};

  user-select: none;
`;
