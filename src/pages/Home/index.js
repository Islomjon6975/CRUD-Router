
import React, { useContext, useState } from 'react'
import { Container, Delete, Edit, Search, Search__icon, Search__panel, Select, Table, Title, View, Wrapper } from './style'
import {data} from '../../utils/data'
import { useNavigate } from 'react-router-dom';
import { ParamsContext } from '../../context/paramsContext';
import { DataContext } from '../../context/data'; 

export const Home = () => {
  const [mock, setMock] = useContext(DataContext);
  const [select, setSelect] = useState('firstname')
  const navigate = useNavigate();
  const [params, setParams] = useContext(ParamsContext)
  
  const onDelete = (id) => {
    const res = mock.filter((item) => item.id !== id)
    setMock(res)
  }

  const onChange = (e) => {
    const {value} = e.target
    const res = data.filter((item) => select === 'firstname' ? item.firstname.toLowerCase().includes(value.toLowerCase()) : select === 'lastname' ? item.lastname.toLowerCase().includes(value.toLowerCase()): item.username.toLowerCase().includes(value.toLowerCase()))
    setMock(res)
  }

  const onSelect = (e) => {
    const {value} = e.target
    setSelect(value)
  }
  
  
  return (
    <Container>
        <Title>Home Page</Title>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
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
            {mock.map(({id, firstname, lastname, username, email}) => (
              <tr key={id}>
                <th>{id}</th>
                <th>{firstname}</th>
                <th>{lastname}</th>
                <th>{username}</th>
                <th>{email}</th>
                <th> 
                  <Search__panel>
                  <View onClick={()=>(navigate(`/tableinfo`), setParams(id))}>View</View>
                  <Edit>Edit</Edit>
                  <Delete onClick={() => onDelete(id)}>Delete</Delete>
                  </Search__panel>
                </th>
              </tr>
            ))}
            
            
          </tbody>
        </Table>
    </Container>
  )
}
