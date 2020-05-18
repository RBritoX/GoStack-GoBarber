import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }
  html,
  body {
    background: #312e38;
    color: #ffffff;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body,
  input,
  button {
    font: 1.6rem "Roboto Slab", serif;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  li {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
