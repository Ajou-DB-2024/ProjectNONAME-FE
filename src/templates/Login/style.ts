import styled from "styled-components";

export const LoginTemplate = styled.section`
  width: 100%;
  height: 100%;

  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
`;

export const Section = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ServiceLogoArea = styled.section`
  
`;

export const ServiceCatchPhraseArea = styled.section`
  font-size: 1.5em;
  font-weight: 700;
  color: var(--service-color-O);

  & section {
    display: flex;
    flex-direction: row;
    gap: .25em;
  }

  & span.colorA {
    color: var(--service-color-J);
  }

  & span.colorB {
    color: var(--service-color-H);
  }
`;

export const ServiceGuideMentArea = styled.section`
  width: 100%;

  font-size: 1em;
  font-weight: 500;
  color: var(--service-color-O);

  & section {
    display: flex;
    flex-direction: row;
    gap: .25em;
  }

  & span.colorA {
    font-weight: 700;
    color: var(--service-color-H);
  }
`;

export const LoginButton = styled.div`
  width: 100%;
  padding: 0.5rem 0.625rem;

  border: 1px solid #F2F2F2;
  border-radius: 0.625rem;
  background-color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  font-size: 1rem;
  font-weight: 500;

  &:hover {
    transform: scale(102%);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }
`;