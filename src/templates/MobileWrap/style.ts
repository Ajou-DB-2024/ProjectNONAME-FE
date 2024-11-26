import Image from "next/image";
import styled from "styled-components";

export const MainWrap = styled.main`
  width: 100%;
  max-width: 393px;
  height: calc(100% - .5em);
  padding: 0.5em;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: .5em;
  background-color: white;
  border: 2px solid #eaeaea;
  overflow: hidden;
`;

export const BackgroundImage = styled(Image)`
  width: 391px;
  height: 319px;
  
  position: fixed;
  top: 1.5rem;
  right: -12.5rem;

  opacity: .3;
`;