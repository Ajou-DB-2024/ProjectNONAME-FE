import React from "react";
import * as S from "./style";
import BriefBlock from "../common/BriefBlock";

const SummaryBox: React.FC<{ remainingTime: string; applicantCount: number }> = ({
  remainingTime,
  applicantCount,
}) => {
  return (
    <S.Container>
      <S.Box>
        <span>리크루팅 종료까지</span>
        <span>{remainingTime}</span>
      </S.Box>
      <BriefBlock title={"총 지원자 수"} children={applicantCount} unit={"명"} align="middle"/>
    </S.Container>
  );
};

export default SummaryBox;
