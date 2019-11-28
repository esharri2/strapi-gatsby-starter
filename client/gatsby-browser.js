import React from "react";
import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./src/utils/styles";

const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
    font-size: 16px;
  }

  html, body {
    margin: 0!important;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.periwinklegrey};
    font-family: Helvetica, sans-serif;
    position: relative;
    min-height: 100%;
    *, *:before, *:after {
      box-sizing: inherit;
    }
  }
`;

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);
