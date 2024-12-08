"use client";

import { useState, useEffect, useRef, useMemo } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import SearchBlock from "@/components/common/SearchBlock";
import RecruitFilter from "@/components/common/RecruitFilter";
import { RecruitFilterOption } from "@/components/common/RecruitFilter/type";
import ClubListBlock from "@/components/Club/List/ClubListBlock";
import { SelectionType } from "@/components/common/TagSelector/type";
import useClubList from "./hooks/useClubList";

// API
// import dataAPI from "@data/index"

// constants

// types
type ClubListTemplateProps = {
  filters: RecruitFilterOption[]
}

// components


const ClubListTemplate: React.FC<ClubListTemplateProps> = ({ filters }) => {
  
  const [ name, setName ] = useState<string>("");
  const [ selected_filters, setSelectedFilters ] = useState<(SelectionType | undefined)[]>([]);

  const searchQuery = useMemo(() => ({
    club_name: name,
    tag_id: selected_filters.filter(v => v)
            .map(v => v?.value).toString()
  }), [name, selected_filters]);

  const [ status, club_list ] = useClubList(searchQuery);

  const onFilterChange = (selected_filters: (SelectionType | undefined)[]) => {
    setSelectedFilters(selected_filters);
  }

  return <S.ClubListTemplate>
    <S.SearchOptionArea>
      <SearchBlock style={{ width: "100%" }} placeholder="동아리, 소학회의 정보 등을 검색해보세요"
        onKeywordInput={(v) => setName(v)}
      />
      <S.FilterWrap>
        <RecruitFilter filters={filters} onFilterChange={onFilterChange}/>
      </S.FilterWrap>
    </S.SearchOptionArea>
    <S.ClubListWrap>{
      club_list.map(v => 
        <ClubListBlock key={v.club_id}
          name={v.club_name} type={v.type}
          depart={v.depart}
        />
      )
    }</S.ClubListWrap>
  </S.ClubListTemplate>
};

export default ClubListTemplate