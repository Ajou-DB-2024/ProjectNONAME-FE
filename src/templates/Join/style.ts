import styled from "styled-components";

export const JoinAgreementTemplate = styled.section`
  width: 100%;
  height: 100%;

  padding: 5.625rem 1.5rem 3.75rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
`;

export const Section = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ServiceNotiArea = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  & p {
    margin: 0;
  }

  & section {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  & .noti-text {
    font-size: 1em;
    font-weight: 500;
    color: var(--service-color-O);
  }

  & .terms {
    font-size: .85em;
    font-weight: 500;
    & a {
      color: #aaaaaa;
      cursor: pointer;
      user-select: none;
    }
    
    gap: .5em;
  }
`;

export const ButtonArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5em;

  & p {
    line-height: normal;
    & * {
      font-size: .75em;
      font-weight: 700;
      color: #aaaaaa;
    }

    & a {
      color: var(--service-color-I);
      cursor: pointer;
      user-selecnonet
    }
  }

`;