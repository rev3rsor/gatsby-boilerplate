import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "$styled-components/GlobalStyle"
import * as theme from "$styled-components/theme"

import MobileProvider from "./MobileProvider"

const WrapRootElement = ({ element }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MobileProvider>
          <GlobalStyle />
          {element}
        </MobileProvider>
      </ThemeProvider>
    </>
  )
}

export default WrapRootElement
