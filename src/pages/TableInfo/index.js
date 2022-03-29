
import React, { useContext, useEffect, useState } from 'react'
import { Container,  GoBack,  Item,  Item__title,  Wrapper } from './style'
import {data} from '../../utils/data'
import { useNavigate, useParams } from 'react-router-dom';
import { ParamsContext } from '../../context/paramsContext';

export const TableInfo = () => {
  const [params, setParams] = useContext(ParamsContext)
  const [mock, setMock] = useState(data[params]);
  const navigate = useNavigate()
  
  return (
    <Container>
      <Wrapper>
          <Item__title>First Name: </Item__title>
          <Item>{mock.firstname}</Item>
      </Wrapper>
      <Wrapper>
          <Item__title>Last Name: </Item__title>
          <Item>{mock.lastname}</Item>
      </Wrapper>
      <Wrapper>
          <Item__title>Email: </Item__title>
          <Item>{mock.email}</Item>
      </Wrapper>
      <Wrapper>
          <Item__title>Tel: </Item__title>
          <Item>{mock.tel}</Item>
      </Wrapper>
      <Wrapper>
          <Item__title>Country: </Item__title>
          <Item>{mock.country}</Item>
      </Wrapper>
      <Wrapper>
          <Item__title>Province: </Item__title>
          <Item>{mock.province}</Item>
      </Wrapper>
      <Wrapper>
          <Item__title>District: </Item__title>
          <Item>{mock.district}</Item>
      </Wrapper>
      <Wrapper>
        <GoBack onClick={()=>navigate('/')}>Go Back</GoBack>
      </Wrapper>
      
    </Container>
  )
}
