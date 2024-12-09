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
type IconicButtonProps = {
  label?: string
  expand?: boolean
  mode: "main" | "sub"
} & HTMLAttributes<HTMLDivElement>

// components


const IconicButton: React.FC<IconicButtonProps> = ({ label, mode, expand = false, children, ...props }) => {
  return <S.IconicButton $mode={ mode } $expand={ expand } {...props}>
    { children }
  </S.IconicButton>
};

export default IconicButton