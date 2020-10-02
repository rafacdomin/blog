import styled from 'styled-components';

export const Container = styled.div`
  border: 0.5px solid #e5625e;
  border-radius: 2rem;
  padding: 1.6rem;
  margin: 0.8rem;
  max-width: 56rem;
  width: 100%;
  min-height: 16rem;
  content-visibility: auto;
  contain-intrinsic-size: 1000px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
    padding-bottom: 0.4rem;
    border-bottom: 0.5px solid #eee;

    img {
      height: 5.6rem;
      width: 5.6rem;
      border-radius: 50%;
    }

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 1.6rem;

      > a {
        font-weight: bold;
        font-size: 1.6rem;
        text-decoration: none;
        color: #666;
        transition: all 0.2s;

        &:hover {
          text-decoration: underline;
        }
      }

      span {
        font-size: 1.4rem;
        color: #999;
      }
    }
  }

  > a {
    font-weight: bold;
    font-size: 2.4rem;
    text-decoration: none;
    color: #000;
    transition: all 0.2s;

    &:hover {
      color: #e5625e;
      text-decoration: underline;
    }
  }
`;
