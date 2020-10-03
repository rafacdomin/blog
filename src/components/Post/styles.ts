import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  padding: 1.6rem 2.4rem;
  margin: 0.8rem 0;
  max-width: 72rem;
  width: 100%;
  min-height: 16rem;
  content-visibility: auto;

  border: 0.5px solid #e5625e;
  border-radius: 2rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  background: #fff;

  header {
    display: flex;
    align-items: center;
    padding-bottom: 0.4rem;
    border-bottom: 0.5px solid #eee;
    width: 100%;

    img {
      height: 5.6rem;
      width: 5.6rem;
      border-radius: 50%;
      border: 2px solid #e5625e;
    }

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 1.6rem;

      strong {
        font-size: 1.6rem;
        color: #666;
      }

      span {
        font-size: 1.4rem;
        color: #999;
      }
    }
  }

  h1 {
    margin: 1.6rem 0;
    font-weight: bold;
    font-size: 2.4rem;
    color: #000;
    transition: all 0.2s;

    &:hover {
      color: #e5625e;
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    span {
      font-size: 1.4rem;
      color: #e5625e;
    }
  }
`;
