import { useState, useEffect, useRef, HTMLAttributes } from "react";

import * as S from './style';
import * as C from '@/constants';

// recoil
// import states from "@/core/recoil/states";

// assets
import {  } from "@tabler/icons-react"

// API
// import dataAPI from "@data/index"

// constants

// types
type BriefBlockProps = {
  title: string,
  children: string | number,
  unit: string,
  align?: "middle" | "default"
} & HTMLAttributes<HTMLDivElement>

// components


const BriefBlock: React.FC<BriefBlockProps> = ({ title, children: value, unit, align, ...props }) => {
  return <S.BriefBlock {...props}>
    <h2>{title}</h2>
    <S.ValueArea $align={align}>
      <span>{value}</span>
      {(unit.length > 0) && <span>{unit}</span>}
    </S.ValueArea>
  </S.BriefBlock>
};

export default BriefBlock