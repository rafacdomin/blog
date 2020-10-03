import styled from 'styled-components';

export const Container = styled.nav`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  background: #e5625e;

  width: 100%;
  position: fixed;
  z-index: 99;

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
`;
