import styled from "styled-components";

export const BlockContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5em;
  padding: 1em;
  width: 21.5em;
  height: 8.75em;
  background-color: #f8f9fa;
  border-radius: 0.75em;
  box-shadow: 0 0.125em 0.5em rgba(0, 0, 0, 0.1);
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0.0625em 0.25em rgba(0, 0, 0, 0.1);
`;

export const Content = styled.p`
  margin: 0;
  font-size: 1em;
  line-height: 1.5;
  color: #212529;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Input = styled.input`
  font-size: 1em;
  line-height: 1.5;
  color: #212529;
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;
`;
