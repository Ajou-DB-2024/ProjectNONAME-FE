import React from "react";
import * as S from "./style";
import ServiceButton from "../common/ServiceButton";

type SubmitSectionProps = {
  totalQuestions: number;
};

const SubmitSection: React.FC<SubmitSectionProps> = ({ totalQuestions }) => {
  return (
    <S.Container>
      <S.TotalText>총 {totalQuestions}개의 질문이 생성되었어요</S.TotalText>
      <ServiceButton 
        size={"SERVICE_BUTTON/SIZE/NORMAL"} 
        theme={"SERVICE_BUTTON/THEME/COLORED"} 
        mode={"main"}    
        style={{width: "100%", height: "4rem"}}    
        onClick={() => location.href = ("/test/recruit/create")}
      >지원폼 만들기</ServiceButton>
    </S.Container>
  );
};

export default SubmitSection;
