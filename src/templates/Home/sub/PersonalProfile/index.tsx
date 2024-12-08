import { useState, useEffect, useRef } from "react";

import * as ParentS from "../../style";
import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import GroupingTitle, { GROUPING_TITLE_TYPE } from "@/components/common/GroupingTitle";
import BriefBlock from "@/components/common/BriefBlock";
import RecruitFilter from "@/components/common/RecruitFilter";
import RecruitBlock from "@/components/Home/RecruitBlock";
import SearchBlock from "@/components/common/SearchBlock";
import { JoinedClubBrief } from "@/types/Club";
import { useRouter } from "next/navigation";
import { RecruitFilterOption } from "@/components/common/RecruitFilter/type";

// API
// import dataAPI from "@data/index"

// constants

// types
type HomePersonalProfileTemplateProps = {
  joinclub_brief: JoinedClubBrief,
  filters: RecruitFilterOption[]
}

// components


const HomePersonalProfileTemplate: React.FC<HomePersonalProfileTemplateProps> = ({ joinclub_brief, filters }) => {

  const router = useRouter();

  return <>
    <ParentS.HomeSection key={`HOME_SECTION_1`}>
      <h3>활동 요약</h3>
      <ParentS.SectionContentArea $direction="row">
        <BriefBlock className="home-brief-block" title="총 참여한 동아리 개수" unit={"개"}>{ joinclub_brief.join_count }</BriefBlock>
        <BriefBlock className="home-brief-block" title="지원한 동아리 개수" unit={"개"}>{ joinclub_brief.applied_count }</BriefBlock>
      </ParentS.SectionContentArea>
    </ParentS.HomeSection>
    <ParentS.HomeSection key={`HOME_SECTION_2`}>
      <GroupingTitle key={`GROUP_TITLE_2`} type={GROUPING_TITLE_TYPE.KIND}
        title="이런 동아리는 어때요?" desc="추천 동아리"
      />
      <ParentS.SectionContentArea $direction="column">
        <RecruitFilter style={{width: "100%"}} filters={filters}/>
        <S.TagSearchResultArea>
          <S.RecruitBlockWrap>
            <RecruitBlock name={"Whois"} type={"CLUB_TYPE/CONFERENCE"} depart={"소프트웨어융합대학 사이버보안학과"}/>
            <RecruitBlock name={"HaMer"} type={"CLUB_TYPE/CONFERENCE"} depart={"소프트웨어융합대학 사이버보안학과"}/>
            <RecruitBlock name={"Do-iT"} type={"CLUB_TYPE/CLUB"} depart={"아주대학교 동아리연합회"}/>
          </S.RecruitBlockWrap>
        </S.TagSearchResultArea>
      </ParentS.SectionContentArea>
    </ParentS.HomeSection>
    <ParentS.HomeSection key={`HOME_SECTION_3`}>
      <GroupingTitle key={`GROUP_TITLE_3`} type={GROUPING_TITLE_TYPE.KIND}
        title="동아리에 대해\n궁금한 점이 있나요?" desc="전체 검색"
      />
      <SearchBlock onClick={() => router.push("/personal/club/list") }
        placeholder="동아리, 소학회의 정보 등을 검색해보세요"
        style={{width: "100%"}}
      />
    </ParentS.HomeSection>
  </>
};

export default HomePersonalProfileTemplate