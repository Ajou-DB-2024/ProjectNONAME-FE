import { useState, useEffect, useRef, useMemo, useCallback } from "react";

import * as S from './style';
import * as C from '@/constants';

// recoil
import states from "@/core/zustand/states";

// assets
import { IconAlertCircle, IconAlertTriangle, IconInfoSquareRounded, IconQuestionMark, IconSelect } from "@tabler/icons-react"
import useSwipeDownAction from "@/hooks/useSwipeDownAction";
import useDelayState from "@/hooks/useDelayState";
import { GlobalAlertButton, GlobalAlertPromptButton, GlobalAlertType } from "./type";
import ServiceButton from "../ServiceButton";
import { ServiceButtonSize, ServiceButtonTheme } from "../ServiceButton/type";

// API
// import dataAPI from "@data/index"

// constants

// types

// components
const AlertTypeIcon = {
  [ GlobalAlertType.NORMAL ]: <IconInfoSquareRounded color="var(--service-color-H)"/>,
  [ GlobalAlertType.SELECT ]: <IconSelect color="var(--service-color-H)"/>,
  [ GlobalAlertType.PROMPT ]: <IconQuestionMark color="var(--service-color-H)"/>,
  [ GlobalAlertType.WARNING ]: <IconAlertTriangle color="#e7be13"/>,
  [ GlobalAlertType.ALERT ]: <IconAlertCircle color="#e71313"/>
}

const GlobalAlert: React.FC = () => {

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
    if (!alert_info) return;

    deleteAlertInfo(alert_info.id);
    if (alert_info.type === GlobalAlertType.SELECT && alert_info.contents?.onClose)
      alert_info.contents.onClose();
  };

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeDownAction(closeAlert);

  const [input_value, setInputValue] = useState<string>("");
  const onButtonClick = useCallback(( button: any ) => {
    if (!alert_info) return;

    let handler_result = false;
    if (alert_info.type === GlobalAlertType.PROMPT) {
      handler_result = button.onClick(input_value);
    }
    if ( button.onClick ) {
      handler_result = button.onClick(button.value);
    }

    if (handler_result) closeAlert();
  }, [alert_info, input_value]);

  const onSelectionClick = useCallback((value: string) => {
    if ( alert_info?.type !== GlobalAlertType.SELECT ) return;
    const handler_result = alert_info.contents.onSelect(value);
    
    if (handler_result) closeAlert();
  }, [ alert_info ]);
  
  return alert_info && <S.GlobalAlertWrap
    $display={is_display}
    $anim_display={global_isdisplay}
  >
    <S.GlobalAlertCover onClick={closeAlert}/>
    <S.GlobalAlertBlock $opened={global_isdisplay}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <S.AlertIcon>
        { AlertTypeIcon[alert_info.type] }
      </S.AlertIcon>
      <S.AlertTitle $type={ alert_info.type }>{alert_info.contents.title}</S.AlertTitle>
      <S.AlertDescription>{
        alert_info.contents.desc.split("\n")
        .map((v, i) => <span key={`ALERT_DESC_${i}`}>{v}</span>)
      }</S.AlertDescription>
      <S.ContentArea>{
        ( alert_info.type === GlobalAlertType.SELECT ) && 
        alert_info.contents.selections.map(({text, value}) =>
          <S.SelectionBlock 
            key={`ALERT_SELECTION_${value}`}
            onClick={ () => onSelectionClick(value) }
          >{ text }</S.SelectionBlock>
        )
      }</S.ContentArea>
      <S.ButtonArea>{
          alert_info.contents.buttons?.map( (button, i) =>
            <ServiceButton 
              key={`ALERT_BUTTON_${i}`}
              size={ServiceButtonSize.NORMAL}
              theme={button.theme}
              mode={button.mode}
              onClick={() => onButtonClick(button)}
              style={{width: "100%"}}
            >{button.text}</ServiceButton>
          )
      }</S.ButtonArea>
    </S.GlobalAlertBlock>
  </S.GlobalAlertWrap>
};

export default GlobalAlert