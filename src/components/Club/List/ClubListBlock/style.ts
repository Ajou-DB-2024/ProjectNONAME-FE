import { IconChevronRight } from "@tabler/icons-react";
import styled from "styled-components";

export const ClubListBlock = styled.div`
  width: 100%;
  padding: 1rem;

  border: 1px solid #eaeaea;
  border-radius: .5em;
  background-color: white;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  user-select: none;
  cursor: pointer;

  &:hover {
    transform: scale(102%);
  }

  & * {
    color: var(--service-color-K);
  }
`;


export const ContentArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: .25em;
`;

export const BasicInfoArea = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: .4em;

  & h3 {
    font-size: 1.25em;
    font-weight: 700;
  }

  & h5 {
    font-size: .8em;
    font-weight: 500;
  }
`;

export const DepartArea = styled.span`
  font-size: .8em;
  font-weight: 500;
`;

export const ArrowIcon = styled(IconChevronRight)`
  height: 1.5em;
`;