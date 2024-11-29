import styled from "styled-components";

export const RecruitFilterArea = styled.section`
  padding: .25em .5em;
  
  max-width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: .5em;
  
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;