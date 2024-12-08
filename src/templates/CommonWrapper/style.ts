import styled from "styled-components";

export const CommonWrapper = styled.section<{$display: boolean}>`
  width: 100%;
  height: 100%;

  ${({$display}) => 
    $display ? "opacity: 1;"
    : "opacity: 0;"
  }
`;

export const ServiceArea = styled.section<{ $display_navbar: boolean}>`
  width: 100%;
  ${({$display_navbar}) => 
    $display_navbar ? `
      height: calc(100% - 68px);
      overflow-y: auto;
    `
    : "height: 100%;"
  }
`