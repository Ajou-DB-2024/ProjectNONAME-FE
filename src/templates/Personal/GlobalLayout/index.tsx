"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import PageNavigation from "@/components/common/PageNavigation";

// constants

// types
type PersonalGlobalLayoutProps = {
  children?: ReactNode
}

// components


const PersonalGlobalLayout: React.FC<PersonalGlobalLayoutProps> = ({ children }) => {
  return <S.PersonalGlobalLayoutWrap>
    <PageNavigation info={{prev: "김화균의 Weave", curr: "동아리 목록"}}/>
    <S.PersonalServiceArea>
      {children}
    </S.PersonalServiceArea>
  </S.PersonalGlobalLayoutWrap>
};

export default PersonalGlobalLayout