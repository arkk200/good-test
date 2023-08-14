import { color } from "@/styles/color.style";
import Image from "next/image";
import { styled } from "styled-components";
import Text from "../Text/Text";

interface PropTypes {
  src: string;
  name: string;
}

const Participant = ({ src, name }: PropTypes) => {
  return (
    <StyledParticipant>
      <ParticipantProfile>
        <Image
          src={src}
          alt="sleep-cat"
          width={22}
          height={22}
          style={{
            width: 22,
            height: "auto",
          }}
        />
      </ParticipantProfile>
      <Text type="p2">{name}</Text>
    </StyledParticipant>
  );
};

export default Participant;

const ParticipantProfile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 22px;
  height: 22px;
`;

const StyledParticipant = styled.div`
  min-width: 106px;
  height: 38px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;

  border: 2px solid ${color.black};
  border-radius: 6px;
  background-color: ${color.main};
  box-shadow: 3px 3px 0px 0px ${color.black};

  box-sizing: border-box;
`;
