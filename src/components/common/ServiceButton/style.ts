import styled from "styled-components";
import { ServiceButtonSize, ServiceButtonTheme } from "./type";
import css from "styled-jsx/css";

export const ServiceButtonBlock = styled.div<{
  $size: ServiceButtonSize,
  $theme: ServiceButtonTheme,
  $mode: "main" | "sub",
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  ${({$size}) => 
    ($size === ServiceButtonSize.XLARGE) ? `
      padding: 0.75em 0.875em;
      font-size: 1.25em;
      border-radius: 0.75em;
    ` :
    ($size === ServiceButtonSize.LARGE) ? `
      padding: 0.5em 0.625em;
      font-size: 1.25em;
      border-radius: 0.625em;
    ` :
    ($size === ServiceButtonSize.NORMAL) ? `
      padding: 0.75em 0.625em;
      font-size: 1em;
      border-radius: 0.5em;
    ` :
    ($size === ServiceButtonSize.SMALL) ? `
      padding: 0.375em 0.375em;
      font-size: 0.75em;
      border-radius: 0.5em;
    ` :
    ($size === ServiceButtonSize.XSMALL) && `
      padding: 0.25em 0.375em;
      font-size: 0.625em;
      border-radius: 0.375em;
    `
  }

  border-width: 1px;
  border-style: solid;

  ${({$theme, $mode}) => 
    ($theme === ServiceButtonTheme.DEFAULT && $mode === "main") ? `
      border-color: var(--service-color-H);
      color: var(--service-color-H);
      background-color: #F8F8F8;
    ` :
    ($theme === ServiceButtonTheme.DEFAULT && $mode === "sub") ? `
      border-color: black;
      color: black;
      background-color: #F8F8F8;
    ` :
    ($theme === ServiceButtonTheme.COLORED && $mode === "main") ? `
      border-color: transparent;
      color: white;
      background-color: var(--service-color-H);
    ` :
    ($theme === ServiceButtonTheme.COLORED && $mode === "sub") && `
      border-color: transparent;
      color: black;
      background-color: #F8F8F8;
    `
  }

  text-align: center;
`;