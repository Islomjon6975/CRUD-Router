
import React, { useEffect, useState } from 'react'
import { Container, Delete, Edit, Search, Search__icon, Search__panel, Select, Table, Title, View, Wrapper } from './style'
import {data} from '../../utils/data'
import { useNavigate, useParams } from 'react-router-dom';

export const TableInfo = () => {
  const [mock, setMock] = useState(null);
  const [select, setSelect] = useState('firstname')
  const params = useParams();
  console.log(data[1])
      

  useEffect(()=>{
    setMock(data[1])
  },[] )
  
  // const onDelete = (id) => {
  //   const res = mock.filter((item) => item.id !== id)
  //   setMock(res)
  // }

  // const onChange = (e) => {
  //   const {value} = e.target
  //   const res = data.filter((item) => select === 'firstname' ? item.firstname.toLowerCase().includes(value.toLowerCase()) : select === 'lastname' ? item.lastname.toLowerCase().includes(value.toLowerCase()): item.username.toLowerCase().includes(value.toLowerCase()))
  //   setMock(res)
  // }

  // const onSelect = (e) => {
  //   const {value} = e.target
  //   setSelect(value)
  // }

  
  return (
    <Container>
        {/* <Title>Home Page</Title>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>User Name</th>
              <th>Email</th>
              <th>
                <Search__panel>
                  <Select defaultValue={select} onChange={onSelect}>
                    <option value='firstname'>Name</option>
                    <option value='lastname'>Surname</option>
                    <option value='username'>UserName</option>
                  </Select>
                  <Wrapper>
                    <Search placeholder='Search' onChange={onChange} />
                    <Search__icon />
                  </Wrapper>
                </Search__panel>
              </th>
            </tr>
          </thead>
          <tbody>
            
              <tr >
                <th>{mock.id}</th>
                <th>{mock.firstname}</th>
                <th>{mock.lastname}</th>
                <th>{mock.username}</th>
                <th>{mock.email}</th>
                <th> 
                  <Search__panel>
                  <View >View</View>
                  <Edit>Edit</Edit>
                  <Delete >Delete</Delete>
                  </Search__panel>
                </th>
              </tr>
            
            
            
          </tbody>
        </Table> */}
        {mock?.id} - {mock?.firstname}
    </Container>
  )
}
