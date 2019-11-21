import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { colors, fonts } from './src/utils/styles'

const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
    overflow-y: scroll;
  }

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.lightest};
    color: ${colors.darkest};
    font-family: ${fonts.body};
    font-size: 1rem;
    position: relative;
    min-height: 100%;
    *, *:before, *:after {
      box-sizing: inherit;
    }
  }
`
export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
  </React.Fragment>
)
