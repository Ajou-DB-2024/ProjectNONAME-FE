import { create } from "zustand";

import { GlobalAlertInfo, GlobalAlertType } from "@/components/common/GlobalAlert/type";
import GlobalAlert from "@/components/common/GlobalAlert";
import { ServiceButtonTheme } from "@/components/common/ServiceButton/type";

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

export default {
  useGlobalAlertQueue
}