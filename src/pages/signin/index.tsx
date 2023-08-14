import IconGoogle from "@/assets/icons/IconGoogle";
import Button from "@/components/common/Button/Button";
import { Column, Row } from "@/components/common/Flex/Flex";
import Text from "@/components/common/Text/Text";
import { color } from "@/styles/color.style";
import { styled } from "styled-components";

const SignIn = () => {
  return (
    <Column alignItems="center" gap={42}>
      <Text type="H1">로그인</Text>
      <SignInButtonList>
        <Button
          size="LARGE"
          color="black"
          backgroundColor="main"
          width={200}
          childrenAlign="flex-start"
          padding="0 14px"
        >
          <Row alignItems="center" gap={8}>
            <IconGoogle />
            Google
          </Row>
        </Button>
      </SignInButtonList>
    </Column>
  );
};

export default SignIn;

const SignInButtonList = styled.div`
  padding: 20px 24px;
  border: 2px solid ${color.black};
  border-radius: 12px;
  background-color: ${color.secondary};
  box-shadow: 3px 3px 0px 0px ${color.black};
`;
