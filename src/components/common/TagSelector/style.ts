import styled, { css } from "styled-components";
import { TagSelectionKeyframe, TagSelectionReverseKeyframe } from "./keyframes";

import TagBlock from "../TagBlock";
import { IconChevronUp } from "@tabler/icons-react";

export const TagSelectorArea = styled.section`
  & * {
    transition: all .2s cubic-bezier(0, 1, 1, 1);
  }
`;

export const TagSelectorBlock = styled.div<{selected: boolean}>`
  padding: .5em .75em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: .5em;

  ${({selected}) => 
    selected ? 
      `
        background-color: var(--service-color-H);
        color: var(--service-color-A);
        ` : 
        `
        background-color: var(--service-color-A);
        color: var(--service-color-O);
      `
  }
  border: 1px solid #eaeaea;
  border-radius: .5em;

  user-select: none;

  font-size: 1em;
  font-weight: 500;
  white-space: nowrap;
`;

export const TagSelectionArea = styled.section`
  padding: .25em;
  
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`;

export const TagSelectorArrow = styled(IconChevronUp)<{opened: number}>`
  ${({opened}) => !opened && "transform: rotate(180deg);"}
`;

export const TagSelection = styled(TagBlock)<{opened: number, index?: number}>`
  width: 100%;
  font-size: 1em;

  opacity: 0;
  overflow: hidden;
  
  animation-duration: .25s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0, 1, 1, 1);
  ${({opened}) => opened ? 
    css`animation-name: ${TagSelectionKeyframe};`
    : css`animation-name: ${TagSelectionReverseKeyframe};`
  };
  ${({index = 0}) => css`animation-delay: ${index * 0.025}s;`};
`;