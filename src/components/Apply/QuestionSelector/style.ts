import styled from "styled-components";

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
