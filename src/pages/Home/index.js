
import React, { useContext, useState } from 'react'
import { Container, Delete, Edit, Edit_Input, Save, Search, Search__icon, Search__panel, Select, Table, Title, View, Wrapper } from './style'
import { useNavigate } from 'react-router-dom';
import { ParamsContext } from '../../context/paramsContext';
import { DataContext } from '../../context/data'; 
import { toast } from 'react-toastify';

export const Home = () => {
  const [data, setData] = useContext(DataContext)
  const [mock, setMock] = useState(data);
  const [select, setSelect] = useState('firstname')
  const navigate = useNavigate();
  const [params, setParams] = useContext(ParamsContext)
  const [edit, setEdit] = useState({})
  
  const onDelete = (id) => {
    const res = mock.filter((item) => item.id !== id)
    setMock(res)
    
    toast.error(`The person whose id is ${id} has just been deleted`)
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

  const onEdit = (value) => {
    setEdit(value)
    console.log(edit)
  }

  const onEditChange = (e) => {
    const {value, name} = e.target
    setEdit({...edit, [name]:value})
  }

  const onSave = (id) => {
    const res = mock.map((value)=> value.id == id ? 
    {...value, firstname:edit.firstname, lastname:edit.lastname, username: edit.username, email:edit.email} 
    : value)
    setMock(res)
    setEdit({})
    toast.success(`The one whose id is ${id} has been uptaded!`)
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
            {mock.map((value) => (
              <tr key={value.id}>
                <th>{value.id}</th>
                <th onDoubleClick={()=>onEdit(value)}>{edit.id === value.id ? <Edit_Input name='firstname' onChange={onEditChange} value={edit.firstname}  /> : value.firstname}</th>
                <th onDoubleClick={()=>onEdit(value)}>{edit.id === value.id ? <Edit_Input name='lastname' onChange={onEditChange} value={edit.lastname}  /> : value.lastname}</th>
                <th onDoubleClick={()=>onEdit(value)}>{edit.id === value.id ? <Edit_Input name='username' onChange={onEditChange} value={edit.username}  /> : value.username}</th>
                <th onDoubleClick={()=>onEdit(value)}>{edit.id === value.id ? <Edit_Input name='email' onChange={onEditChange} value={edit.email}  /> : value.email}</th>
                <th> 
                  <Search__panel>
                  <View onClick={()=>(navigate(`/tableinfo`), setParams(value.id))}>View</View>
                  {edit.id === value.id ? <Save onClick={()=>onSave(value.id)} >save</Save> : <Edit onClick={()=>onEdit(value)}>Edit</Edit>}
                  <Delete onClick={() => onDelete(value.id)}>Delete</Delete>
                  </Search__panel>
                </th>
              </tr>
            ))}
            
            
          </tbody>
        </Table>
    </Container>
  )
}
