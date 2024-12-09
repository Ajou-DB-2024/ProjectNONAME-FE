import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const QuestionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: var(--service-color-C);
  border-radius: 0.5rem;
  border: 1px solid var(--service-color-D);
  cursor: pointer;

  &:hover {
    background-color: var(--service-color-D);
  }
`;

export const QuestionText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: var(--foreground);
`;

export const QuestionType = styled.span`
  font-size: 0.875rem;
  color: var(--foreground);
  opacity: 0.7;
  margin-left: 0.5rem;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  color: var(--foreground);
  cursor: pointer;

  &:hover {
    color: var(--service-color-H);
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--service-color-C);
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: var(--foreground);
`;

export const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--service-color-D);
  border-radius: 0.5rem;
  background-color: var(--background);
  cursor: pointer;

  &:hover {
    background-color: var(--service-color-B);
  }
`;

export const TextInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--service-color-D);
  border-radius: 0.5rem;
`;
