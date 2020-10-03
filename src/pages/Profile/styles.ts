import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.6rem;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 2rem;
  padding: 2.4rem 1.6rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 2.4rem;
  width: 100%;
  max-width: 1100px;

  img {
    width: 9.6rem;
    height: 9.6rem;
    border: 2px solid #e5625e;
    border-radius: 50%;
  }

  > strong {
    font-size: 3.2rem;
    margin: 0.8rem 0 0;
  }

  div {
    margin: 2.4rem 0;
    display: flex;
    flex-direction: column;

    span {
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.8rem;
      }

      & + span {
        margin-top: 0.8rem;
      }
    }

    @media (min-width: 600px) {
      flex-direction: row;

      span {
        margin: 0 24px;

        & + span {
          margin-top: 0;
        }
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1.6rem;

    > strong {
      color: #666;
      font-size: 1.8rem;
      margin-bottom: 0.4rem;
    }

    @media (min-width: 450px) {
      align-items: center;
    }
  }
`;
