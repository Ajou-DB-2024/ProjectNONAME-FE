import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* 344px = 21.5em */
  height: 13.5em; /* 216px = 13.5em */
  background-color: #f0f7ff;
  border-radius: 0.75em;
  overflow: hidden;
  border: 1px solid #eaeaea;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const ChevronLeft = styled.div`
  position: absolute;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const ChevronRight = styled.div`
  position: absolute;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 0.5em;
  cursor: pointer;
  color: #fff;
`;

export const Pagination = styled.div`
  position: relative;
  width: 100%;
  height: 0.5em;
  background-color: #eaeaea;
  margin-top: 0.5em;
  border-radius: 0.25em;
`;

export const Slider = styled.div<{ position: number }>`
  position: absolute;
  height: 100%;
  width: 1.5em; /* Indicator size */
  background-color: #4169e1;
  border-radius: 0.25em;
  left: ${({ position }) => `${position}%`};
  transition: left 0.3s;
`;

export const UploadContainer = styled.div`
  margin-top: 0.5em;
  width: 21.5em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #4169e1;
  border-radius: 0.5em;
  cursor: pointer;
  label {
    font-size: 1em;
    color: #4169e1;
    cursor: pointer;
  }
  input {
    display: none;
  }
  &:hover {
    background-color: #e6f2ff;
  }
`;
