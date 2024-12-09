import { useState, useEffect, useRef, HTMLAttributes } from "react";

import * as S from './style';
import * as C from '@/constants';

// recoil
// import states from "@/core/recoil/states";

// assets
import { IconChevronUp } from "@tabler/icons-react"


// API
// import dataAPI from "@data/index"

// components
import { useSelectState } from "./hooks/useSelectState";
import { useSelectorText } from "./hooks/useSelectorText";

// constants

// types
import { SelectionType } from "./type";
import { useOpenState } from "./hooks/useOpenState";

type TagSelectorProps = {
  multi_select?: boolean
  opened?: boolean
  selections: SelectionType[]
  category: string
  onSelect?: (selections: SelectionType[]) => any
} & Omit<HTMLAttributes<HTMLDivElement>, "onSelect">

const TagSelector: React.FC<TagSelectorProps> = ({ 
  multi_select = false, opened: opened_init = false,
  selections, category, 
  onSelect, ...props
}) => {

  const [ opened, onSelectorClick ] = useOpenState(opened_init);
  const [ selected, onSelectionClick ] = useSelectState(multi_select, onSelect);
  const [ selector_text ] = useSelectorText(category, selected);

  useEffect(() => {
    const find = selections.find(v => v.value === 33);
    if (find) {
      onSelectionClick(find);
      return;
    }
  }, [selections]);

  return <S.TagSelectorArea { ...props }>
    <S.TagSelectorBlock selected={selected.length > 0} onClick={onSelectorClick}>
      <span>{selector_text}</span>
      <S.TagSelectorArrow opened={opened ? 1 : 0}/>
    </S.TagSelectorBlock>
    <S.TagSelectionArea>{
      selections.map((selection, i) =>
        <S.TagSelection key={selection.value} 
          multiSelect={multi_select}
          opened={opened ? 1 : 0} index={i}
          onClick={() => onSelectionClick(selection)}
          selected={selected.includes(selection)} 
        >{selection.text}</S.TagSelection>
      )
    }</S.TagSelectionArea>
  </S.TagSelectorArea>
};

export default TagSelector