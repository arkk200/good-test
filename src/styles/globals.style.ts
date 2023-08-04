import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  button, input {
    border: none;
    outline: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
