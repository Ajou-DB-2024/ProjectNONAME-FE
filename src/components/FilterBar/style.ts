import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  
  border-radius: 0.5rem;
  gap: 0.5rem;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #efefef;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    transform: scale(105%);
    background-color: #f2f2f2;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 1.25rem;
  background-color: #f2f2f2;
`;

export const SearchButton = styled(FilterButton)`
  margin-left: auto;
`;
