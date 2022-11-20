// assets
import exit from "../../assets/exit.svg";
import add from "../../assets/add-button.svg";
import remove from "../../assets/remove-button.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/auth";
import { historic } from "../../services/API";
import ItemList from "../../components/itemList";

export default function Home() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [ total, setTotal ] = useState(0);
    const [ userList, setUserList ] = useState(['oioi', 'tchau']);
    const log = JSON.parse(user)

    function logoff() {
        localStorage.removeItem('log');
        navigate('/')
        document.location.reload()
    }

    useEffect(() => {
        historic(log.token)
            .then(res => {
                setUserList(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <Container>
            <Header>
                <h1>{`Olá, ${log.name}`}</h1>
                <img src={exit} alt="exit-icon" 
                onClick={() => {
                   logoff() 
                }} />
            </Header>
            <Historic>
                {userList.length === 0 ?
                    <TextContent><span>Não há registros de entrada ou saída</span></TextContent> :
                    <Content>
                        <Items>{userList.map((item, i) =>
                            <ItemList key={i} item={item} total={total} setTotal={setTotal} />
                        )}</Items>
                        <Total total={total}>
                            <p>Total</p>
                            <p>{total}</p>
                        </Total>
                    </Content>}
            </Historic>
            <Register>
                <Box onClick={() => navigate('/new-input')}>
                    <img src={add} alt="exit-icon" />
                    <p>Nova entrada</p>
                </Box>
                <Box onClick={() => navigate('/new-output')}>
                    <img src={remove} alt="exit-icon" />
                    <p>Nova saída</p>
                </Box>
            </Register>
        </Container>
    );
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
    width: 80vw;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 22px;
        color: #FFFFFF;
    }

    & img:hover {
        cursor: pointer;
    }
`

const Historic = styled.div`
    width: 80vw;
    height: 70vh;
    padding: 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
`

const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const TextContent = styled.div`
    width: 100%;
    height: 100%;

    font-family: 'Raleway', sans-serif;
    color: #737373;

    display: flex;
    align-items: center;
    justify-content: center;

    & span {
        font-size: 22px;
        text-align: center;
    }
`

const Items = styled.div`
    width: 100%;
    height: 90%;

    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Total = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${props => props.total < 0 ? 'red' : 'green'};
`

const Register = styled.div`
    width: 80vw;
    height: 12vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Box = styled.div`
    width: 35vw;
    height: 100%;
    border-radius: 5px;
    background-color: #A328D6;

    position: relative;

    & img {
        position: absolute;
        top: 10px;
        left: 10px;
    }

    & p {
        color: #FFFFFF;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        width: 62px;
        position: absolute;
        bottom: 10px;
        left: 10px;
    }

    &:hover {
        cursor: pointer;
        background-color: #B121EA;
    }
`