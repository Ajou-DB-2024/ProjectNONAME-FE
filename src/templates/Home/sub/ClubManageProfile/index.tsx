import { useState, useEffect, useRef, useMemo } from "react";

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
import { ManageClubBrief } from "@/types/Club";
import useRecruitList from "./hooks/useRecruitList";
import RecruitSelectionButton from "@/components/Home/RecruitSelectionButton";
import { Recruit } from "@/types/Recruit";
import useRecruitBrief from "./hooks/useRecruitBrief";
import states from "@/core/zustand/states";
import { GlobalAlertType } from "@/components/common/GlobalAlert/type";
import ServiceButton from "@/components/common/ServiceButton";
import { ServiceButtonSize, ServiceButtonTheme } from "@/components/common/ServiceButton/type";

// API
// import dataAPI from "@data/index"

// constants

// types
type ClubManageProfileTemplateProps = {
  manage_club_brief: ManageClubBrief
}

// components
const RECRUIT_SELECTION_DEFAULT = {
  recruit_id: -1,
  recruit_name: "목록을 가져오는 중...",
  start_date: "",
  end_date: "",
  club: { club_id: 0, club_name: "" }
};

const ClubManageProfileTemplate: React.FC<ClubManageProfileTemplateProps> = ({ manage_club_brief }) => {

  const { errorAlert, alert } = states.useGlobalAlertQueue();

  const recruit_query = useMemo(() => ({ club_id: Number(manage_club_brief?.club_id || 0) }), [manage_club_brief]);
  const [ recruit_stataus, recruit_list ] = useRecruitList(recruit_query);
  const [ selected_recruit, setSelectedRecruit ] = useState<Recruit>(RECRUIT_SELECTION_DEFAULT);

  const [ recruit_brief, updateRecruitBrief ] = useRecruitBrief();

  const onRecruitSelectionButtonClick = () => {
    alert({
      type: GlobalAlertType.SELECT,
      contents: {
        title: "리크루딩 선택",
        desc: "확인할 리크루딩을 선택해주세요",
        selections: recruit_list.map(recruit => (
          { 
            text: recruit.recruit_name, 
            value: recruit.recruit_id.toString() 
          }
        )),
        onSelect: (recruit_id) => {
          const recruit = recruit_list.find(v => v.recruit_id.toString() === recruit_id );
          if ( !recruit ) 
            errorAlert(undefined, "선택 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.");
          else onRecruitSelect(recruit);
          return true;
        }
      }
    })
  }

  const onRecruitSelect = ( recruit: Recruit ) => {
    setSelectedRecruit(recruit)
    if ( recruit.recruit_id === -1 ) return;
    updateRecruitBrief(recruit.recruit_id);
  }

  useEffect(() => {
    if (recruit_stataus.is_error) return errorAlert(
      undefined,
      "리크루딩 목록을 조회하던 중 오류가 발생했어요. 잠시 후 다시 시도해주세요."
    )
    if ( !recruit_stataus.is_loaded ) return onRecruitSelect(RECRUIT_SELECTION_DEFAULT);
    return onRecruitSelect(recruit_list[0]);
  }, [ recruit_stataus, recruit_list ]);

  return <>
    <ParentS.HomeSection key={`HOME_SECTION_1`}>
      <h3>활동 요약</h3>
      <ParentS.SectionContentArea $direction="row">
        <BriefBlock className="home-brief-block" title="누적 동아리원" unit={"명"}>{ manage_club_brief.total_members }</BriefBlock>
        <BriefBlock className="home-brief-block" title="누적 지원세션" unit={"개"}>{ manage_club_brief.total_submissions }</BriefBlock>
      </ParentS.SectionContentArea>
    </ParentS.HomeSection>
    <ParentS.HomeSection key={`HOME_SECTION_2`}>
      <GroupingTitle key={`GROUP_TITLE_2`} type={GROUPING_TITLE_TYPE.STRAIGHT}
        title="" desc="리크루딩 통계"
      />
      <ParentS.SectionContentArea $direction="column">
        <RecruitSelectionButton 
          name={selected_recruit.recruit_name} 
          is_open={true}
          onClick={onRecruitSelectionButtonClick}
        />
        <S.RecruitSelectionBriefArea>
        {
          (recruit_brief) && <ParentS.SectionContentArea $direction="row" className="block-wrap-area">
            <BriefBlock className="home-brief-block" title="총 지원자 수" unit={"명"}>{ recruit_brief.total_applicants }</BriefBlock>
            <BriefBlock className="home-brief-block" title="작성된 지원서 초안" unit={"개"}>{ recruit_brief.draft_count }</BriefBlock>
          </ParentS.SectionContentArea>
        }
        </S.RecruitSelectionBriefArea>
      </ParentS.SectionContentArea>
    </ParentS.HomeSection>
    <ParentS.HomeSection key={`HOME_SECTION_3`}>
      <GroupingTitle key={`GROUP_TITLE_3`} type={GROUPING_TITLE_TYPE.KIND}
        title="새로운 동아리원을\n모집해볼까요?" desc="리크루딩 생성"
      />
      <ServiceButton 
        size={ServiceButtonSize.NORMAL} 
        theme={ServiceButtonTheme.COLORED} 
        mode={"sub"}   
        style={{width: "100%"}}
      >새로운 리크루딩 생성하기</ServiceButton>
    </ParentS.HomeSection>
  </>
};

export default ClubManageProfileTemplate