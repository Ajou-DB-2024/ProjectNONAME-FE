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
`;

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--foreground);
  text-align: center;
`;
