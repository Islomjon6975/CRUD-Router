
import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Button, Checkbox, Container, Description, Description1, Input, Title, Wrapper } from './style'

export const Contact = () => {
  return (
    <Container>
      <Title>Contact Page</Title>
      <Wrapper>
        <Description>Email address</Description>
        <Input type='email' />
        <Description1>We'll never share your email with anyone else.</Description1>
      </Wrapper>
      <Wrapper>
        <Description>Password</Description>
        <Input type='password' />
      </Wrapper>
      <Wrapper checkbox>
        <Checkbox type='checkbox' />
        <Description>Check me out</Description>
      </Wrapper>
      <Button>Submit</Button>
    </Container>
  )
}
