import styled from "styled-components";

export const ApplyQuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Question = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

export const AnswerInput = styled.textarea`
  width: 100%;
  height: 5rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--service-color-C);
  border-radius: 0.5rem;
  resize: none;

  &:focus {
    outline: 2px solid var(--service-color-G);
  }
`;

export const Answer = styled.p`
  font-size: 1rem;
  color: var(--foreground);
`;
