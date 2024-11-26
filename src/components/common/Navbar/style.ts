import Image from "next/image";
import styled from "styled-components";

export const Navbar = styled.section<{selected: boolean}>`
  padding: 1.5rem;
  padding-bottom: 0;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  ${({ selected }) => 
    selected ?
      "border-bottom: 1px solid var(--service-color-H);" :
      "border-bottom: 1px solid transparent"
  }
`;

export const LogoImage = styled(Image)`
  user-select: none;
  width: 42px;
  height: 42px;
`;

export const NavControlArea = styled.section`
  display: flex;
  flex-direction: row;
  gap: .25rem;
`;

export const NavControlItem = styled.section<{selected: boolean}>`
  ${({selected}) => 
    selected ? `
      padding: .3rem .5rem;
      background-color: white;
      border: 1px solid var(--service-color-H);
      transform: translateY(1px);
    ` : `
      padding: .25rem .5rem;
      border: 1px solid transparent;
    `
  }

  padding-bottom: 0;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-bottom: 0;
  border-radius: .5em;

  cursor: pointer;
`;