import styled from "styled-components";

export const HomeTemplateWrap = styled.section`
  width: 100%;
  height: calc(100% - 60px);
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  
  flex: 1 1 auto; /* 남은 공간을 채움 */
  overflow: hidden; /* 내부 스크롤 영역 제한 */
  
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const HomeSectionWrap = styled.section`
  width: 100%;
  height: 100%;

  flex: 1 1 auto;
  overflow-y: auto;
`;

export const HomeSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;

  margin-bottom: 3em;

  & h3 {
    font-size: 1em;
    font-weight: 700;
    color: #aaaaaa;
  }
`;

export const SectionContentArea = styled.section<{$direction: "row" | "column"}>`
  width: 100%;

  display: flex;
  ${({$direction}) => `flex-direction: ${$direction};`}
  align-items: center;
  justify-content: flex-start;
  gap: 1em;

  & .home-brief-block {
    width: 100%;
  }
`;

export const TagSelectorArea = styled.section`
  width: 100%;
  overflow-x: auto;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: .25em;
`;