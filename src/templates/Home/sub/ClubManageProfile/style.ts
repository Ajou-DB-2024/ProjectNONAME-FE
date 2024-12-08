import ServiceButton from "@/components/common/ServiceButton";
import styled from "styled-components";

export const TagSearchResultArea = styled.section`
  width: 100%;
  overflow-x: auto;
`;

export const RecruitBlockWrap = styled.section`
  width: fit-content;
  float: left;
  display: inline-flex;
  gap: .5em;
`;

export const RecruitSelectionBriefArea = styled.section`
  width: 100%;
  height: 6.5em;

  & .block-wrap-area {
    height: 100%;
    
    & .home-brief-block {
      height: 100%;
    }
  }

`;

export const CreateRecruitBlock = styled(ServiceButton)`
  width: 100%;

  
`;