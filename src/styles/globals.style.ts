import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  button, input {
    border: none;
    outline: none;
  }
  button {
    cursor: pointer;
    padding: 0;
  }
`;

export default GlobalStyles;
