import { IconChevronDown } from "@tabler/icons-react";
import styled from "styled-components";

export const RecruitSelectionButton = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: .5em .75em;
  border-radius: .5em;
  background-color: var(--service-color-H);

  & * {
    color: white !important;
  }
`;

export const OpenDisplayArrow = styled(IconChevronDown)<{$is_open: boolean}>`
  width: 1.5em;
  
  ${({$is_open}) => 
    $is_open && "transform: rotateY(-180deg);"
  }
`;