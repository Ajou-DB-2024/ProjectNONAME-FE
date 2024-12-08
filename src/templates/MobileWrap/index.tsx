"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import GlobalAlert from "@/components/common/GlobalAlert";

// recoil
// import states from "@core/recoil/states";

// styled-components
import * as S from './style';

// types
type MobileWrapProps = {
  children?: React.ReactNode
}

// constants
const BACKGROUND_IMG = "/assets/image/undraw_forms_re_pkrt.svg";

// components


const MobileWrap: React.FC<MobileWrapProps> = ({ children }) => {
  return <S.MainWrap>
      <GlobalAlert/>
      {children}
      <S.BackgroundImage src={BACKGROUND_IMG} alt=""
        width={391} height={319}  
      />
  </S.MainWrap>
};

export default MobileWrap