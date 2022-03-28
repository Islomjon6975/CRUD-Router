import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70px;
    background-color: #05defc;
    padding: 0 10%;

    .navlink{
        display: flex;
        align-items: center;
        font-size: 20px;
        color: whitesmoke;
        margin: 0 10px;
        text-decoration: none;
        height: 100%;
    }
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;   
`

export const Logo = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: whitesmoke;
    margin-right: 25px;
`

export const AddUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    border: 1.5px solid whitesmoke;
    font-size: 17px;
    color: white;
    border-radius: 5px;
    font-weight: normal;
    transition: all .6s ease;
    :active{
        transform: scale(0.97);
    }
`