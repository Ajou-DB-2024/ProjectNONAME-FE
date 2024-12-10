"use client";

import { useState, useEffect, useRef } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import { Club, ClubDetail } from "@/types/Club";
import states from "@/core/zustand/states";
import GroupingTitle, { GROUPING_TITLE_TYPE } from "@/components/common/GroupingTitle";
import BriefBlock from "@/components/common/BriefBlock";
import { MemberBrief } from "@/types/Member";
import { formatDate } from "@/utils/dateHelper";
import PageNavigation from "@/components/common/PageNavigation";
import MobileInterviewBlock from "@/components/Club/Detail/ClubIntroduction";
import ActivityBrief from "@/components/Club/Detail/ActivityBrief";
import PhotoViewer from "@/components/Club/Detail/PhotoView";
import ServiceButton from "@/components/common/ServiceButton";

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
  
  return <>
    <PageNavigation info={{
      prev: "동아리 목록",
      curr: club.club_name,
    }}/>
    <S.ClubSpecTemplate>
      <S.SpecSection>
        <GroupingTitle type={ GROUPING_TITLE_TYPE.STRAIGHT }
          desc="기본 정보"/>
        <S.BasicInfoWrap>
          <BriefBlock className="basic-info-block" title="대표자명" unit={""}>{club.president.name}</BriefBlock>
          {/* <BriefBlock className="basic-info-block" title="직전학기 운영규모" unit={"명"}>{club.detail.}</BriefBlock> */}
          {club.detail.established_date && <BriefBlock className="basic-info-block" title="최초개설일" unit={""}>{formatDate(club.detail.established_date)}</BriefBlock>}
          <BriefBlock className="basic-info-block" title="대표자 연락처" unit={""}>{club.president.email}</BriefBlock>
        </S.BasicInfoWrap>
      </S.SpecSection>
      {
        club.detail.description && <S.SpecSection>
          <GroupingTitle type={ GROUPING_TITLE_TYPE.KIND }
            title="저희는 이런 소학회에요!" desc="소개"/>
          <S.BasicInfoWrap>
            <MobileInterviewBlock content={club.detail.description}/>
          </S.BasicInfoWrap>
        </S.SpecSection>
      }
      <S.SpecSection>
        <GroupingTitle type={ GROUPING_TITLE_TYPE.KIND }
          title="지난 활동들을 소개합니다!"
          desc="지난 활동"
        />
        <S.BasicInfoWrap $direction="column">
          { club.detail?.award_count && <ActivityBrief title={"입상실적"} count={club.detail.award_count.toString()}/> }
          { club.detail?.edu_count && <ActivityBrief title={"누적 개설 스터디"} count={club.detail.edu_count.toString()}/> }
          { club.detail?.study_count && <ActivityBrief title={"학술 교육"} count={club.detail.study_count.toString()}/> }
          { club.detail?.event_count && <ActivityBrief title={"누적 진행 행사"} count={club.detail.event_count.toString()}/> }
        </S.BasicInfoWrap>
      </S.SpecSection>
      <S.SpecSection>
        <GroupingTitle type={ GROUPING_TITLE_TYPE.STRAIGHT }
          desc="활동 사진"
        />
        <S.BasicInfoWrap $direction="column">
          <PhotoViewer images={[
            "/1.jpeg",
            "/2.jpg",
            "/3.png"
          ]}/>
        </S.BasicInfoWrap>
      </S.SpecSection>
      <S.SpecSection style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <span>리크루딩이 <span style={{color: "var(--service-color-H)", fontWeight: "700"}}>진행중</span>이에요</span>
        <ServiceButton
          style={{ width: "100%", height: "4em" }} 
          size={"SERVICE_BUTTON/SIZE/NORMAL"} 
          theme={"SERVICE_BUTTON/THEME/COLORED"} 
          mode={"main"}
          onClick={() => {
            location.href = "/test/apply/submission"
          }}
        >지원하기</ServiceButton>
      </S.SpecSection>
    </S.ClubSpecTemplate>
  </>
};

export default ClubSpecTemplate