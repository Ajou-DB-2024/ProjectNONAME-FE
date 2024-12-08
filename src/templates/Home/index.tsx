"use client";

import { useState, useEffect, useRef, useMemo } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import ProfileSelector from "@/components/common/ProfileSelector";
import { Club, DBClub, JoinedClubBrief } from "@/types/Club";
import { Member } from "@/types/Member";
import BriefBlock from "@/components/common/BriefBlock";
import GroupingTitle, { GROUPING_TITLE_TYPE } from "@/components/common/GroupingTitle";
import TagSelector from "@/components/common/TagSelector";
import RecruitBlock from "@/components/Home/RecruitBlock";
import RecruitFilter from "@/components/common/RecruitFilter";
import GlobalSearch from "@/components/Home/GlobalSearch";
import SearchBlock from "@/components/common/SearchBlock";

// API
// import dataAPI from "@data/index"

// constants

// types
type HomeTemplateProps = {
  member_club_brief: { brief: JoinedClubBrief, manage_clubs: DBClub[] },
  member: Member
}

// components
const HomeTemplate: React.FC<HomeTemplateProps> = ({ member_club_brief, member }) => {

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
    <S.HomeSectionWrap>
      <S.HomeSection key={`HOME_SECTION_1`}>
        <h3>활동 요약</h3>
        <S.SectionContentArea $direction="row">
          <BriefBlock className="home-brief-block" title="총 참여한 동아리 개수" unit={"개"}>{ joinclub_brief.join_count }</BriefBlock>
          <BriefBlock className="home-brief-block" title="지원한 동아리 개수" unit={"개"}>{ joinclub_brief.applied_count }</BriefBlock>
        </S.SectionContentArea>
      </S.HomeSection>
      <S.HomeSection key={`HOME_SECTION_2`}>
        <GroupingTitle key={`GROUP_TITLE_2`} type={GROUPING_TITLE_TYPE.KIND}
          title="이런 동아리는 어때요?" desc="추천 동아리"
        />
        <S.SectionContentArea $direction="column">
          <RecruitFilter style={{width: "100%"}} filters={[
            {
              category: {
                id: "a",
                text: "a"
              },
              selections: [
                { text: "sefes1", value: "jsfioes1" },
                { text: "sefes2", value: "jsfioes2" },
                { text: "sefes3", value: "jsfioes3" },
                { text: "sefes4", value: "jsfioes4" },
                { text: "sefes5", value: "jsfioes5" },
                { text: "sefes6", value: "jsfioes6" },
              ]
            },
            {
              category: {
                id: "b",
                text: "b"
              },
              selections: [
                { text: "s1", value: "es1" },
                { text: "s2", value: "es2" },
                { text: "s3", value: "es3" },
                { text: "s4", value: "es4" },
                { text: "s5", value: "es5" },
                { text: "s6", value: "es6" },
              ]
            },
            {
              category: {
                id: "b",
                text: "b"
              },
              selections: [
                { text: "s1", value: "es1" },
                { text: "s2", value: "es2" },
                { text: "s3", value: "es3" },
                { text: "s4", value: "es4" },
                { text: "s5", value: "es5" },
                { text: "s6", value: "es6" },
              ]
            },
            {
              category: {
                id: "b",
                text: "b"
              },
              selections: [
                { text: "s1", value: "es1" },
                { text: "s2", value: "es2" },
                { text: "s3", value: "es3" },
                { text: "s4", value: "es4" },
                { text: "s5", value: "es5" },
                { text: "s6", value: "es6" },
              ]
            },
            {
              category: {
                id: "b",
                text: "b"
              },
              selections: [
                { text: "s1", value: "es1" },
                { text: "s2", value: "es2" },
                { text: "s3", value: "es3" },
                { text: "s4", value: "es4" },
                { text: "s5", value: "es5" },
                { text: "s6", value: "es6" },
              ]
            },
            {
              category: {
                id: "b",
                text: "b"
              },
              selections: [
                { text: "s1", value: "es1" },
                { text: "s2", value: "es2" },
                { text: "s3", value: "es3" },
                { text: "s4", value: "es4" },
                { text: "s5", value: "es5" },
                { text: "s6", value: "es6" },
              ]
            },
            {
              category: {
                id: "b",
                text: "b"
              },
              selections: [
                { text: "s1", value: "es1" },
                { text: "s2", value: "es2" },
                { text: "s3", value: "es3" },
                { text: "s4", value: "es4" },
                { text: "s5", value: "es5" },
                { text: "s6", value: "es6" },
              ]
            }
          ]}/>
          <S.TagSearchResultArea>
            <S.RecruitBlockWrap>
              <RecruitBlock name={"Whois"} type={"CLUB_TYPE/CONFERENCE"} depart={"소프트웨어융합대학 사이버보안학과"}/>
              <RecruitBlock name={"HaMer"} type={"CLUB_TYPE/CONFERENCE"} depart={"소프트웨어융합대학 사이버보안학과"}/>
              <RecruitBlock name={"Do-iT"} type={"CLUB_TYPE/CLUB"} depart={"아주대학교 동아리연합회"}/>
            </S.RecruitBlockWrap>
          </S.TagSearchResultArea>
        </S.SectionContentArea>
      </S.HomeSection>
      <S.HomeSection key={`HOME_SECTION_3`}>
        <GroupingTitle key={`GROUP_TITLE_3`} type={GROUPING_TITLE_TYPE.KIND}
          title="동아리에 대해\n궁금한 점이 있나요?" desc="전체 검색"
        />
        <SearchBlock onKeywordInput={() => {}}
          placeholder="동아리, 소학회의 정보 등을 검색해보세요"
          style={{width: "100%"}}
        />
      </S.HomeSection>
    </S.HomeSectionWrap>
  </S.HomeTemplateWrap>
};

export default HomeTemplate