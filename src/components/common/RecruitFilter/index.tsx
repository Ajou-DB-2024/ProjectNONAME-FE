import { useState, useEffect, useRef, HTMLAttributes } from "react";

import * as S from './style';
import * as C from '@/constants';

// recoil
// import states from "@/core/recoil/states";

// assets
import {  } from "@tabler/icons-react"

// API
// import dataAPI from "@data/index"

// components
import TagSelector from "../TagSelector";

// hooks
import { useFocusState } from "./hooks/useFocusState";

// constants

// types
import { FilterState, RecruitFilterOption } from "./type";
import { useFilterState } from "./hooks/useFilterState";
import { SelectionType } from "../TagSelector/type";

type RecruitFilterProps = {
  filters: RecruitFilterOption[]
  onFilterChange?: (currentFilter: (SelectionType | undefined)[]) => any
} & HTMLAttributes<HTMLTableSectionElement>

const RecruitFilter: React.FC<RecruitFilterProps> = ({ filters, onFilterChange, ...props }) => {

  const [ focused, onSelectorClick ] = useFocusState();
  const [ select_states, onSelectionUpdated ] = useFilterState(filters);

  useEffect(() => {
    if (onFilterChange) onFilterChange(
      Object.values(select_states).map(v => {
        if (Array.isArray(v.selected)) return v.selected[0];
        return v.selected;
      })
    );
  }, [ select_states ]);

  return <S.RecruitFilterArea {...props}>{
    filters.map(({is_multi, selections, category}, i) =>
      <TagSelector key={i} opened={focused === i}
        multi_select={is_multi || false}
        category={category.text}
        selections={selections}
        onClick={ () => onSelectorClick(i) }
        onSelect={ selections => onSelectionUpdated(category.id, selections) }
      />  
    )
  }</S.RecruitFilterArea>
};

export default RecruitFilter