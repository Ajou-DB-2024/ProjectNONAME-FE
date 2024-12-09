import styled from "styled-components";

export const ApplicationTemplate = styled.section`
  width: 100%;
  height: calc(100% - 80px);
`;

export const HyperlinkArea = styled.section`
  width: 100%;
  padding: .5em 1em;
  margin-top: 1em;

  background-color: var(--service-color-J);
  color: white;

  display: flex;
  align-items: center;
`;

export const ServiceArea = styled.section`
  height: 100%;
  padding: 1em 1.5em;

  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const HeaderArea = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonArea = styled.section`
  height: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: .25em;
    
  padding-right: 1.5em;
  padding-top: 2em;
`;

export const ControlSection = styled.section`

`;

export const QASection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
