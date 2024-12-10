import { useState, useEffect, useRef } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import { IconChevronRight } from "@tabler/icons-react"

// API
// import dataAPI from "@data/index"

// constants

// types
import { ClubType } from "@/types/Club";

type RecruitBlockProps = {
  name: string,
  type: ClubType,
  depart: string
}

// components
const CLUB_TYPE_TEXT = {
  [ClubType.CONFERENCE]: "소학회",
  [ClubType.CLUB]: "동아리",
}

const RecruitBlock: React.FC<RecruitBlockProps> = ({ name, type, depart }) => {
  return <S.RecruitBlock onClick={() => (location.href = "/test/club/1")}>
    <S.TitleArea>
      <section>
        <h1>{name}</h1>
        <h3>{CLUB_TYPE_TEXT[type]}</h3>
      </section>
      <IconChevronRight color="var(--service-color-J)" width={16} style={{
        marginTop: "0.25em"
      }}/>
    </S.TitleArea>
    <S.Department>{ depart }</S.Department>
  </S.RecruitBlock>
};

export default RecruitBlock