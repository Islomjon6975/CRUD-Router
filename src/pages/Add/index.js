
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Description, GoBack, Input, Title, Wrapper, Wrapper2 } from './style'
import {data} from '../../utils/data'
import { DataContext } from '../../context/data'
import { toast } from 'react-toastify'

export const Add = () => {
  const navigate = useNavigate()
  const [mock, setMock] = useContext(DataContext)
  
  const [state, setState] = useState({
    id: mock.length,
    firstname: '',
    lastname: '',
    email: '',
    tel: '',
    country: '',
    province: '',
    district: '',
  })
  

  const onChange = (e) => {
    const {name, value} = e.target;
    setState(()=>{
      return{
        ...state,
        [name]: value,
      }
    })
  }
  
  const onAdd = () => {
    
      if(state.firstname.length > 0 && state.lastname.length > 0 && state.email.length > 0 && state.tel.length > 0 && state.country.length > 0 && state.province.length > 0 && state.district.length > 0 ){
        var res =  {
          id: mock.length,
          firstname: state.firstname,
          lastname: state.lastname,
          email: state.email,
          tel: state.tel,
          username: `${state.firstname}_${state.lastname}`,
          country: state.country,
          province: state.province,
          district: state.district
        }
      }else{
        return
      }
      navigate('/')
      toast.success('New user has just been added.')
    
    setMock([
        ...mock,
        res
      ]
    )
  }

  return (
    <Container>
        <Wrapper>
          <Title>Add A User</Title>
          <Input size='5' name='firstname' onChange={onChange} type='text' placeholder='Enter Your Firstname' />
          <Input size='5' name='lastname' onChange={onChange} type='text' placeholder='Enter Your Surname' />
          <Input size='5' name='email' onChange={onChange} type='email' placeholder='Enter Your Email Address' />
          <Input size='5' name='tel' onChange={onChange} type='text' placeholder='Enter Your Phone Number' />
          <Input size='5' name='country' onChange={onChange} type='text' placeholder='Enter Your Country' />
          <Input size='5' name='province' onChange={onChange} type='text' placeholder='Enter Your Province' />
          <Input size='5' name='district' onChange={onChange} type='text' placeholder='Enter Your District' />
          <Button onClick={onAdd}>Add User</Button>
        </Wrapper>
        <Wrapper2>
          <GoBack onClick={()=>navigate(-1)}>Go Back</GoBack>
        </Wrapper2>
    </Container>
  )
}
