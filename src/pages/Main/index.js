
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'
import { Container } from './style'

export const Main = () => {
  return (
    <Container>
        <Navbar />
        <Outlet />
        <Footer />
    </Container>
  )
}
