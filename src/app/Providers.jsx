import PropTypes from 'prop-types'
import React from 'react'
import ThemeProviderComponent from 'styles/theme/ThemeProvider'

const Providers = ({ children }) => {
  return (
    <ThemeProviderComponent>{children} </ThemeProviderComponent>
  )
}

export default Providers

Providers.propTypes = {
  children: PropTypes.node.isRequired
}
