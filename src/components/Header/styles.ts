import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  background: #e5625e;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

  width: 100%;
  position: fixed;
  z-index: 99;

  div {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    width: 100%;
    max-width: 900px;

    button {
      background: #fff;
      height: 4rem;
      width: 4.8rem;
      border: none;
      border-radius: 1rem;
      margin-right: 0.8rem;

      color: #e5625e;
      font-size: 2.4rem;
      font-weight: bold;
    }

    input {
      background: #fff;
      height: 4rem;
      width: 100%;
      border-radius: 1rem;
      padding: 1.6rem;
      border: 0.5px solid #e5625e;
    }
  }
`;
