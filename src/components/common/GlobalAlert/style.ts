import styled, { css } from "styled-components";
import { GlobalAlertBackgroundInKeyframe, GlobalAlertBackgroundOutKeyframe, GlobalAlertCloseKeyframe, GlobalAlertOpenKeyframe } from "./keyframes";
import { GlobalAlertType } from "./type";

export const GlobalAlertWrap = styled.section<{$display: boolean, $anim_display: boolean}>`
  width: 100%;
  height: 100%;

  animation-duration: .25s;
  animation-fill-mode: both;
  animation-timing-function: ease;
  ${({$display}) => 
    !$display && "display: none;"
  }

  ${({$anim_display}) => 
    $anim_display ? css`animation-name: ${GlobalAlertBackgroundInKeyframe};`
    : css`animation-name: ${GlobalAlertBackgroundOutKeyframe};`
  }
  
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10000;
`;

export const GlobalAlertCover = styled.section`
  background-color: black;
  opacity: 0.2;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
`;

export const GlobalAlertBlock = styled.div<{$opened: boolean}>`
  padding: 2em 1.5em 1.5em 1.5em;
  min-height: 30vh;
  max-height: calc(100% - 2rem);

  background-color: white;
  border-radius: 1.25em;

  width: calc(100% - 2em);
  height: fit-content;
  position: absolute;
  bottom: 1em;
  left: 50%;
  transform: translate(-50%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;

  animation-duration: .8s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0, 1.05, 0, 1);
  animation-name: ${GlobalAlertOpenKeyframe};

  overflow: auto;

  ${({$opened}) => $opened ? 
    css`animation-name: ${GlobalAlertOpenKeyframe};`
    : css`animation-name: ${GlobalAlertCloseKeyframe};`
  };

  &::before {
    content: " ";
    width: 20%;
    max-width: 3em;
    height: 4px;

    background-color: #efefef;
    border-radius: 2px;

    position: fixed;
    top: 1em;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const AlertIcon = styled.div`
  width: 2.85em;
  height: 2.85em;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f5f5f5;
  border-radius: 1.8em;

  & svg {
    width: 1.75em;
    height: 1.75em;
  }
`;

export const AlertTitle = styled.h3<{$type: GlobalAlertType}>`
  font-size: 1.25em;
  font-weight: 700;
  ${({$type}) => 
    ($type === GlobalAlertType.ALERT) ? `color: #e71313;`
    : ($type === GlobalAlertType.WARNING) ? `color: #e7be13;`
    : `color: var(--service-color-H);`
  }
`;

export const AlertDescription = styled.section`
  height: max-content;

  font-size: 1em;
  font-weight: 400;
  color: #2a2a2a;

  word-break: keep-all;
`;

export const ButtonArea = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: .5em;
`;

export const ContentArea = styled.section`
  width: 100%;
  height: 100%;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: .25em;
`;

export const SelectionBlock = styled.div`
  width: 100%;
  padding: .5em;

  background-color: #efefef;
  border-radius: .5em;

`;
