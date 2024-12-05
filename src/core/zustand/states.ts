import { create } from "zustand";

import { GlobalAlertInfo } from "@/components/common/GlobalAlert/type";

type useGlobalAlertQueue = {
  is_display: boolean,
  alert_call_cnt: number,
  queue: (GlobalAlertInfo & { id: number })[],
  alert: (info: GlobalAlertInfo) => void
  getAlertInfo: () => GlobalAlertInfo & { id: number } | undefined
  deleteAlertInfo: (id: number) => boolean
}

const useGlobalAlertQueue = create<useGlobalAlertQueue>()(set => ({
  is_display: false,
  alert_call_cnt: 0,
  queue: [],
  alert: (info) => 
    set((state) => {
      console.log("will set", ({
        ...state,
        is_display: true,
        alert_call_cnt: state.alert_call_cnt+1,
        queue: [...state.queue, {...info, id: state.alert_call_cnt+1}]
      }));
      return ({
        ...state,
        is_display: true,
        alert_call_cnt: state.alert_call_cnt+1,
        queue: [...state.queue, {...info, id: state.alert_call_cnt+1}]
      })
    }),
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