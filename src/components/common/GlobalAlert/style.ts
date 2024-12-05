import styled, { css } from "styled-components";
import { GlobalAlertBackgroundInKeyframe, GlobalAlertBackgroundOutKeyframe, GlobalAlertCloseKeyframe, GlobalAlertOpenKeyframe } from "./keyframes";

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
  padding: 1.75em .5em .5em .5em;
  min-height: 30vh;

  background-color: white;
  border-radius: 1.25em;

  width: calc(100% - 2em);
  height: fit-content;
  position: absolute;
  bottom: 1em;
  left: 50%;
  transform: translate(-50%);

  animation-duration: .8s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0, 1.05, 0, 1);
  animation-name: ${GlobalAlertOpenKeyframe};

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