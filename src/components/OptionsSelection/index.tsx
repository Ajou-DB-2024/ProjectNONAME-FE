import React from "react";
import * as S from "./style";
import ServiceButton from "@/components/common/ServiceButton";
import { ServiceButtonSize, ServiceButtonTheme } from "../common/ServiceButton/type";

const OptionsSection: React.FC = () => {
  return (
    <S.Container>
      <S.Row>
        <ServiceButton
          size={ServiceButtonSize.NORMAL}
          theme={ServiceButtonTheme.DEFAULT}
          mode="main"
          style={{ width: "100%" }}
        >
          기간 연장
        </ServiceButton>
        <ServiceButton
          size={ServiceButtonSize.NORMAL}
          theme={ServiceButtonTheme.COLORED}
          mode="main"
          style={{ width: "100%", backgroundColor: "#ec0a0a" }}
        >
          리크루팅 종료
        </ServiceButton>
      </S.Row>
      <ServiceButton
        size={ServiceButtonSize.NORMAL}
        theme={ServiceButtonTheme.DEFAULT}
        mode="main"
        style={{width: "100%"}}
      >
        동아리 소개페이지 수정
      </ServiceButton>
    </S.Container>
  );
};

export default OptionsSection;
