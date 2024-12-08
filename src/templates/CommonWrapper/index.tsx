"use client"

import { useState, useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import Navbar from "@/components/common/Navbar";
import states from "@/core/zustand/states";
import { Member } from "@/types/Member";

// API
// import dataAPI from "@data/index"

// constants

// types
type CommonWrapperProps = {
  member?: Member
  children: ReactNode 
}

// components


const CommonWrapper: React.FC<CommonWrapperProps> = ({ children, member }) => {

  const pathname = usePathname();
  const { setLogin, setLogout } = states.useMember();

  const [ page_loaded, setPageLoaded ] = useState<boolean>(false);
  const [ hide_common_comps, setHideCommonComps ] = useState<boolean>(false);
  useEffect(() => {
    setHideCommonComps([
      "/login",
      "/join/agreement"
    ].includes(pathname));
  }, [ pathname ]);

  useEffect(() => {
    if (member) setLogin(member);
    else setLogout();

    setTimeout(() => {
      setPageLoaded(true);
    }, 150);
  }, []);
  
  return <S.CommonWrapper $display={page_loaded}>
    { !hide_common_comps && <>
      <Navbar/>
    </> }
    <S.ServiceArea $display_navbar={!hide_common_comps}>
      {children}
    </S.ServiceArea>
  </S.CommonWrapper>
};

export default CommonWrapper