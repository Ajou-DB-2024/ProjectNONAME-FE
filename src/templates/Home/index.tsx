"use client";

import { useState, useEffect, useRef, useMemo } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import ProfileSelector from "@/components/common/ProfileSelector";
import { Club, DBClub, JoinedClubBrief, ManageClubBrief } from "@/types/Club";
import { Member } from "@/types/Member";
import HomePersonalProfileTemplate from "./sub/PersonalProfile";
import ClubManageProfileTemplate from "./sub/ClubManageProfile";
import { RecruitFilterOption } from "@/components/common/RecruitFilter/type";

// API
// import dataAPI from "@data/index"

// constants

// types
type HomeTemplateProps = {
  member_club_brief: { brief: JoinedClubBrief, manage_clubs: DBClub[] },
  manage_club_briefs: { [keys in string]: ManageClubBrief },
  member: Member,
  filters: RecruitFilterOption[]
}

// components
const HomeTemplate: React.FC<HomeTemplateProps> = ({ 
  member_club_brief, manage_club_briefs,
  member, filters
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
      (selected_club.club_id === "BASIC_PROFILE") ? <HomePersonalProfileTemplate joinclub_brief={joinclub_brief} filters={filters}/>  
      : <ClubManageProfileTemplate manage_club_brief={manage_club_briefs[selected_club.club_id]}/>
    }</S.HomeSectionWrap>
  </S.HomeTemplateWrap>
};

export default HomeTemplate