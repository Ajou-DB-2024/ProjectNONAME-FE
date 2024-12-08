import styled from "styled-components";

export const RecruitBlock = styled.div`
  display: inline-block;
  
  padding: 1.5em;
  width: 10em;
  height: 12em;
  box-sizing: border-box;
  
  background-color: white;
  border-radius: .5em;
  border: 1px solid #eaeaea;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleArea = styled.section`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: .5em;

  & section {
    width: calc(100% - 1.25em);
  }

  & h1 {
    width: 100%;

    font-size: 1.25em;
    color: var(--service-color-J);
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }
  & h3 {
    font-size: 1em;
    color: var(--service-color-J);
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Department = styled.span`
  width: 100%;

  font-size: .75em;
  color: var(--service-color-H);
  word-break: keep-all;
  text-align: right;
`;