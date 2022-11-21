import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getItem } from "../../services/API";

export default function SeeMore() {
    const { ITEM_ID } = useParams()
    const [id] = useState({id: ITEM_ID})

    useEffect(() => {
        getItem(id)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return(
        <Container>
            <Content isInput={false}>
                <Header>Titulo do bag</Header>
                <Value>Preço</Value>
            </Content>
            <Description>Bla bla bla (Ou nada)</Description>
            <Button>Voltar</Button>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 3vh 0;
    background-color: #8c11be;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Content = styled.div`
    width: 75vw;
    padding: 4px 0;
    background-color: green;

    display: flex;
    justify-content: space-between;
    color: ${props => props.isInput ? 'green' : 'red'};
    font-weight: 700;
`

const Header = styled.div`
    width: 70%;
    font-size: 20px;
    background-color: aqua;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Raleway', sans-serif;
`

const Value = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
`

const Description = styled.div`
    font-family: 'Raleway', sans-serif;
    height: 70vh;
    width: 75vw;
    background-color: wheat;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Button = styled.div`
    width: 75vw;
    height: 50px;
    font-family: 'Raleway', sans-serif;
    color: #737373;
    font-weight: 700;
    border-radius: 5px;
    background-color: #c0c0c0;
    display: flex;
    justify-content: center;
    align-items: center;
`