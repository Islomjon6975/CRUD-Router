import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 50px - 70px);
    background-color: whitesmoke;
    padding: 30px 10%;
    box-sizing: border-box;
`

export const Title = styled.div`
    font-size: 37px;
    font-weight: 700;
    margin-bottom: 30px;
`

export const Description = styled.div`
    font-size: 17px;
    margin: 5px 0;
    line-height: 28px;
`

export const Description1 = styled.div`
    font-size: 14x;
    margin: 5px 0;
    line-height: 28px;
    opacity: 0.7;
`

export const Wrapper = styled.div`
    display: ${({checkbox}) => checkbox && 'flex'};
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`

export const Input = styled.input`
    width: 100%;
    height: 35px;
    outline: none;
    padding: 0 10px;
    border: 1px solid #adadad;
    border-radius: 2px;
    font-size: 17px;
    cursor: pointer;
`

export const Checkbox = styled.input`
    width: 18px;
    height: 18px;
    border: 1px solid #adadad;
    margin-right: 10px;
    cursor: pointer;
`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 35px;
    background-color: #05defc;
    font-size: 18px;
    color: #fff;
    letter-spacing: 1.2px;
    font-weight: normal;
    border-radius: 5px;
    transition: all .5s ease;
    cursor: pointer;
    :active{
        transform: scale(0.97);
    }
`