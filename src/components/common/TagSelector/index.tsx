import { useState, useEffect, useRef } from "react";

import * as S from './style';
import * as C from '@/constants';

// recoil
import { useRecoilState, useSetRecoilState, useRecoilValue, ResetRecoilState } from "recoil";
// import states from "@/core/recoil/states";

// assets
import { IconChevronUp } from "@tabler/icons-react"


// API
// import dataAPI from "@data/index"

// components
import { useSelectState } from "./hooks/useSelectState";
import { useSelectorText } from "./hooks/useSelectorText";
import TagBlock from "../TagBlock";

// constants


// types
import { SelectionType } from "./type";
import { useOpenState } from "./hooks/useOpenState";

type TagSelectorProps = {
  multi_select?: boolean
  selections: SelectionType[]
  category: string
  onSelect?: (selection: SelectionType[]) => any
}

const TagSelector: React.FC<TagSelectorProps> = ({ 
  multi_select = false,
  selections, category, 
  onSelect
}) => {

  const [ is_open, onSelectorClick ] = useOpenState(false);
  const [ selected, onSelectionClick ] = useSelectState(multi_select, onSelect);
  const [ selector_text ] = useSelectorText(category, selected);

  return <S.TagSelectorArea>
    <S.TagSelectorBlock selected={selected.length > 0} onClick={onSelectorClick}>
      <span>{selector_text}</span>
      <S.TagSelectorArrow is_open={is_open}/>
    </S.TagSelectorBlock>
    <S.TagSelectionArea>{
      selections.map((selection, i) =>
        <S.TagSelection key={selection.value} 
          multiSelect={multi_select}
          is_open={is_open} index={i}
          onClick={() => onSelectionClick(selection)}
          selected={selected.includes(selection)} 
        >{selection.text}</S.TagSelection>
      )
    }</S.TagSelectionArea>
  </S.TagSelectorArea>
};

export default TagSelector