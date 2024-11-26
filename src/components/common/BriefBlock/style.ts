import styled from "styled-components";

export const BriefBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem .75rem;

  border: 1px solid #eaeaea;
  border-radius: .5rem;
  background-color: white;

  & h2 {
    font-size: 0.875rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.3);
    word-break: keep-all;

    width: 100%;
    padding-right: 30%;
  }
`;

export const ValueArea = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  & span {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--service-color-H);
  }
`;