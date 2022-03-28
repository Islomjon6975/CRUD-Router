import styled from 'styled-components'
import {ReactComponent as search} from '../../assets/search.svg'

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 50px - 70px);
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
    margin: 19px 0;
    line-height: 28px;
`

export const Table = styled.table`
    width: 100%;
    max-height: 350px;
    border-collapse: collapse;
    box-shadow: 1px 2px 35px 1px rgba(34, 60, 80, 0.18);
    thead{
        width: 100%;
        height: 60px;
        background-color: #333;

    }

    thead tr th{
        color: white;
        text-align: left;
        padding-left: 20px;
        font-size: 20px;
    }

    thead tr th:last-child{
        height: 60px;
        display: flex;
        align-items: center;
        
    }

    tbody{
        width: 100%;
        overflow: auto;
        max-height: calc(350px - 50px);
        overflow: hidden;
    }

    tbody tr th{
        height: 50px;
        background-color: white;
        text-align: left;
        padding-left: 20px;
        border-bottom: 1px solid rgb(221, 221, 221);
        font-size: 18px;
    }

    tbody tr th:last-child{
        display: flex;
        align-items: center;

    }
`

export const View = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 25px;
    background-color: #0cd1f8;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    :active{
        transform: scale(0.99);
        opacity: 0.8;
    }
`

export const Edit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 23.6px;
    background-color: white;
    border: 1px solid #0cd1f8;
    border-radius: 2px;
    color: #0cd1f8;
    margin: 0 5px;
    cursor: pointer;
    :active{
        transform: scale(0.99);
        opacity: 0.8;
    }
`

export const Delete = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 25px;
    background-color: crimson;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    :active{
        transform: scale(0.99);
        opacity: 0.8;
    }
`

export const Search = styled.input`
    width: 93%;
    height: 33px;
    padding: 0 30px 0 10px;
    box-sizing: border-box;
    outline: none;
    font-size: 15px;
`

export const Wrapper = styled.div`
    position: relative;
    width: fit-content;
    margin-right: -20px;
`

export const Search__icon = styled(search)`
    position: absolute;
    top: 50%;
    right:24px;
    transform: translateY(-50%);
    width: 17px;
    height: 17px;
    transition: all .2s ease;
    :hover{
        width: 18px;
        height: 18px;
    }
`

export const Select = styled.select`
    width: 33px;
    height: 33px;
    margin-right: 10px;
`

export const Search__panel = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    height: 100%;
`