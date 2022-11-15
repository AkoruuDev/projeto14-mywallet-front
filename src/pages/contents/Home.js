// assets
import exit from "../../assets/exit.svg";
import add from "../../assets/add-button.svg";
import remove from "../../assets/remove-button.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Container>
            <Header>
                <h1>{`Olá, ${"name"}`}</h1>
                <img src={exit} alt="exit-icon" />
            </Header>
            <Historic>

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
    background-color: #FFFFFF;
    border-radius: 5px;
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