import { IconChevronDown } from "@tabler/icons-react";
import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  padding: .5rem 1.25em;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
  border: 1px solid var(--service-color-H);
  border-radius: .5em;

  & * {
    color: var(--service-color-H);
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;

  user-select: none;
`;

export const IconDown = styled(IconChevronDown)<{$turn: boolean}>`
  width: 1.25rem;
  height: 1.25rem;

  ${({$turn}) => $turn && "transform: rotate(-180deg);"}
`;