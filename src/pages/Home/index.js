
import React from 'react'
import { Container, Delete, Edit, Table, Title, View } from './style'
import {data} from '../../utils/data'

export const Home = () => {
  return (
    <Container>
        <Title>Home Page</Title>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({id, firstname, lastname, username, email}) => (
              <tr>
                <th>{id}</th>
                <th>{firstname}</th>
                <th>{lastname}</th>
                <th>{username}</th>
                <th>{email}</th>
                <th> 
                  <View>View</View>
                  <Edit>Edit</Edit>
                  <Delete>Delete</Delete>
                
                </th>
              </tr>
            ))}
            
            
          </tbody>
        </Table>
    </Container>
  )
}
