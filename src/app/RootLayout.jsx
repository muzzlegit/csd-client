import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from './RootLayout.styled'
import { NavBar } from 'interface/index'

const RootLayout = () => {
  return (
    <Container>
      <Outlet />
      <NavBar />
    </Container>
  )
}

export default RootLayout
