import styled from "styled-components";

export const CommonWrapper = styled.section<{$display: boolean}>`
  width: 100%;
  height: 100%;

  ${({$display}) => 
    $display ? "opacity: 1;"
    : "opacity: 0;"
  }
`;