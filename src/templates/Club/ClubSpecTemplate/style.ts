import styled, { css } from "styled-components";

export const ClubSpecTemplate = styled.section`
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const SpecSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const BasicInfoWrap = styled.section<{$direction?: "row" | "column"}>`
  width: 100%;

  display: flex;
  ${({ $direction }) => $direction && css`flex-direction: ${$direction};`}
  gap: 1em;


  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & .basic-info-block {
    min-width: 9rem;
    width: fit-content;
    height: 6rem;
    padding: 1rem 1.25rem;
    justify-content: space-between;

    & span {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;