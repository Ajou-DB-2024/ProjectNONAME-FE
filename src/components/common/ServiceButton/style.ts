import styled from "styled-components";
import { ServiceButtonSize, ServiceButtonTheme } from "./type";
import css from "styled-jsx/css";

export const ServiceButtonBlock = styled.div<{
  $size: ServiceButtonSize,
  $theme: ServiceButtonTheme,
  $mode: "main" | "sub",
}>`
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
      padding: 0.5em 0.625em;
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
  ${({$mode}) => 
    ($mode === "main") ? `
      --button-color: var(--service-color-H);
    ` :
    ($mode === "sub") && `
      --button-color: black;
    `
  }
  ${({$theme, $mode}) => 
    ($theme === ServiceButtonTheme.DEFAULT) ? `
      border-color: var(--button-color);
      color: var(--button-color);
      background-color: #F8F8F8;
    ` :
    ($theme === ServiceButtonTheme.COLORED) && `
      border-color: transparent;
      ${
        $mode === "main" ? css`color: white;`
        : css`color: black;`
      }
      background-color: var(--button-color);
    `
  }
`;