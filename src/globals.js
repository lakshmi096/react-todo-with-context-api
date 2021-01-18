import { createGlobalStyle } from 'styled-components';



  export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .items {
        position: fixed;
        top: 150px;
        right: 30%;
        left: 30%;
        border-radius: 8px;
        color: #000;
        font-weight: 300;
    }
`;