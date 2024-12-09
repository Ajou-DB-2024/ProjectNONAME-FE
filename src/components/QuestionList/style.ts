import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1.5rem;
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--service-color-C);
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid var(--service-color-D);
`;

export const Text = styled.div`
  font-size: 1rem;
  color: var(--foreground);
`;

export const Type = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: var(--service-color-H);
`;
