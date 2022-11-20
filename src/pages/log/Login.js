// tools
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../provider/auth";
import { signIn } from "../../services/API";

export default function Login() {
    const [ login, setLogin ] = useState();
    const [ send, setSend ] = useState(false);

    const { keepUserLogged } = useContext(AuthContext);

    const navigate = useNavigate();

    function makeLogin({ value, name }) {
        setLogin({
          ...login,
          [name]: value,
        });
    }

    function submitThis(event) {
        event.preventDefault();
        setSend(true)
    }

    useEffect(() => {
        if (send) {
            signIn(login)
                .then(res => {
                    console.log(res);
                    keepUserLogged(JSON.stringify({
                        name: res.data.name,
                        email: res.data.email,
                        token: res.data.token
                    }))
                    navigate('/home');
                })
                .catch(err => {
                    console.log(err)
                    document.location.reload();
                })
        }
    }, [send]);


    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={submitThis}>
                <Input type={"email"} name={"email"} onChange=
                    {(e) => makeLogin({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"E-mail"} />
                <Input type={"password"} name={"password"} onChange=
                    {(e) => makeLogin({
                            name: e.target.name,
                            value: e.target.value
                        })
                    }
                placeholder={"Senha"} />
                <Button type={"submit"}>ENTRAR</Button>
            </Form>
            <Register onClick={() => navigate('/sign-up')}>Não possuí uma conta? Cadastre-se</Register>
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

const Register = styled.p`
    font-family: 'Raleway', sans-serif;
    margin-top: 15px;

    &:hover {
        cursor: pointer;
        color: #CB63F4;
    }
`