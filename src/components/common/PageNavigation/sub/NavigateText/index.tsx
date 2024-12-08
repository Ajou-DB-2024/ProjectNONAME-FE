import { useState, useEffect, useRef } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import { useRouter } from "next/navigation";

// API
// import dataAPI from "@data/index"

// constants

// types
type NavigateTextProps = {
  title: string,
  href: string,
  is_main: boolean,
  onClick?: ( href: string ) => any
}

// components


const NavigateText: React.FC<NavigateTextProps> = ({ title, href, is_main, onClick }) => {
  const router = useRouter();

  const onTextClick = () => {
    router.push(href);
    if(onClick) onClick(href);
  }

  return <S.NavigateText onClick={onTextClick} $is_main={is_main}>
    {!is_main && <S.GoBackIcon/>}
    <h3>{title}</h3>
  </S.NavigateText>
};

export default NavigateText