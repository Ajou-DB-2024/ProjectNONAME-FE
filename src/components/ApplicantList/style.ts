import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const FilterButton = styled.button`
  background-color: var(--service-color-C);
  border: none;
  padding: 0.5em;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--service-color-D);
  }
`;

export const List = styled.div`
  padding: 1.5em;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;