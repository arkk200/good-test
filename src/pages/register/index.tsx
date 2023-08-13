import Button from "@/components/common/Button/Button";
import Dropdown from "@/components/common/Dropdown/Dropdown";
import { Column, Row } from "@/components/common/Flex/Flex";
import Input from "@/components/common/Input/Input";
import Text from "@/components/common/Text/Text";
import { color } from "@/styles/color.style";
import { styled } from "styled-components";

const Register = () => {
  return (
    <Column alignItems="center" gap={42}>
      <Text type="H1">사용자 정보 입력</Text>
      <RegisterForm>
        <Column gap={30} alignItems="center">
          <Column gap={18}>
            <Row alignItems="flex-end" gap={24}>
              <Input
                label="이름 / 성별"
                backgroundColor="main"
                placeholder="홍길동"
                width={140}
              />
              <Dropdown
                name="gender"
                list={[
                  {
                    value: "mail",
                    content: "남성",
                  },
                  {
                    value: "femail",
                    content: "여성",
                  },
                ]}
                value=""
                onChange={() => {}}
                placeholder="성별"
                width={152}
              />
            </Row>
            <Row gap={22} alignItems="flex-end">
              <Dropdown
                label="생년월일"
                name="year"
                list={Array(100)
                  .fill(null)
                  .map((_, idx) => 2023 - idx + "")}
                value=""
                onChange={() => {}}
                placeholder="년도"
                width={140}
              />
              <Dropdown
                name="month"
                list={Array(12)
                  .fill(null)
                  .map((_, idx) => idx + 1 + "")}
                value=""
                onChange={() => {}}
                placeholder="월"
                width={66}
              />
              <Dropdown
                name="day"
                list={Array(31)
                  .fill(null)
                  .map((_, idx) => idx + 1 + "")}
                value=""
                onChange={() => {}}
                placeholder="일"
                width={66}
              />
            </Row>
          </Column>
          <Button width={80} backgroundColor="tertiary" color="main">
            완료
          </Button>
        </Column>
      </RegisterForm>
    </Column>
  );
};

export default Register;

const RegisterForm = styled.div`
  padding: 16px 24px 24px;
  border-radius: 12px;
  border: 2px solid ${color.black};
  background-color: ${color.secondary};
  box-shadow: 3px 3px 0px 0px ${color.black};
`;
