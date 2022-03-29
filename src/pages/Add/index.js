
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Description, GoBack, Input, Title, Wrapper, Wrapper2 } from './style'

export const Add = () => {
  const navigate = useNavigate()


  return (
    <Container>
        <Wrapper>
          <Title>Add A User</Title>
          <Input type='text' placeholder='Enter Your Firstname' />
          <Input type='text' placeholder='Enter Your Surname' />
          <Input type='email' placeholder='Enter Your Email Address' />
          <Input type='text' placeholder='Enter Your Phone Number' />
          <Input type='text' placeholder='Enter Your Country' />
          <Input type='text' placeholder='Enter Your Province' />
          <Input type='text' placeholder='Enter Your District' />
          <Button>Add User</Button>
        </Wrapper>
        <Wrapper2>
          <GoBack onClick={()=>navigate(-1)}>Go Back</GoBack>
        </Wrapper2>
    </Container>
  )
}
