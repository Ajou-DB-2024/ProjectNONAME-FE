import styled, { css } from "styled-components";

export const Button = styled.button<{ status: "disabled" | "editable" | "completed" }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5em .75em;
  border-radius: .5em;
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  white-space: nowrap;
  

  & * {
    transition: all .3s cubic-bezier(0, 1, 1, 1);
  }

  ${({ status }) =>
    status === "disabled" &&
    css`
      background-color: var(--background);
      color: #efefef;
      border-color:#efefef;
    `}

  ${({ status }) =>
    status === "editable" &&
    css`
      background-color: var(--background);
      color: var(--service-color-G);
      border-color: var(--service-color-G);
    `}

  ${({ status }) =>
    status === "completed" &&
    css`
      background-color: var(--service-color-H);
      color: var(--background);
      border-color: var(--service-color-H);
    `}
`;

export const Label = styled.span`
  flex: 1;
  text-align: left;
`;
