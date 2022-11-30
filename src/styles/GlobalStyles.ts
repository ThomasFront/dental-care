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
    overflow-x: hidden;
  }

  html {
    overflow-x: hidden;
  }

  button {
    font-family: 'Roboto', sans-serif;
  }
`