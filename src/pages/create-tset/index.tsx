import IconAdd from "@/assets/icons/IconAdd";
import Button from "@/components/common/Button/Button";
import { Column, Row } from "@/components/common/Flex/Flex";
import Input from "@/components/common/Input/Input";
import Text from "@/components/common/Text/Text";
import UnderlineInput from "@/components/common/UnderlineInput/UnderlineInput";
import { color } from "@/styles/color.style";
import { styled } from "styled-components";

const DEFAULT_TSET_LIST = [{ id: 1 }, { id: 2 }, { id: 3 }];

const CreateTset = () => {
  return (
    <Column alignItems="center" gap={42}>
      <Text type="H1">Tset 만들기</Text>
      <Form>
        <Column gap={36}>
          <Row gap={14} alignItems="center">
            <Text type="H3" weight="light">
              주제:
            </Text>
            <UnderlineInput placeholder="주제123" width={424} />
          </Row>
          <Column gap={26}>
            <Column gap={18}>
              <Row gap={20}>
                <Input
                  label="영단어"
                  backgroundColor="main"
                  placeholder="english"
                  size="SMALL"
                  width={180}
                />
                <Input
                  label="의미"
                  backgroundColor="main"
                  placeholder="영어"
                  size="SMALL"
                  width={232}
                />
              </Row>
              {DEFAULT_TSET_LIST.map((tset, idx) => (
                <Row key={tset.id} gap={20}>
                  <Input backgroundColor="main" size="SMALL" width={180} />
                  <Input backgroundColor="main" size="SMALL" width={232} />
                </Row>
              ))}
              <Button
                style={{ alignSelf: "center" }}
                color="main"
                backgroundColor="tertiary"
                width={64}
              >
                <IconAdd />
              </Button>
            </Column>
            <Row gap={18} justifyContent="center">
              <Button color="main" backgroundColor="tertiary" width={108}>
                돌아가기
              </Button>
              <Button color="main" backgroundColor="tertiary" width={108}>
                저장하기
              </Button>
            </Row>
          </Column>
        </Column>
      </Form>
    </Column>
  );
};

export default CreateTset;

const Form = styled.div`
  padding: 26px;
  border: 2px solid #000;
  border-radius: 12px;
  background: ${color.secondary};
  box-shadow: 3px 3px 0px 0px #000;
`;
