import styled from "styled-components";

export const Checkbox = styled.div<{selected: boolean}>`
  width: 1rem;
  height: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({selected}) =>
    selected ?
      `
        background-color: var(--service-color-A);
      ` :
      `
        background-color: #f5f5f5;
      `
  }

  border-radius: .25rem;
  & * {
    transition: all .15s cubic-bezier(0, 1, 1, 1);
  }
`;