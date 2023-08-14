import Button from "@/components/common/Button/Button";
import Dropdown from "@/components/common/Dropdown/Dropdown";
import { Column } from "@/components/common/Flex/Flex";
import Participant from "@/components/common/Participant/Participant";
import Text from "@/components/common/Text/Text";
import { color } from "@/styles/color.style";
import { styled } from "styled-components";

const CreateRoom = () => {
  return (
    <Column gap={28} alignItems="center">
      <Text type="H1">참가자</Text>
      <Column gap={18} alignItems="center">
        <Dropdown
          label="주제"
          name="subjects"
          value=""
          list={["영어시험1", "영어시험2", "영어시험3"]}
          onChange={() => {}}
          placeholder="주제"
          width={402}
        />
        <Form>
          <ParticipantsListBox>
            <ParticipantsList>
              <Participant src="/sleep-cat.png" name="카더가든" />
              <Participant src="/sleep-cat.png" name="가든말든" />
              <Participant src="/sleep-cat.png" name="킨더가든" />
              <Participant src="/sleep-cat.png" name="카눈태풍" />
              <Participant src="/sleep-cat.png" name="킨더조이" />
              <Participant src="/sleep-cat.png" name="킨드레드" />
              <Participant src="/sleep-cat.png" name="커튼걷은" />
              <Participant src="/sleep-cat.png" name="카라큘라" />
              <Participant src="/sleep-cat.png" name="국민카드" />
              <Participant src="/sleep-cat.png" name="카자흐스탄" />
              <Participant src="/sleep-cat.png" name="창원NC" />
            </ParticipantsList>
          </ParticipantsListBox>
          <Button
            color="main"
            backgroundColor="tertiary"
            width={96}
            size="LARGE"
          >
            시작하기
          </Button>
        </Form>
      </Column>
    </Column>
  );
};

export default CreateRoom;

const ParticipantsListBox = styled.div`
  flex: 1;
  overflow: auto;
  width: 100%;
  max-height: 370px;
  padding-right: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;

const ParticipantsList = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

const Form = styled.div`
  width: 1024px;
  min-height: 422px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid ${color.black};
  border-radius: 12px;
  background-color: ${color.secondary};
  box-shadow: 3px 3px 0px 0px ${color.black};
`;
