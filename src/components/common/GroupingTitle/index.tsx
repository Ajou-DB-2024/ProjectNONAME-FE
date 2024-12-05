import { useState, useEffect, useRef } from "react";

import * as S from './style';
import * as C from '@/constants';

// recoil
import { useRecoilState, useSetRecoilState, useRecoilValue, ResetRecoilState } from "recoil";
// import states from "@/core/recoil/states";

// assets
import {  } from "@tabler/icons-react"

// API
// import dataAPI from "@data/index"

// constants

// types
export enum GROUPING_TITLE_TYPE {
  KIND = "GROUPING_TITLE_TYPE/KIND",
  STRAIGHT = "GROUPING_TITLE_TYPE/STRAIGHT"
}
type GroupingTitleProps = {
  type: GROUPING_TITLE_TYPE
  desc: string
  title?: string
}

// components


const GroupingTitle: React.FC<GroupingTitleProps> = ({ type, desc, title }) => {
  return <S.GroupingTitleArea>
    <S.GroupingTitle viewtype={type}>{title}</S.GroupingTitle>
    <S.TitleDescription viewtype={type}>{desc}</S.TitleDescription>
  </S.GroupingTitleArea>
};

export default GroupingTitle