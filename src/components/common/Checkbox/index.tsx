import { useState, useEffect, useRef, HTMLAttributes } from "react";

import * as S from './style';
import * as C from '@/constants';

// recoil
// import states from "@/core/recoil/states";

// assets
import { IconCheck } from "@tabler/icons-react"

// API
// import dataAPI from "@data/index"

// constants

// types
type CheckboxProps = {
  selected: boolean
} & HTMLAttributes<HTMLDivElement>

// components

const Checkbox: React.FC<CheckboxProps> = ({ selected, onClick, ...props }) => {
  return <S.Checkbox selected={selected} onClick={onClick}>
    <input type="checkbox" {...props} value={selected.toString()} hidden/>
    <IconCheck size={12} stroke={1.8} 
      color={selected ? "var(--service-color-H)" : "transparent"}
    />
  </S.Checkbox>
};

export default Checkbox