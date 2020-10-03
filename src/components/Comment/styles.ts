import styled from 'styled-components';

export const Container = styled.div`
  border: 0.5px solid #e5625e;
  margin-bottom: 0.8rem;
  padding: 1.6rem;
  border-radius: 2rem;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;

    img {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
      border: 2px solid #e5625e;
    }

    div {
      margin-left: 0.8rem;
      display: flex;
      flex-direction: column;

      span {
        color: #666;
      }
    }
  }

  h3 {
    margin: 0.8rem 0;
  }

  p {
    font-size: 1.8rem;
  }
`;
