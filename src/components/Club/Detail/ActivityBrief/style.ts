import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1.5em 1em 1em;
  width: 100%;
  height: 5.125em;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 0.75em;

  gap: 1rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3em;
  height: 3em;
  background-color: #ffffff;

  border-radius: 1.5rem;
  box-shadow: 0 0.0625em 0.25em rgba(0, 0, 0, 0.1);
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 3rem);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 1em;
  color: var(--service-color-H);
  font-weight: 500;
`;

export const Count = styled.span`
  font-size: 1.25em;
  color: var(--service-color-H);
  font-weight: bold;
`;

export const Input = styled.input`
  font-size: 1em;
  line-height: 1.5;
  color: var(--service-color-H);
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  text-align: right;
`;
