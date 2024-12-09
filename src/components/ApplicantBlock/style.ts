import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #eeeeee;
  transition: background-color 0.3s ease;
  
  user-select: none;
  cursor: pointer;

  & * {
    color: var(--service-color-K);
  }

  transition: all .35s cubic-bezier(0, 1, 1, 1);

  &:hover {
    transform: scale(102%);
  }
`;

export const Profile = styled.div`

  width: 2.4rem;
  height: 2.4rem;
  background-color: #f7f7f7;
  border-radius: .75rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  max-width: 50%;
`;

export const Name = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Grade = styled.span`
  font-size: 1rem;
  font-weight: normal;
  margin-left: 0.5rem;
`;

export const Department = styled.div`
  font-size: 0.875rem;
  opacity: 0.7;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  width: 100%;
  overflow: hidden;
`;

export const Action = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: var(--service-color-H);
  background: none;
  border: none;
  cursor: pointer;

  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

export const Icon = styled.span`
  font-size: 1.25rem;
  margin-left: 0.5rem;
`;
