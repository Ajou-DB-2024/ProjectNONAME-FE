import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--service-color-C);
  padding: 1rem;
  border-radius: 0.5rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  label {
    display: block;
    margin-bottom: 1rem;

    input {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid var(--service-color-D);
      border-radius: 0.5rem;
      margin-top: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        font-size: 1rem;
      }
    }

    input[type="checkbox"] {
      width: auto;
      margin-right: 0.5rem;
    }
  }
`;
