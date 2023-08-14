import LottieLoading from "@/assets/lotties/loading.json";
import Button from "@/components/common/Button/Button";
import { Column } from "@/components/common/Flex/Flex";
import Text from "@/components/common/Text/Text";
import Lottie, { Options } from "react-lottie";

const Waiting = () => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: LottieLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Column alignItems="center" gap={50}>
      <Text type="D1">시험 대기하는 중...</Text>
      <Lottie options={defaultOptions} width={48} height={48} />
      <Button color="main" backgroundColor="tertiary" width={102} size="SMALL">
        나가기
      </Button>
    </Column>
  );
};

export default Waiting;
