
import React, { useContext, useEffect, useState } from 'react'
import { Container, Delete, Edit, Search, Search__icon, Search__panel, Select, Table, Title, View, Wrapper } from './style'
import {data} from '../../utils/data'
import { useNavigate, useParams } from 'react-router-dom';
import { ParamsContext } from '../../context/paramsContext';

export const TableInfo = () => {
  const [params, setParams] = useContext(ParamsContext)
  const [mock, setMock] = useState(data[params]);
  const navigate = useNavigate()
  
  return (
    <Container>
       <h1>{mock.firstname}</h1>
    </Container>
  )
}
