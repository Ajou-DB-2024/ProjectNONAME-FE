import styled from "styled-components";

export const IconicButton = styled.div<{
  $mode: "main" | "sub"
  $expand: boolean
}>`

  padding: .3em;
  border-radius: .5em;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({$mode}) => 
    $mode === "main" ? `
      background-color: var(--service-color-H);
    `
    : `  
      background-color: #eaeaea;
    `
  }

  height: 2.5em;
  ${({$expand}) => 
    $expand ? `
      width: fit-content;
    `
    : `  
      width: 2.5em;
    `
  }
`;