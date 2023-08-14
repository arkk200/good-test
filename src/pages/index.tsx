import Button from "@/components/common/Button/Button";
import { Column, Row } from "@/components/common/Flex/Flex";
import Input from "@/components/common/Input/Input";
import Text from "@/components/common/Text/Text";
import { color } from "@/styles/color.style";
import { Inter } from "next/font/google";
import { styled } from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Column alignItems="center" gap={30}>
      <Tset type="D1">Tset</Tset>
      <Form>
        <Column gap={24}>
          <Column gap={16}>
            <Input
              label="PIN"
              backgroundColor="main"
              placeholder="000000"
              width={246}
            />
            <Button
              backgroundColor="quaternary"
              color="main"
              width={246}
              size="LARGE"
            >
              참가하기
            </Button>
            <Button
              backgroundColor="main"
              color="quaternary"
              width={246}
              size="LARGE"
            >
              방 만들기
            </Button>
          </Column>
          <Column gap={16}>
            <Row justifyContent="space-between">
              <Button
                backgroundColor="tertiary"
                color="main"
                size="SMALL"
                width={102}
              >
                Tset 만들기
              </Button>
              <Button
                backgroundColor="tertiary"
                color="main"
                size="SMALL"
                width={102}
              >
                시험 기록보기
              </Button>
            </Row>
            <Row justifyContent="space-between">
              <Button
                backgroundColor="tertiary"
                color="main"
                size="SMALL"
                width={124}
              >
                내 정보 수정하기
              </Button>
              <Button
                backgroundColor="quaternary"
                color="main"
                size="SMALL"
                width={102}
              >
                로그아웃
              </Button>
            </Row>
          </Column>
        </Column>
      </Form>
    </Column>
  );
}

const Tset = styled(Text)`
  text-shadow: 3px 3px 0px ${color.quaternary};
`;

const Form = styled.div`
  padding: 18px 24px 24px;
  border: 2px solid ${color.black};
  border-radius: 12px;
  background: ${color.secondary};
  box-shadow: 3px 3px 0px 0px ${color.black};
`;
