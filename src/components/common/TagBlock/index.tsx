import { useState, useEffect, useRef, HTMLAttributes } from "react";

import * as S from './style';
import * as C from '@/constants';

// recoil
import { useRecoilState, useSetRecoilState, useRecoilValue, ResetRecoilState } from "recoil";
// import states from "@/core/recoil/states";

// assets
import {  } from "@tabler/icons-react"
import Checkbox from "../Checkbox";

// API
// import dataAPI from "@data/index"

// constants

// types
type TagBlockProps = {
  children: React.ReactNode,
  selected?: boolean,
  multiSelect?: boolean
} & HTMLAttributes<HTMLDivElement>

// components


const TagBlock: React.FC<TagBlockProps> = ({ 
  children: value, 
  selected = false,
  multiSelect = false,
  ...props 
}) => {
  return <S.TagBlock selected={selected} {...props}>
    { multiSelect && <Checkbox selected={selected}/> }
    <span>{value}</span>
  </S.TagBlock>
};

export default TagBlock