import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 60%;
  }

  body {
    background: #f1f2f3;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 1100px){
    :root{
      font-size: 62.5%;
    }
  }
`;
