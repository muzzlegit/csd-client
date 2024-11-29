import React from 'react'
import { ThemeProvider } from "@emotion/react"
import { theme } from './theme'
import PropTypes from 'prop-types'

const ThemeProviderComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default ThemeProviderComponent

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}
