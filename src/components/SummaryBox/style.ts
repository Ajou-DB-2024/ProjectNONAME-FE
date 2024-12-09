import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0 1.5rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--service-color-H);
  border-radius: .5em;

  padding: 1rem;

  & * {
    color: white;
    font-weight: 700;
    font-size: .9rem !important;
  }
`;

export const CloseBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #aaaaaa;
  border-radius: .5em;

  padding: 1rem;

  & * {
    color: white;
    font-weight: 700;
    font-size: .9rem !important;
  }
`;
