import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 393px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Section = styled.section`
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 1em;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  button {
    width: 100%;
    padding: 0.5rem;
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

export const SectionTitle = styled.section`
  display: flex;
  flex-direction: column;
  gap: .5em;
`;