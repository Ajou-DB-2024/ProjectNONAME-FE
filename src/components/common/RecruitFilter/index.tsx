import { useState, useEffect, useRef } from "react";

import * as S from './style';
import * as C from '@/constants';

// recoil
import { useRecoilState, useSetRecoilState, useRecoilValue, ResetRecoilState } from "recoil";
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
import { RecruitFilterOption } from "./type";
import { useFilterState } from "./hooks/useFilterState";

type RecruitFilterProps = {
  filters: RecruitFilterOption[]
  // onFilterChange?: (changes: FilterChangeEvent, currentFilter: FilterState) => any
}

const RecruitFilter: React.FC<RecruitFilterProps> = ({ filters }) => {

  const [ focused, onSelectorClick ] = useFocusState();
  const [ select_states, onSelectionUpdated ] = useFilterState(filters);

  useEffect(() => {
    console.log(select_states);
  }, [ select_states ]);

  return <S.RecruitFilterArea>{
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