"use client";

import { useState, useEffect, useRef } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import { Club, ClubDetail, ExtendedClub } from "@/types/Club";
import states from "@/core/zustand/states";
import GroupingTitle, { GROUPING_TITLE_TYPE } from "@/components/common/GroupingTitle";
import BriefBlock from "@/components/common/BriefBlock";
import { MemberBrief } from "@/types/Member";
import { formatDate } from "@/utils/dateHelper";

// API
// import dataAPI from "@data/index"

// constants

// types
type ClubSpecTemplateProps = {
  club: Club & { detail: ClubDetail, president: MemberBrief }
}

// components


const ClubSpecTemplate: React.FC<ClubSpecTemplateProps> = ({ club }) => {

  const { path_stack, updatePageName } = states.usePathStack();

  useEffect(() => {
    console.log(path_stack);
    if (path_stack.length > 0) 
      updatePageName(club.club_name);
  }, [ path_stack, club ]);
  
  return <S.ClubSpecTemplate>
    <S.SpecSection>
      <GroupingTitle type={ GROUPING_TITLE_TYPE.STRAIGHT }
        desc="기본 정보"/>
      <S.BasicInfoWrap>
        <BriefBlock className="basic-info-block" title="대표자명" unit={""}>{club.president.name}</BriefBlock>
        {/* <BriefBlock className="basic-info-block" title="직전학기 운영규모" unit={"명"}>{club.detail.}</BriefBlock> */}
        <BriefBlock className="basic-info-block" title="최초개설일" unit={""}>{formatDate(club.detail.established_date)}</BriefBlock>
      </S.BasicInfoWrap>
    </S.SpecSection>
  </S.ClubSpecTemplate>
};

export default ClubSpecTemplate