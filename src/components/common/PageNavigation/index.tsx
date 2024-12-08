import { useState, useEffect, useRef, useMemo } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import NavigateText from "./sub/NavigateText";
import { usePathname, useRouter } from "next/navigation";
import states from "@/core/zustand/states";
import { Member } from "@/types/Member";

// API
// import dataAPI from "@data/index"

// constants

// types
type PageRouteDefinitionType = {
  stack: false,
  children: PageRouteDefinitionMap
} | {
  stack: true,
  id: string,
  title: string, 
  getTitle?: (...props: any) => string,
  children: PageRouteDefinitionMap
}

type PageRouteDefinitionMap = {
  [keys in string]: PageRouteDefinitionType
}

type PageNavigationProps = {
  
}

const PageNavigation: React.FC<PageNavigationProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();

  const { errorAlert } = states.useGlobalAlertQueue();
  const { is_logined, member } = states.useMember();
  const { path_stack, updatePathStack } = states.usePathStack();
  
  const paths = useMemo(() => path_stack.slice(-2), [path_stack]);

  useEffect(() => {
    console.log("paths", ...paths);
  }, [ paths ]);

  useEffect(() => {
    try {
      if (!is_logined) return;
      updatePathStack(pathname, member);
    } catch(e) {
      console.log(e);
      return errorAlert(
        undefined,
        "잘못된 경로로 접근하신 것 같아요. 다시 접속해주세요.",
        [
          { text: "다시 접속하기", mode: "sub", 
            onClick: () => { router.refresh(); return true; } 
          }
        ]
      )
    }
  }, [ pathname, member ]);

  return <S.PageNavigation>{
    paths.map( ({id, title}, i) => 
      <NavigateText key={id}
        is_main={i === 1} title={title} href={id}
      />
    )  
  }</S.PageNavigation>
};

export default PageNavigation