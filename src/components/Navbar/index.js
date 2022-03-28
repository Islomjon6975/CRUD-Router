import React from 'react'
import { AddUser, Container, Link, Logo, Nav, Wrapper } from './style'
import {navbar} from '../../utils/navbar'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Container>
        <Nav>
            <Wrapper>
                <Logo>React User</Logo>
                {navbar.map((item) => (
                    <NavLink 
                        className='navlink' 
                        key={item.id} 
                        to={item.path}
                        style={({isActive})=>{
                            return{
                                color: isActive ? 'crimson' : 'white',
                                fontWeight: isActive ? 'bold' : 'normal',
                                borderBottom: isActive && '2px solid crimson'
                            }
                        }}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </Wrapper>
            <Wrapper>
                <AddUser>Add User</AddUser>
            </Wrapper>
        </Nav>
    </Container>
  )
}
