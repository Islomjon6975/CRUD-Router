import React from 'react'
import { AddUser, Container, Link, Logo, Nav, Wrapper } from './style'
import {navbar} from '../../utils/navbar'
import { NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
  return (
    <Container>
        <Nav>
            <Wrapper>
                <Logo>React User</Logo>
                {navbar.map((item) => !item.hidden && (
                    <NavLink 
                        className='navlink' 
                        key={item.id} 
                        to={item.path}
                        style={({isActive})=>{
                            return{
                                color: isActive ? '#2c2d2d' : 'white',
                                fontWeight: isActive ? 'bold' : 'normal',
                                borderBottom: isActive && '2px solid #2c2d2d',
                                padding: '0 5px',
                            }
                        }}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </Wrapper>
            <Wrapper>
                <AddUser onClick={()=>navigate(`/add`)}>Add User</AddUser>
            </Wrapper>
        </Nav>
    </Container>
  )
}
