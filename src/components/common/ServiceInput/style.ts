import styled from "styled-components";

export const ServiceInputBlock = styled.div`
  padding: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: .5em;
  
  background-color: white;
  border: 1px solid #efefef;
  border-radius: 1em;

  color: var(--service-color-H);
`;

export const DisplayArea = styled.section`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  font-size: 1em;
`;

export const InputTitle = styled.h3`
  font-size: 1em;
  font-weight: 700;
`;

export const InputLengthArea = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputLength = styled.span<{$max_diff?: number}>`
  font-size: 1em;
  font-weight: 700;

  ${({$max_diff = 0}) => 
    ($max_diff > 0) ? "opacity: 0.3;" :
    ($max_diff == 0) ? "opacity: 1;" :
    "color: #e71313;"
  }
`;

export const InputArea = styled.section`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const InputTag = styled.input`
  outline: none;
  background-color: transparent;
  border: none;
  
  font-size: 1em;
  font-weight: 300;
  color: var(--service-color-H);

  width: 100%;
  height: fit-content;
`;
