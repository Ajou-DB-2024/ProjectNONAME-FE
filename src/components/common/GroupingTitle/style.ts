import styled from "styled-components";
import { GROUPING_TITLE_TYPE } from ".";

export const GroupingTitleArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: .5em;
`;

export const GroupingTitle = styled.h2<{viewtype: GROUPING_TITLE_TYPE}>`
  font-size: 1.25em;
  font-weight: 700;
  ${({viewtype}) => 
    viewtype === GROUPING_TITLE_TYPE.STRAIGHT && "display: none;"
  }

  display: flex;
  flex-direction: column;
`;

export const TitleDescription = styled.span<{viewtype: GROUPING_TITLE_TYPE}>`
  ${({viewtype}) => 
    viewtype === GROUPING_TITLE_TYPE.STRAIGHT ? `
      font-size: 1.25em;
      font-weight: 700;
  ` : `
      font-size: 1em;
      font-weight: 700;
      opacity: 0.3;
  `
  }
`;
