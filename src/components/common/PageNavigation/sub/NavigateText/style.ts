import { IconChevronLeft } from "@tabler/icons-react";
import styled from "styled-components";

export const NavigateText = styled.section<{$is_main: boolean}>`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: .25em;

  & h3 {
    font-weight: 700;
    ${({$is_main}) => 
      $is_main ? `
        font-size: 1.5rem;
      `
      : `
        font-size: 1em;
        color: #aaaaaa;
      `
    }
  }
`;
export const GoBackIcon = styled(IconChevronLeft)`
  height: 1em;
  color: #aaaaaa;

  margin-top: .25em;
`;