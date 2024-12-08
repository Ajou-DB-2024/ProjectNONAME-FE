import { create } from "zustand";

import { GlobalAlertInfo, GlobalAlertType } from "@/components/common/GlobalAlert/type";
import GlobalAlert from "@/components/common/GlobalAlert";
import { ServiceButtonTheme } from "@/components/common/ServiceButton/type";
import { Member } from "@/types/Member";

type useGlobalAlertQueue = {
  is_display: boolean,
  alert_call_cnt: number,
  queue: (GlobalAlertInfo & { id: number })[],
  alert: (info: GlobalAlertInfo) => void
  errorAlert: (title?: string, desc?: string, buttons?: {text: string, mode: "main" | "sub", onClick: () => any}[] ) => void
  getAlertInfo: () => GlobalAlertInfo & { id: number } | undefined
  deleteAlertInfo: (id: number) => boolean
}

const useGlobalAlertQueue = create<useGlobalAlertQueue>()(set => ({
  is_display: false,
  alert_call_cnt: 0,
  queue: [],
  alert: (info) => 
    set((state) => ({
      ...state,
      is_display: true,
      alert_call_cnt: state.alert_call_cnt+1,
      queue: [...state.queue, {...info, id: state.alert_call_cnt+1}]
    }) ),
  errorAlert: (
    title = "어라, 잠시만요", 
    desc = "작업 중 에러가 발생했어요. 잠시 후 다시 시도해주세요.", 
    buttons = [
    { text: "확인", mode: "sub", onClick: () => true }
  ]) => 
    set((state) => {
      const alert_info = {
        type: GlobalAlertType.ALERT,
        contents: {
          title, desc,
          buttons: buttons?.map(v => ({
            ...v, 
            value: "",
            theme: ServiceButtonTheme.COLORED
          }))
        },
        id: state.alert_call_cnt+1
      };
      console.log(alert_info);
      return ({
        ...state,
        is_display: true,
        alert_call_cnt: state.alert_call_cnt+1,
        queue: [
          ...state.queue,
          alert_info
        ]
      })
    } ),
  getAlertInfo: () => {
    let alert_info;
    set((state) => {
      alert_info = state.queue[0];
      return state;
    });
    return alert_info;
  },
  deleteAlertInfo: (id) => {
    let is_deleted = false;
    set((state) => {
      if (state.queue.find(v => v.id === id)) 
        is_deleted = true;

      let new_queue = state.queue.filter(v => v.id !== id);
      return {
        ...state,
        is_display: new_queue.length > 0,
        queue: new_queue
      };
    });
    return is_deleted;
  },
}));

type useMember = {
  is_logined: false,
  member: null,
  setLogin: (member: Member) => any,
  setLogout: () => any
} | {
  is_logined: true,
  member: Member,
  setLogin: (member: Member) => any,
  setLogout: () => any
}

const useMember = create<useMember>()(set => ({
  is_logined: false,
  member: null,
  setLogin: (member) => {
    set(state => ({
      ...state,
      is_logined: true, member
    }))
  },
  setLogout: () => {
    set(state => ({...state, is_logined: false, member: null}));
  }
}))

// ==========================================

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

type PathLog = { id: string; title: string; };

type usePathStack = {
  path_stack: PathLog[],
  updatePathStack: (path: string, member: Member) => PathLog[],
  updatePageName: (title: string) => any
}

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
          },
          ":id": {
            stack: true,
            id: "/personal/club/spec",
            title: "동아리 상세",
            children: {}
          }
        }
      },
    }
  }
}

const usePathStack = create<usePathStack>()(set => ({
  path_stack: [],
  updatePathStack: (current_pathname, logined_member) => {
    const paths = current_pathname.split("/").slice(1);
    let path_pointer = PAGE_TITLES;
    let calced_pathstack: PathLog[] = [
      { id: "/", title: `${logined_member.name}의 Weave` }
    ];

    paths.forEach((path: string) => {
      console.log(path_pointer, Object.keys(path_pointer).find(v => v.startsWith(":")))
      if ( !(path in path_pointer) ) {
        if (!Object.keys(path_pointer).find(v => v.startsWith(":"))) 
          throw new Error("Invalid Path");
        path = ":id";
      }
      let path_definition = path_pointer[path];
      path_pointer = path_definition.children;
      
      if ( !path_definition.stack ) return;
      let { id, title } = path_definition;
      
      calced_pathstack.push({ id, title });
    })

    set(state => ({
      ...state,
      path_stack: calced_pathstack
    }));
    return calced_pathstack;
  },
  updatePageName: (title: string) => {
    set(state => {
      const new_state = { ...state };
      new_state.path_stack[state.path_stack.length-1].title = title;
      return new_state;
    })
  }
}))

export default {
  useGlobalAlertQueue,
  useMember,
  usePathStack
}