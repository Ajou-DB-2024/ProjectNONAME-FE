import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchInputWrapper = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 2px solid ${({ isFocused }) => (isFocused ? "var(--service-color-H)" : "#EAEAEA")};
  border-radius: 8px;
  background-color: ${({ isFocused }) => (isFocused ? "var(--service-color-H-light)" : "#f9fafb")};
  transition: border-color 0.3s, background-color 0.3s;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  margin-left: 8px;
  font-size: 16px;
  color: #374151;
  background-color: transparent;

  &::placeholder {
    color: #9ca3af;
  }
`;
