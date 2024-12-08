import { useState, useEffect, useRef } from "react";

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

// constants
const PAGE_TITLES: PageRouteDefinitionMap = {
  "personal": {
    stack: false,
    children: {
      "club": {
        stack: false,
        children: {
          "list": {
            stack: true,
            id: "/personal/club/list",
            title: "동아리 목록",
            children: {}
          }
        }
      }
    }
  }
}

type PageNavigationProps = {
  
}

const PageNavigation: React.FC<PageNavigationProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { errorAlert } = states.useGlobalAlertQueue();
  const { is_logined, member } = states.useMember();

  const [ path_stack, setPathStack ] = useState<{ id: string; title: string; }[]>([]);

  const getPathStacks = (current_pathname: string, logined_member: Member) => {
    const paths = current_pathname.split("/").slice(1);
    let path_pointer = PAGE_TITLES;
    let calced_pathstack: typeof path_stack = [
      { id: "/", title: `${logined_member.name}의 Weave` }
    ];

    paths.forEach((path: string) => {
      try {
        if ( !(path in path_pointer) ) throw new Error("Invalid Path");
        let path_definition = path_pointer[path];
        path_pointer = path_definition.children;
        
        if ( !path_definition.stack ) return;
        let { id, title, getTitle } = path_definition;

        if ( getTitle ) title = getTitle(member);
        
        calced_pathstack.push({ id, title });
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
    })

    return calced_pathstack;
  }

  useEffect(() => {
    if (!is_logined) return;

    const calced_pathstack = getPathStacks(pathname, member);
    setPathStack(calced_pathstack);
  }, [ pathname, member ]);

  return <S.PageNavigation>{
    path_stack.slice(-2).map( ({id, title}, i) => 
      <NavigateText key={id}
        is_main={i === 1} title={title} href={id}
      />
    )  
  }</S.PageNavigation>
};

export default PageNavigation