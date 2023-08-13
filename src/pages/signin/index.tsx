import IconGoogle from "@/assets/icons/IconGoogle";
import Button from "@/components/common/Button/Button";
import Text from "@/components/common/Text/Text";
import { color } from "@/styles/color.style";
import { styled } from "styled-components";

const SignIn = () => {
  return (
    <StyledSignIn>
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
          <GoogleSignInBox>
            <IconGoogle />
            Google
          </GoogleSignInBox>
        </Button>
      </SignInButtonList>
    </StyledSignIn>
  );
};

export default SignIn;

const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`;

const SignInButtonList = styled.div`
  padding: 20px 24px;
  border: 2px solid #000;
  border-radius: 12px;
  background-color: ${color.secondary};
  box-shadow: 3px 3px 0px 0px #000;
`;

const GoogleSignInBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
