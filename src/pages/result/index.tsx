import Button from "@/components/common/Button/Button";
import { Column, Row } from "@/components/common/Flex/Flex";
import Text from "@/components/common/Text/Text";
import { color } from "@/styles/color.style";
import styled from "styled-components";

const Result = () => {
  return (
    <Column gap={42} alignItems="center">
      <Text type="H1">결과</Text>
      <Form>
        <Column gap={10}>
          <Row gap={14}>
            <Text type="H3">1. english</Text>
            <Text type="H3">영어</Text>
          </Row>
          <Row gap={14}>
            <Text type="H3">1. english</Text>
            <StrikeThroughText type="H3">불어</StrikeThroughText>
            <Text type="H3">영어</Text>
          </Row>
          <Row gap={14}>
            <Text type="H3">1. english</Text>
            <Text type="H3">영어</Text>
          </Row>
          <Row gap={14}>
            <Text type="H3">1. english</Text>
            <Text type="H3">영어</Text>
          </Row>
          <Row gap={14}>
            <Text type="H3">1. english</Text>
            <Text type="H3">영어</Text>
          </Row>
        </Column>
        <Button
          style={{ alignSelf: "center" }}
          color="main"
          backgroundColor="tertiary"
          width={212}
        >
          메인 페이지로 돌아가기
        </Button>
      </Form>
    </Column>
  );
};

export default Result;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 26px;

  border-radius: 12px;
  border: 2px solid ${color.black};
  background: ${color.secondary};
  box-shadow: 3px 3px 0px 0px ${color.black};
`;

const StrikeThroughText = styled(Text)`
  text-decoration-line: line-through;
  text-decoration-color: ${color.red};
`;
