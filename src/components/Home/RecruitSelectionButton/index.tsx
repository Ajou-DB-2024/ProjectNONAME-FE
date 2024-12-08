import { useState, useEffect, useRef, HTMLAttributes } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"

// API
// import dataAPI from "@data/index"

// constants

// types
type RecruitSelectionButtonProps = {
  name: string,
  is_open: boolean
} & HTMLAttributes<HTMLDivElement>

// components


const RecruitSelectionButton: React.FC<RecruitSelectionButtonProps> = ({ name, is_open, ...props }) => {
  return <S.RecruitSelectionButton { ...props }>
    <h3>{name}</h3>
    <S.OpenDisplayArrow $is_open={is_open}/>
  </S.RecruitSelectionButton>
};

export default RecruitSelectionButton