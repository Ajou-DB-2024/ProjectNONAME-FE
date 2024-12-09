import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  p {
    font-size: 1rem;
    color: var(--foreground);
  }

  button {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    background-color: var(--service-color-H);
    color: var(--background);
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: var(--service-color-G);
    }
  }
`;
