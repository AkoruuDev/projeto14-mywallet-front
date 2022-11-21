import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { getItem } from "../../services/API";

export default function SeeMore() {
    const { ITEM_ID } = useParams()
    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        getItem(ITEM_ID)
            .then(res => {
                console.log(res.data[0])
                setUser(res.data[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    if (!user) {
        return(
            <Container>Loading</Container>
        )
    }

    return(
        <Container>
            <Header>
                <Content isInput={user.isInput}>
                    <Title>{user.title}</Title>
                    <Value>{user.value}</Value>
                </Content>
                <Date>
                    <span>{`${user.date.weekDay}, ${user.date.fullDate}`}</span>
                    <span>{`${user.date.time}`}</span>
                </Date>
            </Header>
            <>{user.description.length > 0 ?
                <Description>{user.description}</Description> :
                <NonDescription>Este item não tem descrição</NonDescription>
            }</>
            <Button onClick={() => navigate('/home')}>Voltar</Button>
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

const Header = styled.div`
    width: 75vw;
    padding: 8px 12px;
    border-radius: 5px;
    background-color: #e9e9e9;
`

const Content = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    color: ${props => props.isInput ? 'green' : 'red'};
    font-weight: 700;
`

const Date = styled(Content)`
    margin-top: 12px;
    color: #737373;
`

const Title = styled.div`
    width: 70%;
    font-size: 20px;
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
    padding: 15px;
    background-color: #e9e9e9;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

const NonDescription = styled(Description)`
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #737373;
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