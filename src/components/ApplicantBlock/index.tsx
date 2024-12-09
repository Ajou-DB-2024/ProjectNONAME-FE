import React from "react";
import * as S from "./style";
import { IconChevronRight, IconUser } from "@tabler/icons-react";

type ApplicantBlockProps = {
  name: string;
  grade: string;
  department: string;
  onClick: () => void; // 지원서 열람 버튼 클릭 이벤트
};

const ApplicantBlock: React.FC<ApplicantBlockProps> = ({ name, grade, department, onClick }) => {
  return (
    <S.Container>
      <S.Profile>
        <IconUser/>
      </S.Profile>
      <S.Info>
        <S.Name>
          {name} <S.Grade>{grade}</S.Grade>
        </S.Name>
        <S.Department>{department}</S.Department>
      </S.Info>
      <S.Action onClick={onClick}>
        <span>지원서 열람</span>
        <IconChevronRight/>
      </S.Action>
    </S.Container>
  );
};

export default ApplicantBlock;
