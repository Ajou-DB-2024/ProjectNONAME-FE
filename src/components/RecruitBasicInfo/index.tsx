import React from "react";
import * as S from "./style";

const RecruitingBasicInfo: React.FC = () => {
  return (
    <S.Container>
      <h2>리크루팅 기본정보</h2>
      <label>
        리크루팅 이름
        <input type="text" placeholder="리크루팅 이름 (ex: 2024-2 Whois 신입회원)" />
      </label>
      <label>
        리크루팅 진행기간
        <div>
          <input type="datetime-local" placeholder="시작시간" />
          <span>부터</span>
          <input type="datetime-local" placeholder="종료시간" />
          <span>까지</span>
        </div>
      </label>
      <label>
        <input type="checkbox" />
        상시지원으로 만들기
      </label>
    </S.Container>
  );
};

export default RecruitingBasicInfo;
