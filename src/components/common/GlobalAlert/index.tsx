import { useState, useEffect, useRef, useMemo } from "react";

import * as S from './style';
import * as C from '@/constants';

// recoil
import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import useSwipeDownAction from "@/hooks/useSwipeDownAction";
import useDelayState from "@/hooks/useDelayState";

// API
// import dataAPI from "@data/index"

// constants

// types
type GlobalAlertProps = {
  icon?: React.FC
}

// components


const GlobalAlert: React.FC<GlobalAlertProps> = ({ icon: Icon }) => {

  const { is_display: global_isdisplay, queue, getAlertInfo, deleteAlertInfo } = states.useGlobalAlertQueue();
  const [alert_info, setAlertInfo] = useState(getAlertInfo());
  const [is_display, setIsDisplay] = useDelayState(global_isdisplay);

  useEffect(() => {
    setAlertInfo(getAlertInfo());
  }, [queue]);

  useEffect(() => {
    setIsDisplay(
      global_isdisplay, 
      global_isdisplay ? 0 : 300
    );
  }, [global_isdisplay]);

  const closeAlert = () => {
    // alert('Swiped down!');
    console.log(alert_info);
    if (alert_info) {
      console.log(deleteAlertInfo(alert_info.id));
    }
  };

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeDownAction(closeAlert);

  
  return <S.GlobalAlertWrap
    $display={is_display}
    $anim_display={global_isdisplay}
  >
    <S.GlobalAlertCover onClick={closeAlert}/>
    <S.GlobalAlertBlock $opened={global_isdisplay}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      { Icon && <Icon/> }
      {alert_info?.contents.title}
    </S.GlobalAlertBlock>
  </S.GlobalAlertWrap>
};

export default GlobalAlert