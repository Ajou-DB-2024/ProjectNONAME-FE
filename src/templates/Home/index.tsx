"use client";

import { useState, useEffect, useRef, useMemo } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import ProfileSelector from "@/components/common/ProfileSelector";
import { Club, DBClub, JoinedClubBrief, ManageClubBrief } from "@/types/Club";
import { Member } from "@/types/Member";
import BriefBlock from "@/components/common/BriefBlock";
import GroupingTitle, { GROUPING_TITLE_TYPE } from "@/components/common/GroupingTitle";
import RecruitBlock from "@/components/Home/RecruitBlock";
import RecruitFilter from "@/components/common/RecruitFilter";
import SearchBlock from "@/components/common/SearchBlock";
import HomePersonalProfileTemplate from "./sub/PersonalProfile";
import ClubManageProfileTemplate from "./sub/ClubManageProfile";

// API
// import dataAPI from "@data/index"

// constants

// types
type HomeTemplateProps = {
  member_club_brief: { brief: JoinedClubBrief, manage_clubs: DBClub[] },
  manage_club_briefs: { [keys in string]: ManageClubBrief },
  member: Member
}

// components
const HomeTemplate: React.FC<HomeTemplateProps> = ({ 
  member_club_brief, manage_club_briefs,
  member 
}) => {

  const joinclub_brief = useMemo(() => member_club_brief.brief, [member_club_brief]);
  const profile_selections = useMemo(() => [
    { club_id: "BASIC_PROFILE", club_name: `${member.name}의 Weave` },
    ...member_club_brief.manage_clubs.map(({id, name: club_name}) => ({club_id: id.toString(), club_name}))
  ], [member_club_brief]);

  const [ selected_club, setSelectedClub ] = useState<Club>(profile_selections[0]);
  const onClubSelect = (club: Club) => {
    setSelectedClub(club);
  }

  return <S.HomeTemplateWrap>
    <ProfileSelector onSelect={ onClubSelect } clubs={profile_selections}/>
    <S.HomeSectionWrap>{
      (selected_club.club_id === "BASIC_PROFILE") ? <HomePersonalProfileTemplate joinclub_brief={joinclub_brief}/>  
      : <ClubManageProfileTemplate manage_club_brief={manage_club_briefs[selected_club.club_id]}/>
    }</S.HomeSectionWrap>
  </S.HomeTemplateWrap>
};

export default HomeTemplate