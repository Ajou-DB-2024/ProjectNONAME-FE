import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 3rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  position: absolute;
  bottom: 1.5rem;
`;

export const TotalText = styled.div`
  font-size: 1rem;
  color: var(--foreground);
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--background);
  background-color: var(--service-color-H);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--service-color-G);
  }
`;
