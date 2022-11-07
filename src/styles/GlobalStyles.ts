import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #ffffff;
    color: black;
    font-family: 'Roboto', sans-serif;
  }

  button {
    font-family: 'Roboto', sans-serif;
  }
`