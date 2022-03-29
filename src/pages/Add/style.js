import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* height: calc(100vh - 50px - 70px); */
    background-color: whitesmoke;
    padding: 20px 10%;
    box-sizing: border-box;
`

export const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    background-color: whitesmoke;
    box-shadow: -1px 2px 44px 6px rgba(89, 156, 208, 0.24);
    padding: 20px 40px;
    box-sizing: border-box;
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    /* margin-bottom: 10px; */
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 15px;
    box-sizing: border-box;
    margin: 9px 0;
    border-radius: 3px;
    border: 1.5px solid #555;
    :focus{
        border: 1.8px solid #444;
    }
    outline: none;
    cursor: pointer;

    
`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    background-color: #05DEFC;
    margin-top: 9px;
    border-radius: 3px;
    color: #fff;
    :hover{
        background-color: whitesmoke;
        border: 1.5px solid #05DEFC;
        color: #05DEFC;
    }
    transition: all .5s ease;
    :active{
        transform: scale(0.99);
    }
    cursor: pointer;
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
    margin-top: 20px;
`

export const Wrapper2 = styled.div`
    width: 100%;
`