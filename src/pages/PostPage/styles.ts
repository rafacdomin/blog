import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  max-width: 72rem;
  padding: 0 1.6rem;
  padding-top: 8rem;

  h1 {
    font-size: 4rem;
  }

  > p {
    font-size: 2.4rem;
    text-align: left;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2.4rem 0;

    div {
      display: flex;
      align-items: center;

      img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
      }

      > a {
        text-decoration: none;
        color: #666;
        margin-left: 0.8rem;
        font-size: 1.6rem;
        transition: all 0.2s;

        &:hover {
          color: #e5625e;
          text-decoration: underline;
        }
      }

      span {
        font-size: 1.6rem;
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  max-width: 72rem;

  margin: 3.2rem 0;
  padding: 2.4rem 1.6rem;
  border: 4px solid #e5625e;
  border-right: none;
  border-left: none;
  font-size: 1.6rem;

  div {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;

    img {
      width: 9.6rem;
      height: 9.6rem;
      border-radius: 50%;
    }

    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 1.6rem;

      > a {
        text-decoration: none;
        color: #000;
        margin-left: 0.8rem;
        font-size: 2.4rem;
        transition: all 0.2s;

        &:hover {
          color: #e5625e;
          text-decoration: underline;
        }
      }

      > span {
        color: #666;
        font-size: 1.6rem;

        & + span {
          margin-top: 0.2rem;
        }
      }

      > p {
        margin-top: 1.6rem;
      }
    }
  }
`;

export const CommentContainer = styled.div`
  max-width: 72rem;

  padding: 0 1.6rem;

  h2 {
    font-size: 3.2rem;
    margin-bottom: 2.4rem;
  }
`;
