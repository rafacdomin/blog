import styled from 'styled-components';

export const PageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8rem;

  @media (min-width: 1100px) {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 3fr 1fr;
    grid-template-areas: 'content profile';
  }
`;

export const ProfileContainer = styled.div`
  display: none;
  background: #fff;
  margin-right: 16px;

  padding: 24px;
  border-radius: 20px;
  width: 350px;
  max-height: 350px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

  header {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px solid #e5625e;
    }

    > div {
      margin-left: 16px;
      display: flex;
      justify-content: center;
      flex-direction: column;

      a {
        text-decoration: none;
        color: #666;
        font-size: 2.4rem;
        transition: all 0.2s;

        &:hover {
          color: #e5625e;
          text-decoration: underline;
        }
      }

      span {
        width: 100%;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    strong {
      color: #999;
      margin-bottom: 4px;
    }
  }

  button {
    width: 100%;
    min-height: 40px;
    border: none;
    background: #e5625e;
    color: #fff;
    border-radius: 8px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #e5925e;
    }
  }

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-area: profile;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 110rem;
  margin: 0 1.6rem;

  @media (min-width: 1100px) {
    grid-area: content;
  }
`;

export const Main = styled.main`
  background: #fff;
  padding: 2.4rem;
  border-radius: 2rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

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
        border: 2px solid #e5625e;
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
  background: #fff;
  border-radius: 2rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

  margin: 1.6rem 0;
  padding: 2.4rem;
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
      border: 2px solid #e5625e;
    }

    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 1.6rem;

      > a {
        text-decoration: none;
        color: #000;
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
  background: #fff;
  border-radius: 2rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

  padding: 2.4rem;

  h2 {
    font-size: 3.2rem;
    margin-bottom: 2.4rem;
  }
`;
