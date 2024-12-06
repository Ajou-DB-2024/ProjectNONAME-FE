import styled from "styled-components";

export const ServiceLogoSection = styled.section`
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
