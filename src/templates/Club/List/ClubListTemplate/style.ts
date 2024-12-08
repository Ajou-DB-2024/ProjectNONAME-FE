import styled from "styled-components";

export const ClubListTemplate = styled.section`
  padding: 1rem 1.5rem;

  
`;

export const SearchOptionArea = styled.section`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: .5em;
`;

export const ClubListWrap = styled.section`
  width: 100%;
  height: max-content;

  overflow-y: auto;
`;

export const FilterWrap = styled.section`
  width: 100%;
  height: 3em;

  overflow: visible;
  z-index: 500;
`;