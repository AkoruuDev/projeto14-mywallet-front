import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Register() {
    const [register, setRegister] = useState();
    const [send, setSend] = useState(false);

    const navigate = useNavigate();

    function createRegister({ value, name }) {
        setRegister({
          ...register,
          [name]: value,
        });
    }

    function submitThis(event) {
        event.preventDefault();
        setSend(true)
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={submitThis}>
                <Input type={"text"} name={"name"} onChange=
                    {(e) => createRegister({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"Nome"} />
                <Input type={"email"} name={"email"} onChange=
                    {(e) => createRegister({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"E-mail"} />
                <Input type={"password"} name={"password"} onChange=
                    {(e) => createRegister({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"Senha"} />
                <Input type={"password"} name={"passwordConfirm"} onChange=
                    {(e) => createRegister({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"Confirme sua Senha"} />
                <Button type={"submit"}>CADASTRAR</Button>
            </Form>
            <Login onClick={() => navigate('/')}>Já possuí uma conta? Entre</Login>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8c11be;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 50px;
    color: #FFFFFF;
    margin: 25px 0;
    font-family: 'Saira Stencil One', cursive;
`

const Form = styled.form`
    width: 70vw;

    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: solid 1px #FFFFFF;
    margin: 7px 0;
    padding: 0 12px;
    font-family: 'Raleway', sans-serif;

    &::placeholder {
        font-family: 'Raleway', sans-serif;
    }
`

const Button = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: solid 1px #A328D6;
    color: #FFFFFF;
    font-weight: 700;
    background-color: #A328D6;
    margin: 7px 0;
    font-family: 'Raleway', sans-serif;

    &:hover {
        cursor: pointer;
        background-color: #B121EA;
    }
`

const Login = styled.p`
    font-family: 'Raleway', sans-serif;
    margin-top: 15px;

    &:hover {
        cursor: pointer;
        color: #CB63F4;
    }
`