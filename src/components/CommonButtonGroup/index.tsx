import React from "react";
import * as S from "./style";
import ServiceButton from "@/components/common/ServiceButton";
import { ServiceButtonSize, ServiceButtonTheme } from "../common/ServiceButton/type";

const CommonButtonGroup: React.FC = () => {
  return (
    <S.Container>
      <p>리크루팅 생성이 준비되었어요</p>
      <ServiceButton
        size={ServiceButtonSize.XLARGE}
        theme={ServiceButtonTheme.DEFAULT}
        mode="main"
      >
        리크루팅 생성하기
      </ServiceButton>
    </S.Container>
  );
};

export default CommonButtonGroup;
