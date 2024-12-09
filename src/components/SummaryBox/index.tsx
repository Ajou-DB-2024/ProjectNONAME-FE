import React from "react";
import * as S from "./style";
import BriefBlock from "../common/BriefBlock";

const SummaryBox: React.FC<{ status: boolean; remainingTime: string; applicantCount: number }> = ({
  remainingTime,
  applicantCount,
  status
}) => {
  return (
    <S.Container>
      {
        status ? <S.Box>
          <span>리크루팅 종료까지</span>
          <span>{remainingTime}</span>
        </S.Box> : <S.CloseBox>
          <span>리크루팅 종료됨</span>
        </S.CloseBox>
      }
      {
        status ? 
        <BriefBlock title={"총 지원자 수"} children={applicantCount} unit={"명"} align="middle"/>
        : <BriefBlock style={{ opacity: 0.3, color: "#aaaaaa" }} title={"총 지원자 수"} children={applicantCount} unit={"명"} align="middle"/>
      }
    </S.Container>
  );
};

export default SummaryBox;
