import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--service-color-C);
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--service-color-D);
  border-radius: 0.5rem;
`;

export const TextInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--service-color-D);
  border-radius: 0.5rem;
`;
