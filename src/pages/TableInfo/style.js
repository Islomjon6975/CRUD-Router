import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 50px - 70px);
    background-color: whitesmoke;
    padding: 30px 10%;
    box-sizing: border-box;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 100px;
    box-sizing: border-box;
    margin-bottom: 20px;
`

export const Item__title = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 18px;
    width: 20%;
    padding-right: 20px;
    
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #555;
    width: 80%;
    height: 30px;
    padding: 0 20px;
    font-size: 18px;
`   

export const GoBack = styled.div`
    width: 100px;
    height: 30px;
    border: 1.5px solid #05DEFC;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 17px;
    transition: all .5s ease;
    :hover{
        background-color: #05DEFC;
        color: white;
    }
    :active{
        transform: scale(0.97);
    }
`